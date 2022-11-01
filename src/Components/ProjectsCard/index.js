import { Container } from "./styles";

const ProjectsCard = ({ infos }) => {
  return (
    <Container>
      <img src={infos.preview} alt={infos.name} />
      <h3>{infos.name}</h3>
      <p>
        {infos.description.length >= 130
          ? infos.description.slice(0, 130) + "..."
          : infos.description}
      </p>
      <div>
        <a href={infos.site} target="_blank" rel="noreferrer">
          <button className="cardLink">
            {infos.stack === "frontend" ? "Site" : "Documentação"}
          </button>
        </a>

        <a href={infos.repository} target="_blank" rel="noreferrer">
          <button className="cardLink">Respositório</button>
        </a>
      </div>
    </Container>
  );
};
export default ProjectsCard;
