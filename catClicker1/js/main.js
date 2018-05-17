document.addEventListener("DOMContentLoaded", () => {
  const catPicture = document.getElementById('catImage');
  const counterElement = document.getElementById("clickAmount");

  catPicture.addEventListener("click", () => {
    counterElement.textContent++;
  })
})

