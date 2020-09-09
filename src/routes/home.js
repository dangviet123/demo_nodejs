const  express = require('express');
const router = express.Router();
const {index,search,postSearch} = require('../app/controllers/HomeController');
router.get('/',index);
router.get('/search',search); // tìm kiếm
router.post('/search',postSearch); // post tìm kiếm


module.exports = router;