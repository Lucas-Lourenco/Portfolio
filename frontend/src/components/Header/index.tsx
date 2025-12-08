import { useContext } from "react";
import Navigation from "../Navigation";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemesConfig } from "../../context/theme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = ThemesConfig[theme];

  return (
    <header
      className="flex w-full justify-between items-center border-b transition-colors duration-300 px-4"
      style={{ borderColor: currentTheme.layout.border }}
    >
     
      <div>
        <h1 className="text-5xl relative">
          <a
            href="#"
            className="
              relative
              inline-block
              px-2 py-1
              hover:text-orange-700
              transition-colors
              duration-300
              before:absolute
              before:top-1/2
              before:left-1/2
              before:w-[120%]
              before:h-[120%]
              before:border-3
              before:border-yellow-400
              before:rounded-full
              before:shadow-[0_0_8px_#e1813d]
              before:content-['']
              before:-translate-x-1/2
              before:-translate-y-1/2
              before:scale-0
              before:transition-transform
              before:duration-300
              hover:before:scale-100
            "
          >
            LL
          </a>
        </h1>
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0 gap-4">
        <Navigation />

      
        <button
          onClick={toggleTheme}
          className="w-auto h-auto rounded-full flex flex-shrink-0 items-center justify-center hover:opacity-80 transition icons"
          aria-label="Trocar tema"
        >
          <img
            src={currentTheme.icon}
            alt={`Ícone do tema ${theme}`}
            className="w-auto h-auto"
          />
        </button>
      </div>

    
      <div className="flex lg:hidden items-center flex-shrink-0 gap-4">
       
        <button
          onClick={toggleTheme}
          className="w-auto h-auto rounded-full flex flex-shrink-0 items-center justify-center hover:opacity-80 transition icons"
          aria-label="Trocar tema"
        >
          <img
            src={currentTheme.icon}
            alt={`Ícone do tema ${theme}`}
            className="w-auto h-auto"
          />
        </button>

        <Navigation />
      </div>
    </header>
  );
}
