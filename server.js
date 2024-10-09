// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//   res.write('hello world')  

//   return res.end()
// })

// server.listen(3333)

import {fastify} from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World'
})

server.get('/users', () => {
  return 'Hello users'
})

server.listen({
  port: 3333,
})