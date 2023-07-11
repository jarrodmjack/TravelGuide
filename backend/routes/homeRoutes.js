const express = require('express')
const { getHome, sendPrompt } = require('../controllers/homeController')
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
// router.use(requireAuth) use for auth

router.get('/', getHome)
router.post('/', sendPrompt)

module.exports = router