const express = require("express");
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const dotenv = require('dotenv')
const path = require("path");

dotenv.config()
const app = express()
app.set("port", process.env.PORT || 4000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  },
  name:'session-cookie',
}))

app.get("/", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "/index.html")); // index.html
});

app.use(
  (req: any, res: any, next: any) => {
    console.log("모든 요청에 실행됨");
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
