import { Container } from "./styles";

const CardTecnologies = ({ icon, name }) => {
  return (
    <Container>
      <span>{icon}</span>
      <span>{name}</span>
    </Container>
  );
};

export default CardTecnologies;
