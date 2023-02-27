const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, basketController.fill)
router.post('/remove', authMiddleware, basketController.remove)
router.get('/:basketId', authMiddleware, basketController.get)

module.exports = router