var http = require("http");

const port = process.env.PORT || 8888;

http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}).listen(port, (req, res) => {
    console.log(`Server on port ${port}`);
});