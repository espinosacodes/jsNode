const fs = require('fs');

fs.readFileSync('index.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }

    console.log('mensaje...')
});


fs.renameSync('index.html','main.html',(err) =>{

    if(err){
        throw(err);
    }else{
        console.log('Archivo renombrado');
    }

});


//add content to file at the end of the file


fs.appendFileSync('index.html','<p>Hola</p>',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Contenido agregado');
    }


});



fs.writeFileSync('index.html','cont 1',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Contenido agregado');
    }
});


fs.unlinkSync('main.html',(err) =>{
    if(err){
        throw(err);
    }else{
        console.log('Archivo eliminado');
    }
});



