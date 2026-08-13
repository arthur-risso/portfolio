import { useState, type FormEvent } from 'react';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/TextArea';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', 'e715c2ca-c951-4df2-bbb2-fcb44f9e3261');

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
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-mist">
            Nome
          </label>
          <Input id="name" name="name" type="text" required placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-mist">
            E-mail
          </label>
          <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-mist">
          Mensagem
        </label>
        <Textarea id="message" name="message" required rows={4} placeholder="Como posso ajudar?" />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={16} />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensagem
              <Send className="ml-2" size={16} />
            </>
          )}
        </Button>

        <span role="status" aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="text-signal">Mensagem enviada — obrigado!</span>
          )}
          {status === 'error' && (
            <span className="text-danger">
              Algo deu errado. Tenta de novo ou usa o e-mail direto.
            </span>
          )}
        </span>
      </div>
    </form>
  );
}
