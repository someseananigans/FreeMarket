const router = require('express').Router()
const { User } = require('../models')
const { Listing } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

let users = [
  {
    name: "Sean",
    email: "SeanDoe@gmail.com",
    username: "Sean",
    password: "Admin"
  },
  {
    name: "Joseph",
    email: "JosephDoe@gmail.com",
    username: "Joeseph",
    password: "Admin"
  },
  {
    name: "Kyle",
    email: "KyleDoe@gmail.com",
    username: "Kyle",
    password: "Admin"
  },
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
    image: 'https://firebasestorage.googleapis.com/v0/b/freemarket-3263e.appspot.com/o/images%2FFree2021?alt=media&token=24ee4eb0-6a19-4c57-b043-8c874f98c424',
    category:"",
    uid: 1
  },
  {
    title: 'item2',
    description: 'description',
    image: 'https://firebasestorage.googleapis.com/v0/b/freemarket-3263e.appspot.com/o/images%2FFree1616523445770?alt=media&token=aae0eff9-ba98-435a-a407-214ba70bbd09',
    category: "",
    uid: 2
  },
  {
    title: 'item3',
    description: 'description',
    image: 'https://firebasestorage.googleapis.com/v0/b/freemarket-3263e.appspot.com/o/images%2FFree1616523428519?alt=media&token=af8ea66e-629d-40be-b9d0-d859247baf11',
    category:"",
    uid: 3
  },
  {
    title: 'item4',
    description: 'description',
    image: 'https://firebasestorage.googleapis.com/v0/b/freemarket-3263e.appspot.com/o/images%2FFree1616522923798?alt=media&token=891c0a3a-3fdb-4d2f-8324-ac75457786eb',
    category:"",
    uid: 1
  }
]

// users and listings table must be dropped first for seed to work
// seed users and than seed listings
// router.post('/users', passport.authenticate('jwt'), (req, res) => {
//   if (req.user.isAdmin) {
//     User.destroy({ where: {} })
//       .then(() => {
//         for (let i = 0; i < users.length; i++) {
//           let { name, email, username } = users[i]
//           User.register(new User({ name, email, username }), users[0].password, err => {
//             if (err) { console.log(err) }
//             res.sendStatus(200)
//           })
//         }
//       })
//       .catch(err => console.log(err))
//   }
//   else {
//     res.json({
//       status: 401,
//       message: 'Unauthorized: Admin access only'
//     })
//     return
//   }
// })

router.post('/users', (req, res) => {
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
})


router.post('/listings', (req, res) => {
  Listing.destroy({ where: {} })
    .then(() => {
      Listing.bulkCreate(listings)
        .then(() => {
          res.sendStatus(200)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router