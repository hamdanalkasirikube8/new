var http = require('http');

var server = http.createServer(function(req,res){
                    res.writeHead(200, {'Content-Type' : 'text/html'}) ;          res.end('<!DOCTYPE html>
<html lang="en">

<head>
    
    
    
    <title>My First APP oN Heroku</title>
       <!-- Bootstrap -->
  
    </head>

<body style="background-color: lightgreen">

    <h1> What is Heroku?  </h1>
    
<p> Heroku is a cloud Platform-as-a-Service (PaaS)  Heroku was acquired by Salesforce.com in 2010. It supports programming languages like<b> Java, Node.js, Scala, Clojure, Python,  PHP</b>. </p>
     
    </body>

</html>');
                               
                               });



var port = Number(process.env.PORT || 3000);
server.listen(port);