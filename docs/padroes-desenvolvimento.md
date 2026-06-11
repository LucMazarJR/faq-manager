# Padrões de Desenvolvimento

Este documento reúne as convenções adotadas no projeto. Seguir esses padrões garante que o trabalho de todo o time se integre sem conflitos.

---

## Git e branches

O repositório possui três branches principais:

| Branch | Propósito |
|---|---|
| `main` | Código estável e validado. Nunca commitar diretamente aqui. |
| `back` | Desenvolvimento do backend (NestJS). |
| `front` | Desenvolvimento do frontend (Next.js). |

**Fluxo de trabalho:**

```
back  ──┐
         ├──► main
front ──┘
```

1. Trabalhe sempre na branch correspondente ao seu serviço (`back` ou `front`).
2. Quando uma funcionalidade estiver concluída e testada, abra um **Pull Request** para `main`.
3. Nunca force-push em `main`.

**Comandos básicos:**

```bash
# Trocar para a branch do frontend
git checkout front

# Trocar para a branch do backend
git checkout back

# Criar uma branch a partir da branch atual
git checkout -b minha-feature

# Enviar alterações
git add .
git commit -m "feat: descrição do que foi feito"
git push origin <nome-da-branch>
```

---

## Convenção de commits

Use o padrão [Conventional Commits](https://www.conventionalcommits.org):

```
<tipo>: <descrição curta em português ou inglês>
```

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `refactor` | Refatoração sem mudança de comportamento |
| `style` | Formatação, espaços, ponto e vírgula |
| `docs` | Alterações em documentação |
| `chore` | Tarefas de configuração, dependências |

Exemplos:
```
feat: adiciona endpoint de criação de FAQ
fix: corrige validação de campo vazio no formulário
docs: atualiza README com novos comandos
```

---

## Variáveis de ambiente

Nunca commite o arquivo `.env`. O arquivo `.env.example` serve como template — sempre que adicionar uma nova variável ao `.env`, adicione também ao `.env.example` com um valor de exemplo ou em branco.

```bash
# Copiar o template na primeira configuração
cp .env.example .env
```

---

## Docker

O `docker-compose.yaml` na raiz do projeto sobe os serviços de infraestrutura necessários para desenvolvimento local (banco de dados e interface de administração).

```bash
# Subir os containers em background
docker compose up -d

# Ver logs
docker compose logs -f

# Parar os containers
docker compose down

# Parar e remover volumes (apaga os dados do banco)
docker compose down -v
```

O banco de dados (MongoDB) estará disponível em `localhost:27017`.
O Mongo Express (interface visual do banco) estará em `http://localhost:8081`.

---

## Backend — NestJS

Todos os comandos devem ser executados dentro da pasta `back/`.

```bash
cd back

# Instalar dependências
npm install

# Rodar em modo desenvolvimento (hot reload)
npm run start:dev

# Build para produção
npm run build

# Rodar build de produção
npm run start:prod

# Rodar testes unitários
npm run test

# Rodar testes end-to-end
npm run test:e2e
```

A API ficará disponível em `http://localhost:3000`.
A documentação Swagger (quando configurada) em `http://localhost:3000/api`.

### Estrutura de módulos (NestJS)

Cada recurso da API deve ter seu próprio módulo seguindo a estrutura:

```
back/src/
├── faqs/
│   ├── faqs.module.ts
│   ├── faqs.controller.ts
│   ├── faqs.service.ts
│   ├── dto/
│   │   ├── create-faq.dto.ts
│   │   └── update-faq.dto.ts
│   └── entities/
│       └── faq.entity.ts
```

---

## Frontend — Next.js

Todos os comandos devem ser executados dentro da pasta `front/`.

```bash
cd front

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm start

# Verificar erros de lint
npm run lint
```

O frontend ficará disponível em `http://localhost:3001`.

> **Atenção:** certifique-se de que a variável `NEXT_PUBLIC_API_URL` no `.env` aponta para o endereço correto do backend.

---

## Checklist antes de abrir um Pull Request

- [ ] O código compila sem erros (`npm run build`)
- [ ] O lint não aponta erros (`npm run lint`)
- [ ] Os testes passam (`npm run test`)
- [ ] O `.env.example` foi atualizado se novas variáveis foram adicionadas
- [ ] A funcionalidade foi testada manualmente
