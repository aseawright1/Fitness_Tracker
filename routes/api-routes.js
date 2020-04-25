const router = require('express').Router()
const path = require('path')

// landing page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// add exercises page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

// view stats page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router