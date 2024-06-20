const fs = require('fs');

fs.readFile('indexA.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }

    console.log('mensaje...')
});


fs.rename('index.html','main.html',(err) =>{

    if(err){
        throw(err);
    }else{
        console.log('Archivo renombrado');
    }

});


// add content to file at the end of the file


fs.appendFile('index.html','<p>Hola</p>',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Contenido agregado');
    }


});



fs.writeFile('index.html','cont 1',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Contenido agregado');
    }
});


fs.unlink('index copy.html',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Archivo eliminado');
    }
});



