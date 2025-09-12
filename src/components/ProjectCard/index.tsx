export default function ProjectCard({ project }: { project: { title: string, description: string, image: string, link: string } }) {
  return (
    <>
      <div className="border border-[rgb(70,63,45)] hover:border-amber-400 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full mb-3">
        
       
        <h2 className="text-xl md:text-2xl mb-1 text-center md:text-center lg:text-left">{project.title}</h2>

        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full  aspect-square  md:aspect-video  rounded-md p-1"
        />
        
      </div>
    </>
  );
}