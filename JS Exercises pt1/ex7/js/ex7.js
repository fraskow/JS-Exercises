var btn = document.getElementById("hola");
btn.onclick = function finder(){
    var n = document.getElementById("nombre").value;
    var contar = n.match(/a/g).length;
    alert(contar)
}

//logica -> coger boton por id, asignarle funcion la cual recupera el valor del string por id y en una variable hacerle .match y una expresión regular
// para después mostrar por pantalla las veces que lo hace con length.