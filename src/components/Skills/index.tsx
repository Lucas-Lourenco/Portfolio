import { useEffect, useState } from "react";
import GetDataSkills from "../../service/DataApiSkills";
import SkillCard from "../SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../Projects/project.css";

interface Skill {
  id: number;
  title: string;
  description: string;
  iconId: string;
  
}

export default function Skill() {
  const [skill, setSkill] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await GetDataSkills();
      setSkill(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <h2 id="skills" className="m-4 p-4 text-4xl leading-8 flex flex-col items-center gap-6">
        HABILIDADES  
      </h2>

      <section
        
        className="w-full p-2 pb-0 m-2 border-b border-[rgb(70,63,45)] flex justify-center"
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
            // Adicione a classe customizada aqui
            className="w-4/5 my-swiper-container"
          >
            {skill.map((skill) => (
              <SwiperSlide key={skill.id} className="flex-shrink-0">
                <SkillCard skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}