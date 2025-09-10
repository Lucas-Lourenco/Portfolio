import imagemFace from '../../image/face.png'
import illustration from '../../image/illustration.png'

export default function About() {
    return (
        <>
            <section id="home" className="min-h-[86%] flex justify-between p-2 pb-0 m-2 items-center w-full  border-b border-[rgb(70,63,45)]">

                <div className='
      flex flex-col justify-center items-star m-auto'>

                    <h2 className="
      text-[4.25rem] m-4 ">Lucas Lourenço</h2>
                    <p className='m-4 text-4xl'>Desenvolvedor Frontend</p>

                </div>
                <div className='m-auto'>
                    <img src={imagemFace} alt="imagem de perfil" className=" w-auto" />
                </div>

            </section>

            <h2 id="about" className='m-4 p-4 text-4xl leading-8 flex flex-col items-center gap-6'> SOBRE MIM</h2>

            <section  className="
        w-full flex justify-between p-2 pb-0 m-2 items-center border-b border-[rgb(70,63,45)] ">
                <div className="w-1/2"> 
                    <img
                        src={illustration}
                        alt="ilustração de programação"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className='w-1/2
      m-4 p-4 text-2xl  items-center'>
                    <p className='text-justify mb-4'>
                        Olá! Meu nome é Lucas Lourenço e sou um desenvolvedor frontend e engenheiro de software em formação. Tenho inglês avançado e uma paixão imensa por tecnologia, e tenho certeza que posso agregar valor a qualquer equipe com minhas habilidades.

                        Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedores. Além de ajudar outras pessoas com o que já aprendi, gosto de usar o meu conhecimento para encontrar soluções criativas e eficientes para problemas.

                        Nas horas vagas, sou um grande entusiasta de filmes, séries, animes, jogos e pela cultura geek em geral.
                    </p>
                    <button className='text-center  m-auto  '>Baixar CV</button>

                    

                </div>

            </section>

        </>
    );
}