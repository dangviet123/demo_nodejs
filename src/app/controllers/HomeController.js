const Course = require('./../models/Course');
const {resultMultipleToObject} = require('../../util/resultmog');
class HomeController{

    index(req,res,next){
        Course.find({})
            .then(course => res.render('home',{course: resultMultipleToObject(course)}))
            .catch(error => next(error));
    }

    search(req,res){
        res.render('search');
    }
    
    postSearch(req,res){ // gửi yêu cầu post
        res.json(req.body);
    }
}
module.exports = new HomeController;
