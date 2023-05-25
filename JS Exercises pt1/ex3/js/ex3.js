var btn = document.getElementById("hola");
btn.onclick = function saludar(){
    var n = document.getElementById("nombre").value;
    document.write("<p>Hola "+n+"</p>")
}

// logica -> coger boton por id y asignarle la funcion que coja el valor del nombre que introducimos en el campo de texto y mostrarlo por html en un párrafo