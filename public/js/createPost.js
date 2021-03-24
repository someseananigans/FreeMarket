const axios = window.axios

document.getElementById('createItem').addEventListener('click', event => {
  event.preventDefault()
  let item = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    image: document.getElementById('listingImg').value,
    category: document.getElementById('category').value
  }
  console.log(item)
  let token = localStorage.getItem('token')
  axios.post('/api/listings', item, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(() => {
      window.location = '/profile.html'
    })
    .catch(err => console.error(err))
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