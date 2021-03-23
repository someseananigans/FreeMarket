
const getListings = () => {
  axios.get('/api/listings')

  .then(({ data: listings }) => {
    document.getElementById('listings').innerHTML = ''
    listings.forEach(listing => {
      let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
      const listingElem = document.createElement('div')
      listingElem.className = 'col s12 m6 l4'
      listingElem.innerHTML = `
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable" id="cardItem">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
        </div>
      `
      document.getElementById('listings').append(listingElem)

      })
  })
  .catch(err => console.error(err))
}
getListings()

document.getElementById('automotive').addEventListener('click', event => {

  axios.get(`/api/listings/category/automotive`)
    
  .then(({ data: listings }) => {
    document.getElementById('listings').innerHTML = ''
    listings.forEach(listing => {
      let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
      const autoElem = document.createElement('div')
      autoElem.className = 'col s12 m6 l4'
      autoElem.innerHTML = `
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
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
        <div class="row">
         <div class="col s12 m7">
           <div class="card hoverable">
             <div class="card-image">
                <img src="../images/${listing.image}" height="175px" width="auto">
                
              </div>
              <span class="card-title">${listingTitle}</span>
            </div>
          </div>
        </div>
      `
        document.getElementById('listings').append(autoElem)

      })
    })
    .catch(err => console.error(err))
})

document.getElementById('search1').addEventListener('input', event => {

  axios.get(`/api/listings/search/${document.getElementById('search1').value}`)

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      if (listings) {

        listings.forEach(listing => {
          const autoElem = document.createElement('div')
          let listingTitle = listing.title.charAt(0).toUpperCase() + listing.title.slice(1)
          autoElem.className = 'col s12 m6 l4'
          autoElem.innerHTML = `
          <div class="row">
          <div class="col s12 m7">
          <div class="card hoverable">
          <div class="card-image">
          <img src="../images/${listing.image}" height="175px" width="auto">
          
          </div>
          <span class="card-title">${listingTitle}</span>
          </div>
          </div>
          </div>
          `
          document.getElementById('listings').append(autoElem)

        })

      } else {
        
        getListings()

      }
    })
    .catch(err => console.error(err))
})






// get all listings
// let getAllListings = () => {

//   axios.get('/api/listings')
//   .then(({ data: listings }) => {
//     console.log(listings)
//     document.getElementById('allListings').innerHTML = ''
//     listings.forEach(listing => {
//       const listingElem = document.createElement('div')
//       listingElem.className = 'col s12 m6 l4'
//       listingElem.innerHTML = `
//           <p>${listing.title}</p>
//           <p>${listing.description}</p>
//           <p>${image}
//           <button data-target="modal1" class="btn modal-trigger">Contact Owner</button>
//         `
//         document.getElementById('allListings').append(listingElem)
//     })
//   })
//   .catch(err => console.error(err))
// }

// getAllListings()

// create new post

// let listing = {
//   title: ''
//   discription: ''
// }
// axois.post('/api/listings', listing)
// .then(({data}) => {
//   console.log(data)
// })
// .catch(err => console.error(err))



// get specific listing

// axios.get('/api/songs/1')
// .then(({data}) => {
//   console.log(data)
// })
// .catch(err => console.error(err))



// update certain listing

// let updates = {
//   description: ''
// }
// axois.put('/api/listings/1', updates)
// .then(() => {
//   console.log(data)
// })
// .catch(err => console.error(err))



// delete listing
// axios.delete('/api/listings/1')
//   .then(() => {
//   console.log(data)
// })
// .catch(err => console.error(err))
