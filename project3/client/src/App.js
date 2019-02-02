import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Welcome from "./components/pages/Welcome";
import NasaImages from "./components/pages/NasaImages";
import NasaLive from "./components/pages/NasaLive";
import Articles from "./components/pages/Articles";
import apod from "./components/pages/Apod";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/NasaImages" component={NasaImages} />
        <Route exact path="/NasaLive" component={NasaLive} />
        <Route exact path="/Apod" component={apod} />
        <Route path="/Articles" component={Articles} />
      </div>
    </Router>
  );
}

export default App;
