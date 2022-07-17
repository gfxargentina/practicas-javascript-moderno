document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("ejecutar reproducir el video");
  } else {
    console.log("Pausar el video");
  }
});
