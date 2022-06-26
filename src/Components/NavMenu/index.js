import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const NavMenu = ({ openMenu, setOpenMenu }) => {
  const history = useHistory();
  const closeRedirect = (path) => {
    history.push(path);
    setOpenMenu(false);
  };
  return (
    <Container>
      <div className="modalContainer">
        <div className="navHeader">
          <button onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="menuFeatures">
          <p onClick={() => closeRedirect("/")}>Home</p>
          <p onClick={() => closeRedirect("/about_me")}>Sobre mim</p>
          <p onClick={() => closeRedirect("/projects")}>Projetos</p>
        </div>
      </div>
    </Container>
  );
};

export default NavMenu;
