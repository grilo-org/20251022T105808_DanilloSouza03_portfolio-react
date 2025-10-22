import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import perfil from '../assets/perfil.png';

function Sobre() {
  return (
    <section id="sobre" className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto overflow-hidden px-8 py-16">
      <div className="container content-sobre w-full md:w-2/3">
        <h2 className="text-primary-color mb-5 text-3xl">Sobre</h2>
        <p className="text-text-color mb-4">
          Meu nome é Danillo, tenho 22 anos e sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e também em <strong>Gestão Financeira</strong>. Meu objetivo é contribuir com soluções práticas e eficientes para os desafios da tecnologia, sempre com foco em aprendizado contínuo, trabalho em equipe e evolução profissional.
        </p>
        <p className="text-text-color mb-4">
          Durante minha trajetória, desenvolvi projetos que me permitiram consolidar conhecimentos em diferentes áreas. No desenvolvimento web, utilizo <strong>HTML, CSS, JavaScript, React</strong> e <strong>Node.js</strong> para criar aplicações. Em automação de tarefas, tenho experiência com <strong>Python</strong> e <strong>JavaScript</strong>. Para análise e manipulação de dados, aplico técnicas com <strong>Python, PowerBI, Jupyter Notebook e Google Colab</strong>.
        </p>
        <p className="text-text-color mb-4">
          Sou motivado por desafios que envolvem lógica, resolução de problemas e criação de soluções que geram impacto real.
        </p>
        <div className="linguagens mt-5 flex gap-4 text-4xl">
          <FontAwesomeIcon icon={['fab', 'html5']} title="HTML" className="text-[#e34f26] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fab', 'css3-alt']} title="CSS" className="text-[#1572b6] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fab', 'js-square']} title="JavaScript" className="text-[#f7df1e] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fab', 'python']} title="Python" className="text-[#306998] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fab', 'react']} title="React" className="text-[#61dafb] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fab', 'node-js']} title="Node.js" className="text-[#68a063] transition-transform duration-400 hover:scale-125" />
          <FontAwesomeIcon icon={['fas', 'database']} title="SQL" className="text-[#f29111] transition-transform duration-400 hover:scale-125" />
        </div>
      </div>
      <div className="img-sobre mt-9 p-5 w-full md:w-1/2 md:mt-0 flex justify-center">
        <img src={perfil} alt="Foto de Perfil" className="rounded-full w-full max-w-[345px] shadow-[0_0_23px_#0074E4]" />
      </div>
    </section>
  );
}

export default Sobre;