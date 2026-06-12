# FAQ Manager — Backend

API REST do FAQ Manager, construída com [NestJS](https://nestjs.com) e TypeScript.

## Requisitos

- Node.js 24+
- pnpm 11.5.2+

## Instalação

```bash
pnpm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do diretório `back/` (veja `.env.example` como referência).

| Variável | Descrição              | Padrão |
|----------|------------------------|--------|
| `PORT`   | Porta em que a API sobe | `3000` |

## Rodando localmente

```bash
# desenvolvimento (watch mode)
pnpm run start:dev

# produção
pnpm run start:prod
```

A API fica disponível em `http://localhost:3000`.

## Testes

```bash
# unitários
pnpm run test

# cobertura
pnpm run test:cov

# e2e
pnpm run test:e2e
```

## Docker

### Imagem isolada

```bash
# build
docker build -t faq-manager-back .

# run
docker run -p 3000:3000 --env-file .env faq-manager-back
```

### Docker Compose (recomendado)

A partir da raiz do repositório:

```bash
docker compose up --build
```

O serviço `back` sobe na porta `3000` com reinício automático e lê o `.env` de `back/.env`.

> O Dockerfile usa build multi-stage (`builder` + `runner`) sobre `node:24-alpine`, resultando em uma imagem de produção enxuta sem dependências de desenvolvimento.

## Estrutura

```
back/
├── src/
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── dockerfile
└── package.json
```
