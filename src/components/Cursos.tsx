import React, { useState } from 'react';

interface Course {
  img: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
}

const Cursos: React.FC = () => {
  const [courses] = useState<Course[]>([
    {
      title: 'Linguagem de Programação Python',
      img: 'python_bra.png',
      description: 'Apresenta Python junto ao POO, GUI e SQLite.',
      year: '2024',
      tags: ['Fundação Bradesco', 'Python', 'SQLite', 'POO']
    },
    {
      title: 'Git e GitHub',
      img: 'git_fgv.png',
      description: 'Controle de versão com Git e hospedagem no GitHub (FGV).',
      year: '2024',
      tags: ['FGV', 'Git', 'GitHub', 'Versionamento de Código']
    },
    {
      title: 'Figma para DEV',
      img: 'figma_ada.png',
      description: 'Uso do Figma no desenvolvimento (ADATech).',
      year: '2024',
      tags: ['ADATech', 'Figma', 'Design', 'UI']
    },
    {
      title: 'Fundamentos para Desenvolvimento de Software',
      img: 'certificado_software_microsoft.jpg',
      description: 'Curso da Microsoft e LinkedIn sobre os fundamentos do desenvolvimento de software.',
      year: '2023',
      tags: ['Microsoft', 'Desenvolvimento de Software', 'Programação']
    },
    {
      title: 'Santander Bootcamp 2023 - Ciência de Dados com Python',
      img: 'bootcamp_santander.jpg',
      description: 'Bootcamp de ciência de dados, incluindo estatística, SQL, Power BI e Python.',
      year: '2023',
      tags: ['DIO', 'Ciência de Dados', 'Python', 'SQL', 'Power BI', 'Estatística']
    }, 
    {
      title: 'Formação HTML Web Developer',
      img: 'formacao_html.jpg',
      description: 'Formação em desenvolvimento web com foco em HTML e HTML5.',
      year: '2023',
      tags: ['DIO', 'HTML', 'Front-End', 'Web Development']
    },
    {
      title: 'Fundamentos do Desenvolvimento de Sistemas',
      img: 'fundamentos_bra.jpg',
      description: 'Curso dos fundamentos de desenvolvimento de sistemas pela Fundação Bradesco.',
      year: '2023',
      tags: ['Fundação Bradesco', 'Desenvolvimento de Sistemas', 'LGPD']
    },
    {
      title: 'SQL a linguagem dos bancos de dados',
      img: 'SQL_conquer.jpg',
      description: 'Curso focado na linguagem SQL e sua aplicação em bancos de dados MySQL.',
      year: '2023',
      tags: ['Conquer', 'SQL', 'MySQL', 'Bancos de Dados']
    },
    {
      title: 'Bootcamp Potência Tech powered by iFood | Ciência de Dados',
      img: 'bootcamp_ifood.jpg',
      description: 'Bootcamp abordando ciência de dados com foco em Python, SQL, Machine Learning, e Power BI.',
      year: '2023',
      tags: ['DIO', 'Ciência de Dados', 'Python', 'SQL', 'Machine Learning', 'Power BI']
    }
  ]);


  return (
    <section id="cursos" className="py-20">
      <div className="container mx-auto px-8 md:px-32">
        <h2 className='text-primary-color mb-5 text-3xl'>Cursos</h2>
        <div id="cursos-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <div className="bg-background-card rounded-xl shadow-[0_4px_8px_#00000033] transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_#00000033]" key={index}>
              <div className="relative w-full overflow-hidden h-52">
                <div className="slide min-w-full transition-transform duration-500 ease-in-out" >
                  <img src={`/img/cursos/${course.img}`} alt={`course ${index}`} className="w-full h-52 object-contain p-0.5" />
                </div>
              </div>
              <div className="p-4">
                <h3 className='text-text-color font-bold text-lg mt-2'>{course.title}</h3>
                <p className='text-text-color font-light leading-relaxed mt-1'>{course.description}</p>
                <small><i className='text-text-color'>Concluído em {course.year}</i></small>
                <div className="tags flex flex-wrap gap-1 pt-2.5 justify-center">
                  {course.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag bg-tag-color text-text-color px-2.5 py-1.5 rounded-[20px] text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
