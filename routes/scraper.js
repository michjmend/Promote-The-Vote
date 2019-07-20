//dependencies
var express = require("express");

var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");
var router = express.Router();

// Require all models
var db = require("../client/src/components/Scrapper");

// Save an empty result object
var result = {};

// Initialize Express
var app = express();

// Routes
router.get("/", function(req, res){
 res.render("index")
})

// A GET route for scraping the echoJS website
router.get("/scrape", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.factcheck.org/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    var results = [];
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h3").each(function(i, element) {


      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });

      //send results to handlebars
        results.push(result);
    });
    res.render("index", results)


  });


});

// Route for getting all Articles from the db
router.get("/articles", function(req, res) {
  //console.log("article hi");
  // Grab every document in the Article collection
  db.Article.find({})
    .then(function(dbArticle){
      //If we were able to successfully find Article, send this back to the client
      res.send(dbArticle);
    })
    .catch(function(err){
      //If error, send this to client
      res.json(err);
    })
});

//export router to use in server
module.exports = router;
