const { query } = require("express")


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

document.getElementById('automotive').addEventListener('click', event => {
  db.query('SECLECT * FROM listings WHERE category = automotive', 
  (err, data) => {
    document.getElementById('allListings').append = data
  })
  axios.get('api/listings')
  .then(({ data: listings }) => {

  })
  .catch(err => console.log(err))
})

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
