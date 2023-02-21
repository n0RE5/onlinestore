const ApiError = require('../error/apiError')
const {Rating, Device} = require('../models/models')

class ratingController {

    async rateDevice(req, res, next) {
        const {rate, userId, deviceId} = req.body

        const alreadyExists = await Rating.findOne({where: {userId, deviceId}})

        if(alreadyExists) {
            return next(ApiError.badRequest('Вы уже оставили оценку для этого товара'))
        }

        const Rate = await Rating.create({rate, userId, deviceId})

        return res.json({Rate})
    }

    async updateRating(req, res, next) {
        const {deviceId} = req.params

        if(isNaN(deviceId)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const rating = await Rating.findAndCountAll({where: {deviceId}})

        const avg = () => {
            let summ = 0
            for (let i = 0; i < rating.count; i++) {
                summ += rating.rows[i].dataValues.rate
            }
            const avg = summ/rating.count
            return parseFloat(avg.toFixed(1))
        }

        const average = avg()

        const updateRating = await Device.update({rating: average},{where: {id: deviceId}})

        return res.json({rating})
    }
}

module.exports = new ratingController()