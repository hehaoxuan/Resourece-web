const express = require("express");
const videoRoute = require("./routes/video");

const app = express();


app.use('/video',videoRoute)

const server = app.listen(8081, function () {
  let host = server.address().address || "localhost";
  host === "::" ? "localhost" : host;
  let port = server.address().port;

  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});
