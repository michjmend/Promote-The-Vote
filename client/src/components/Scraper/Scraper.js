import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Scraper.css";
import ScraperApp from "../../context/scraper/ScraperState"
// import Article from  "./Article";


const Scraper = () => {
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
      
      <ScraperApp />

    </div>
  );
}

  export default Scraper
