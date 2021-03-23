

const axios = window.axios

// page load
const getMyListings = () => {
  let token = localStorage.getItem('token')
  axios.get('/api/user/auth', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
    })
  .then(({ data: { listings }}) => {
    console.log(listings)
    document.getElementById('items').innerHTML = ''
      listings.forEach(listing => {
        console.log(listing)
        let listingElem = document.createElement('div')
        listingElem.className = 'col s9 l6'
        listingElem.innerHTML = `
          <div class="row">
            <div class="input-field col s12">
          <p>${listing.title}</p>
          <p>${listing.description}</p>
          <img src= "${listing.image}">
          <a class="waves-effect waves-light btn modal-trigger editPost" data-id=${listing.id}  href="#modal1">Edit Post</a>
          <a class="waves-effect waves-light btn deletePost" data-id=${listing.id} href="#">Delete Post</a>
          </div>
          </div>
        `
      document.getElementById('items').append(listingElem)


      })
  })
  .catch(err => console.log(err))
}

// document.getElementById('saveUpdate').addEventListener('click', event => {
//   const id = event.target.dataset.id
//   axios.put(`/api/listings/${id}`, {
//     title: document.getElementById('uTitle').value,
//     description: document.getElementById('uDescription').value,
//     img: document.getElementById('uImg').value
//   })
//     .then(() => {
//       getMyListings()
//     })
//     .catch(err => console.log(err))
// })
// sign Out
document.getElementById('signOut').addEventListener('click', event => {
  localStorage.removeItem('token')
  window.location = '/login.html'
})

// creates form to edit profile name and username
document.getElementById('editProfile').addEventListener('click', event => {
  document.getElementById('items').innerHTML = ''
  let getItemInfo = document.createElement('div')
  getItemInfo.className =
    getItemInfo.innerHTML = `
  
 <form class="col s12" id="getinfo">
    <div class="row">
      <div class="input-field col s12">
        <input id="name" type="text" class="validate">
        <label for="title">Name</label>
      </div>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="email" class="materialize-textarea"></textarea>
            <label for="textarea1">Email</label>
          </div>
        </div>
        </form>
      </div> 
    </div>
  </form>
 <button class="btn" type="submit" name="action" id="updateProfile">Save
 <i class="material-icons right">send</i>
 </button>
 
 `
  document.getElementById('items').append(getItemInfo)

  document.getElementById('updateProfile').addEventListener('click', event => {

    axios.put('/api/user', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      phone: document.getElementById('phone').value
    })
      .then(() => {
        window.location = '/profile.html'
      })
      .catch(err => console.log(err))
  })
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
  // Save update modal
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


