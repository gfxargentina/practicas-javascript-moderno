//intersection observer es una api nativa de javascript
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("El elemento es visible");
    }
  });

  observer.observe(document.querySelector(".premium"));
});
