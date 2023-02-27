const {BasketDevice, Device, Device_Info} = require('../models/models')
const ApiError = require('../error/apiError')

class BasketController {

    async fill(req, res, next) {
        let {basketId, deviceId} = req.body

        if(isNaN(basketId) || isNaN(deviceId)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const exists = await BasketDevice.findOne({where: {basketId, deviceId}})
        const deviceExists = await Device.findOne({where: {id: deviceId}})

        if(!deviceExists) {
            return next(ApiError.badRequest("Device is not exists"))
        }

        if(exists) {
            return next(ApiError.badRequest("Device is already in your basket"))
        }

        const fillBasket = await BasketDevice.create({basketId, deviceId})

        return res.json(fillBasket)
    }

    async get(req, res, next) {
        const {basketId} = req.params

        if(isNaN(basketId)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const basket = await BasketDevice.findAndCountAll({where: {basketId}, include: [{model: Device, as: 'device'}]})

        return res.json(basket)
    }

    async remove(req, res, next) {
            const {basketId, deviceId} = req.body

            if(isNaN(basketId) || isNaN(deviceId)) {
                return next(ApiError.badRequest("ID Is not a number"))
            }

            const response = await BasketDevice.destroy({where: {basketId, deviceId}})

            return res.json(response)
    }
}

module.exports = new BasketController()