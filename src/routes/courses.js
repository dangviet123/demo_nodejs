const  express = require('express');
const router = express.Router();
const {show} = require('../app/controllers/CoursesController');
router.get('/:slug',show);


module.exports = router;