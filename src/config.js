// Dados usados em vários sítios do site.
export const SITE = {
  name: 'Mónica Rodrigues',
  brand: 'Mónica Rodrigues | IT Leadership',
  url: 'https://monicarodrigues.pt',
  role: 'Engineering Manager',
  description:
    'Ajudo managers e futuros managers em tecnologia a gerir melhor equipas, tempo e projetos. Liderança prática, por uma Engineering Manager que conhece o setor por dentro.',
  // Email público de contacto. Enquanto for null, a página de privacidade usa o LinkedIn e o Instagram.
  email: null,
  // Identificação do titular (Lei do Comércio Eletrónico, DL 7/2004). Preencher antes de publicar:
  // a página /aviso-legal/ só aparece no rodapé e no sitemap quando estes quatro campos e o email estiverem preenchidos.
  titular: {
    nomeCompleto: null,
    nif: null,
    morada: null, // domicílio profissional ou morada de correspondência, à escolha da Mónica
  },
  social: {
    instagram: 'https://www.instagram.com/monicarodrigues.itleadership/',
    linkedin: 'https://www.linkedin.com/in/monicascrodrigues/',
    medium: 'https://medium.com/@monica85rodrigues',
    github: 'https://github.com/monica85rodrigues',
  },
};

export const AVISO_LEGAL_COMPLETO = Boolean(
  SITE.titular.nomeCompleto && SITE.titular.nif && SITE.titular.morada && SITE.email
);
