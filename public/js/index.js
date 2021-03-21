
const getListings = () => {
  axios.get('/api/listings')

  .then(({ data: listings }) => {
    document.getElementById('listings').innerHTML = ''
    listings.forEach(listing => {
      const listingElem = document.createElement('div')
      listingElem.className = 'col s12 m6 l4'
      listingElem.innerHTML = `
        <div class="row">
         <div class="col s12 m7">
           <div class="card">
             <div class="card-image">
                <img src="../images/${listing.image}">
                
              </div>
              <span class="card-title">${listing.title}</span>
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

  axios.get(`/api/listings/automotive`)
    
  .then(({ data: listings }) => {
    document.getElementById('listings').innerHTML = ''
    listings.forEach(listing => {
      const autoElem = document.createElement('div')
      autoElem.className = 'col s12 m6 l4'
      autoElem.innerHTML = `
        <div class="row">
         <div class="col s12 m7">
           <div class="card">
             <div class="card-image">
                <img src="../images/${listing.image}">
                
              </div>
              <span class="card-title">${listing.title}</span>
            </div>
          </div>
        </div>
      `
      document.getElementById('listings').append(autoElem)

    })
  })
  .catch(err => console.error(err))
})

document.getElementById('search').addEventListener('input', event => {

  axios.get(
    `/api/listings/search/`
    )

    .then(({ data: listings }) => {
      document.getElementById('listings').innerHTML = ''
      listings.forEach(listing => {
        const autoElem = document.createElement('div')
        autoElem.className = 'col s12 m6 l4'
        autoElem.innerHTML = `
        <div class="row">
         <div class="col s12 m7">
           <div class="card">
             <div class="card-image">
                <img src="../images/${listing.image}">
                
              </div>
              <span class="card-title">${listing.title}</span>
            </div>
          </div>
        </div>
      `
        document.getElementById('listings').append(autoElem)

      })
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
