# Requisitos legais do site (referência)

Guardado a pedido da Mónica em 2026-11-16. É a lista que ela encontrou (texto dela, com a formatação arrumada). Não é aconselhamento jurídico: confirmar com contabilista ou advogado antes de começar a vender.

Para que um site esteja em conformidade com a lei (especialmente em Portugal e na União Europeia, onde o RGPD e a legislação de comércio eletrónico são rigorosos), os requisitos dividem-se entre elementos obrigatórios para todos os sites e requisitos adicionais caso exista venda de produtos ou serviços.

## 1. Obrigatório para TODOS os sites (mesmo institucionais ou blogs)

### Política de Privacidade (RGPD)
Obrigatória sempre que recolhe qualquer dado pessoal (mesmo que seja apenas um formulário de contacto, newsletter ou o endereço IP através de ferramentas de análise). Deve explicar:
- Quem é o responsável pelo tratamento dos dados.
- Que dados são recolhidos, com que finalidade e qual o fundamento legal.
- Durante quanto tempo os dados são guardados e com quem são partilhados (ex.: alojamento, ferramentas de email marketing).
- Como o utilizador pode exercer os seus direitos (acesso, retificação, apagamento/direito ao esquecimento).

### Política de Cookies e Banner de Consentimento
- Se o site usa cookies não essenciais (ex.: Google Analytics, Pixel da Meta/Facebook, YouTube incorporado), é obrigatório apresentar um banner antes de os carregar, dando ao utilizador a opção real de aceitar, recusar ou configurar.
- Deve existir uma página detalhada a explicar cada cookie utilizado e a sua duração.

### Identificação do Titular (Aviso Legal / Ficha Técnica)
De acordo com a Lei do Comércio Eletrónico (Decreto-Lei n.º 7/2004), o site deve identificar claramente quem é o proprietário: nome ou denominação social, NIF/NIPC, morada física (sede ou domicílio profissional), email de contacto direto e, se aplicável, número de registo comercial ou inscrição em ordem profissional.

## 2. Obrigatório se o site vender produtos ou serviços (e-commerce / infoprodutos)
Se existe qualquer tipo de transação financeira (mesmo que seja um serviço digital ou curso), aplicam-se regras de defesa do consumidor:
- **Termos e Condições de Venda:** regras claras sobre preços (indicando se incluem IVA), métodos de pagamento, prazos e custos de envio, garantias legais (3 anos para bens móveis na UE) e limitações de responsabilidade.
- **Direito de Livre Resolução (devoluções):** informação explícita sobre o direito do consumidor cancelar a compra no prazo de 14 dias seguidos sem necessidade de justificação, incluindo o formulário modelo de livre resolução (e as exceções legais, como conteúdos digitais cujo acesso imediato tenha sido consentido pelo cliente).
- **Resolução Alternativa de Litígios (RAL):** indicação obrigatória (em local visível, normalmente no rodapé e nos Termos) da entidade de resolução alternativa de litígios de consumo competente na área da sede da empresa (ex.: CNIACC, CACCL, etc.), exigida pela Lei n.º 144/2015.
- **Livro de Reclamações Eletrónico:** obrigatório para todos os fornecedores de bens e prestadores de serviços com presença online em Portugal. Deve existir um link direto e visível (geralmente no rodapé) para a plataforma oficial (livroreclamacoes.pt).

## 3. Boas práticas técnicas e de propriedade intelectual
- **Certificado SSL (HTTPS):** essencial para encriptar a comunicação entre o utilizador e o servidor (cadeado no navegador). Sem isto, o site viola as normas de segurança de dados do RGPD.
- **Direitos de autor e propriedade intelectual:** garantir que todas as imagens, fontes, textos e código utilizados têm licença comercial ou pertencem ao titular do site, incluindo uma nota de copyright no rodapé.
- **Comunicações comerciais (newsletter):** para enviar emails promocionais, é obrigatório o consentimento prévio e expresso (opt-in através de uma caixa de seleção que não pode vir pré-selecionada) e um link fácil para cancelar a subscrição em todos os emails.

---

## Estado no site (nota de quem constrói; atualizar ao longo do tempo)

| Requisito | Estado |
|---|---|
| Política de privacidade | Feito (`/privacidade/`). Reescrever quando houver formulário, newsletter ou analytics. |
| Cookies | O site não usa cookies (fontes alojadas no próprio site, sem analytics). Sem banner. Se se acrescentar analytics, YouTube ou formulários de terceiros, é preciso banner. |
| Identificação do titular | Página `/aviso-legal/` criada, falta a Mónica indicar os dados (nome completo, NIF, morada profissional, email) em `src/config.js`. |
| Termos e condições, livre resolução, RAL, Livro de Reclamações | Só quando houver ofertas à venda. |
| HTTPS | Ativar "Enforce HTTPS" em Settings > Pages do repo. |
| Copyright no rodapé | Feito. Fontes Poppins e Playfair Display: licença livre (SIL OFL). Confirmar que a licença das fotos profissionais cobre uso na web. |
| Newsletter (opt-in) | Só quando houver newsletter. Caixa não pré-selecionada e link para cancelar em todos os emails. |
