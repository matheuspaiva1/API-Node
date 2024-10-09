// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//   res.write('hello world')  

//   return res.end()
// })

// server.listen(3333)
import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()

const server = fastify()

server.post('/videos', () => {
  return 'Hello World'
})

server.get('/videos', () => {
  return 'Hello users'
})

server.put('/videos/:id', () => {
  return 'Hello World'
})

server.delete('/videos/:id', () => {
  return 'Hello World'
})

server.listen({
  port: 3333,
})