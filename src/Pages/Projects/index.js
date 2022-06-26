import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ProjectsContainer from "../../Components/ProjectsContainer";
import { Container } from "./styles";

const Projects = () => {
  return (
    <>
      <Header
        boxshadow={"rgba(0, 0, 0, 0.3) 0px 3px 8px"}
        background={"#1e1e1f"}
      />
      <Container>
        <div className="mainProjects">
          <h2>Projetos pessoais:</h2>
          <ProjectsContainer />
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Projects;
