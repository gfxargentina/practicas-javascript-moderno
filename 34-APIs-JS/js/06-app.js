const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.onstart = function () {
    salida.classList.add("mostrar");
    salida.textContent = "Escuchando...";
  };

  recognition.onspeechend = function () {
    salida.textContent = "Se dejo de grabar...";
  };

  recognition.onresult = function (e) {
    console.log(e.results[0][0]);

    const { confidence, transcript } = e.results[0][0];

    const speech = document.createElement("p");
    speech.innerHTML = `Grabacion: ${transcript}`;

    const confianza = document.createElement("p");
    confianza.innerHTML = `Confianza de lo que se grabo esta bien: ${parseInt(
      confidence * 100
    )}%`;

    salida.appendChild(speech);
    salida.appendChild(confianza);
  };
}
