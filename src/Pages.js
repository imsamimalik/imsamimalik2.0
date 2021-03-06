import { Route, Switch } from "wouter";
import loadable from "@loadable/component";
const Contact = loadable(() => import("./Pages/Contact"));
const About = loadable(() => import("./Pages/About"));
const Portfolio = loadable(() => import("./Pages/Portfolio"));
const Home = loadable(() => import("./Pages/Home"));
const Login = loadable(() => import("./Pages/Login"));
const Blog = loadable(() => import("./Pages/Blog"));

const Pages = () => {
  return (
    <div className="app-content">
      <div className="curtain"></div>
      <div className="top-bg">
        <div className="bg-overlay"></div>
      </div>
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default Pages;
