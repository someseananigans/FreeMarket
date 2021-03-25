const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$(document).ready(function () {
  $('.tabs').tabs();
});

// For phone number formatting
let cleave = new Cleave(document.getElementById('phoneS'), {
  phone: true,
  phoneRegionCode: 'US'
})

document.getElementById('signUp').addEventListener('click', event => {
  axios.get('/api/usersnames')
    .then(({ data: usernames }) => {
      let newUser = {
        name: document.getElementById('nameS').value,
        phone: document.getElementById('phoneS').value,
        password: document.getElementById('passwordS').value,
        email: document.getElementById('emailS').value
      }
      // confirms that email is a valid format
      if (!validateEmail(document.getElementById('emailS').value)) {
        document.getElementById('invalidEmail').innerHTML = 'Invalid email'
      }
      // confirms that username doesn't already exist 
      if (!usernames.includes(document.getElementById('usernameS').value)) {
        newUser.username = document.getElementById('usernameS').value
      } else {
        document.getElementById('invalidUser').innerHTML = 'Username already exists'
        document.getElementById('usernameS').classList.add('invalid')
      }
      // registers user if username is unique and email is valid
      if (validateEmail(newUser.email) && newUser.username) {
        axios.post('/api/user/register', newUser)
          .then(() => window.location = '/login')
          .catch(err => {
            console.log(err)
          })
      }
    })
    .catch(err => console.error(err))
})

document.getElementById('login').addEventListener('click', event => {
  axios.post('/api/user/login', {
    username: document.getElementById('usernameL').value,
    password: document.getElementById('passwordL').value
  })
    .then(({ data: token }) => {
      if (token) {
        localStorage.setItem('token', token)
        window.location = '/'
      } else {
        document.getElementById('invalid').innerHTML = "Username and/or Password were incorrect. Please try again."
        document.getElementById('usernameL').classList.add('invalid')
        document.getElementById('passwordL').classList.add('invalid')
      }
    })
    .catch(err => console.log(err))
})

