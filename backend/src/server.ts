import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Portfólio rodando com TypeScript!');
});

// Rota para buscar os projetos no banco
app.get('/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

// Rota para buscar as habilidades
app.get('/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { id: 'asc' } // Opcional: ordena por ID
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar skills' });
  }
});