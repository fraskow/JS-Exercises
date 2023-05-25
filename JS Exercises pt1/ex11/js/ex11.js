var btn = document.getElementById("hola");
btn.onclick = function doit(){
    var x = parseInt(document.getElementById("n1").value);
    if(x%5 == 0){
        alert("es divisible por 5");
    }else{
        alert("no lo es")
    }
}

//logica -> coger boton por id, asignarle funcion y recuperar el nº por id con su valor parseado para que se considere entero
// y comprobar mediante módulo de 5 si el nº es divisible completamente por 5.