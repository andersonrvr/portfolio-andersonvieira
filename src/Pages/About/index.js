import Header from "../../Components/Header";
import { Container } from "./styles";
import myImage from "../../Assets/anderson-vieira.png";
import Footer from "../../Components/Footer";
import CardTecnologies from "../../Components/CardTecnologies";
import { TechnologiesList } from "../../database";
const About = () => {
  return (
    <>
      <Header
        boxshadow={"rgba(0, 0, 0, 0.3) 0px 3px 8px"}
        background={"#1e1e1f"}
      />
      <Container>
        <div className="mainAbout">
          <div>
            <h1>Sobre mim</h1>
            <p className="detailsDesktop">
              Um jovem apaixonado por tecnologia e computação que após ter o
              primeiro contato com a parte de hardware com montagem montando e
              fazendo manutenção computadores tive a oportunidade de conhecer a
              parte de software com o desenvolvimento web, o qual me apaixonei e
              estou em constante aprimoramento de minhas habilidades com o
              objetivo de me tornar um grande desenvolvedor e facilitar a vida
              de outras pessoas.
            </p>
          </div>
          <div className="infos">
            <figure>
              <img src={myImage} alt="anderson-vieira" />
              <figcaption>Anderson Vieira</figcaption>
            </figure>

            <button className="curricullum">
              <a
                href="https://drive.google.com/file/d/1OkV96wbphC7KCFOlGEAl7i8harmtjWC_/view"
                target="_blank"
                rel="noreferrer"
              >
                Curriculum Vitae
              </a>
            </button>
          </div>
          <div className="aboutMe">
            <p className="detailsMobile">
              Um jovem apaixonado por tecnologia e computação que após ter o
              primeiro contato com a parte de hardware com montagem montando e
              fazendo manutenção computadores tive a oportunidade de conhecer a
              parte de software com o desenvolvimento web, o qual me apaixonei e
              estou em constante aprimoramento de minhas habilidades com o
              objetivo de me tornar um grande desenvolvedor e facilitar a vida
              de outras pessoas.
            </p>
            <h2>Hard Skills</h2>
            <section className="Techs">
              {TechnologiesList.map((e) => (
                <CardTecnologies key={e} icon={e.icon} name={e.name} />
              ))}
            </section>
            <section className="Education">
              <h2>Educação</h2>
              <h3>Kenzie Academy Brasil</h3>
              <span>Novembro 2021 - Novembro 2022</span>
              <p className="courseTitle">Desenvolvimento Web Fullstack</p>
              <p>
                Curso de desenvolvimento fullstack com duração de 2000 horas que
                abrande tanto tecnologias de FrontEnd quanto de Backend, com seu
                andamento baseado na metodologia SCRUM e também com o
                desenvolvimento de soft skills necessários para melhor adaptação
                no mercado de trabalho.
              </p>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
