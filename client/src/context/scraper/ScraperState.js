import React, { useReducer } from "react";
import axios from 'axios';
import cheerio from 'cheerio';
import ScraperContext from "./scraperContext";
import scraperReducer from "./scraperReducer";
import { GET_ARTICLES } from "../types";


const ScraperApp = () => {


  axios.get("https://www.factcheck.org/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    let $ = cheerio.load(response.data);
    let results = [];
    let result = {};
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h3").each(function(i, element) {

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      //send results to handlebars
        results.push(result);
    });
  });
  return (
    <div></div>
  )
}


export default ScraperApp;
