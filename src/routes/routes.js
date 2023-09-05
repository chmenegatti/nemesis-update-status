const express = require('express');
const controller = require('../controller/dataController');

const router = express.Router();

router.post('/update/status', controller.getById);
router.patch('/update/status/:id', controller.update);

module.exports = router;