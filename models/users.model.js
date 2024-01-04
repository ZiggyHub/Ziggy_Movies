const { Schema, model} = require  ('mongoose');

const UsersSchema = new Schema ({
    _id:{
        type:Number,
        require:true
    },
    userName:{
        type:String,
        require: [true, 'El usuario es requerido'],
        unique:true
    },
    email:{
        type:String,
        require: ['El email es requerido'],
        unique:true
    },
    password:{
        type:String,
        require: [true, 'El password es requerido'],
        unique:true
    },
    service:{
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'El servicio es requerido']
    }
});

module.exports = model('User', UsersSchema)