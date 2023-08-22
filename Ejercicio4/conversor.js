// Función para convertir un número decimal a binario
const convertirDecimalABinario = (decimal) =>
    decimal.toString(2);
// Función para convertir un número decimal a octal
const convertirDecimalAOctal = (decimal) =>
    decimal.toString(8);
// Función para convertir un número decimal a hexadecimal
const convertirDecimalAHexadecimal = (decimal) =>
    decimal.toString(16).toUpperCase();
// Función para obtener el valor ingresado por el usuario y realizar las conversiones
const convertir = () => {
    const decimal =
        parseInt(document.getElementById("decimalInput").value);
    document.getElementById("binarioResultado").textContent =
        `Binario: ${convertirDecimalABinario(decimal)}`;
    document.getElementById("octalResultado").textContent =
        `Octal: ${convertirDecimalAOctal(decimal)}`;

    document.getElementById("hexadecimalResultado").textContent
        = `Hexadecimal: ${convertirDecimalAHexadecimal(decimal)}`;
};
