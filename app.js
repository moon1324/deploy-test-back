import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import connect from "./connect/connect.js";

const app = express();
const PORT = 8000;
connect();

// 테스트용 모두 허용
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: false }));

// 라우팅 연결
app.use("/", router);
app.use("/test", router);

app.listen(PORT, () => {
    console.log("테스트 서버 실행");
});
