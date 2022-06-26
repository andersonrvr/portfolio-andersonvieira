import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about_me">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};
