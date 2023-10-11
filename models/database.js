import {connect} from 'mongoose'

const conn = async function(){await connect('mongodb+srv://jhalar:lonka01@cluster0.pmgih.mongodb.net/lonks?retryWrites=true&w=majority')}
module.exports = conn