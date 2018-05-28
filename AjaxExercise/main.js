fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {    
    let htmlString = ""

    for(const user of users) {
      htmlString += `<div class="user">
        ${user.name}  
      </div>
      `
    }

    document.querySelector(".users").innerHTML = htmlString;

    const userElements = document.getElementsByClassName('user')

    Array.from(userElements).forEach((user, index) => {
      user.addEventListener('click', () => { 
        document.querySelector('.selectedUser').innerHTML = `${users[index].username}, ${users[index].email}`
      })
    })
  })