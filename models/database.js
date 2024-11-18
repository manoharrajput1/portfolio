import {connect} from 'mongoose'

const conn = async function(){await connect("mongodb+srv://jhalar:lonka01@cluster0.u5gap.mongodb.net/webdev?retryWrites=true&w=majority&appName=Cluster0")
}
module.exports = conn
