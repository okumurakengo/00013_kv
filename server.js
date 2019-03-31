const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
    if (/\.m?js$/.test(req.url))
        res.setHeader("Content-Type", "text/javascript");
    res.write(fs.readFileSync(`${__dirname}${req.url}`));
    res.end();
});

server.listen(8000, "0.0.0.0");
