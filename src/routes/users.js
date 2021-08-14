    const express = require('express');
    const router = express.Router();
    const customerControllers = require('../controllers/customerController');

    router.get('/',customerControllers.list);

    module.exports = router;

