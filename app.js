import express from 'express';
import cookieParser from 'cookie-parser';
import render from './app/render';
import update from './app/update';
import submit from './app/submit';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.get('/', render);
app.post('/update', update);
app.post('/submit', submit);
app.use(express.static(`static`));

export default app;
