const express  = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');

// connect db
db.connect();

app.use(express.static(path.join(__dirname,'public'))); // static file

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// http logger
app.use(morgan('combined'));

// Teample engine
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));


routes(app);


app.listen(port,() => console.log(`Run server`));