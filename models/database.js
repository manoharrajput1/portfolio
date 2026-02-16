import {connect} from 'mongoose'

const conn = async function(){await connect("mongodb+srv://manohar:singhms@cluster0.iiaul.mongodb.net/nextdev?retryWrites=true&w=majority&appName=Cluster0")
}
module.exports = conn
