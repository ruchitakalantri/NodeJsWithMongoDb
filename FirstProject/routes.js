// file system 
const fs = require('fs');

// connect app js to route js
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message</title></head>');
        res.write('<body> <form action = "/message" method = "POST"> <input type = "text" name = "message" > <button type = "submit"> Send </button> </form> </body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        
        const body = [];
        
        // event lisener
        //on(event: "close", listener: () => void): http.IncomingMessage
        // data event
    
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push();
        });
    
        //Raw data is stored in instances of the Buffer class.
        // execute once its done parseing data
        //CONCAT : Returns a buffer which is the result of concatenating all the buffers in the list together.
    
        return req.on('end' , () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
    
            //Split a string into substrings using the specified separator and return them as an array.
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt' , message , err => {
                
                if (err) {
                    console.error(err)
                    return
                  }
                
                res.statusCode = 302;
                res.setHeader('Location' , '/');
                return res.end();
            });
    
        });
    }
    // hard exit : event loop : quit our server
    //process.exit();
    
    //response
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title> My First Page</title></head>');
    res.write('<body> <h1> Hello from node js server </h1> </body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler : requestHandler ,
    someText : ' Some Hard Code Text'
};
