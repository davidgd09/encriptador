

function encriptar(){
       
    
    var texto = document.getElementById("texto").value.toLowerCase();
    var parrafo = document.getElementById("parrafo");
    console.log(texto)

    if(texto==""){
        alert("debe escribir texto para encriptar")
    }else{
        var textoEncriptado =texto.replace(/e/img, "enter");
        var textoEncriptado =textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado =textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado =textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado =textoEncriptado.replace(/u/img, "ufat");
        console.log(textoEncriptado)
    
       // document.getElementById("textoEncriptado").innerHTML=textoEncriptado;
    
        parrafo.textContent = textoEncriptado;

        var textareaEncriptado = document.getElementById("textoEncriptado");
        textareaEncriptado.value = textoEncriptado;
    
        
        document.getElementById("copiar").style.visibility= 'visible';
        document.getElementById("image").style.display = 'none';
        document.getElementById("parrafosSalida").style.display = 'none';
    }  
        
    
}

function desencriptar(){
    
    
    var parrafo = document.getElementById("parrafo");
    var texto = document.getElementById("texto").value.toLowerCase();
    console.log(texto)

    var textoEncriptado =texto.replace(/enter/img, "e");
    var textoEncriptado =textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado =textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado =textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado =textoEncriptado.replace(/ufat/img, "u");
    console.log(textoEncriptado)

   // document.getElementById("textoEncriptado").innerHTML=textoEncriptado;

    parrafo.textContent = textoEncriptado;
    
    var textareaEncriptado = document.getElementById("textoEncriptado");
    textareaEncriptado.value = textoEncriptado;
            
    
}

function copiarTexto(){
    var textoACopiar = document.getElementById('parrafo').textContent;

    navigator.clipboard.writeText(textoACopiar)
        .then(function() {
            // Éxito al copiar
            console.log('Texto copiado al portapapeles: ' + textoACopiar);
            
        })
        .catch(function(err) {
            // Manejar errores
            console.error('Error al copiar el texto: ', err);
            alert('Error al copiar el texto: ' + err);
        });

}



