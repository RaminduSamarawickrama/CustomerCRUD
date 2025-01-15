import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd, CustomerDelete, CustomerUpdate, getAllCustomers} from "../database/prisma-data-store";

const router = express.Router();

router.post("/add", async(req, res) => {
    const customer: Customer= req.body;
    try{
        const addedCustomer = await CustomerAdd(customer);
        res.send('Customer Added')
    }catch(err){
        console.log("error adding customer", err);
        res.status(400).send("error adding customer");
    }
})

router.delete("/delete/:id", async (req, res) => {
    const id: number  =+ req.params.id;
    try{
        await CustomerDelete(id);
        res.send('Customer Deleted');
    }catch(err){
        console.log("error deleting customer", err);
    }
})


router.put("/update/:id",async (req, res) => {
    const id:number =+ req.params.id;
    const customer : Customer = req.body;

    try{
        await CustomerUpdate(id, customer);
        res.send('Customer Updated');
    }catch(err){
        console.log("error updating customer", err);
    }
})

router.get("/view", async (req, res) => {
    try{
       const customers=  await getAllCustomers();
       res.json(customers);
    }catch(err){
        console.log("error getting customers", err);
    }
})
export default router;