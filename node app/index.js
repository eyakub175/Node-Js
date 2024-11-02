//Import http module
const http = require('http');

//Create an HTTP server

const server = http.createServer((req, res) => {

    
    let headers = req.headers || {};
    res.end(JSON.stringify(headers));



})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});