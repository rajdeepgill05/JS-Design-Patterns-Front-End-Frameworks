class Cat {
  constructor(name, imageUrl) {
    this.name = name
    this.imageUrl = imageUrl
    this.clicks = 0
  }
}

let cats = [
  new Cat("Boots", "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2013/05/robocat.jpg?itok=qmMQWPce"),
  new Cat("Button", "http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"),
  new Cat("Bad Kitty", "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"),
  new Cat("Burton", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg"),
  new Cat("Bixby", "https://metrouk2.files.wordpress.com/2018/03/pallas-s-cat-moving-stealthily-through-woodland1-e1520164014558.jpg?w=620&h=416&crop=1"),
]

const hideAllKittys = () => {
  const kittyCats = document.getElementsByClassName('cat');
  for(const kitty of kittyCats) {
    kitty.classList.remove('show')
  }
}

document.addEventListener("DOMContentLoaded", () => {
  nameElement = document.querySelector('#names')

  for(const cat of cats) {
    const catNameElement = document.createElement('div')
    catNameElement.classList.add("catName")
    catNameElement.innerHTML = `<div class="name">${cat.name}</div>`
    nameElement.appendChild(catNameElement);

    const catElement = document.createElement('div')
    catElement.classList.add("cat")
    catElement.innerHTML = `
    <div class="catNameHead">${cat.name}</div>
    <div class="totalClicks">Total Clicks:
      <span class="clickAmount">${cat.clicks}</span>
    </div>
    <img src="${cat.imageUrl}" alt="" class="catImage">`
  
    document.body.appendChild(catElement);
    catImage = catElement.querySelector('.catImage')

    catNameElement.addEventListener("click", function(){
      hideAllKittys();
      catElement.classList.toggle('show');
      cat.clicks++
      catElement.querySelector(".clickAmount").textContent = cat.clicks
    });
  }
});





