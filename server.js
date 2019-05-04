const express=require('express');

const app= express();
const hbs=require('hbs');

const port=process.env.port || 3010

require('./hbs/helpers');

app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/Views/Partials');

app.set('view engine','hbs');


app.get('/',((req,res)=>{
    res.render('home',{
        nombre:'Javier',
        anio:new Date().getFullYear()
    });
}));


app.get('/about',((req,res)=>{
    res.render('about',{        
        anio:new Date().getFullYear()
    });
}));

app.listen(port,()=>{
    console.log(`Escuchando en el puerto: ${port}`);
});