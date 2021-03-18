// document.getElementById('search').addEventListener('input', () => {

// })
const axios = window.axios

const getListings = () => {
  axios.get('/api/listings')
  .then(({ data: listings }) => {
    document.getElementById('myItems').innerHTML = ''
      listings.forEach(listing => {
        let listingElem = document.createElement('div')
        listingElem.className = 'card info z-depth-3'
        listingElem.innerHTML = `
          <p>${listing.title}</p>
          <p>${listing.description}</p>
          <p>${image}
          <button data-target="modal1" class="btn modal-trigger">Contact Owner</button>
        `
      document.getElementById('myItems').append(listingElem)
      })
  })
  .catch(err => console.err(err))
}

// Creates form to create a post
document.getElementById('create').addEventListener('click', () => {
  

  let getItemInfo = document.createElement('div')
  getItemInfo.className =
    getItemInfo.innerHTML = `
  
 <form class="col s12" id="getinfo">
    <div class="row">
      <div class="input-field col s12">
        <input id="title" type="text" class="validate">
        <label for="title">Title</label>
      </div>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea"></textarea>
            <label for="textarea1">Description</label>
          </div>
        </div>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>Image</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </form>
      </div> 
    </div>  
  </form>
 <button class="btn waves-effect waves-light" type="submit" name="action" id="createItem">Create
 <i class="material-icons right">send</i>
 </button>
 `
  document.getElementById('items').append(getItemInfo)

  // Creates card for created post
document.getElementById('createItem').addEventListener('click', () => {
  event.preventDefault
  console.log('tick')
  let title = document.getElementById('title').value
  let description = document.getElementById('description').value
  let newItem = document.createElement('div')
  newItem.className = 'card'
  newItem.innerHTML =
    `
    
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${title}</span>
          <p>${description}</p>
        </div>
        <div class="card-action">
         <button data-target="#modal1" class="btn modal-trigger .modal-close">Contact Owner</button>
 
        </div>
      </div>
    </div>
  </div>
    `
  document.getElementById('myItems').append(newItem)
  document.getElementById('items').innerHTML = ''
})

})



// document.getElementById('contact').addEventListener('click', event => {
  
// })

getListings()



axios.post('/api/listings', {
        title: document.getElementById('title').value
        description: document.getElementById('description').value
    })
      .then(({ data: listing }) => {
        let listingElem = document.createElement('div')
        listingElem.className = 'col s12 m6 l4'
        listingElem.innerHTML = `
          <p>${listing.title}</p>
          <p>${listing.description}</p>
          <button data-target="modal1" class="btn modal-trigger">Contact Owner</button>
        `
        document.getElementById('myItems').append(listingElem)
      })
      let listing = {
        title: `${title}`,
        description: `${description}`
      }
    .catch(err => console.error(err))