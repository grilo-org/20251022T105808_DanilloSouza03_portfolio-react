import React, { useState } from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  images: string[];
  title: string;
  description: string;
  cardprincipal: string;
  tags: string[];
  linkDeploy?: string;
  linkGitHub: string;
}

const Projetos: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      images: ['DVFinance.gif', 'DvFinance.png'],
      title: 'DV Finance',
      description: 'Aplicação full stack para gerenciamento de clientes e ativos financeiros de um escritório de investimentos. Conta com backend em Node.js (TS + Fastify + Prisma), frontend em Next.js com React Query e estilização com Tailwind CSS e Shadcn UI. Utiliza banco de dados MySQL e Docker para containerização.',
      cardprincipal: 'Full Stack Development',
      tags: ['TypeScript', 'Node.js', 'Next.js', 'MySQL', 'Docker'],
      linkGitHub: 'https://github.com/DanilloSouza03/DV-Finance'
    },
    {
      images: ['Logo PayTrack.png', 'paytrack01.png', 'paytrack02.png', 'videotrackapi.gif'],
      title: 'Pay Track API',
      description: 'API desenvolvida com FastAPI para gerenciar contas. Oferece funcionalidades de CRUD (criar, atualizar, listar e deletar), manipulando dados como nome, descrição, data, valor e situação das contas.',
      cardprincipal: 'Full Stack Development',
      tags: ['Python', 'FastAPI', 'CRUD'],
      linkGitHub: 'https://github.com/DanilloSouza03/PayTrack-API'
    },
    {
      images: ['videotrackapi.gif', 'Logo PayTrack.png'],
      title: 'Pay Track Web',
      description: 'Interface web para interagir com a API Pay Track API. Desenvolvida com HTML, CSS e JavaScript, permite realizar operações de adicionar, visualizar, editar e excluir contas, proporcionando uma experiência de CRUD.',
      cardprincipal: 'Full Stack Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'CRUD'],
      linkGitHub: 'https://github.com/DanilloSouza03/PayTrack-WEB'
    },
    {
      images: ['ad_ws.png', 'ad_ws1.png', 'ad_ws2.png'],
      title: 'Análise de Dados com Web Scraping',
      description: 'Projeto utilizando Python para coletar dados do site Gupy via web scraping. Os dados foram analisados e visualizados no Jupyter Notebook, destacando tendências do mercado de trabalho.',
      cardprincipal: 'Data Analysis',
      tags: ['Python', 'Web Scraping', 'Jupyter Notebook'],
      linkGitHub: 'https://github.com/DanilloSouza03/Analise-Dados-Gupy'
    },
    {
      images: ['calcfinance_image.png', 'calcfinance_image1.png', 'calcfinance_image2.png', 'calcfinance_image3.png',],
      title: 'CalcFácil Financeira',
      description: 'Desenvolvida para cálculos financeiros básicos, feita com HTML, CSS e JavaScript. Criada para facilitar a análise rápida de operações financeiras.',
      cardprincipal: 'Full Stack Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'Matemática Financeira'],
      linkDeploy: 'https://danillosouza03.github.io/CalcFacil-Financeira/',
      linkGitHub: 'https://github.com/DanilloSouza03/CalcFacil-Financeira'
    },
    {
      images: ['proj_login.png', 'proj_login1.png', 'proj_login2.png', 'proj_login3.png', 'proj_login4.gif'],
      title: 'Projeto Login',
      description: 'Interface de login responsiva desenvolvida com HTML e CSS, projetada para garantir uma experiência de usuário consistente em diversos dispositivos.',
      cardprincipal: 'Frontend Development',
      tags: ['HTML', 'CSS', 'Responsividade'],
      linkGitHub: 'https://github.com/DanilloSouza03/Projeto-Login',
      linkDeploy: 'https://danillosouza03.github.io/Projeto-Login/'
    },
    {
      images: ['da_api.png', 'da_api1.png', 'da_api2.png', 'da_api3.png', 'da_api4.png'],
      title: 'Análise de Dados com API ViaCEP',
      description: 'Projeto de análise de dados combinando informações da API pública ViaCEP com dados demográficos do IBGE. Utiliza Python, Jupyter Notebook, e Power BI para automação, extração, tratamento e visualização dos dados, aplicando técnicas de ETL (Extração, Transformação e Carga).',
      cardprincipal: 'Data Analysis',
      tags: ['Python', 'API', 'Jupyter Notebook', 'Power BI', 'ETL'],
      linkGitHub: 'https://github.com/DanilloSouza03/Analise-Dados-API-ViaCep'
    },
    {
      images: ['ea_bd.png', 'ea_bd1.png', 'ea_bd2.png', 'ea_bd3.png', 'ea_bd4.gif'],
      title: 'Ecommerce API',
      description: 'API RESTful desenvolvida com Flask. Inclui gerenciamento de usuários, produtos e carrinhos de compras, além de autenticação de usuários e funcionalidade de checkout. Banco de dados em SQLite e testes com Postman.',
      cardprincipal: 'Backend Development',
      tags: ['Python', 'Flask', 'SQLite', 'Postman', 'API'],
      linkGitHub: 'https://github.com/DanilloSouza03/ecommerce-api'
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section id="projetos" className="py-20">
      <style>{`
        .custom-dots li button:before {
          font-size: 10px; 
          color: #0074E4;  
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          color: #0074E4; 
        }
      `}</style>
      <div className="container mx-auto px-8 md:px-32">
        <h2 className='text-primary-color mb-5 text-3xl'>Projetos</h2>
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div className="bg-background-card rounded-xl shadow-[0_4px_8px_#00000033] transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_#00000033]" key={index}>
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <div key={i} className="h-52">
                    <img src={`/img/projetos/${img}`} alt={`Slide ${i + 1}`} className="w-full h-full object-contain p-0.5" />
                  </div>
                ))}
              </Slider>
              <div className="p-4">
                <h3 className='text-text-color text-lg font-bold mt-2 mb-1'>{project.title}</h3>
                <p className='text-text-color leading-relaxed font-light mb-1'>{project.description}</p>
                <div className="flex items-center justify-center bg-card-color rounded-xl mt-2 py-1">
                  <b className='text-text-color text-lg font-light'>{project.cardprincipal}</b>
                </div>
                <div className="flex flex-wrap gap-1 mb-2 pt-2.5 justify-center">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag bg-tag-color text-text-color font-extralight px-2.5 py-1.5 rounded-[20px] text-sm">{tag}</span>
                  ))}
                </div>
                <div className="links flex justify-center gap-2.5 mt-4.5 my-3">
                  {project.linkDeploy && <a href={project.linkDeploy} className="px-2 py-1.5 no-underline font-bold text-text-color rounded-lg transition-transform duration-300 bg-[#28a745] border-2 border-[#218838] hover:scale-105" target="_blank" rel="noopener noreferrer">Link Deploy</a>}
                  <a href={project.linkGitHub} className="px-2 py-1.5 no-underline font-bold text-text-color rounded-lg transition-transform duration-300 bg-[#1c1c1c] border-2 border-[#030303] hover:scale-105" target="_blank" rel="noopener noreferrer">Link GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;