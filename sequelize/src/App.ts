import express, { json, Request, Response, NextFunction } from 'express';
import { sequelize } from './orm/models/index';
import dotenv from 'dotenv';
import quizRepo from './repository/QuizRepo';

dotenv.config();
const app = express();

app.use(json());

app.get('/quiz/:no', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const prop = 'quiz' + req.params.no;
        return res.send(await quizRepo[prop]());
    } catch (e) {
        return next(e);
    }
})

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Sorry cant find that!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

sequelize.sync().then(
    () => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`app listen ${process.env.SERVER_PORT} port`);
        })
    }
)