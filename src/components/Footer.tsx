import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-center bg-secondary-color text-center py-7">
      <div className="container flex flex-col items-center">
        <div id="contatos" className="footer-social my-2.5">
          <a href="https://www.linkedin.com/in/danillosouza03/" target="_blank" rel="noopener noreferrer" className="text-text-color no-underline mx-2.5 text-2xl transition-colors duration-300 hover:text-primary-color"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="https://github.com/DanilloSouza03" target="_blank" rel="noopener noreferrer" className="text-text-color no-underline mx-2.5 text-2xl transition-colors duration-300 hover:text-primary-color"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="https://www.instagram.com/dev.danillo/" target="_blank" rel="noopener noreferrer" className="text-text-color no-underline mx-2.5 text-2xl transition-colors duration-300 hover:text-primary-color"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
        <hr className='my-0.5 w-4/5' />
        <p className='text-text-color py-4'>&copy; 2025 Danillo Verardo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;