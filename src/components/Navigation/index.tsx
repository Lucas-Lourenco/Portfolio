

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="link-dourado  hover:text-yellow-500 transition-colors duration-300 pr-3 text-2xl"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}