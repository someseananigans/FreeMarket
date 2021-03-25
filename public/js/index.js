
const getListings = () => {
  axios.get('/api/listings')

    .then(({ data: listings }) => {
      console.log(listings)
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const listingElem = document.createElement('div')
        listingElem.className = 'col s12 m6 l4 xl3'
        listingElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(listingElem)

      })
    })
    .catch(err => console.error(err))
}

getListings()


const status1 = () => {

  if (localStorage.getItem('token')) {
    // main nav
    let signOut = document.createElement('li')
    signOut.classList = 'hide-on-small-only signOut'
    signOut.innerHTML = `<a href="">Sign Out</a>`

    let myProf = document.createElement('li')
    myProf.innerHTML = `<a class="hide-on-small-only" href="/profile">My Profile</a>`

    document.getElementById('navList').append(myProf)
    document.getElementById('navList').append(signOut)

    // side out nav
    let signout = document.createElement('li')
    signout.classList = 'hide-on-small-only signOut'
    signout.innerHTML = `<a href="">Sign Out</a>`

    let myprof = document.createElement('li')
    myprof.innerHTML = `<a class="hide-on-small-only" href="/profile">My Profile</a>`

    document.getElementById('slide-out').append(myprof)
    document.getElementById('slide-out').append(signout)


  } else {
    let signIn = document.createElement('li')
    signIn.id = 'signOut'
    signIn.innerHTML = `<a href="./login.html">Sign Up/Sign In</a>`

    document.getElementById('navList').append(signIn)


  }
}
status1()

document.getElementById('automotive').addEventListener('click', event => {

  axios.get(`/api/listings/category/automotive`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('household').addEventListener('click', event => {

  axios.get(`/api/listings/category/household`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('decor').addEventListener('click', event => {

  axios.get(`/api/listings/category/decor`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('apparel').addEventListener('click', event => {

  axios.get(`/api/listings/category/apparel`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('accessories').addEventListener('click', event => {

  axios.get(`/api/listings/category/accessories`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('technology').addEventListener('click', event => {

  axios.get(`/api/listings/category/technology`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('pet').addEventListener('click', event => {

  axios.get(`/api/listings/category/pet`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})
document.getElementById('random').addEventListener('click', event => {

  axios.get(`/api/listings/category/random`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})

document.getElementById('search1').addEventListener('input', event => {

  if (document.getElementById('search1').value) {
    axios.get(`/api/listings/search/${document.getElementById('search1').value}`)

      .then(({ data: listings }) => {
        document.getElementById('listings').innerHTML = ''
        listings.forEach(listing => {
          const autoElem = document.createElement('div')
          let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
          autoElem.className = 'col s12 m6 l4'
          autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
          document.getElementById('listings').append(autoElem)

        })

      })
      .catch(err => console.error(err))

  } else {
    getListings()
  }
})

document.getElementById('search2').addEventListener('input', event => {

  if (document.getElementById('search2').value) {
    axios.get(`/api/listings/search/${document.getElementById('search2').value}`)

      .then(({ data: listings }) => {
        document.getElementById('listings').innerHTML = ''
        listings.forEach(listing => {
          const autoElem = document.createElement('div')
          let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
          autoElem.className = 'col s12 m6 l4'
          autoElem.innerHTML = `

          <div class="card hoverable listings modal-trigger" id="cardItem" data-target="modal1" data-id=${listing.id}>
            <img class="card-image" src="${listing.image}" height="175px" width="auto">
            <h3 class="card-title center cardTitle">${listingTitle}</h3>
          </div>
      `
          document.getElementById('listings').append(autoElem)

        })

      })
      .catch(err => console.error(err))

  } else {
    getListings()
  }
})

document.addEventListener('click', event => {

  if (localStorage.getItem('token')) {

    if (event.target.parentNode.classList.contains('signOut')) {
      console.log('dumb')
      localStorage.removeItem('token')
    }

    if (event.target.parentNode.classList.contains('listings')) {
      const id = event.target.parentNode.dataset.id
      axios.get(`/api/listings/id/${id}`)

        .then(({ data: listing }) => {
          console.log(listing)
          let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
          document.getElementById('listFull').innerHTML =
            `
      <div class="row center">
        <p id="listImage"><img src="${listing.image}" height="175px" width="auto"></p>
      </div>
      <div class="row">
        <h4 id="listTitle">${listingTitle}</h4>
      </div>
      <div class="row">
        <p id="listDesc">${listing.description}</p>
      </div>
      <a href="mailto:${listing.User.email}">
      <button class="btn modal-close waves-effect yellow darken-3" type="email" name="action">
      <i class="material-icons right">email</i>
      </button>
      </a>
      `
        })
        .catch(err => console.log(err))
    }
    else if (event.target.classList.contains('listings')) {
      const id = event.target.dataset.id
      axios.get(`/api/listings/id/${id}`)

        .then(({ data: listing }) => {
          console.log(listing)
          let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
          document.getElementById('listFull').innerHTML =
            `
      <div class="row center">
        <p id="listImage"><img src="${listing.image}" height="175px" width="auto"></p>
      </div>
      <div class="row">
        <h4 id="listTitle">${listingTitle}</h4>
      </div>
      <div class="row">
        <p id="listDesc">${listing.description}</p>
      </div>
      <a href="mailto:${listing.User.email}">
      <button class="btn modal-close waves-effect yellow darken-3" type="email" name="action">
      <i class="material-icons right">email</i>
      </button>
      </a>
      `
      })
      .catch(err => console.log(err))
   }


  } else {
    window.location = '/login.html'
  }

})