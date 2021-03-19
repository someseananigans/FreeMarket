const Listing = require('./Listing.js')
const User = require('./User.js')

let users = [
  {
    name: "John Doe",
    email: "johnDoe@gmail.com",
    username: "JJJDoe",
    password: "M3rrrrrr"
  },
  {
    name: "Jane Doe",
    email: "janeDoe@gmail.com",
    username: "janeDoe",
    password: "Mist3rrrrrr"
  },
  {
    name: "Jim Doe",
    email: "jimDoe@gmail.com",
    username: "JimDoe",
    password: "Jeeberrrrrr"
  },
  {
    name: "Jamie Doe",
    email: "jamieDoe@gmail.com",
    username: "JamieDoe",
    password: "j33b3rrrrrr"
  }
]

let listings = [
  {
    title: 'item1',
    description: 'description',
    image: 'image1',
    uid: 1
  },
  {
    title: 'item2',
    description: 'description',
    image: 'image2',
    uid: 2
  },
  {
    title: 'item3',
    description: 'description',
    image: 'image3',
    uid: 3
  },
  {
    title: 'item4',
    description: 'description',
    image: 'image4',
    uid: 1
  }
]

// users and listings table must be dropped first for seed to work
// seed users and than seed listings
User.destroy({ where: {} })
  .then(() => {
    for (let i = 0; i < users.length; i++) {
      let { name, email, username } = users[i]
      User.register(new User({ name, email, username }), users[0].password, err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
      })
    }
  })
  .catch(err => console.log(err))

Listing.destroy({ where: {} })
  .then(() => {
    Listing.bulkCreate(listings)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))