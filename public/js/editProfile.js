const axios = window.axios

document.getElementById('updateProfile').addEventListener('click', event => {
  event.preventDefault()

  console.log('ping')

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