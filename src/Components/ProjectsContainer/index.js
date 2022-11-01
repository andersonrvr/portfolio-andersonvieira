import { Container } from "./styles";
import { projectsDatabase } from "../../database";
import ProjectsCard from "../ProjectsCard";

const ProjectsContainer = () => {
  return (
    <Container>
      {projectsDatabase.map((e) => (
        <ProjectsCard infos={e} key={e.id} />
      ))}
    </Container>
  );
};
export default ProjectsContainer;
