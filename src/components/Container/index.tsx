import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"; 
import { ThemesConfig } from "../../context/theme"; 

export default function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = ThemesConfig[theme];

  return (
    <div
      className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6 rounded-xl m-1 border-4 transition-colors duration-300 min-h-screen
       flex flex-col justify-center items-center"
      style={{
        background: currentTheme.layout.background,
        color: currentTheme.layout.textColor,
        borderColor: currentTheme.layout.border,
      }}
    >
      {children}
    </div>
  );
}
