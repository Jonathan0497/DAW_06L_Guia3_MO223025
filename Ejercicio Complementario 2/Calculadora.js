let valorActual = "";
let valorAnterior = "";
let operacion = null;

const inputValor = document.getElementById("inputValor");

document.querySelectorAll(".botones button").forEach(button => {
    button.addEventListener("click", function(e) {
        if (e.target.dataset.valor) {
            valorActual += e.target.dataset.valor;
            inputValor.value = valorActual;
        } else if (e.target.dataset.op) {
            handleOperation(e.target.dataset.op);
        }
    });
});

document.getElementById("reinicio").addEventListener('click', function() {
    document.getElementById("inputValor").value = ""
});

function handleOperation(op) {
    if (operacion && valorAnterior) {
        valorActual = realizarOperacion(operacion, valorAnterior, valorActual);
        inputValor.value = valorActual;
        valorAnterior = "";
    } else {
        valorAnterior = valorActual;
        valorActual = "";
    }

    switch (op) {
        case "igual":
            operacion = null;
            break;
        default:
            operacion = op;
    }
}

function realizarOperacion(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (op) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return a / b;
        case "residuo":
            return a % b;
        case "inversa":
            return 1 / a;
        case "cuadrado":
            return a ** 2;
        case "raiz":
            return Math.sqrt(a);
        default:
            return b;
    }
}
