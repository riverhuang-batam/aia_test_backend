const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
    axios
      .get(
        "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
      ) //getting data from flickr api with json format
      .then((result) => res.status(200).send(result.data)) // send the result if success
      .catch((err) => console.log(err));
  });
  
  app.post("/", (req, res) => {
    const tag = req.body.tag; // request from front
    const tagUrl = tag && tag.replace(/ /g, "%20"); // change space in string to %20
    axios
      .post(
        `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tagUrl}&format=json&nojsoncallback=1`
      ) //getting data by tags from flickr api with json format
      .then((result) => res.status(201).send(result.data)) // send the result if success
      .catch((err) => console.log(err));
  });

module.exports = app;