import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Scraper.css";
import flagcheck from './flagcheck.png';
import ScraperState from "../../context/scraper/ScraperState";

export default class Scraper extends Component {
  render() {
    return (
      <div>
        <div className="facts">
          <div className="factTitle"><img src={flagcheck} alt = {"flagcheck"}/>What Are the Facts?</div>
          <div className="factText">
            A Location for individuals to Research the Credibility of
            Politicians in the Media. These articles provided, have
            been published through <a href="https://www.factcheck.org/" target="_blank" rel="noopener noreferrer">FactCheck.org.</a> For further access to their
            archives please visit their website.
            <div className="lineBreak"></div>
          </div>
          <ScraperState />
        </div>
      </div>
    );
  }
}
