const express = require('express')
const app = express();
const axios = require('axios')

app.get('/', (req, res) => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json') //getting data from flickr api with json format
    .then(result => res.status(200).send(result.data)) // send the result if success
    .catch(err => console.log(err))
})

app.listen(4000, () => console.log('it works'))