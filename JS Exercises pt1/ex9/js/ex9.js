var btn = document.getElementById("hola");
btn.onclick = function finder(){
    var n = document.getElementById("nombre").value;
    var vocales = n.match(/[aeiou]/g);
    alert(vocales);
}

//logica -> coger boton por id, asignarle funcion y comprobar en una variable distinta los matchs que existen entre la expresion regular de vocales
// y la cadena original, para despues mostrarlas por pantalla/alerta.