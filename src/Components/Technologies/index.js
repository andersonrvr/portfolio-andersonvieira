import { Container } from "./styles";
import { SiJavascript } from "react-icons/si";
import { DiNodejsSmall, DiPython, DiReact } from "react-icons/di";

const Technologies = () => {
  return (
    <Container>
      <SiJavascript className="js" />
      <DiReact className="react" />
      <DiNodejsSmall className="node" />
      <DiPython className="django" />
    </Container>
  );
};
export default Technologies;
