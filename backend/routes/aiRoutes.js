const express = require('express')
const { sendPrompt } = require('../controllers/aiController')
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
// router.use(requireAuth) //use for protected route

// router.get('/', sendPrompt)
router.post('/', sendPrompt)

module.exports = router