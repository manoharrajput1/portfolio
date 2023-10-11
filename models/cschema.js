import {Schema,mongoose,Model} from 'mongoose'

const Cschema = new Schema({
    username : {
        type: String,
        required: true
    },
    mobile : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required: true
    },
})


const ContactSchema = mongoose.models.lonkas || Model('lonkas',Cschema)

export default ContactSchema