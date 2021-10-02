
const express = require('express');
const OrganizationController = require('../controllers/organization-controller')

const router = express.Router();
const { body } = require('express-validator');

router.get('/get', OrganizationController.get);
router.post('/store', OrganizationController.store);
// router.put('/update/:id', [
//     body('name').notEmpty().withMessage("name tidak boleh kosong"),
//     body('score').notEmpty().withMessage("score tidak boleh kosong"),
// ], OrganizationController.update);
// router.delete('/delete/:id', OrganizationController.destroy);


module.exports = router;