import express, { NextFunction, Request, Response, json } from 'express';

const app = express();
app.use(json());

app.get("/blocking", (req: Request, res: Response, next: NextFunction) => {
    const startTime = new Date();
    console.log("Time: " + `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}` + " - " + process.pid + ": 블로킹 시작");
    while (Date.now() - startTime.getTime() < 10000) {
        // 로드 밸런싱 확인을 위한 블로킹 작업
    }
    const endTime = new Date();
    console.log("Time: " + `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}` + " - " + process.pid + ": 블로킹 종료");
    res.send("작업 완료");
})

app.listen(8080, () => {
    console.log("8080 포트 사용중");
})