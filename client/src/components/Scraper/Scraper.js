import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Scraper.css";
import ScraperState from "../../context/scraper/ScraperState"
// import Article from  "./Article";


export default class Scrapper extends Component {
  render() {
    return (
      <div className= "facts">
        <h1>What Are the Facts?</h1>
        <h2>
          <i>
            A Location for individuals to Research the Credibility of
            Politicians in the Media
          </i>
        </h2>
        <h3>
          <i>
            These articles provided to you have have been published through
            FactCheck.org. For further access to their archives please visit
            their website.
          </i>
        </h3>

        <ScraperState />

      </div>
    );
  }
}
