import React from "react"
import axios from "axios";
import cheerio from "cheerio";

class ScraperState extends React.Component {
  state = {
    articles:[],
  }

  getScrape = () => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://www.factcheck.org/")
      .then((response) => {
        let $ = cheerio.load(response.data);
        let result = [];
        $("article h3").each(function() {
           result.push({
            text: $(this)
              .children("a")
              .text(),
            link: $(this)
              .children("a")
              .attr("href")
          });
        });
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
        <div className="articles">
        <ul>
          {
            this.state.articles.map((article, i ) => {
              return <li key={i}><a href={article.link} target="_blank" rel="noopener noreferrer">{article.text}</a></li>
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default ScraperState;
