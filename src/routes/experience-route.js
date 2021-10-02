const express = require('express');
const ExperienceController = require('../controllers/experience-controller');
const router = express.Router();
const { body } = require('express-validator');

router.get('/get', ExperienceController.get);
router.post('/store', [
    body('profession').notEmpty().withMessage("profession tidak boleh kosong"),
    body('year').notEmpty().withMessage("year tidak boleh kosong"),
    body('company').notEmpty().withMessage("company tidak boleh kosong"),
    body('description').notEmpty().withMessage("description tidak boleh kosong"),
], ExperienceController.store);
router.put('/update/:id', [
    body('profession').notEmpty().withMessage("profession tidak boleh kosong"),
    body('year').notEmpty().withMessage("year tidak boleh kosong"),
    body('company').notEmpty().withMessage("company tidak boleh kosong"),
    body('description').notEmpty().withMessage("description tidak boleh kosong"),
], ExperienceController.update);

router.delete('/delete/:id', ExperienceController.destroy);


module.exports = router;