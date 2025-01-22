import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";
import Resource from "./Resource";
import Event from "./Event";
import Teams from "./Teams";
import CyberSleuthsXISOEH from "./cybersleuthsxisoeh";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Faq from "./components/Faq"; // Import Faq
import './css/global.css'; // Import the global CSS file

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import EventDetails from "./EventDetails";
import Encrypta from "./Encrypta";
import ByteBounty from "./Bytebounty";
import Cygnal from "./Cygnal";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Event} />
          <Route path="/resources" component={Resource} />
          <Route path="/eventdetails" component={EventDetails} />
          <Route path="/teams" component={Teams} />
          <Route path="/Encrypta" component={Encrypta} />
          <Route path="/bytebounty" component={ByteBounty} />
          <Route path="/cygnal" component={Cygnal} />
          <Route path="/cybersleuthsxisoeh" component={CyberSleuthsXISOEH} />
          <Route path="/faq" component={Faq} /> {/* Add Faq route */}
        </Switch>
        <Foot /> 
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
