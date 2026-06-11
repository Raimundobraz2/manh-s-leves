# 100 Receitas Matinales para Maigrir

Landing page de vendas para e-book "100 Receitas Matinales para Maigrir" construída com TanStack Start, React, TypeScript e Tailwind CSS.

## 🚀 Stack Tecnológico

- **Framework**: TanStack Start (SSR/SSG)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: Bun
- **Deployment**: Cloudflare Pages

## 📋 Pré-requisitos

- Bun instalado: https://bun.sh
- Node.js 18+ (como fallback)
- Conta no Cloudflare

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview do build de produção
bun run preview

# Linter
bun run lint

# Formatar código
bun run format
```

## 🌐 Deploy no Cloudflare Pages

### Opção 1: Via CLI (Recomendado)

```bash
# Instalar Wrangler CLI
bun add -g wrangler

# Fazer login na sua conta Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist/public
```

### Opção 2: Via GitHub (Automático)

1. Push o código para seu repositório GitHub
2. No Dashboard do Cloudflare Pages:
   - Clique em "Create a project"
   - Selecione "Connect to Git"
   - Selecione seu repositório
   - Configure:
     - **Framework**: None (custom)
     - **Build command**: `bun run build`
     - **Build output directory**: `dist/public`
   - Clique em "Save and Deploy"

### Configuração de Roteamento (✅ Já Configurado)

O arquivo `_redirects` na raiz do projeto redireciona automaticamente:
- Todas as rotas inexistentes para `index.html`
- Permite SPA routing funcionar corretamente em produção

```
/* /index.html 200
```

## 📁 Estrutura do Projeto

```
src/
├── routes/           # File-based routing (TanStack Router)
│   ├── __root.tsx    # Layout raiz
│   └── index.tsx     # Página inicial
├── components/       # Componentes React reutilizáveis
│   └── ui/          # Componentes UI (Radix + Tailwind)
├── lib/             # Utilitários e helpers
├── assets/          # Imagens e arquivos estáticos
├── styles.css       # Estilos globais
├── server.ts        # Configuração SSR/servidor
└── router.tsx       # Configuração do router
```

## 🐛 Solução do Erro 404

**Problema**: Erro 404 ao accessar URLs que não existem no Cloudflare Pages

**Solução**: O arquivo `_redirects` redireciona todas as rotas para a página inicial, permitindo que o React Router gerencie o roteamento no cliente.

**Arquivo**: `_redirects`
```
/* /index.html 200
```

## 🔧 Configuração Cloudflare Workers (Opcional)

Se precisar de lógica no servidor, edite `wrangler.toml`:

```toml
name = "manh-s-leves"
main = "src/server.ts"
build = { command = "bun run build" }
site = { bucket = "dist/public" }
```

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` para variáveis locais:

```env
VITE_API_URL=https://api.seu-dominio.com
```

No Cloudflare Pages, adicione as variáveis via Dashboard → Settings → Environment variables.

## 🚢 Checklist para Deploy

- [x] Repositório criado no GitHub ✅
- [x] `_redirects` configurado ✅
- [x] `wrangler.toml` configurado ✅
- [ ] Build testado localmente (`bun run build`)
- [ ] Variáveis de ambiente adicionadas (se necessário)
- [ ] Deploy realizado via CLI ou GitHub

## 📖 Recursos

- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare _redirects](https://developers.cloudflare.com/pages/configuration/redirects/)

## 📜 Licença

Propriedade privada. Todos os direitos reservados.

---

**Status**: ✅ Pronto para deploy no Cloudflare Pages
