const axios = window.axios

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let token = localStorage.getItem('token')

axios.get('api/user/auth', {
  headers: {
    "Authorization": `Bearer ${token}`
  }
})
  .then(({ data }) => {
    console.log(data)
    document.getElementById('name').value = data.name,
      document.getElementById('email').value = data.email,
      document.getElementById('username').value = data.username
    document.getElementById('phone').value = data.phone
  })
  .catch(err => console.log(err))

let cleave = new Cleave(document.getElementById('phone'), {
  phone: true,
  phoneRegionCode: 'US'
})

document.getElementById('updateProfile').addEventListener('click', event => {
  event.preventDefault()
  let token = localStorage.getItem('token')
  let auth = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  let body = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    username: document.getElementById('username').value,
    phone: document.getElementById('phone').value
  }

  axios.put('/api/user', body, auth)
    .then(() => {
      window.location = '/profile.html'
      // console.log(validateEmail(document.getElementById('email').value))
    })
    .catch(err => console.log(err))
})


