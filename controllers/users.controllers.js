const { response, request } = require ('express')

const user = require('../models/users.model')

const userGet = async(req = request, res = response) => {
    try{
        const queryParam = { state:true }; 
        const { limit = 10   } = req.query
        const NumeroEntradas = await User.countDocuments()
        const usuario = await User.find(queryParam).populate("service").limit(Number(limit));
        res.status(200).json({
            total: NumeroEntradas,
            usuario
        })
    }catch{
        res.status(500).json({
            message: 'Error al buscar los usuarios',
         }) 
    }
}

const userPost = async(req,res) => {

    try{
        const { _id, userName, email, password } =req.body
        const data ={ _id, userName, email, password }
    0
        const user = new User(data)
        await user.save()
    
        res.status(200).json({
            message:'Servicios Route desde el controller -- POST',
            user
        })

    }catch (error){
         res.status(500).json({
            message: 'Error en el servidor',
            error
         })
    }


}

const userPut = async(req, res) =>{

    try {
        const { id } = req.params;
        const { _id, userName, email, password } = req.body
        const data = { _id, userName, email, password }

        const user = await User.findByIdAndUpdate(id, data)
        res.status(200).json({
            message:'Servicio modificados con exito',
            user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }

}

const userDel = async (req = request, res = response) =>{
    
    try{
        const { id } = req.params
        const falseState = {active: false}
        const user = await User.findByIdAndUpdate(id, falseState )

    }catch{
       res.status(200).json({
           message: `El servicio con el ${id} fue eliminado`,
           user
         })
    }
}

module.exports = {
    userGet,
    userPost,
    userPut, 
    userDel
}