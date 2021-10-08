
const express = require('express');
const HelloController = require('../controllers/hello-controller')
const router = express.Router();
const { body } = require('express-validator');

router.get('/get', HelloController.get);
router.post('/save', [
    body('profession').notEmpty().withMessage("profession tidak boleh kosong"),
    body('about').notEmpty().withMessage("about tidak boleh kosong"),
], HelloController.save);
router.post('/change-image', HelloController.changeImage);

module.exports = router;