import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { ThemesConfig } from "../context/theme";

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
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = ThemesConfig[theme];
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
    <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center ">
      
     
      <div className="flex justify-around items-center w-full mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {selectedProject.title}
        </h1>

        <button
          onClick={toggleTheme}
          className=" rounded-full hover:opacity-80 transition flex items-center justify-center "
          aria-label="Trocar tema"
        >
          <img
            src={currentTheme.icon}
            alt={`Ícone do tema ${theme}`}
            className="w-6 h-6"
          />
        </button>
      </div>


  
      {selectedProject.video && (
        <div className="w-5/6 mb-6">
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

      
      <div className="flex flex-wrap gap-2 mb-6 ">
         {selectedProject.tecnologias.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-sm border"
          >
            {tech}
          </span>
        ))}
      </div>
   
      <p className="text-base sm:text-lg leading-relaxed mb-6">
        {selectedProject.description}
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-center mt-10 w-full">
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

        <button
          className="flex-1 sm:flex-none px-4 py-2 text-center rounded-xl border hover:opacity-80 transition icons"
          onClick={goHome}
        >
          ⬅ Voltar
        </button>
      </div>
    </div>
  );
}
