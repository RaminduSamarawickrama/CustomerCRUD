import express from 'express';
import customerRoutes from "./routes/customer-routes";

const app = express();

app.use(express.json());

app.use('/customer',customerRoutes);

app.listen(3000, (err=>{
    console.log("Server running on port 3000");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
