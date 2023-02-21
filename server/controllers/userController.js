const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const {Basket, User} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role, basketId) => {
    return jwt.sign(
        {id, email, role, basketId},
         process.env.SECRET_KEY,
        {expiresIn: '24h'}     
    )
}

class UserController {

    async registration(req, res, next) {
        const {email, password} = req.body
        const role = "USER"

        if(!email || !password) {
            return next(ApiError.badRequest('Недействительный почтовый ящик или пароль'))
        }
    
        const email_parser = /^\S+@\S+\.\S+$/
        if(email.length < 5 || !email_parser.test(email)) {
            return next(ApiError.badRequest('Укажите настоящий почтовый ящик'))
        }

        if(password.length<5) {
            return next(ApiError.badRequest('Пароль должен состоять как минимум из 5 символов'))
        }

        const candidate = await User.findOne({where: {email}})

        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 4)

        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role, basket.id)
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        
        if(!user) {
            return next(ApiError.badRequest('Недействительный почтовый ящик или пароль'))
        }

        const basket = await Basket.findOne({where: {userId: user.id}})

        let comparePassword = bcrypt.compareSync(password, user.password)

        if(!comparePassword) {
            return next(ApiError.badRequest('Недействительный почтовый ящик или пароль'))
        }

        const token = generateJwt(user.id, user.email, user.role, basket.id)
        return res.json({token})
    }   

    async check(req, res, next) {
        const basket = await Basket.findOne({where: {userId: req.user.id}})
        const token = generateJwt(req.user.id, req.user.email, req.user.role, basket.id)
        return res.json({token})
    }
}

module.exports = new UserController()