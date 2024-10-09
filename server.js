import { createServer } from 'node:http'

const server = createServer((req, res) => {

  res.write('hello world')  

  return res.end()
})

server.listen(3333)