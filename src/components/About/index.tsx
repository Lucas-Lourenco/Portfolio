import imagem from '../../image/face.png'
export default function About () {
  return (
    <section id="about" className="min-h-[86%] flex justify-between p-2 m-2">

      <div className='
      flex flex-col justify-center items-star '>

      <h2 className="
      text-[4.25rem] m-4 ">Lucas Lourenço</h2>
      <p className='m-4 text-4xl'>Desenvolvedor Frontend</p>
      
      </div>
      <div>
        <img src={imagem} alt="imagem de perfil" className=" max-w-2xl" />
      </div>
    </section>
  );
}