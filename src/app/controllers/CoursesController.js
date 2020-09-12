const Course = require('../models/Course');
const {resultToObject} = require('../../util/resultmog');

class CoursesController{
    show(req,res,next){
        const { slug } = req.params;
        Course.findOne({slug:slug})
        .then(data => {
            res.render('courses/show',{data: resultToObject(data)});
        })
        .catch(error => next(error));
    }
    create(req,res,next){
        res.render('courses/create');
    }
    store(req,res,next){
        let data_body = {...req.body};
        const course = new Course(data_body);
        course.save()
        .then(() => res.redirect('/'))
        .catch(next)
    }
    edit(req,res,next){
        const {id} = req.params;
        Course.findById(id)
        .then(data => {
            res.render('courses/edit',{data: resultToObject(data)})
        })
        .catch(next);
    }

    update(req,res,next){
        const {id} = req.params;
        let data_body = {...req.body};

        Course.updateOne({ _id: id },data_body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
        // try {
        //     const result = await Course.updateOne({ _id: id },data_body);
        //     console.log(result);
        //     res.redirect('/me/stored/courses');
        // } catch (error) {
        //     next(error);
        // }
        
    }
    destroy(req,res,next){
        const {id} = req.params;
        Course.deleteOne({ _id: id })
        .then(() => {
            res.json({Status: true});
        })
        .catch(next);
    }
}

module.exports = new CoursesController;