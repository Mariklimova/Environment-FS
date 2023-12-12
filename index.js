const express = require('express');
const { getAllData, createData, deleteData,getDataById, updateData } = require('./service.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const allData = getAllData()
        res.status(200).send(allData);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})
app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const dataById = getDataById(id)
        res.status(200).send(dataById);
        
    } catch (error) {
        res.status(400).send(error.message); 
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createData(label, category, priority)
        res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const del = deleteData(id)
        res.status(200).send(del);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.put('/:id',(req,res)=>{
    try {
        const{id} = req.params;
        const {label, category, priority } = req.body;
        const data = updateData(id,label, category, priority);
        res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})


app.listen(5000, () => {
    console.log('server is run');
})