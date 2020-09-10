const Course = require('../models/Course');
const {resultMultipleToObject} = require('../../util/resultmog');
class CoursesController{

    show(req,res,next){
        const {slug} = req.params;

        res.render('courses',{slug});
    }
}

module.exports = new CoursesController;
