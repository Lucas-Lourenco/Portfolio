import GetData from "./DataApi";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
    id: number
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [login, setlogin] = useState(true)

    useEffect(() => {

        (async () => {
            const projects = await GetData();
            setProjects(projects);
            setlogin(false);

        })();
    }, [])
    return (
        <>

            <h2 className='m-4 p-4 text-4xl leading-8 flex flex-col items-center gap-6'> PROJETOS</h2>

            <section id="projects" className="min-h-[86%] flex justify-center p-2 pb-0 m-2 items-center w-full  border-b border-[rgb(70,63,45)] ">

                <div className="flex flex-wrap -mx-2  p-1 m-2">
                    {login ? <p>Carregando...</p> : 
                    
                    projects.map(project => (
                        <div key={project.id} className="w-1/2 px-2 mb-4">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

            </section>

        </>
    );
}