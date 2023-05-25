var btn = document.getElementById("hola");
btn.onclick = function mayor(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    if(x>y){
        alert("el mayor es "+x);
    }else{
        alert("el mayor es "+y);
    }
}

//logica -> coger boton por id asignarle funcion, recuperar por id los valores de los numeros introducidos y decidir cual es mayor por lógica si/sino.