
# 🧑‍💻 Comandos

- npx create-next-app@13.0.6 --use-npm
- npm i @ignite-ui/react@latest
- npm i @rocketseat/eslint-config -D
- npm i phosphor-react
- npm i react-hook-form @hookform/resolvers zod
- npm i prisma@4.7.1 -D
- npm i @prisma/client@4.7.1
- npx prisma init --datasource-provider SQLITE
- npx prisma migrate dev
- npx prisma studio
- npm install axios

# 📚 Next.js API Routes & Backend Concepts

## 🚀 API Routes (Next.js)

As API Routes são rotas de back-end dentro do próprio projeto Next.js.
Elas permitem criar funcionalidades server-side sem precisar de um servidor separado.

**Resumo:**

* Front-end e back-end no mesmo projeto
* Mais produtividade
* Menos complexidade inicial

---

## 🧠 Back-end for Front-end (BFF)

BFF é um conceito onde criamos um “mini back-end” focado exclusivamente em atender o front-end.

### 📌 Exemplo:

Autenticação com Google:

* Web e mobile funcionam de formas diferentes
* Criamos uma camada intermediária só para lidar com isso

**Vantagem:**
Evita poluir o back-end principal com regras específicas do front.

---

## ⚙️ Fullstack com Next.js

Com a evolução do Next.js, agora é possível criar aplicações **fullstack completas**:

* Acesso a banco de dados
* Autenticação
* Regras de negócio
* APIs completas

Tudo dentro do mesmo projeto.

---

## 🤔 Quando usar backend dentro do Next?

### ✔️ Use quando:

* O time é fullstack
* O projeto tem escopo definido
* A aplicação não vai crescer muito

### ❌ Evite quando:

* Front e back têm equipes diferentes
* O projeto é grande ou escalável
* Precisa de alta flexibilidade

---

## 📁 Como funcionam as API Routes

No Next.js, arquivos viram rotas automaticamente.

### Exemplo:

```
/api/hello.api.ts → /api/hello
```

Você não precisa definir rotas manualmente.

---

## 🟢 Execução com Node.js

As API Routes rodam com Node.js, ou seja:

Você pode usar:

* File System (fs)
* Crypto
* Path
* Qualquer API do Node
