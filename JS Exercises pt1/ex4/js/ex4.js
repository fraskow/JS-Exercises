var btn = document.getElementById("hola");
btn.onclick = function sumar(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var sum = x+y;
    alert("La suma de "+x+" y "+y+" es "+sum);
}

//logica -> coger boton por id, asignarle funcion y recuperar por id los valores de los numeros introducidos para despues asignarlos a otra variable que los sume.