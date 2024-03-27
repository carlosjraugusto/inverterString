function inverterString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

function inverterEExibir() {
    const stringOriginal = document.getElementById('originalString').value;
    const stringInvertida = inverterString(stringOriginal);
    document.getElementById('invertedString').textContent = "String invertida: " + stringInvertida;
}