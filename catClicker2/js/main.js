document.addEventListener("DOMContentLoaded", () => {
  const cat1 = document.querySelector("#cat1")
  const cat2 = document.querySelector("#cat2")
  
  const catPicture1 = cat1.querySelector('.catImage');
  const catPicture2 = cat2.querySelector('.catImage');
  
  cat1.querySelector(".name").textContent = "Freddie";
  cat2.querySelector(".name").textContent = "Francine";

  catPicture1.addEventListener("click", () => {
    cat1.querySelector(".clickAmount").textContent++;
  })

  catPicture2.addEventListener("click", () => {
    cat2.querySelector(".clickAmount").textContent++;
  })

})

