

document.getElementById('profileSubmit').addEventListener('click', event => {
  event.preventDefault()

    axios.post('/api/user', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      phone: document.getElementById('phone').value
    })
    .then(() => {
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('username').value = ''
      document.getElementById('password').value = ''
      document.getElementById('phone').value = ''
    })
  .catch(err => console.error(err))
})