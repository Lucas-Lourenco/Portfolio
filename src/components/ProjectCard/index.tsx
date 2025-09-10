

export default function ProjectCard({ project }: { project: { title: string, description: string, image: string, link: string } }) {
 

  return (
    <>
   
    <div className="border border-[rgb(70,63,45)] hover:border-amber-400 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full ">
  

      <h2>{project.title}t</h2>
      <img src={project.image} alt={project.image}  className="w-full m-auto"/>
    
    </div>
    </>
  );
}