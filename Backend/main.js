var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
// var multer = require('multer');
// var imgURI;
// var storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, "Frontend/www/assets/images/uploaded_images");
//     },
//     filename: function(req, file, callback) {
//         imgURI = file.fieldname + "_" + Date.now() + "_" + file.originalname;
//
//         callback(null, imgURI);
//     }
// });
// var uploadConfig = multer({storage: storage}).array('photo',2);

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    app.get('/api/get-cities/', api.getCities);
    app.post('/api/get-comments/', api.getComment);
    app.post('/api/write-comments/', api.writeComment);
    app.post('/api/login/', api.login);
    app.post('/api/registration/', api.registration);
    app.get('/api/logout/', api.logout);
    app.get('/api/check-login/', api.checkLogin);

    // app.post('/api/upload/', uploadConfig , api.upload);
    app.get('/', pages.mainPage);
    app.get('/city.html', pages.cityPage);
    app.get('/backpack.html',pages.backpackPage);
    app.get('/about.html', pages.aboutUs);

    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    var app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(morgan('dev'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(session({
        secret: "DreamTeam"
    }));

    configureEndpoints(app);

    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;