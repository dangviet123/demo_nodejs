const news_route = require('./news');
const home_route = require('./home');
const courses_route = require('./courses');
const me_route = require('./me');
const route = (app) => {
    app.use('/',home_route);
    app.use('/news',news_route);
    app.use('/courses',courses_route); // TRANG CHI TIẾT
    app.use('/me',me_route);
};

module.exports = route;