function copiarTexto() {
    let textoCopiado = document.getElementById("chave");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(textoCopiado.value);
    alert ("oi eu estou copiando")
}
function capturar() {
    capturando = document.getElementById("chave").value;
    document.getElementById("valorDigitado").innerHTML = capturando;
}

let inputEncriptar = document.querySelector("#input-chave");
    buttonEncriptar = document.querySelector("#butao-code");
    buttonDesencriptar = document.querySelector("#butao-decode");
    buttonCopiar = document.querySelector("#butao-copiar");
    inputResultado = document.querySelector("#chave");



function encriptar () {
    let mensagem = inputEncriptar.value;
    let chave1 = mensagem.replaceAll("e", "enter");
        chave2 = chave1.replaceAll("i", "imes");
        chave3 = chave2.replaceAll("a", "ai");
        chave4 = chave3.replaceAll("u", "ufat");
        chave5 = chave4.replaceAll("o", "ober");

    inputResultado.value = chave5;

}

function desencriptar () {
    let mensagem = inputEncriptar.value;
    let chave1 = mensagem.replaceAll("enter", "e");
        chave2 = chave1.replaceAll("imes", "i");
        chave3 = chave2.replaceAll("ai", "a");
        chave4 = chave3.replaceAll("ufat", "u");
        chave5 = chave4.replaceAll("ober", "o");

    inputResultado.value = chave5;
}

function copiarTexto(){
    var resultado = inputResultado.value;
    navigator.clipboard.writeText(resultado);
}

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;

const ulQuadros = document.querySelector("ul.quadros");

for (let i = 0; i < 11; i++ ) {

    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;
 
    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);


    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}`;
    
    ulQuadros.appendChild(li);

}