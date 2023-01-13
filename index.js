const express = require('express')
const app = express();
const axios = require('axios');
const cors = require('cors')

const corsOption = {
    origin: 'http://localhost:3000', //can be only send response to localhost:3000
    optionsSuccessStatus: 200
}

app.get('/', cors(corsOption), (req, res) => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1') //getting data from flickr api with json format
    .then(result => res.status(200).send(result.data)) // send the result if success
    .catch(err => console.log(err))
})

app.listen(4000, () => console.log('it works'))