import justhelp from "../Assets/justhelp-preview.png";
import burguerkenzie from "../Assets/burguerkenzie-preview.png";
import nukenzie from "../Assets/nukenzie-preview.png";
import kenziehub from "../Assets/kenziehub-preview.png";
import cipad from "../Assets/cipad-preview.png";
import hotelmanagement from "../Assets/hotelmanagement.png";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiCss3,
  DiGitBranch,
  DiPostgresql,
  DiPython,
  DiDjango,
  DiNodejsSmall,
  DiNodejs,
} from "react-icons/di";
import { SiTypescript, SiRedux } from "react-icons/si";
export const projectsDatabase = [
  {
    id: 1,
    name: "Just Help",
    description:
      "Um projeto tem como objetivo aprimorar a facilidade dos voluntários de se comunicarem com organizações sem fins lucrativos.",
    preview: Object.values(justhelp).join(""),
    site: "http://justhelp-capstone-m3.vercel.app",
    repository: "https://github.com/lucascortesc/m3-capstone-grupo2",
    stack: "frontend",
  },
  {
    id: 2,
    name: "CIPAD",
    description:
      "Essa aplicação tem como objetivo melhorar o trabalho de agentes de saúde. Os agentes que passam de casa em casa para verificar a situação de cada família, utilizam papéis para anotar dados e informações, o que acaba sendo inviável pois o consumo de papéis acaba aumentando demasiadamente e a probabilidade de perdas é alta.",
    preview: Object.values(cipad).join(""),
    site: "https://cipad-documentation.vercel.app/",
    repository: "https://github.com/lucascortesc/m4-tcm-maykel",
    stack: "backend",
  },
  {
    id: 3,
    name: "Hotel Management",
    description:
      "Plataforma de gestão de hotéis com possibilidade de cadastrar quartos, funcionários, clientes e também fazer reservas.",
    preview: Object.values(hotelmanagement).join(""),
    site: "https://kenzie-hotel.herokuapp.com/api/docs/#/",
    repository: "https://github.com/lucascortesc/m5-tcm-g10-marcelo",
    stack: "backend",
  },
  {
    id: 4,
    name: "Burguer Kenzie",
    description:
      "Simulação de uma hamburgueria, chamada Burguer Kenzie, que pode adicionar/remover produtos do carrinho e também utilizar filtros.",
    preview: Object.values(burguerkenzie).join(""),
    site: "https://react-entrega-s1-hamburgueria-da-kenzie-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-andersonrvr",
    stack: "frontend",
  },
  {
    id: 5,
    name: "Nu Kenzie",
    description:
      "Plataforma de gestão financeira, na qual você pode administrar suas finanças calculando automaticamente suas transações. ",
    preview: Object.values(nukenzie).join(""),
    site: "https://react-entrega-s1-nu-kenzie-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-andersonrvr",
    stack: "frontend",
  },
  {
    id: 6,
    name: "Kenzie Hub",
    description:
      "Um hub das qualificações de um programador, para expor as tecnologias que ele sabe e também o nível de cada uma.",
    preview: Object.values(kenziehub).join(""),
    site: "https://react-entrega-s2-kenzie-hub-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-andersonrvr",
    stack: "frontend",
  },
];

export const TechnologiesList = [
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <DiReact /> },
  { name: "NodeJS", icon: <DiNodejsSmall /> },
  { name: "Python", icon: <DiPython /> },
  { name: "Django Rest Framework", icon: <DiDjango /> },
  { name: "Express", icon: <DiNodejs /> },
  { name: "Git", icon: <DiGitBranch /> },
  { name: "HTML5", icon: <DiHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },
  { name: "PostGreSQL", icon: <DiPostgresql /> },
  { name: "Redux", icon: <SiRedux /> },
];
