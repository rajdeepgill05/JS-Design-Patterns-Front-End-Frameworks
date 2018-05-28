document.addEventListener("DOMContentLoaded", () => {
  class Cat {
    constructor(name, imageUrl) {
      this.name = name
      this.imageUrl = imageUrl
      this.clicks = 0
    }
  }

  const model = {
    updateClicks(name) {
      const cat = model.find(name)
      cat.clicks++;
    },

    find: (name) => {
      return model.cats.find( element => element.name === name)
    },

    cats: [
      new Cat("Boots", "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2013/05/robocat.jpg?itok=qmMQWPce"),
      new Cat("Button", "http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"),
      new Cat("Bad Kitty", "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"),
      new Cat("Burton", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg"),
      new Cat("Bixby", "https://metrouk2.files.wordpress.com/2018/03/pallas-s-cat-moving-stealthily-through-woodland1-e1520164014558.jpg?w=620&h=416&crop=1"),
    ]
  } 

  const octopus = {
    init() {
      view.init();
    },

    renderCat(catName){
      view.renderCat(model.find(catName))
    },

    cats() {
      return model.cats;
    },

    updateClicks(catName) {
      const cat = model.find(catName)
      model.updateClicks(catName);
      view.renderCounter(cat);
    }

  }


  const view = {
    init: () => {
      const nameElement = document.querySelector('#names')
      let catNamesHTML = ''
      for (const cat of octopus.cats()) {
        catNamesHTML += `<div class="catName" data-cat-name="${cat.name}">
                           <div class="name">${cat.name}</div>
                         </div>`
      }
 
      nameElement.innerHTML = catNamesHTML
      
      const allCats = document.querySelectorAll('.catName')

      for (const cat of allCats) {
        cat.addEventListener("click", function (e) {
          octopus.renderCat(e.currentTarget.dataset.catName)
        });
      }
    
      document.querySelector('#currentCat').addEventListener('click', function(e){
        if(e.target.nodeName == "IMG") {
          octopus.updateClicks(e.currentTarget.querySelector(".catNameHead").textContent)
        }
      }) 
    },

    renderCat: (cat) => {
        let catString = `
        <div class="catNameHead">${cat.name}</div>
        <div class="totalClicks">Total Clicks:
          <span class="clickAmount">${cat.clicks}</span>
        </div>
        <img src="${cat.imageUrl}" alt="" class="catImage">`
      
      const currentCat = document.querySelector("#currentCat")
      currentCat.innerHTML = catString;
    },

    renderCounter(cat) {
      const totalClicks = document.querySelector(".clickAmount")
      totalClicks.innerHTML = cat.clicks
    }
  }
  octopus.init();
})

