function encriptar() {
    var text = document.getElementById("texto").value.toLowerCase();     
    if(text!=""){    
      
      var encryptedText = text.replace(/e/igm, "enter");
      var encryptedText = encryptedText.replace(/o/igm, "ober");
      var encryptedText = encryptedText.replace(/i/igm, "imes");
      var encryptedText = encryptedText.replace(/a/igm, "ai");
      var encryptedText = encryptedText.replace(/u/igm, "ufat");
  
      document.getElementById("muneco").style.display = "none";
      document.getElementById("h2").style.display = "none";
      document.getElementById("mensaje").innerHTML = encryptedText;    
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
      document.getElementById("texto").value = "";
    }
  }
  
  function desencriptar() {
    var text = document.getElementById("texto").value.toLowerCase();
    if(text!=""){
      var encryptedText = text.replace(/enter/igm, "e");
      var encryptedText = encryptedText.replace(/ober/igm, "o");
      var encryptedText = encryptedText.replace(/imes/igm, "i");
      var encryptedText = encryptedText.replace(/ai/igm, "a");
      var encryptedText = encryptedText.replace(/ufat/igm, "u");
  
      document.getElementById("muneco").style.display = "none";
      document.getElementById("h2").style.display = "none";
      document.getElementById("mensaje").innerHTML = encryptedText;   
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
      document.getElementById("texto").value = "";
    }
    
  
  }
  
  function copiar() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("mensaje").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("El texto ha sido copiado en su portapapeles");
    window.location.reload()
  }
  