import { useEffect, useState } from "react"
import { projectsData, projectsNav } from "./Data" // projectsData must now contain demoLink
import WorkItems from "./WorkItems"

// 1. Update the Project interface to include demoLink
interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  demoLink: string; // <--- ADD THIS LINE
  repoLink: string;
}

const Works = () => {
  const [item, setItem] = useState({ name: 'all'});
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData as Project[]); // Cast to Project[] if projectsData doesn't explicitly declare types
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects as Project[]); // Cast to Project[]
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    setItem({ name: e.currentTarget.textContent?.toLowerCase() || '' });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {
              handleClick(e, index);
            }}
            className= {`${active === index ? 'active-work' : ''} work_item`}
            key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work_container container grid">
        {projects.map((item) => {
          // No change needed here, as 'item' (which is a Project) now correctly has demoLink
          return <WorkItems item={item} key={item.id}/>;
        })}
      </div>
    </div>
  )
}

export default Works;