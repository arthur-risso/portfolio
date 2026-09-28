export const EMAIL = 'arthur.rprodovalho@gmail.com';

// Número com DDI + DDD, só dígitos (ex.: '5511999999999').
// Enquanto estiver vazio, o botão de WhatsApp não aparece no site.
export const WHATSAPP_NUMBER = '';

export const WHATSAPP_MESSAGE = 'Oi, Arthur! Vi seu portfólio e queria conversar sobre um projeto.';

export const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : null;

export const GITHUB_URL = 'https://github.com/arthur-risso';
export const LINKEDIN_URL = 'https://linkedin.com/in/arthur-risso';
