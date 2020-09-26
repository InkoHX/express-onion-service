const app = require('express')()

app.get('/', (_request, response) => {
  response.send('Hello Onion Service!')
})

app.use((request, _response, next) => {
  console.log(`[${request.method}]: ${request.originalUrl}`)

  next()
})

app.listen(process.env.PORT, () => {
  console.log('Ready!')
})
