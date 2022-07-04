const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';//local host
const port = 3000;
const home= fs.readFileSync('./index.html'); 
const about= fs.readFileSync('./about.html');
const srvices= fs.readFileSync('./srvices.html');
const contact= fs.readFileSync('./contact.html');

const server = http.createServer((req,res) =>{
    console.log(req.url);
    url=req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){

        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);

    }
    else if(url == '/srvices'){
        res.end(srvices);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.end("error 404! Not found");

    }

     
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });