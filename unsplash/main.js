const yourAPIKeyHere = "d64ebeae059253f850afa70d5c784c2d05bb1dedcd1429e73322e65fa924d282"

const nytAPIKey = "5cd0c549cf1343bd8c6999d1d38070da"

/// Your Unsplash code
const options = {
  headers: {
    Authorization: `Client-ID ${yourAPIKeyHere}`
}}

const outputPhotos = (photos) => {
  const photoElement = document.querySelector("#photos")

  for (const photo of photos.results) {
    const image = document.createElement("IMG")
    image.setAttribute('src', photo.urls.small)

    photoElement.appendChild(image);
  }
}

fetch(`https://api.unsplash.com/search/photos?query=parrots`, options)
  .then(resp => resp.json())
  .then(outputPhotos)


const outputArticles = (articles) => {
  const articleElement = document.querySelector("#articles")
  htmlStr = "";
  for (const article of articles.response.docs) {
    htmlStr += `<a href=${article.web_url}>${article.headline.main}</a>`
    htmlStr += `<div class="snippet">${article.snippet}</div>`
  }

  articleElement.innerHTML = htmlStr;
}

fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=parrots&api-key=${nytAPIKey}`)
  .then(response => response.json())
  .then(outputArticles)

const form = document.querySelector('form') 
form.button.addEventListener('click', () => {
  const title = form.title.value
  const userid = form.userid.value
  const body = form.body.value

  // POST adds a random id to the object sent
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json()).then(json => console.log(json))
})














//   .then(response => response.json())
//   .then(json => console.log(json))


// // Your NYT time code


