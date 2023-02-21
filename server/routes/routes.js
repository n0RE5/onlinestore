const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ratingRouter = require('./ratingRouter')
const deviceRouter = require('./deviceRouter')
const basketRouter = require('./basketRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/rating', ratingRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router