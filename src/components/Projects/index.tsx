import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./project.css";
import GetDataProjects from "../../service/DataApiProjects";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await GetDataProjects();
      setProjects(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <h2   id="projects" className="m-1 p-4 text-xl md:text-2xl lg:text-4xl leading-1 flex flex-col items-center gap-2">
        PROJETOS
      </h2>

      <section
      
        className="w-full p-1 pb-0 m-1 border-b border-[rgb(70,63,45)] flex justify-center"
      >
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={100}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            
            className="w-5/6 my-swiper-container"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="flex-shrink-0">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}