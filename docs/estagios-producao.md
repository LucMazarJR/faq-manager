# Estágios de Produção

O desenvolvimento do FAQ Manager está dividido em duas fases. Cada fase tem objetivos claros e um checklist de entregas que deve ser concluído antes de avançar.

---

## Fase 1 — Validação local

**Objetivo:** construir o núcleo funcional da aplicação — gerenciamento completo de FAQs — rodando localmente. O foco é validar que o produto faz o que precisa fazer antes de pensar em infraestrutura.

### Backend (NestJS)

- [ ] Configuração inicial do projeto NestJS
- [ ] Configuração do banco de dados (MongoDB + Mongoose)
- [ ] Migrations iniciais (tabela de FAQs)
- [ ] Módulo de FAQs com CRUD completo
  - [ ] `GET /faqs` — listar todas as FAQs
  - [ ] `GET /faqs/:id` — buscar FAQ por ID
  - [ ] `POST /faqs` — criar FAQ
  - [ ] `PATCH /faqs/:id` — editar FAQ
  - [ ] `DELETE /faqs/:id` — remover FAQ
- [ ] Validação de dados com `class-validator`
- [ ] Documentação automática com Swagger (`/api`)
- [ ] Variáveis de ambiente configuradas via `.env`
- [ ] Docker Compose funcional para desenvolvimento local

### Frontend (Next.js)

- [ ] Configuração inicial do projeto Next.js
- [ ] Integração com a API do backend
- [ ] Listagem de FAQs
- [ ] Formulário de criação de FAQ
- [ ] Formulário de edição de FAQ
- [ ] Confirmação e exclusão de FAQ
- [ ] Feedback visual para ações (loading, sucesso, erro)
- [ ] Layout responsivo básico

### Critério de conclusão da Fase 1

A Fase 1 está concluída quando qualquer membro do grupo consegue, **a partir do zero**, clonar o repositório, seguir o README e usar a aplicação completa em `localhost` para criar, editar e excluir FAQs.

---

## Fase 2 — Deploy e acesso pelo grupo

**Objetivo:** publicar a aplicação na web para que todos os membros do PET-Saúde possam acessá-la, implementar autenticação e estabelecer um fluxo de entrega contínua.

### Backend

- [ ] Escolha e configuração da plataforma de deploy (ex: Railway, Render, Fly.io)
- [ ] Configuração de variáveis de ambiente em produção
- [ ] Banco de dados em produção (instância gerenciada)
- [ ] Autenticação JWT (login para usuários da aplicação)
  - [ ] Endpoint `POST /auth/login`
  - [ ] Guard de autenticação nas rotas protegidas
- [ ] Controle de visibilidade das FAQs por usuário/perfil
- [ ] CI/CD com GitHub Actions
  - [ ] Pipeline de testes automáticos em cada PR
  - [ ] Deploy automático para produção ao mergear em `main`
- [ ] Histórico de alterações das FAQs
  - [ ] Registro automático de cada criação, edição e exclusão
  - [ ] Armazenamento de: autor, data/hora, campo alterado, valor anterior e valor novo
  - [ ] Endpoint `GET /faqs/:id/history` — listar histórico de uma FAQ
- [ ] Logs e monitoramento básico

### Frontend

- [ ] Escolha e configuração da plataforma de deploy (ex: Vercel)
- [ ] Configuração das variáveis de ambiente para produção
- [ ] Tela de login para membros do grupo
- [ ] Proteção de rotas autenticadas
- [ ] Área de usuários
  - [ ] Listagem de usuários (admin)
  - [ ] Controle de quais FAQs são visíveis para cada usuário
- [ ] CI/CD integrado à plataforma de deploy (deploy automático)
- [ ] Domínio configurado (opcional)
- [ ] Tela de histórico de alterações por FAQ
  - [ ] Linha do tempo das edições com diff visual (campo antes/depois)
  - [ ] Identificação do autor de cada alteração

### Critério de conclusão da Fase 2

A Fase 2 está concluída quando qualquer membro do PET-Saúde consegue acessar a aplicação **pela internet**, fazer login com suas credenciais e gerenciar as FAQs do chatbot sem precisar rodar nada localmente.
