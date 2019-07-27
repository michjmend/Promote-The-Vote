import React, { ListItem, useReducer } from "react";
import axios from "axios";
import cheerio from "cheerio";
import ScraperContext from "./scraperContext";
import scraperReducer from "./scraperReducer";
import { GET_ARTICLES } from "../types";

class ScraperState extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles: [],
  //   }
  // }
  state = {
    articles:[],
  }

  getScrape = () => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://www.factcheck.org/")
      .then((response) => {
        let $ = cheerio.load(response.data);
        let target = $("h3.entry-title")
          .children("a")
          .text();
        let result = [];
        $("article h3").each(function() {
          // console.log($(this).children('a').text())
          // console.log($(this).children('a').attr("href"))

          result.push({
            text: $(this)
              .children("a")
              .text(),
            link: $(this)
              .children("a")
              .attr("href")
          });
        });

        console.log(result);


        this.setState({
          articles: result,
        })



      });
  };

  componentDidMount(){
    this.getScrape()
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.getScrape}>refresh</button> */}
        <div className="articles">
        <ul>
          {
            this.state.articles.map((article, i ) => {
              return <li key={i}><a href={article.link} target="_blank">{article.text}</a></li>

            })

          }
        </ul>
        </div>
      </div>
    );
  }
}


export default ScraperState;

// axios.get("https://cors-anywhere.herokuapp.com/https://www.factcheck.org/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     let $ = cheerio.load(response.data);
//     console.log("hi");
//     let results = [];
//     let result = {};

//     // console.log(response.data);
//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h3").each(function(i, element) {

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       //send results to handlebars
//         results.push(result);
//         console.log(results);

//     // });
//     }
