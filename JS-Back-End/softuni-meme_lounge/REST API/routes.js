const { Router } = require('express');

const authController = require('./controllers/authController');
const memeController = require('./controllers/memeController');


const router = Router();

router.use('/auth', authController);
router.use('/memes',  memeController);

module.exports = router;
