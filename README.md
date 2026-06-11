# FAQ Manager — PET-Saúde

Sistema de gerenciamento de FAQs para o chatbot do projeto de extensão **PET-Saúde**.

## Sobre o projeto

O PET-Saúde utiliza um chatbot para responder dúvidas frequentes de pacientes e membros do grupo. Este repositório contém a aplicação responsável por **criar, editar, organizar e publicar** as perguntas e respostas (FAQs) que alimentam esse chatbot.

A aplicação é dividida em dois serviços:

| Serviço | Tecnologia | Responsabilidade |
|---|---|---|
| **back** | [NestJS](https://nestjs.com) | API REST + regras de negócio + banco de dados |
| **front** | [Next.js](https://nextjs.org) | Interface web para gerenciamento das FAQs |

## Estrutura do repositório

```
faq-manager/
├── back/          # API NestJS
├── front/         # Interface Next.js
├── docs/          # Documentação do projeto
│   ├── padroes-desenvolvimento.md
│   └── estagios-producao.md
├── docker-compose.yaml
├── .env.example
└── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org) 20+
- [Docker](https://www.docker.com) e Docker Compose
- [Git](https://git-scm.com)

## Início rápido

**1. Clone o repositório e configure as variáveis de ambiente**

```bash
git clone <url-do-repositorio>
cd faq-manager
cp .env.example .env
# edite o .env com as configurações locais
```

**2. Suba o banco de dados com Docker**

```bash
docker compose up -d
```

**3. Rode o backend**

```bash
cd back
npm install
npm run start:dev
```

**4. Rode o frontend**

```bash
cd front
npm install
npm run dev
```

O backend estará disponível em `http://localhost:3000` e o frontend em `http://localhost:3001`.

## Documentação

- [Padrões de desenvolvimento](docs/padroes-desenvolvimento.md) — branches, commits, comandos e boas práticas
- [Estágios de produção](docs/estagios-producao.md) — checklist das fases de desenvolvimento do produto

## Projeto

**PET-Saúde** — Projeto de extensão universitária focado em saúde pública.
