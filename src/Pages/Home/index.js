import Header from "../../Components/Header";
import { Container } from "./styles";
import Technologies from "../../Components/Technologies";
import TypeAnimation from "react-type-animation";

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="mainHome">
        <div className="mySelf">
          <TypeAnimation cursor={false} sequence={["Anderson", 1000, "Anderson Vieira"]} wrapper="h1" />

          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div className="aside">
          <Technologies />
        </div>
      </div>
      <div className="contacts">
        <a href="https://github.com/andersonrvr" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/andersonvieira-dev/" target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </div>
    </Container>
  );
};

export default Home;
