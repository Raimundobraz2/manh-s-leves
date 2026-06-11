# 🚀 NOVO DEPLOY - Passo a Passo

## ✅ Alterações Implementadas

1. **Script Node.js Puro** (`copy-redirects.mjs`)
   - Funciona em qualquer SO (Windows, Linux, macOS)
   - Copia `_redirects` para `dist/public/` após build

2. **Build Command Atualizado**
   ```json
   "build": "vite build && node copy-redirects.mjs"
   ```

3. **Arquivo `_headers` Adicionado**
   - Headers de segurança
   - Cache control

## 📋 Como Fazer Novo Deploy

### Passo 1: Força Redeploy no Cloudflare

```
1. Acesse: https://dash.cloudflare.com/
2. Selecione: Pages → manh-s-leves
3. Clique em: Deployments
4. Encontre o último commit
5. Clique em: ... (menu) → Retry Deployment
```

**OU**

### Passo 2: Testa Localmente Primeiro (Recomendado)

```bash
# Instalar dependências
bun install

# Build local
bun run build

# Verificar se _redirects foi copiado
ls -la dist/public/_redirects

# Preview
bun run preview
```

Teste em http://localhost:5000:
- ✅ Página inicial carrega?
- ✅ Links internos funcionam?
- ✅ Refresh na página não dá erro?

### Passo 3: Força Novo Deploy

Depois que confirmar que tudo funciona localmente:

```bash
# Fazer um novo commit/push para trigger novo build
git add .
git commit -m "Trigger redeploy"
git push origin main
```

**OU** via Cloudflare Dashboard → Retry Deployment

## 🔍 Verificar Status do Deploy

1. Acesse: https://dash.cloudflare.com/
2. Pages → manh-s-leves → Deployments
3. Veja se o build passou (✅ ou ❌)
4. Se houver erro, clique para ver logs

## 🧪 Teste Final

Após deploy:

```
Acesse: https://manh-s-levess.pages.dev/
```

Se ainda der 404:
- [ ] Clique em Dev Tools (F12)
- [ ] Acesse aba "Network"
- [ ] Procure por `_redirects`
- [ ] Deve aparecer na lista com status 200

## 📝 Se Continuar Falhando

Se o problema persistir, responda com:
1. Screenshot dos build logs do Cloudflare
2. Se o arquivo `_redirects` aparece em Network
3. Qual é exatamente a mensagem do erro

---

**Tenta fazer isso e deixe-me saber o resultado!** 🎯
