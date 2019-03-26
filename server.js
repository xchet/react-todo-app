const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const notes = [
  {
    id: 1,
    item: "Get a new Macbook",
  },
  {
    id: 2,
    item: "Get Groceries for the week"
  },
  {
    id: 3,
    item: "Learn Reactjs",
  },
  {
    id: 4,
    item: "Many More",
  }

]

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/api/notes', (req,res) => {
      const notes = [
        {
          id: 1,
          note: "Get a new Macbook",
        },
        {
          id: 2,
          note: "Get Groceries for the week"
        },
        {
          id: 3,
          note: "Learn Reactjs",
        },
        {
          id: 4,
          note: "Many More",
        }
      ]
      return res.send({notes})
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })