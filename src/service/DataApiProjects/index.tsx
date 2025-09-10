export default async function GetDataProjects() {
    const response = await fetch('/Data/db.json');
    const data = await response.json();
    console.log('api',data);
    const projects = data.projects;
    console.log('projects',projects);
    
    return projects;
}