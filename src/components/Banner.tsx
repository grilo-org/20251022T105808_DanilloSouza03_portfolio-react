import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Banner: React.FC = () => {
  return (
    <div className="pt-6">
      <section 
        id="banner" 
        className="relative w-full flex justify-center items-center text-center h-[100vh] bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-primary-color text-text-color my-3"
      >
        <div className="banner-content">
          <h1 className="text-4xl font-bold mx-1 mb-2 text-primary-color">Bem-vindo ao Meu Portfólio!</h1>
          <p className="text-lg mb-14 mx-4">Explore meus projetos, habilidades e conquistas que contam a minha história na tecnologia.</p>
          <a href="#projetos" className="px-9 py-3 bg-primary-color text-text-color no-underline text-lg rounded transition-colors duration-300 hover:bg-blue-500">Ver Projetos</a>
        </div>

        <a 
          href="#sobre" 
          aria-label="Scroll to About section" 
          className="absolute bottom-10 left-0 right-0 mx-auto w-min text-white text-3xl z-10 animate-bounce-slow cursor-pointer hover:text-primary-color transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
    </div>
  );
};

export default Banner;