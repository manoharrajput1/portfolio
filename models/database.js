import {connect} from 'mongoose'

const conn = async function(){await connect(process.env.MONGODB_URL),
   {
      dbName: "Connect",
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }
}
module.exports = conn
