import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Contatos', href: '#contatos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-secondary-color text-white py-5 px-6 md:px-32 flex items-center justify-between">
      <div className="text-2xl font-bold">Danillo <span className="text-primary-color">Verardo</span></div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-lg font-semibold text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-primary-color transition-colors duration-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenu menuItems={menuItems} />
    </header>
  );
};

export default Header;