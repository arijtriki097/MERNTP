import express, {Request,Response,NextFunction} from "express";
import{validate} from "../middleware/validate";
import{calculate} from '../services/calculate';
const app = express();

app.use(express.json());

app.get("/calculate/:op", validate, calculate, (req, res) => {
    res.status(200).json({ result:req.res });
});

app.listen(3000, () => {
    console.log('server listening on 3000');
});    



