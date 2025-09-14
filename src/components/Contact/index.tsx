
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    
      <div className=" flex gap-3 rounded-lg mt-3 lg:text-3xl md:text-2xl pb-2 mb-2">
        <a href="https://github.com/Lucas-Lourenco " target="_blank" rel="noopener noreferrer" className="icons">
        <FaGithub />
      </a>

     
      <a href="https://wa.me/5531995889036" target="_blank" rel="noopener noreferrer" className="icons">
        <FaWhatsapp />
      </a>

      
      <a href="https://linkedin.com/in/lucas-lourenço-a88254302" target="_blank" rel="noopener noreferrer" className="icons">
        <BsLinkedin />
      </a>

      
      <a href="mailto:lucas.dev.profissional2001@gmail.com" className="icons">
        <SiGmail />
      </a>
            
        </div>
    );}