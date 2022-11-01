import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
} from "react-icons/ai";
const Header = ({ boxshadow, background }) => {
  const history = useHistory();
  let isButtonActive = {
    home: false,
    projects: false,
    about: false,
  };
  const activeButtonRedirect = (path, id) => {
    isButtonActive.home = false;
    isButtonActive.projects = false;
    isButtonActive.about = false;
    isButtonActive[id] = true;
    history.push(path);

    console.log(window.location.pathname);
  };

  return (
    <>
      <Container boxshadow={boxshadow} background={background}>
        <div className="barMobile">
          <div
            id="home"
            onClick={(e) => activeButtonRedirect("/", e.currentTarget.id)}
            className={"iconName"}
          >
            <span id="oi">
              {window.location.pathname === "/" ? (
                <AiFillHome />
              ) : (
                <AiOutlineHome />
              )}
            </span>
            <p>Home</p>
          </div>
          <div
            id="projects"
            onClick={(e) =>
              activeButtonRedirect("/projects", e.currentTarget.id)
            }
            className={"iconName"}
          >
            <span>
              {window.location.pathname === "/projects" ? (
                <AiFillProject />
              ) : (
                <AiOutlineProject />
              )}
            </span>
            <p>Projetos</p>
          </div>
          <div
            id="about"
            className={"iconName"}
            onClick={(e) =>
              activeButtonRedirect("/about_me", e.currentTarget.id)
            }
          >
            <span>
              {window.location.pathname === "/about_me" ? (
                <AiFillInfoCircle />
              ) : (
                <AiOutlineInfoCircle />
              )}
            </span>
            <p>Sobre</p>
          </div>
        </div>
        <div className="HeaderDesktop">
          <p onClick={() => history.push("/")}> &lt;web.developer/&gt;</p>
          <div className="sessionsLinks">
            <p onClick={() => history.push("/projects")}>Projetos</p>
            <p onClick={() => history.push("/about_me")}>Sobre mim</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
