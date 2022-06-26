import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavMenu from "../NavMenu";

const Header = ({ boxshadow, background }) => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Container boxshadow={boxshadow} background={background}>
        <p onClick={() => history.push("/")}> &lt;web.developer/&gt;</p>
        <div className="sessionsLinks">
          <p onClick={() => history.push("/about_me")}>Sobre mim</p>
          <p onClick={() => history.push("/projects")}>Projetos</p>
        </div>
        <div className="menu">
          <AiOutlineMenu onClick={() => setOpenMenu(true)} />
        </div>
      </Container>
      {openMenu && <NavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default Header;
