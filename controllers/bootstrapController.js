import userModel from "../models/userModel.js"


export const currentUser = async (req, res) =>{
    try {
        const {id, email} = req.user
        await userModel.findOne({email}).then(async result => {
            res.status(200).json({
                status: true,
                data:{
                    name: result.name,
                    email: result.email,
                    active: result.active
                }
            })
        }).catch(error =>{
            res.status(404).send({
                error,
                message: 'User not found'
            })
        })
        
    } catch (error) {
        res.status(404).send({
            error,
            message: 'Service unavailable'
        })
        
    }
}