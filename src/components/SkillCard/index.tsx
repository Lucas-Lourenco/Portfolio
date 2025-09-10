import React from 'react';

// 1. Importe os ícones que você precisa, baseados no seu JSON
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact 
} from 'react-icons/di';
import { 
  SiTypescript, 
  SiGit, 
  SiGithub, 
  SiJest 
} from 'react-icons/si'; 
import { FaQuestionCircle } from 'react-icons/fa';


interface SkillCardProps {
  skill: {
    title: string;
    description: string;
    iconId: string;
  };
}

const skillIconMap: { [key: string]: React.ElementType } = {
  html5: DiHtml5,
  css3: DiCss3,
  javascript: DiJavascript1,
  typescript: SiTypescript,
  react: DiReact,
  git: SiGit,
  github: SiGithub,
  jest: SiJest,
};

export default function SkillCard({ skill }: SkillCardProps) {
 
  const IconComponent = skillIconMap[skill.iconId] || FaQuestionCircle;

  return (
    <section className="border border-[rgb(70,63,45)] hover:border-amber-400 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 m-auto flex flex-col md:flex-row  justify-center items-center gap-4">
      <div className="w-full md:w-1/2 text-center  ">
        <h2 className="text-3xl md:text-5xl p-2">{skill.title}</h2>
        <p className="text-xl md:text-2xl p-2">{skill.description}</p>
      </div>

    
      <div className="w-auto md:w-1/2 m-auto flex justify-center items-center text-8xl md:text-[450px] text-white">
        
        <IconComponent color=" #dbdbd9"/>
      </div>
    </section>
  );
}