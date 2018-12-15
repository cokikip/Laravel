var http = require('http');
function onRequest(request, response){
    response.writeHead(200, {'Content-type':'text/plain'});
    response.write('<h1>Hello world</h1>');
    response.end();

}
http.createServer(onRequest).listen(8000);
