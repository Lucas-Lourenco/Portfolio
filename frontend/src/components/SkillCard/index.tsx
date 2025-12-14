import React, { useContext } from 'react';

import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';

import { 
  SiTypescript, 
  SiGit, 
  SiGithub, 
  SiJest, 
  SiNodedotjs, 
  SiExpress, 
  SiPrisma, 
  SiPostgresql, 
  SiRender, 
  SiSupabase 
} from 'react-icons/si';

import { FaQuestionCircle } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemesConfig } from '../../context/theme';

interface SkillCardProps {
  skill: {
    title: string;
    description: string;
    iconId: string;
  };
}

const skillIconMap: Record<string, React.ElementType> = {
  html5: DiHtml5,
  css3: DiCss3,
  javascript: DiJavascript1,
  typescript: SiTypescript,
  react: DiReact,
  git: SiGit,
  github: SiGithub,
  jest: SiJest,
  nodejs: SiNodedotjs,
  express: SiExpress,
  prisma: SiPrisma,
  sql: SiPostgresql,
  render: SiRender,
  supabase: SiSupabase,
};

export default function SkillCard({ skill }: SkillCardProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = ThemesConfig[theme];

  // Garante que o ícone exista, senão usa a interrogação
  const IconComponent = skillIconMap[skill.iconId] || FaQuestionCircle;

  return (
    <section
      className="border border-[rgb(70,63,45)] hover:border-[#b45309]  p-4 rounded-lg shadow-lg transition-shadow duration-300 flex flex-col md:flex-row justify-center items-center gap-4 mb-2"
      style={{
        backgroundColor: currentTheme.layout.background,
        color: currentTheme.layout.textColor,
      }}
    >
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-3xl md:text-5xl p-2">{skill.title}</h2>
        <p className="text-xl md:text-2xl p-2">{skill.description}</p>
      </div>

      <div className="w-auto md:w-1/2 flex justify-center items-center text-8xl md:text-[200px] lg:text-[250px]">
        {/* Ajustei o tamanho do ícone (text-[450px] estava quebrando layout mobile as vezes, coloquei responsivo) */}
        <IconComponent color={currentTheme.layout.textColor} />
      </div>
    </section>
  );
}