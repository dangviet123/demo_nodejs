const news_route = require('./news');
const home_route = require('./home');
const route = (app) => {
    app.use('/',home_route);
    app.use('/news',news_route);
};

module.exports = route;