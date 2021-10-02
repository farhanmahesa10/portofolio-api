const express = require('express');
const WorkskillController = require('../controllers/workskill-controller');
const router = express.Router();
const { body } = require('express-validator');

router.get('/get', WorkskillController.get);
router.post('/store', WorkskillController.store);
router.put('/update/:id', [
    body('name').notEmpty().withMessage("name tidak boleh kosong"),
    body('score').notEmpty().withMessage("score tidak boleh kosong"),
], WorkskillController.update);
router.delete('/delete/:id', WorkskillController.destroy);


module.exports = router;