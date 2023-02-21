const {Device, Device_Info} = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, tag, info} = req.body
            const {img} = req.files

            if (!name || !price || !brandId || !typeId) {
                return next(ApiError.badRequest(`Обязательные поля не заполнены`))
            }

            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, tag, typeId, img: fileName})

            if(info) {
                info = JSON.parse(info)
                info.forEach(element => 
                    Device_Info.create({
                        title: element.title,
                        description: element.description,
                        redirect_url: element.redirect_url,
                        deviceId: device.id
                    })
                )
            }
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        let {limit, page} = req.query

        if(isNaN(limit) || isNaN(page)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        limit = limit || 10
        page = page || 1
        let offset = page * limit - limit

        let devices = await Device.findAndCountAll({include: [{model: Device_Info, as: 'device_infos'}], limit, offset})
        return res.json(devices)
    }

    async getOne(req, res, next) {
        const {id} = req.params

        if(isNaN(id)) {
            return next(ApiError.badRequest("ID Is not a number"))
        }

        const device = await Device.findOne({
            where: {id},
            include: [{model: Device_Info, as: 'device_infos'}]

        })

        return res.json(device)
    }
}

module.exports = new DeviceController()