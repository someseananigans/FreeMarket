

const axios = window.axios

// page load
const getMyListings = () => {
  axios.get('/api/listings')
  // , {
  //   headers: {
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE2Mjc3MDQyfQ.34dN3orR0dPHnGWzZBmD5HWITCVRePmpBLioQCrvJ4U"
  //   }
  //   })
  .then(({ data: listings }) => {
    // res.json(listings)
    document.getElementById('myItems').innerHTML = ''
      listings.forEach(listing => {
        let listingElem = document.createElement('div')
        listingElem.className = 'col s9 l6'
        listingElem.innerHTML = `
          <div class="row">
            <div class="input-field col s12">
          <p>${listing.title}</p>
          <p>${listing.description}</p>
          <img src= "${listing.image}">
          <a class="waves-effect waves-light btn modal-trigger" id="editPost" href="#modal1">Edit Post</a>
          <a class="waves-effect waves-light btn modal-trigger" id="deletePost" href="#modal1">Delete Post</a>
          </div>
          </div>
        `
      document.getElementById('myItems').append(listingElem)
      })
  })
  .catch(err => console.err(err))
}
// sign Out
document.getElementById('signOut').addEventListener('click', event => {
  localStorage.removeItem('token')
  window.location = '/login.html'
})

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
      email: document.getElementById('email').value
    })
      .then(() => {
        getMyListings()
      })
      .catch(err => console.log(err))
  })
})

// Creates form to create a post
document.getElementById('create').addEventListener('click', () => {
  document.getElementById('myItems').innerHTML = ''

  let getItemInfo = document.createElement('div')
  getItemInfo.className =
    getItemInfo.innerHTML = `
  
 <form class="col s12" id="getinfo">
    <div class="row">
      <div class="input-field col s12">
        <input id="title" type="text" class="validate">
        <label for="title">Title</label>
      </div>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea"></textarea>
            <label for="textarea1">Description</label>
          </div>
        </div>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>Image</span>
              <input type="file" id="listingImg">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </form>
      </div> 
    </div>
  </form>
 <button class="btn" type="submit" name="action" id="createItem">Create
 <i class="material-icons right">send</i>
 </button>
 
 `
 
  document.getElementById('items').append(getItemInfo)


  // Creates card for created post
document.getElementById('createItem').addEventListener('click', () => {
  event.preventDefault()
  let title = document.getElementById('title').value
  let description = document.getElementById('description').value
  let newItem = document.createElement('div')
  newItem.className = 'card'
  newItem.innerHTML =
    `
    <div class="col s12 m8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${title}</span>
          <p>${description}</p>
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn modal-trigger" id="editPost" href="#modal1">Edit Post</a>
        </div>
      </div>
    </div>
  </div>
    `
  document.getElementById('myItems').append(newItem)
  document.getElementById('items').innerHTML = ''
  document.getElementById('editPost').addEventListener('click', event => {
      const title = event.target.dataset.title
      axios.get(`/api/listings/${title}`)
      .then(({ data: listing }) => {
        document.getElementById('uTitle').value = listing.title
        document.getElementById('uDescription').value = listing.description
      })
  })
  document.getElementById('saveUpdate').addEventListener('click', event => {
    const id = event.target.dataset.id 
    axios.put(`/api/listings/${id}`, {
      title: document.getElementById('uTitle').value,
      description: document.getElementById('uDescription').value,
      img: document.getElementById('uImg').value
    })
    .then(() => {
      getMyListings()
    })
    .catch(err => console.log(err))
  })
})


})


// document.getElementById('editProfile').addEventListener('click', event => {
//   document.getElementById('myItems').innerHTML = ''
//   axios.get('/api/user/auth', {
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
//   })
//   .then(({ data: user }) => {
//       res.json(user)
//    document.getElementById('myItems').innerHTML = `
//     <form>
//       <input id="newName">${user.name}</input>
//       <input id="newEmail">${user.email}</input>
//       <input id="newUsername">${user.username}</input>
//       <input id="newPassword">${user.password}</input>
//       <button id="updateProfile" class="btn-flat">Save</button>
//     </form>
//    `
//    document.getElementById('updateProfile').addEventListener('click', event => {
//      axios.put(`/api/user/${user.id}`, {
//        name: document.getElementById('newName').value, 
//        email: document.getElementById('newEmail').value, 
//        username: document.getElementById('newUsername').value, 
//        password: document.getElementById('newPassword').value 
//      })
//      .then(window.location = '/profile.html')
//    })   
// })
// .catch(err => console.log(err))


// document.getElementById('contact').addEventListener('click', event => {
  
// })

getMyListings()



// axios.post('/api/listings', {
//         title: document.getElementById('title').value,
//         description: document.getElementById('description').value,
//         image: document.getElementById('listingImg').value
//     })
//       .then(() => {
//          getMyListings()
//       })
//     .catch(err => console.error(err))