
const express = require('express');
const HelloController = require('../controllers/hello-controller')

const router = express.Router();

router.get('/get', HelloController.get);
router.post('/save', HelloController.save);
router.post('/change-image', HelloController.changeImage);

module.exports = router;