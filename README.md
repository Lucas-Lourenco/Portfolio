# Portfolio - Lucas Lourenço

Este é um projeto de portfólio desenvolvido em React com Vite, utilizando Tailwind CSS para estilização e organização moderna de componentes e TypeScript.

## ✨ Funcionalidades

- Página inicial com apresentação
- Seção "Sobre"
- Listagem de projetos com detalhes e imagens
- Exibição de habilidades (skills)
- Contato
- Tema claro/escuro
- Responsivo para dispositivos móveis

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/useContext) para gerenciamento de tema

## 📁 Estrutura de Pastas

```
public/
  Data/              # Dados mockados (JSON)
  images/            # Ícones e imagens públicas

src/
  components/        # Componentes reutilizáveis
  context/           # Contextos globais (ex: tema)
  Pages/             # Páginas principais
  routes/            # Rotas da aplicação
  service/           # Serviços de dados (mock/fetch)
  styles/            # Estilos globais (Tailwind)
  assets/            # Imagens e SVGs
  files/             # Arquivos para download (ex: CV)

```

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/Lucas-Lourenco/Portfolio.git
   cd Portfolio
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173/
   ```

## 📝 Observações

- Os dados dos projetos e skills estão em arquivos JSON na pasta `public/Data/`.
- Para adicionar novos projetos, edite o arquivo `public/Data/db.json`.
- O tema pode ser alternado pelo botão no header.
- O projeto é totalmente responsivo.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Lucas Lourenço 🚀
