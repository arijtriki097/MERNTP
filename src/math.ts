import express, {Request,Response,NextFunction} from "express";
  const app = express();
  
  const validate = (req: Request, res: Response, next: NextFunction) => {
    
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
  