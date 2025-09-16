import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  
  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );

  const mailLink = isMobile
    ? "mailto:lucas.dev.profissional2001@gmail.com?subject=Olá%20Lucas&body=Vim%20pelo%20seu%20portfólio"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=lucas.dev.profissional2001@gmail.com&su=Olá%20Lucas&body=Vim%20pelo%20seu%20portfólio";

  return (
    <div className="flex gap-3 rounded-lg mt-3 lg:text-3xl md:text-2xl pb-2 mb-2">
      <a
        href="https://github.com/Lucas-Lourenco"
        target="_blank"
        rel="noopener noreferrer"
        className="icons"
      >
        <FaGithub />
      </a>

      <a
        href="https://wa.me/5531995889036?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio"
        target="_blank"
        rel="noopener noreferrer"
        className="icons"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://linkedin.com/in/lucas-lourenço-a88254302"
        target="_blank"
        rel="noopener noreferrer"
        className="icons"
      >
        <BsLinkedin />
      </a>

      <a
        href={mailLink}
        target={isMobile ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="icons"
      >
        <SiGmail />
      </a>
    </div>
  );
}
