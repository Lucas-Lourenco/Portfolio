# Portfolio FullStack - Lucas Lourenço 🚀

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este repositório contém meu portfolio pessoal desenvolvido com arquitetura **Fullstack**. O projeto serve como vitrine das minhas habilidades e projetos, utilizando um Backend real para servir os dados dinamicamente.

> **Status do Deploy:** 🟢 Online

---

## 🖼️ Demonstração

🔗 **Acesse agora:** [https://portfolio-lucas-lourenco.vercel.app/](https://portfolio-lucas-lourenco.vercel.app/)

---

## 🏗️ Arquitetura do Projeto

O sistema foi desenhado em três camadas para garantir escalabilidade e separação de responsabilidades:

1.  **Frontend (Vercel):** Interface reativa construída com React e Vite. Consome dados via API REST.
2.  **Backend (Render):** API RESTful desenvolvida em Node.js/Express. Gerencia as regras de negócio e serve os dados.
3.  **Database (Supabase):** Banco de dados PostgreSQL gerenciado, acessado via ORM (Prisma).

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Core:** React, TypeScript, Vite
- **Estilização:** Tailwind CSS
- **Navegação:** React Router DOM
- **Interatividade:** Swiper (Carrossel)
- **Consumo de API:** Fetch API

### Backend
- **Core:** Node.js, Express, TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (via Supabase)
- **Uploads:** Multer (para gerenciamento de arquivos)

---

## ⚙️ Rodando Localmente

**Pré-requisitos**
- Node.js (v18+)
- npm

### 1. Clonar e Configurar backend
```bash
git clone https://github.com/Lucas-Lourenco/Portfolio.git

cd portfolio

cd backend
npm install

# Crie um arquivo .env na raiz do backend com:
# DATABASE_URL="sua_string_conexao_supabase"
# PORT=3000

# Gere o cliente do Prisma
npx prisma generate

# Rode o servidor
npm run dev
```

### 2. Abra um segundo terminal na raiz do projeto para configurar o frontend
```bash

cd frontend

npm install

# Crie um arquivo .env.local na raiz do frontend com:
# VITE_API_URL="http://localhost:3000"

# Rode o projeto
npm run dev

```
---
## ℹ️ Nota sobre a Performance Inicial (Cold Start)
Como este é um projeto de portfólio, o Backend está hospedado no plano gratuito do Render. Isso significa que o servidor entra em modo de hibernação após inatividade.

⚠️ A primeira requisição pode levar cerca de 30 a 50 segundos para "acordar" o servidor. As requisições seguintes são instantâneas. Agradeço a compreensão!

🤝 Como contribuir
Faça um Fork do projeto

- Crie uma Branch para sua Feature (git checkout -b feature/IncrívelFeature)

- Faça o Commit (git commit -m 'Add some IncrívelFeature')

- Faça o Push (git push origin feature/IncrívelFeature)

- Abra um Pull Request


📝 Licença
Distribuído sob a licença MIT.


<p align="center"> Desenvolvido com 💙 por <strong>Lucas Lourenço</strong>


<a href="https://www.linkedin.com/in/lucas-louren%C3%A7o-a88254302/">LinkedIn</a> • <a href="https://github.com/Lucas-Lourenco">GitHub</a> </p>