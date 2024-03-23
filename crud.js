const db = require('./database');
//create
const createItem= (name, description, callback)=>{
    const sql= `INSERT INTO items (name, description) VALUES (?,?)`
    db.run(sql,[name,description],function(err){
        callback(err, {id: this.lastID})
    })
}
const readCategory= (callback)=>{
    const sql= `SELECT * FROM category`;
    db.all(sql,[],callback)
}
const readSubCategory= (callback)=>{
    const sql= `SELECT * FROM sub_category`;
    db.all(sql,[],callback)
}
const readDua= (callback)=>{
    const sql= `SELECT * FROM dua`;
    db.all(sql,[],callback)
}
module.exports= {createItem, readCategory,readSubCategory,readDua}