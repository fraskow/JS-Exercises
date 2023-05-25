var btn = document.getElementById("hola");
btn.onclick = function doit(){
    var x = parseInt(document.getElementById("n1").value);
    
    var primo = true;
    for(var i=2; i<x/2; i++){
        if(x%i == 0){
            primo=false;
        }
    }
    if(primo){
        alert("el numero es primo");
    }else{
        alert("el numero no es primo");
    }
}

//logica -> coger boton por id, asignarle funcion, recuperar por id el nº y parsearlo para que se considere entero
// variable tipo booleana como flag para despues hacer lógica, bucle para recuperar nºs y si son siempre de resto 0 no serán primos