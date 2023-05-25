var btn = document.getElementById("hola");
btn.onclick = function doit(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var menor;
    var divs = "los divisores comunes son ";
    if(x>y){
        menor=y;
    }else{
        menor=x;
    }
    for(let i = 2; i<menor/2; i++){
        if(x%i == 0 && y%i ==0){
            divs+=i+" ";
        }
    }
    alert(divs);
}

//logica -> coger boton por id, asignarle funcion, recuperar ambos numeros por id y sus valores parseados para que se consideren enteros,
// asignamos cual es el menor para tomarlo de partida y un bucle con su lógica de módulos = 0 para detectar cuales serian los comunes.