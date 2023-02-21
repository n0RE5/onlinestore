const {Brand} = require('../models/models')
const ApiError = require('../error/apiError')

class BrandController {

    async create(req, res, next) {
        try {
            let {name} = req.body
            
            const brand = await Brand.create({name})

            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        const brands = await Brand.findAndCountAll()
        return res.json(brands)
    }

    async get(req, res, next) {
        let {id} = req.params
        if(isNaN(id)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const brand = await Brand.findOne({where: {id}})
        return res.json(brand)
    } 
}

module.exports = new BrandController()