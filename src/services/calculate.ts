import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());
const calculate = (req: Request, res: Response, next: NextFunction) => {
    var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;
  var result ;

  switch (op) {
    case "add":
      result = num1 + num2;
      res.send(result);
      break;
    case "sous":
      result = num1 - num2;
      res.send(result);
      break;
    case "mult":
      result = num1 * num2;
      res.send(result);
      break;
    case "div":
      result = num1/num2;
      res.send(result);
      break;
    default:
      return res.status(400).json({error: "undefined !",});
  }
  
  next();
};  
  export {calculate}