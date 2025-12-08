
export default async function GetDataSkills() {
    const response = await fetch('/Data/dbSkills.json');
    const data = await response.json();
    console.log('api',data);
    const skills = data.skills;
    console.log('skills',skills);
    return skills;
}