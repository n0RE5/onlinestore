const {Type} = require('../models/models')
const ApiError = require('../error/apiError')

class TypeController {

    async create(req, res, next) {
        try {
            let {name} = req.body
            
            const type = await Type.create({name})

            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        const types = await Type.findAndCountAll()
        return res.json(types)
    }

    async get(req, res, next) {
        let {id} = req.params

        if(isNaN(id)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const type = await Type.findOne({where: {id}})
        return res.json(type)
    } 
}

module.exports = new TypeController()