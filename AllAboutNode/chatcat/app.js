var express = require('express'),
  app = express(),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  config = require('./config/config.js'),
  connectMongo = require('connect-mongo')(session),
  mongoose = require('mongoose').connect(config.dbURL),
  passport = require('passport'),
  facebookStrategy = require('passport-facebook').Strategy,
  rooms = [];

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
  // dev specific settings
  app.use(session({secret:config.sessionSecret, saveUninitialized:true, resave:true}));
} else {
  // production specific settings
  app.use(session({
    secret:config.sessionSecret,
    store: new connectMongo({
      //url:config.dbURL,
      mongoose_connection:mongoose.connections[0],
      stringify:true
    }), saveUnnitialized:true, resave:true}));
}

// var userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   fullname: String
// });
//
// var Person = mongoose.model('users', userSchema);
//
// var John = new Person({
//   username: 'jonhdoe',
//   password: 'john_wants_to_login',
//   fullname: 'John Doe'
// });
//
// John.save(function(err){
//   console.log('Done !');
// })

app.use(passport.initialize());
app.use(passport.session());

require('./auth/passportAuth.js')(passport, facebookStrategy, config, mongoose);

require('./routes/routes.js')(express, app, passport, config, rooms);

// app.listen(3000, function(){
//   console.log('ChatCAT Working on Port 3000');
//   console.log('Mode: ' + env);
// })
app.set('port', process.env.PORT || 3000);
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
require('./socket/socket.js')(io, rooms);

server.listen(app.get('port'), function(){
  console.log('ChatCAT on Port: ' + app.get('port'));
})
