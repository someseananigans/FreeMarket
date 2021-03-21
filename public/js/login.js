
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

document.getElementById('myLogin').addEventListener('click', () => {
  console.log('ping')
  document.getElementById('profileContainer').innerHTML = `
    <div class="row">
          <div class="input-field col s12">
            <div class="row">
          <div class="input-field col s12">
            <input id="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action" id="profileSubmit">Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
  `
})