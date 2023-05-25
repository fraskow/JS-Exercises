var btn = document.getElementById("hola");
btn.onclick = function finder(){
    var n = document.getElementById("nombre").value;
    var a = n.match(/a/g).length;
    var e = n.match(/e/g).length;
    var i = n.match(/i/g).length;
    var o = n.match(/o/g).length;
    var u = n.match(/u/g).length;
    
    alert(" a "+a+" veces"+" e "+e+" veces"+" i "+i+" veces"+" o "+o+" veces"+" u "+u+" veces");
}

//logica -> coger boton por id, asignarle funcion y recuperar el string por id el cual lo almacenamos en una variable
// después hacemos un match con cada vocal por separado para contarlas por separado con su expresión regular y las mostramos por alerta.