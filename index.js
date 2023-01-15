const app = require('./app.js')
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(`port is open on ${PORT}`));
module.exports = server;
