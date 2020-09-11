const Course = require('../models/Course');
const {resultMultipleToObject} = require('../../util/resultmog');

class MeCoursesController{
    index(req,res,next){
        Course.find({})
        .then((datas) => {
            res.render('me/stored-courses',{datas: resultMultipleToObject(datas)})
        })
        .catch(next)
    }
}

module.exports = new MeCoursesController;