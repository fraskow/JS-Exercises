var btn = document.getElementById("hola");
btn.onclick = function doit(){
    var x = parseInt(document.getElementById("n1").value);
    var s = "lo es por "
    if(x%2 == 0){
        s+=2+" ";
    }
    if(x%3 == 0){
        s+=3+" ";
    }
    if(x%5 == 0){
        s+=5+" ";
    }
    if(x%7 == 0){
        s+=7+" ";
    }
    alert(s);
}

//logica -> coger boton por id, asignarle funcion, recuperar el nº por id y su valor parseado para que se considere entero
// al cual le aplicamos los módulos = 0 para saber si son divisibles totalmente sin decimales y si lo es lo añadimos a un string para que nos diga cuales serían.