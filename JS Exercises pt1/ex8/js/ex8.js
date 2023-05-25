var btn = document.getElementById("hola");
btn.onclick = function finder(){
    var n = document.getElementById("nombre").value;
    var contar = n.match(/[aeiou]/g).length;
    alert(contar)
}
//logica -> coger boton por id, asignarle funcion y recuperar el valor del string designado al cual le hacemos un match con la expresion regular de las vocales
// para despues recuperar la variable asignada a esta y mostrar por pantalla cuantas veces con length