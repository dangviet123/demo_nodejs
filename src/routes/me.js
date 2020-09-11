const  express = require('express');
const router = express.Router();
const {index} = require('../app/controllers/MeCoursesController');
router.get('/stored/courses',index); // trang chính

module.exports = router;