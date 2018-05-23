document.addEventListener("DOMContentLoaded", () =>{

  const model = {
    getBooks: () => {
      return [{
        name: "Anna Karenina",
        author: "Leo Tolstoy",
        image: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg",
        year: 1877
      },
      {
        name: "Madame Bovary",
        author: "Gustave Flaubert",
        image: "http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg",
        year: 1856
      },
      {
        name: "War and Peace",
        author: "Leo Tolstoy",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Fpt-rqfbL._SL160_.jpg",
        year: 1869
      },
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://images-na.ssl-images-amazon.com/images/I/5154xUzeb-L._SL160_.jpg",
        year: 1925
      },
      {
        name: "Lolita",
        author: "Vladimir Nabokov",
        image: "https://images-na.ssl-images-amazon.com/images/I/41s2G6WxLvL._SL160_.jpg",
        year: 1955
      },
      ]
    }
  }

  const octopus = {
    init: () => {
      view.render();
    },
    getBooks: () => {
      return model.getBooks()
    }
  }

  const view = {
    render: () => {
      let htmlString = ""
      
      for (const book of octopus.getBooks()) {
        htmlString += `<div class='book'><img src='${book.image}'><ul><li>Title: ${book.name}</li><li>Author: ${book.author}</li><li>Year Published: ${book.year}</li></div>`
      }

      document.querySelector("#books").innerHTML = htmlString;

    }
  }

  octopus.init();

})
