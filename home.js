
const createShow = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        imageURL: imageURL.value
    }

    createShow(bodyObj)

    address.value = ''
    imageURL.value = ''
}


function createShowCard(show) {
    const showCard = document.createElement('div')
    showCard.classList.add('show-card')

    showCard.innerHTML = `<img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
    <p class="address">${show.name}</p>
   
    <button onclick="deleteshow(${show.id})">delete</button>
    `


    showContainer.appendChild(showCard)
}

function displayShows(arr) {
    showContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createShowCard(arr[i])
    }
}