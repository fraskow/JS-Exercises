var btn = document.getElementById("hola");
btn.onclick = function doit(){
    var x = parseInt(document.getElementById("n1").value);
    var divs = "los divisores son ";
    for(let i = x; i>= 0; i--){
        if(x%i == 0){
            divs+=i+" ";
        }
    }
    /*for(let i = 0; i>= x; i++){
        if(x%i == 0){
            divs+=i+" ";
        }
    }*/
    alert(divs);
}

//logica -> coger boton por id, asignarle funcion, recuperar el nº por id con su valor parseado para que se considere entero
// una variable string la cual aderimos los nº segun la lógica tras recorrer un bucle descendente con su condicional de si es modulo del recorrido = 0.