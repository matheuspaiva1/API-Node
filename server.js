// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//   res.write('hello world')  

//   return res.end()
// })

// server.listen(3333)
import {fastify} from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()


// Request Body

server.post('/videos', async (request, reply) => {
  const {title, description, duration} = request.body

  await database.create({
    title,
    description,
    duration
  })

  return reply.status(201).send()
})

server.get('/videos', async (request) => {
  const search = request.query.search

   const videos = await database.list(search)

  return videos
})

server.put('/videos/:id', async(request, reply) => {
  const videoId = request.params.id
  const {title, description, duration} = request.body

  await database.update(videoId, {
    title, 
    description, 
    duration
  })

  return reply.status(201).send()
})

server.delete('/videos/:id', async (request,reply) => {
  const videoId = request.params.id

  await database.delete(videoId)

  return reply.status(201).send()
})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3000,
})