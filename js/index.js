
const form = document.querySelector("#github-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const search = document.querySelector("#search").value

    const userName = search.split(" ").join("")

fetch(`https://api.github.com/users/${userName}`, {
    headers: {
    "Accept": "application/vnd.github.v3+json"
    }})

        .then(result => result.json())
        .then(data => {
    console.log(data)

    const userList = document.querySelector("#user-list");
    userList.innerHTML = `<a href=${data.html_url}>Name: ${data.name}</a>
    <a target=_blank href=https://www.github.com/${userName}> <img src=${data.avatar_url}/></a>`

    const reposList = document.querySelector("#repos-list");
    reposList.innerHTML = `<a target=_blank href=https://www.github.com/${userName}> ${data.repos_url},
    ${data.public_repos}`

})

form.reset()
})













//     fetch(`https://api.github.com/users/${userName}`, {
//         headers: {
//         "Accept": "application/vnd.github.v3+json"
//         }})

//             .then(result => result.json())
//             .then(data => {
//         console.log(data)
    
//         const userList = document.querySelector("#user-list");
//         userList.innerHTML = `
//             <a href=${data.html_url}>Name: ${data.name}</a>
//         <a target="_blank"> <img src ="${data.avatar_url}"/></a>`

//         const reposList = document.querySelector("#repos-list");
//         reposList.innerHTML = `${data.repos_url}, ${data.public_repos}`
 
//     })
  
//     form.reset()
// })




