import express, {Request, Response} from 'express';
import {validate, calcul} from './math';
const app = express();

app.use('/calcul', validate, calcul);
app.listen(3000, () => {
    console.log('server listening on 3000');
});
