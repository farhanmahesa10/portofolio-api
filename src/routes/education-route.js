
const express = require('express');
const EducationController = require('../controllers/education-controller')

const router = express.Router();
const { body } = require('express-validator');

router.get('/get', EducationController.get);
router.post('/store', EducationController.store);
router.put('/update/:id', EducationController.update);
router.delete('/delete/:id', EducationController.destroy);


module.exports = router;