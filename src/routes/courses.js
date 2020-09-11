const  express = require('express');
const router = express.Router();
const {show,create,store,edit,update} = require('../app/controllers/CoursesController');
router.get('/create',create);
router.get('/:id/edit',edit);
router.post('/:id/update',update);
router.post('/store',store);
router.get('/:slug',show);

module.exports = router;