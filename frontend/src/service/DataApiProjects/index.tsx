export default async function GetDataProjects() {
    
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    try {
       
        const response = await fetch(`${apiUrl}/projects`);

        if (!response.ok) {
            throw new Error('Erro ao conectar com a API');
        }

        const data = await response.json();
        
        return data;

    } catch (error) {
        console.error("Falha ao buscar projetos:", error);
        return []; // Retorna lista vazia para não quebrar o site se a API falhar
    }
}