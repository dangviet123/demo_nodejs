const express  = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// connect db
db.connect();

app.use(express.static(path.join(__dirname,'public'))); // static file

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// http logger
//app.use(morgan('combined'));

// Teample engine
app.engine('hbs',
    exphbs({
        extname:'.hbs',
        helpers: { // định nghĩa các hàm dùng cho views
            viewIndex: (a,b) => a+b,
        }
    })
);

// teample engine
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));

routes(app);

app.listen(port,() => console.log(`Run server`));