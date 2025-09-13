import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  tecnologias: string[];
  image: string;
  video: string;
  link: string;
  linkRepositorio: string;
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = id ? Number(id) : null;

  const [project, setProject] = useState<ProjectDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDetails() {
    const response = await fetch("/Data/db.json");
    const data = await response.json();
    return data.projects;
  }

  useEffect(() => {
    (async () => {
      const data = await fetchDetails();
      setProject(data);
      setIsLoading(false);
    })();
  }, [numericId]);


  
  function goHome() {
    navigate("/");
  }

  const selectedProject = project.find((p) => p.id === numericId);


  if (isLoading) {
    return <p className="text-center mt-8">Carregando...</p>;
  }

  if (!selectedProject) {
    return <p className="text-center mt-8">Projeto não encontrado.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {selectedProject.tecnologias.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-sm border"
          >
            {tech}
          </span>
        ))}
      </div>

      {selectedProject.video && (
        <div className="w-5/6 mb-6 ">
          <video
            src={selectedProject.video}
            muted
            loop
            autoPlay
            controls
            className="w-full rounded-xl shadow"
          />
        </div>
      )}

      <p className="text-base sm:text-lg leading-relaxed mb-6">
        {selectedProject.description}
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none px-4 py-2 text-center rounded-xl border hover:opacity-80 transition icons"
        >
          Acessar Projeto
        </a>
        <a
          href={selectedProject.linkRepositorio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none px-4 py-2 text-center rounded-xl border hover:opacity-80 transition icons"
        >
          Repositório
        </a>

        <button className="flex-1 sm:flex-none px-4 py-2 text-center rounded-xl border hover:opacity-80 transition icons" onClick={goHome}>
            ⬅ Voltar
        </button>

      </div>
    </div>
  );
}
