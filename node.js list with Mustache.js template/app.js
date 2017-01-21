var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mimeTypes = {
'.js': 'text/javascript',
'.html': 'text/html',
'.css': 'text/css',
'.jpg': 'image/jpeg',
'.gif': 'image/gif'
};

http.createServer(function onRequest(request, response) {
var pathname = url.parse(request.url).path;
if(pathname =='/') { pathname = '/index.html';}
var extname = path.extname(pathname);
console.log(extname);
var mimeType = mimeTypes[path.extname(pathname)];
pathname = pathname.substring(1, pathname.length);
if( (extname == ".gif") || (extname==".jpg") ) {
var img = fs.readFileSync('./'+pathname);
response.writeHead(200, {'Content-Type': mimeType});
response.end(img, 'binary');
} else {
fs.readFile(pathname, 'utf8', function(err, data){
if (err) {
console.log('Could not lind or open lile '+
pathname + ' for reading\n' );
} else {
console.log(pathname + " " + mimeType);
response.writeHead(200, {'Content-Type': mimeType});
response.end(data);
 }
   })
}
}).listen(8080);



// template = "{{#<<ul>}}
//  <b>{{<li>}}</b>
//  {{/<ul>}}";
// data = { "<ul>": [
//  { "<li>": "" },
//  { "<li>": "" },
//  { "<li>": "" }
//  ]}
// result = Mustache.render(template, data);
// console.log(result);






// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// var server = http.createServer(function onRequest(request, response) {
// var pathname =  url.parse(request.url).pathname;
// console.log("Получен запрос"  + pathname);
// fs.readFile('index.html', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'text/html'}); 
//        response.end(data);
//      }
// });

// fs.readFile('about.html', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'text/html'}); 
//        response.end(data);
//      }
// });

// fs.readFile('contact.html', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'text/html'}); 
//        response.end(data);
//      }
// });

// fs.readFile('style.css', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'text/css'}); 
//        response.end(data);
//      }
// });

// fs.readFile('logo.gif', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'image/gif'}); 
//        response.end(data);
//      }
// });

// fs.readFile('photo.gif', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'image/gif'}); 
//        response.end(data);
//      }
// });

// fs.readFile('script.js', 'utf8', function(error, data) {
// if (error) {
//       console.log('Could not find or open file for reading\n');
// } else {
//        response.writeHead(200, {'Content-Type': 'text/javascript'}); 
//        response.end(data);
//      }
// });

// });
// server.listen(8080);

