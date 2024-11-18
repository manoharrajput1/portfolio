import {connect} from 'mongoose'

const conn = async function(){await connect(process.env.MONGODB_URL,
   {
      dbName: "ConnectDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
}
module.exports = conn
