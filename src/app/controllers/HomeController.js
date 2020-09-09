class HomeController{

    index(req,res){
        res.render('home');
    }

    search(req,res){
        res.render('search');
    }
    
    postSearch(req,res){
        res.json(req.body);
    }
}
module.exports = new HomeController;
