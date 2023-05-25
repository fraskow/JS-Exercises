var btn = document.getElementById("hola");
btn.onclick = function mayor(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = parseInt(document.getElementById("n3").value);
    var largest;
    
    if(x>y && x>z){
        largest=x;
    }else if(y>x && y>z){
        largest=y;
    }else{
        largest=z;
    }
    alert("el mayor es "+largest);

}

//logica -> coger boton por id, asignarle funcion, recuperar el valor de los 3 numeros por id, parsearlos a enteros para que sean considerados números,
// después aplicar lógica de si/sitambien/sino para ver cual es el más largo y asignarlo a una variable distinta por reutilizar un poco de code.