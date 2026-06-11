# Solução do Erro 404 no Cloudflare Pages

## 🔴 Problema Encontrado

O erro 404 persistia porque o arquivo `_redirects` estava na **raiz do repositório** mas o Cloudflare Pages procura por ele na **pasta de output do build** (`dist/public/`).

## ✅ Solução Implementada

### 1. Script de Cópia Automática
Adicionado script no `package.json`:
```json
"copy:redirects": "cp _redirects dist/public/_redirects || copy _redirects dist\\public\\_redirects"
```

### 2. Atualizar Comando de Build
No `wrangler.toml`, o comando build agora copia o arquivo após o build:
```toml
build = { command = "bun run build && bun run copy:redirects" }
```

### 3. Como Funciona
```
1. bun run build          → Cria dist/public/
2. bun run copy:redirects → Copia _redirects para dist/public/
3. Cloudflare Pages      → Encontra _redirects no local correto
```

## 🚀 Como Fazer Novo Deploy

### Via Cloudflare Pages Dashboard
1. Vá para: https://dash.cloudflare.com/
2. **Pages** → Seu projeto → **Settings** → **Builds & deployments**
3. Clique em **Redeploy latest commit**

### Via Wrangler CLI
```bash
wrangler pages deploy dist/public
```

## ⚙️ Diagrama do Fluxo

```
GitHub (main branch)
        ↓
Cloudflare Pages
        ↓
Executa: bun run build && bun run copy:redirects
        ↓
Cria: dist/public/_redirects
        ↓
Deploy: dist/public/ para Cloudflare
        ↓
✅ SPA routing funciona corretamente
```

## 📝 Teste Após Deploy

Depois de fazer o deploy, teste:
- [ ] Acesse `https://seu-site.pages.dev/`
- [ ] Clique em links internos (devem funcionar)
- [ ] Atualize a página (F5) - não deve dar 404
- [ ] Digite uma URL inexistente - deve mostrar página 404 customizada

## 🔧 Arquivos Modificados

```
✅ package.json      → Adicionado script copy:redirects
✅ wrangler.toml     → Atualizado comando build
✅ _redirects        → Mantido na raiz (será copiado no build)
```

## 💡 Por Que Isso Funciona?

O Cloudflare Pages serve arquivos estáticos da pasta especificada em `site.bucket` (no caso, `dist/public/`). O arquivo `_redirects` funciona como uma regra de reescrita de URL que:

- Intercepta qualquer requisição que não encontra arquivo estático
- Redireciona para `index.html` com status 200 (não 404)
- Permite React Router controlar o roteamento no cliente

Sem o `_redirects` no local correto, o Cloudflare retorna 404 nativo.

---

**Status**: ✅ Corrigido e pronto para novo deploy
