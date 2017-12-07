const http = require('http')

http.createServer(function (request, response) {
  let headers = request.headers
  
  response.writeHead(200, headers)

  var body = '';

  request.on('data', (data) => body += data);
  request.on('end', () => response.end(body))

}).listen(3000, (err) => {
  if (err) return console.error(err)

  console.log(`Server is listening on port 3000`)
})