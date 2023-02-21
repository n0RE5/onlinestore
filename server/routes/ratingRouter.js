const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const ratingController = require('../controllers/ratingController')

router.post('/', authMiddleware, ratingController.rateDevice)
router.get('/:deviceId', ratingController.updateRating)

module.exports = router