import express, {Request, Response} from 'express';
const app = express();

app.use('/div', (req : Request, res: Response) => {
const { number, divider} = req.query;
if(!number){
    res.status(404).send('la valeur de nombre à diviser ');   
}
if(!divider || Number(divider) <= 0){
    res.status(200).send('la valeur de divideur est invalide ');
}else{
const rest = Number(number) / Number(divider);
res.status(200).send('la division de ' +number+' par ' +divider+ ' égale à ' +rest);}
});

app.listen(3000, () => {
    console.log('server listening on 3000');
});