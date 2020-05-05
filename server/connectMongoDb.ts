import mongoose, { ConnectionOptions } from 'mongoose';

const URL:string ='mongodb+srv://karenina:qclSBZ64osNjq6XM@clusterkoleso-nqmni.mongodb.net/test?retryWrites=true&w=majority'


const options:ConnectionOptions = {
  dbName: 'onwash',
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  native_parser: true
}


mongoose.connect(URL, options)
.then(() => {
    console.log('Подключение к  Atlas Cluster удалось!')

})
.catch( (err: any) => console.error(err) )