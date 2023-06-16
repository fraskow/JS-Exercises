class DNICalculator {
    constructor(numero) {
        this.numero = numero;
    }

    calcularLetra() {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const indice = this.numero % 23;
        const letra = letras.charAt(indice);

        return letra;
    }

}

function doit() {
    let flag = true;

    do {
        const numero = prompt("ingrese el numero del DNI sin la letra");
        if (numero.length !== 8) {
            alert("numero no correcto");
        } else {
            parseInt(numero);
            const dnicalc = new DNICalculator(numero);
            const letra = dnicalc.calcularLetra();
            console.log(letra);
            flag = false;
        }
    } while (flag)

}

doit();
