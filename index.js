const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let path = "./";
    switch (req.url) {
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        case "/contact":
            path += "contact-me.html";
            break;
        default:
            path += "404.html";
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log("server runing");
});
