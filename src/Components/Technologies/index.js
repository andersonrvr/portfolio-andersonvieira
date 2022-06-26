import { Container } from "./styles";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiReact } from "react-icons/di";

const Technologies = () => {
  return (
    <Container>
      <AiFillHtml5 className="html" />
      <DiCss3 className="css" />
      <DiJavascript className="js" />
      <DiReact className="react" />
    </Container>
  );
};
export default Technologies;
