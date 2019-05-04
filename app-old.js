const http=require('http');


http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    let salida={
        nombre:'Javier',
        Edad:27,
        url:req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3010);

console.log('Escuchando en el puerto 3010');