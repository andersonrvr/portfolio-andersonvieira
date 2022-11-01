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
        <div className="iconsDiv">
          <a
            href="https://github.com/andersonrvr"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <BsGithub />
            </span>
            <span className="mediaName">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/andersonvieira-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <BsLinkedin />
            </span>
            <span className="mediaName">Linkedin</span>
          </a>
          <a
            href="https://instagram.com/andersonxvieira"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <BsInstagram />
            </span>
            <span className="mediaName">Instagram</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
