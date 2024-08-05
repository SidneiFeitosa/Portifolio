const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// 'A letra "e" é convertida para "enter"'
// 'A letra "i" é convertida para "imes"'
// 'A letra "a" é convertida para "ai"'
// 'A letra "o" é convertida para "ober"'
// 'A letra "u" é convertida para "ufat"'

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [ ["e" , "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "obter"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.tolowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceall(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptada = desencriptar(textArea.value);
    mensagem.value = textoDesencriptador;
    textArea.value = " ";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [ ["e" , "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "obter"] , ["u" , "ufat"]];
  stringDesencriptada = stringDesencriptada.tolowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])) {
          stringDesencriptada = stringDesencriptada.replaceall(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
  }
 
  return stringDesencriptada;

}
