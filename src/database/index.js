import justhelp from "../Assets/justhelp-preview.png";
import burguerkenzie from "../Assets/burguerkenzie-preview.png";
import nukenzie from "../Assets/nukenzie-preview.png";
import kenziehub from "../Assets/kenziehub-preview.png";
import kenzieshop from "../Assets/kenzieshop-preview.png";

export const projectsDatabase = [
  {
    id: 1,
    name: "Burguer Kenzie",
    description:
      "Simulação de uma hamburgueria, chamada Burguer Kenzie, que pode adicionar/remover produtos do carrinho e também utilizar filtros.",
    preview: Object.values(burguerkenzie).join(""),
    site: "https://react-entrega-s1-hamburgueria-da-kenzie-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-andersonrvr",
  },
  {
    id: 2,
    name: "Nu Kenzie",
    description:
      "Plataforma de gestão financeira, na qual você pode administrar suas finanças calculando automaticamente suas transações. ",
    preview: Object.values(nukenzie).join(""),
    site: "https://react-entrega-s1-nu-kenzie-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-andersonrvr",
  },
  {
    id: 3,
    name: "Just Help",
    description:
      "Um projeto tem como objetivo aprimorar a facilidade dos voluntários de se comunicarem com organizações sem fins lucrativos.",
    preview: Object.values(justhelp).join(""),
    site: "http://justhelp-capstone-m3.vercel.app",
    repository: "https://github.com/lucascortesc/m3-capstone-grupo2",
  },
  {
    id: 4,
    name: "Kenzie Hub",
    description:
      "Um hub das qualificações de um programador, para expor as tecnologias que ele sabe e também o nível de cada uma.",
    preview: Object.values(kenziehub).join(""),
    site: "https://react-entrega-s2-kenzie-hub-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-andersonrvr",
  },
  {
    id: 5,
    name: "Vasco Shop",
    description:
      "Simulação de um e-commerce, no qual pode adicionar e remover produtos, também contando com uma página para o carrinho.",
    preview: Object.values(kenzieshop).join(""),
    site: "https://react-entrega-s3-kenzishop-com-context-api-andersonrvr.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-andersonrvr",
  },
];
