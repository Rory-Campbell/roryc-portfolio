import "./App.css";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Home />
      <Work />
      <About />
      <Contact />
    </Fragment>
  );
};

export default App;
