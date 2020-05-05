const  mongoose = require('mongoose')
const express = require('express')
const graphQlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express();
const cors = require('cors')


const URL ='mongodb+srv://karenina:qclSBZ64osNjq6XM@clusterkoleso-nqmni.mongodb.net/test?retryWrites=true&w=majority'
const options = {
  dbName: 'graphql_test',
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  native_parser: true,
}

mongoose.connect(URL, options)
  .then(() => {
      console.log('Подключение к  Atlas Cluster удалось!')
  })
  .catch( (error) => console.error(error) )

  
app.use(cors())
app.use('/graphql' , graphQlHTTP({
  schema,
  graphiql: true
}))
const PORT = 8080 

app.listen(PORT, err => { 
  console.clear()
  err ? console.error(err) : console.log(`GraphQl сервер запущен на http://localhost:${PORT}`)
})