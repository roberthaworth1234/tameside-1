import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router } from "@reach/router";
import NavbarLinks from "./Components/NavbarLinks.jsx";
import Homepage from "./Components/Homepage.jsx";
import About from "./Components/About.jsx";
import Donations from "./Components/Donations.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Sponsor from "./Components/Sponsor.jsx";
import SponsorIndividual from "./Components/SponsorIndividual.jsx";
import Volunteering from "./Components/Volunteering.jsx";
import Boars from "./Components/Boars.jsx";
import Sows from "./Components/Sows.jsx";
import Bucks from "./Components/Bucks.jsx";
import Does from "./Components/Does.jsx";
import IndividualBoar from "./Components/IndividualBoar.jsx";
import IndividualSow from "./Components/IndividualSow.jsx";
import IndividualBuck from "./Components/IndividualBuck.jsx";
import IndividualDoe from "./Components/IndividualDoe.jsx";
import GPCareTips from "./Components/GPCareTips.jsx";
import RabbitCareTips from "./Components/RabbitCareTips.jsx";

function App() {
  return (
    <div className="App">
      <div className="linkBkgd">
        <NavbarLinks />
      </div>
      <Router primary={false}>
        <Homepage path="/" />
        <About path="/about" />
        <Donations path="/donations" />
        <ContactUs path="/contactUs" />
        <Sponsor path="/sponsor" />
        <SponsorIndividual path="/sponsor/:name" />
        <Volunteering path="/volunteering" />
        <Boars path="/boars" />
        <Sows path="/sows" />
        <Bucks path="/bucks" />
        <Does path="/does" />
        <IndividualBoar path="/boars/:name" />
        <IndividualSow path="/sows/:name" />
        <IndividualSow path="/bucks/:name" />
        <IndividualDoe path="/does/:name" />
        <GPCareTips path="/gpCareTips" />
        <RabbitCareTips path="/rabbitCareTips" />
      </Router>
    </div>
  );
}

export default App;
