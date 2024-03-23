const express = require('express');
const {createItem, readCategory, readSubCategory, readDua}= require('./crud')
const cors = require('cors');

const app= express()
app.use(cors());

const bodyParser = require('body-parser');

// Parse JSON-encoded bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/category', (req,res)=>{
    readCategory((err, rows)=>{
        if (err) {
        res.status(500).send(err.message)
        }
        else{
            res.status(200).json(rows)
        }
    })
    
})

app.get('/SubCategory', (req,res)=>{
    readSubCategory((err, rows)=>{
        if (err) {
        res.status(500).send(err.message)
        }
        else{
            res.status(200).json(rows)
        }
    })
    
})
//find data according to the params
app.get('/SubCategory/:cat_id', (req, res) => {
    const { cat_id } = req.params; // Extract cat_id from request parameters
    const catId = parseInt(cat_id);
    readSubCategory((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // Filter rows based on cat_id
            const filteredRows = rows.filter(row => row.cat_id === catId);
            res.status(200).json(filteredRows);
        }
    });
});

app.get('/dua/:cat_id', (req,res)=>{
    const { cat_id } = req.params; // Extract cat_id from request parameters
    const catId = parseInt(cat_id);
    readDua((err, rows)=>{
        if (err) {
        res.status(500).send(err.message)
        }
        else{
            // res.status(200).json(rows)
            // Filter rows based on cat_id
            const filteredRows = rows.filter(row => row.cat_id === catId);
            res.status(200).json(filteredRows);
        }
    })
    
})
app.post('/items',(req,res)=>{
    const {name, description}= req.body
    createItem(name,description,(err,data)=>{
        if(err){
            res.status(500).send(err.message)
        }
        else{
            res.status(201).send(`item is added ID: ${data.id}`)
        }
    })
})
app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})