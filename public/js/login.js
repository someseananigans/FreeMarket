const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$(document).ready(function () {
  $('.tabs').tabs();
});

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
      if (newUser.email && newUser.username) {
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


// document.getElementById('myLogin').addEventListener('click', () => {
//   console.log('ping')
//   document.getElementById('profileContainer').innerHTML = `
//     <div class="row">
//           <div class="input-field col s12">
//             <div class="row">
//           <div class="input-field col s12">
//             <input id="username" type="text" class="validate">
//             <label for="username">Username</label>
//           </div>
//         </div>
//         <div class="row">
//           <div class="input-field col s12">
//             <input id="password" type="password" class="validate">
//             <label for="password">Password</label>
//           </div>
//         </div>
//         <button class="btn waves-effect waves-light" type="submit" name="action" id="profileSubmit">Submit
//           <i class="material-icons right">send</i>
//         </button>
//       </form>
//   `
// })
