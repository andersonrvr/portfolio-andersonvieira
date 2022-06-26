import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div>
        <h5>Contato</h5>
        <p>+55 24 98150-8077</p>
        <p>contatoandersonvieira@outlook.com</p>
      </div>
      <div className="mediaDiv">
        <h5>Redes Sociais</h5>
        <div>
          <span className="icon">
            <BsGithub />
          </span>
          <a
            className="mediaName"
            href="https://github.com/andersonrvr"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div>
          <span className="icon">
            <BsLinkedin />
          </span>
          <a
            className="mediaName"
            href="https://www.linkedin.com/in/andersonvieira-dev/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div>
          <span className="icon">
            <BsInstagram />
          </span>
          <a
            className="mediaName"
            href="https://instagram.com/andersonxvieira"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
