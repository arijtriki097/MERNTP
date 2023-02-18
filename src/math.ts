import express, {Request,Response,NextFunction} from "express";
  const app = express();
  
  const validate = (req: Request, res: Response, next: NextFunction) => {
    /*const {
      params: { op, a, b },
    } = req;
    var x: number = +a;
    var y: number = +b;
  
    if (
      !Number.isNaN(x) &&
      !Number.isNaN(y)
    ) {
      if (
        op === "sum" ||
        op === "sous" ||
        op === "mult" ||
        op === "div"
      )
        next();
      else {
        res.send(
          "Error: you must choose sum or sous or mult ou div"
        );
      }
    } else {
      res.send(
        "Error: a ou b not number"
      );
    }*/
var num1 = Number(req.query.num1);
var num2 = Number(req.query.num2);
const op = req.params.op;

if (op == "div" && num2 == 0) {
  return res.status(400).json({ error: "division impossible sur zero" });
}

next(); 
};
  
  const calcul = (req: Request, res: Response, next: NextFunction) => {
    var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;
  var result ;

  switch (op) {
    case "add":
      result = num1 + num2;
      res.status(200).send();
      break;
    case "sous":
      result = num1 - num2;
      res.status(200).send();
      break;
    case "mult":
      result = num1 * num2;
      res.status(200).send();
      break;
    case "div":
      result = num1/num2;
      res.status(200).send();
      break;
    default:
      return res
        .status(400)
        .json({
          error: "opertaeur invalide",
        });
  }
  res.status(200).json({ result });
  
  next();
};  
  export { validate, calcul}
  