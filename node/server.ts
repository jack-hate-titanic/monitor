import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("1111222");
});

app.listen(8080, () => {
  console.log("服务器已经启动");
});
