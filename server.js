// server.js
const https = require("https");
const { parse } = require("url");
const fs = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "local.kaigon.sidesideeffect.io";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync("./https_cert/local.kaigon.sidesideeffect.io+3-key.pem"),
  cert: fs.readFileSync("./https_cert/local.kaigon.sidesideeffect.io+3.pem"),
};

app.prepare().then(() => {
  https
    .createServer(options, (req, res) => {
      try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === "/") {
          app.render(req, res, "/", query);
        } else {
          handle(req, res, parsedUrl);
        }
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("internal server error");
      }
    })
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
