
const express = require('express');
const ProjectController = require('../controllers/project-controller')

const router = express.Router();
const { body } = require('express-validator');

router.get('/get', ProjectController.get);
router.post('/store', [
    body('projectName').notEmpty().withMessage("project name tidak boleh kosong"), body('periode').notEmpty().withMessage("periode tidak boleh kosong")
], ProjectController.store);
router.put('/update/:id', ProjectController.update);
router.delete('/delete/:id', ProjectController.destroy);


module.exports = router;