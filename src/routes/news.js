const  express = require('express');
const router = express.Router();
const {index,show} = require('../app/controllers/NewsController');
router.get('/',index);
router.get('/:slug',show);
module.exports = router;
