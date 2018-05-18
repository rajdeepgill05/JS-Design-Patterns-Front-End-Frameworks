
// Starting here, is my data.

// This class allows me to create a bunch of cat objects
// that have a name, and Image URL and clicks that are set
// to 0.
class Cat {
  constructor(name, imageUrl) {
    this.name = name
    this.imageUrl = imageUrl
    this.clicks = 0
  }
}

// This is actually my data. These are my cats. Each cat is a new Cat object
// that contains everything it needs to know about itself - it's name,
// it Image URL and it's count. If I wanted to add more cats, I just need to add
// them here.
const cats = [
  new Cat("Boots", "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2013/05/robocat.jpg?itok=qmMQWPce"),
  new Cat("Button", "http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"),
  new Cat("Bad Kitty", "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"),
  new Cat("Burton", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg"),
  new Cat("Bixby", "https://metrouk2.files.wordpress.com/2018/03/pallas-s-cat-moving-stealthily-through-woodland1-e1520164014558.jpg?w=620&h=416&crop=1"),
]

// THis is where my data ends

// This function will find all the cat images and hide them. It's always the 
// same 3 lines of code being executed, so I thought I would move it into a function
// and make it a little cleaner.
const hideAllKittys = () => {
  const kittyCats = document.getElementsByClassName('cat');
  for(const kitty of kittyCats) {
    kitty.classList.remove('show')
  }
}

// The code below will only execute once the DOM content has loaded.
document.addEventListener("DOMContentLoaded", () => {

  // This will get div with id 'names from the HTML document, this is the element
  // I will be putting all my cat names in.
  const nameElement = document.querySelector('#names')

  // Now, let's iterate through all the cat objects and use the info 
  // maintained inside each obect to create new HTML.

  for(const cat of cats) {

    ///////////
    // This block of code focuses solely on building the cat names
    // at the top of the page
    //
    // Create a new HTML div element out of the cat.
    const catNameElement = document.createElement('div')
    // Adds the class 'catName' to the previously created element
    catNameElement.classList.add("catName")
    // Injects the actual name of the cat from the object into this 
    // new HTML element.
    catNameElement.innerHTML = `<div class="name">${cat.name}</div>`
    // And finally appends the new div element to the element I retrieved earlier
    nameElement.appendChild(catNameElement);
    //
    /////////////


    ///////////
    // This block of code focuses on building the cat images  
    //
    // Creates a new cat element
    const catElement = document.createElement('div')
    catElement.classList.add("cat")
    // creates the actual cat image block div
    catElement.innerHTML = `
    <div class="catNameHead">${cat.name}</div>
    <div class="totalClicks">Total Clicks:
      <span class="clickAmount">${cat.clicks}</span>
    </div>
    <img src="${cat.imageUrl}" alt="" class="catImage">`
    
    // Finally, append the element to the body
    document.body.appendChild(catElement);
    //
    ////////////
    catNameElement.addEventListener("click", function(){
      hideAllKittys();
      catElement.classList.toggle('show'); 
    });

    const catImage = catElement.querySelector('.catImage')

    catImage.addEventListener('click', function() {
      cat.clicks++
      catElement.querySelector(".clickAmount").textContent = cat.clicks
    })

  }
});
