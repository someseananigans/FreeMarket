

const axios = window.axios

// page load
const getMyListings = () => {
  let token = localStorage.getItem('token')
  axios.get('/api/user/auth', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
    })
    // grabs all listings from user and posts in a card
  .then(({ data: { listings }}) => {
    console.log(listings)
    document.getElementById('items').innerHTML = ''
      listings.forEach(listing => {
        let listingElem = document.createElement('div')
        listingElem.className = 'col s9 l6'
        listingElem.innerHTML = `
           <div class="row">
            <div class="col s12 m7">
              <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
                <div class="card-image">
                <img src="${listing.image}" height="175px" width="auto">
                </div>
                <span class="card-title">${listing.title}</span>
              </div>
            </div>
          </div>
          <a class="waves-effect waves-light btn modal-trigger editPost yellow darken-3" data-id=${listing.id}  href="#modal1">Edit Post</a>
          <br>
          <br>
          <a class="waves-effect waves-light btn deletePost yellow darken-3" data-id=${listing.id} href="#">Delete Post</a>
          </div>
          </div>
        `
      document.getElementById('items').append(listingElem)
      })
  })
  .catch(err => console.log(err))
}

// sign Out
document.getElementById('signOut').addEventListener('click', event => {
  localStorage.removeItem('token')
  window.location = '/login.html'
})

// go to edit profile page
document.getElementById('editMyProfile').addEventListener('click', event => {
  console.log('ping')
  window.location = '/editProfile.html'
})
// go to create a post page
document.getElementById('createListing').addEventListener('click', event => {
  console.log('ping')
  window.location = '/createPost.html'
})
// go to my profile page
document.getElementById('myListings').addEventListener('click', event => {
  console.log('ping')
  window.location = '/profile.html'
})

// global event listener
document.addEventListener('click', event => {
  // edit post event listener
  if (event.target.classList.contains('editPost')) {
    const id = event.target.dataset.id
    console.log(id)
    axios.get(`/api/listings/id/${id}`)
      .then(({ data: listing }) => {
        document.getElementById('uTitle').value = listing.title
        document.getElementById('uDescription').value = listing.description
        document.getElementById('saveUpdate').dataset.id = id
      })
      .catch(err => console.log(err))
  }
  // Save item update modal
  if (event.target.id === 'saveUpdate') {
    let token = localStorage.getItem('token')
    const id = event.target.dataset.id
    console.log(id)
    axios.put(`/api/listings/${id}`, {
      title: document.getElementById('uTitle').value,
      description: document.getElementById('uDescription').value
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(() => {
        getMyListings()
        console.log('item updated')
      })
        .catch(err => console.log(err))
    }
  

  // delete post event listener
  if (event.target.classList.contains('deletePost')) {
    let token = localStorage.getItem('token')
    const id = event.target.dataset.id
    console.log(id)
    axios.delete(`api/listings/${id}`, {
      headers: {
      "Authorization": `Bearer ${token}`
      }
    })
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
    }
  if (event.target.classList.contains('saveUpdate')) {
    const id = event.target.dataset.id
    console.log(id)
  }
})

getMyListings()


