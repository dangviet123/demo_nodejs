const  express = require('express');
const router = express.Router();
const {show,create,store,edit,update,destroy} = require('../app/controllers/CoursesController');
router.get('/create',create);
router.get('/:id/edit',edit);
router.put('/:id/update',update);
router.delete('/:id/destroy',destroy);
router.post('/store',store);
router.get('/:slug',show);

module.exports = router;