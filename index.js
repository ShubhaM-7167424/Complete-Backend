import http from "http";
import { generateLovePercent } from "./features.js";
import path from "path";

console.log(path.normalize("/home/random/dirC/app.html"));


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/product") {
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
    } else if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1>");
    } else {
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(5000, () => {
    console.log("server is working");
});
