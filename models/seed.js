const Listing = require('./Listing.js')
const User = require('./User.js')

User.destroy({where: { } })
  .then(() => {
    User.bulkCreate([
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
    ])
      .then(() => {
        console.log('Seed Successful')
        process.exit()
      })
      .catch(err => console.log(err))
  })

Listing.destroy({where: { } })
  .then(() => {
    Listing.bulkCreate([
      {
        title: 'item1',
        description: 'description',
        image: 'image1',
        user_id: '1'
      },
      {
        title: 'item2',
        description: 'description',
        image: 'image2',
        user_id: '2'
      },
      {
        title: 'item3',
        description: 'description',
        image: 'image3',
        user_id: '3'
      },
      {
        title: 'item4',
        description: 'description',
        image: 'image4',
        user_id: '1'
      }
    ])
      .then(() => {
        console.log('Seed Successful')
        process.exit()
      })
      .catch(err => console.log(err))
  })