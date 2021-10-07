
const express = require('express');
const OrganizationController = require('../controllers/organization-controller')

const router = express.Router();
const { body } = require('express-validator');

router.get('/get', OrganizationController.get);
router.post('/store', OrganizationController.store);
router.put('/update/:id', OrganizationController.update);
router.delete('/delete/:id', OrganizationController.destroy);


module.exports = router;