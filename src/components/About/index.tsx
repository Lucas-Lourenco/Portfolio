import Contact from '../../Contact';
import imagemFace from '../../image/face.png'
import illustration from '../../image/illustration.png'

export default function About() {
    return (
        <>
    
            <section 
                id="home" 
                className="min-h-[86%] flex flex-col lg:flex-row justify-center lg:justify-around p-4 m-2 items-center w-full border-b border-[rgb(70,63,45)] gap-4 text-center lg:text-left"
            >
                <div className='flex flex-col justify-center items-center lg:items-start '>
                   
                    <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold">Lucas Lourenço</h2>
                    <p className='text-2xl sm:text-3xl lg:text-4xl mt-2'>Desenvolvedor Frontend</p>
                    <Contact/>
                </div>
                <div>
                    
                    <img src={imagemFace} alt="imagem de perfil" className="w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full object-cover" />
                </div>
            </section>

            <h2 id="about" className='m-3 p-2 text-3xl md:text-4xl leading-8 flex flex-col items-center gap-5'>SOBRE MIM</h2>

            <section className="w-full flex flex-col lg:flex-row justify-between p-3 m-1 items-center border-b border-[rgb(70,63,45)] gap-5">
               
                <div className="w-full lg:w-1/2"> 
                    <img
                        src={illustration}
                        alt="ilustração de programação"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className='w-full lg:w-1/2 flex flex-col'>
                   
                    <p className='text-lg lg:text-xl text-justify mb-6'>
                        Olá! Meu nome é Lucas Lourenço e sou um desenvolvedor frontend e engenheiro de software em formação. Tenho inglês avançado e uma paixão imensa por tecnologia, e tenho certeza que posso agregar valor a qualquer equipe com minhas habilidades.
                        Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedores. Além de ajudar outras pessoas com o que já aprendi, gosto de usar o meu conhecimento para encontrar soluções criativas e eficientes para problemas.
                        Nas horas vagas, sou um grande entusiasta de filmes, séries, animes, jogos e pela cultura geek em geral.
                    </p>
                    
                    <a href="../src/files/CV_Lucas_Lourenco.pdf" target="_blank"  className='icons text-center w-[9rem] lg:ml-0 m-auto '>
                    
                        Baixar CV
                    </a>
                   
                </div>
            </section>
        </>
    );
}