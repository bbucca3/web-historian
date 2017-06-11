var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.handleRequest = function (req, res) {


  console.log(req.url);

//   var statusCode = 200;

//  (method === 'POST') {
//  +
//  +    console.log('URL: ', request.url);
//  +   

//   response.writeHead(statusCode, headers);

// if (request.method === 'POST') {
//  +    var body = '';
//  +
//  +    request.on('data', function(data) {
//  +      body += data;
//  +    });
  
//  -  if (request._postData !== undefined) {
//  -    messages.results.push(request._postData);
//  +    request.on('end', function() {
//  +      var messageObj = JSON.parse(body);
//  +      messageObj.objectId = messages.results.length + 1;
//  +      messages.results.push(messageObj);
//  +    });
//     }
  
//     var messagesJSON = JSON.stringify(messages);
//  +  console.log('messagesJSON ', messagesJSON);
//     response.end(messagesJSON);

  
  //res.end(archive.paths.list);
};

