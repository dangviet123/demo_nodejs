const news_route = require('./news');
const home_route = require('./home');
const courses_route = require('./courses');
const route = (app) => {
    app.use('/',home_route);
    app.use('/news',news_route);
    app.use('/courses',courses_route); // TRANG CHI TIẾT
};

module.exports = route;