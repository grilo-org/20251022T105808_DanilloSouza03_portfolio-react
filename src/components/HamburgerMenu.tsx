import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface HamburgerMenuProps {
  menuItems: { label: string; href: string }[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button
        className="text-primary-color hover:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 bg-secondary-color w-64 py-4 shadow-lg z-20">
          <ul className="list-none">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 px-4 hover:bg-gray-700">
                <a href={item.href} className="block text-text-color no-underline" onClick={toggleMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
