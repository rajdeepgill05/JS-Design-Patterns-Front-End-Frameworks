const model = {
    cats: () => {
        return [
            {
                imageUrl: "https://www.bluecross.org.uk/sites/default/files/styles/thumbnail_pet/public/pets/149194.jpg?itok=xZLl3maM",
                name: "Roger",
                clicks: 0
            },
            {
                imageUrl: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg",
                name: "Bell",
                clicks: 0
            },
            {
                imageUrl: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&h=350",
                name: "Roger",
                clicks: 0
            },
            {
                imageUrl: "https://kittentoob.com/wp-content/uploads/2018/01/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                name: "Kudo",
                clicks: 0
            },
            {
                imageUrl: "https://visualhunt.com/photos/7/eye-cat-pet.jpg?s=s",
                name: "Desi",
                clicks: 0
            }
        ]
    }
}

const octopus = {
    getCats: () => {
        return model.cats()
    },

    renderCats: () => {
        view.renderCats();
    }

   
}

const view = {
    renderCats: () => {
        let htmlString = ""
        for (const cat of octopus.getCats()) {
            htmlString += `<div class="smallbox">
                <div class="cat">${cat.name}</div>
                <img class="image" src="${cat.imageUrl}" alt="cat image">
            </div>`
        }

        document.querySelector(".box").innerHTML = htmlString
    }
}

octopus.renderCats();
