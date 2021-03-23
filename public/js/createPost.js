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
  axios.post('/api/listings', {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    image: document.getElementById('listingImg').value,
    category: document.getElementById('category').value
  })
    .then(() => {
      window.location = '/profile.html'
    })
    .catch(err => console.error(err))
})