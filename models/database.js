import {connect} from 'mongoose'

const conn = async function(){await connect("mongodb+srv://newuser:singh01@cluster0.iiaul.mongodb.net/webdev?retryWrites=true&w=majority&appName=Cluster0")
}
module.exports = conn
