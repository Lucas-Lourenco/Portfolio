import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8">
        
        <div className="flex-1">
          <a href="#home" className="font-bold text-2xl text-white">
          </a>
        </div>
        
        <div className="hidden lg:flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-dourado hover:text-yellow-500 transition-colors duration-300 pr-3 text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8 text-white" />
          </button>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-1/2 overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
          
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <ul className="-my-6 divide-y divide-gray-500/25">
              {links.map((link) => (
                <li key={link.href} className="py-4">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl leading-7 text-white hover:bg-gray-800 p-2 rounded-md"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}