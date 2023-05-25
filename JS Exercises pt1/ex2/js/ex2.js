var btn = document.getElementById("hola");
btn.onclick = function suma(){
    let resultado = 3+5;
    document.write("<p>La suma de 3+5 es = "+resultado+"</p>");
}
//logica -> coger boton por id y asignarle la funcion que sume 3 y 5 y muestre en un párrafo html la variable resultado.