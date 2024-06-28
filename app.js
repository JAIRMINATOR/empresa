console
const mongoose =require('mongoose');//instancia la libreria 
const url_bd ='mongodb://localhost:27017/empresa3';//url de la base 

mongoose.connect(url_bd)//conectar la base
.then (()=> { //promesa
    console.log("si jalo")//el console muestra si jala o no
})
.catch ((err) => { //atrapa y muestra que no jalo
    console.log("no jalo")
})
//esquema pa la BD 
const esquema_empresa = new mongoose.Schema({name:{type:String},appa:{type:String},puesto:{type:String},num_empleado:{type:Number},sueldo:{type:Number},años_trabajo:{type:Number},telefono:{type:Number}})
//crear la collection 
const modelo_empresa =new mongoose.model('libros',esquema_empresa)
//crear datos 
modelo_empresa.create({name:"juan",appa :"perez",puesto:"Gerente",num_empleado:"192094",sueldo:"4000",años_trabajo:"2",telefono:"4491992343"})
