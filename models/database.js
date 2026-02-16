import {connect} from 'mongoose'

const conn = async function(){await connect("mongodb+srv://manohar:singhms@cluster0.cbj5arp.mongodb.net/nextdb?appName=Cluster0")
}
module.exports = conn
