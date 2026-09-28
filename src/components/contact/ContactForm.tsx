import { useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/TextArea';
import { EMAIL } from '@/data/contact';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'unavailable';
type Field = 'name' | 'email' | 'message';
type Errors = Partial<Record<Field, string>>;

const PROJECT_TYPES = ['Site institucional', 'Landing page', 'Interface de sistema', 'Outro'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data: FormData): Errors {
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();
  const errors: Errors = {};

  if (!name) errors.name = 'Diga como posso te chamar.';
  if (!email) errors.email = 'Preciso de um e-mail para responder.';
  else if (!EMAIL_PATTERN.test(email))
    errors.email = 'Esse e-mail parece incompleto. Confira o @ e o domínio.';
  if (!message) errors.message = 'Conte um pouco sobre o projeto.';
  else if (message.length < 10) errors.message = 'Conte um pouco mais, pelo menos uma frase.';

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="mt-1.5 min-h-4 text-xs text-danger">
      {message}
    </p>
  );
}

const labelClass = 'mb-1.5 block text-xs font-medium text-mist';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Once a field has shown an error, re-check it as the visitor fixes it.
  const revalidate = (field: Field) => {
    if (!errors[field] || !formRef.current) return;
    const next = validate(new FormData(formRef.current));
    setErrors((prev) => ({ ...prev, [field]: next[field] }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const found = validate(formData);
    setErrors(found);
    const firstInvalid = (['name', 'email', 'message'] as Field[]).find((field) => found[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setStatus('loading');
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Missing config, not a network hiccup: retrying changes nothing, so the copy below says that.
      console.error(
        'VITE_WEB3FORMS_ACCESS_KEY não está definida. Configure o arquivo .env (veja .env.example).',
      );
      setStatus('unavailable');
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', 'Novo contato pelo portfólio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <motion.div
          key="success"
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start py-6"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal-soft text-signal">
            <Check size={20} aria-hidden="true" />
          </span>
          <p className="mt-4 font-display text-xl font-bold text-ink">Mensagem enviada.</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
            Obrigado por escrever. Vou ler com atenção e respondo no e-mail que você deixou.
          </p>
          <Button variant="ghost" className="-ml-4 mt-4" onClick={() => setStatus('idle')}>
            Enviar outra mensagem
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4"
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <fieldset>
            <legend className={labelClass}>
              Tipo de projeto <span className="font-normal text-mist/80">(opcional)</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => (
                <label
                  key={type}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center rounded-full border border-mist/40 px-4 text-xs text-mist transition-colors duration-150',
                    'hover:border-signal/60 hover:text-ink',
                    'has-[:checked]:border-signal has-[:checked]:bg-signal-soft has-[:checked]:text-signal',
                    'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-signal has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-surface',
                  )}
                >
                  <input type="radio" name="project_type" value={type} className="sr-only" />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Nome
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                placeholder="Seu nome"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                onChange={() => revalidate('name')}
              />
              <FieldError id="name-error" message={errors.name} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
                placeholder="seu@email.com"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                onChange={() => revalidate('email')}
              />
              <FieldError id="email-error" message={errors.email} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Mensagem
            </label>
            <Textarea
              id="message"
              name="message"
              maxLength={5000}
              rows={5}
              placeholder="Como posso ajudar?"
              aria-invalid={!!errors.message}
              aria-describedby="message-hint message-error"
              onChange={() => revalidate('message')}
            />
            <p id="message-hint" className="mt-1.5 text-xs text-mist">
              Ajuda contar o que seu negócio faz, o que você precisa e se há um prazo.
            </p>
            <FieldError id="message-error" message={errors.message} />
          </div>

          <div className="flex flex-col items-start gap-3">
            <Button type="submit" size="lg" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={16} aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send className="ml-2" size={16} aria-hidden="true" />
                </>
              )}
            </Button>

            <p role="status" aria-live="polite" className="text-sm">
              {status === 'error' && (
                <span className="text-danger">
                  Não consegui enviar agora. Tente de novo em instantes ou escreva direto para{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-medium underline underline-offset-2"
                  >
                    {EMAIL}
                  </a>
                  .
                </span>
              )}
              {status === 'unavailable' && (
                <span className="text-danger">
                  O formulário está fora do ar no momento. Escreva direto para{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-medium underline underline-offset-2"
                  >
                    {EMAIL}
                  </a>
                  .
                </span>
              )}
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
