// import express, { Request, Response, NextFunction} from 'express'

const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 4000);

app.get("/", (req: any, res: any) => {
  // res.send('Hello Express') // local-4000 으로 스트링 메시지
  res.sendFile(path.join(__dirname, "/index.html")); // index.html
});

app.use(
  (req: any, res: any, next: any) => {
    console.log("모든 요청에 실행된다");
    next();
  },
  (req: any, res: any) => {
    throw new Error("에러는 에러 처리 미들웨어로 이동");
  }
);

app.use((err: any, req: any, res: any, next: any) => {
  console.log("err");
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "빈 포트에서 대기 중");
});
