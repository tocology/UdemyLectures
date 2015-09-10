var express = require('express'),
    path = require('path'),
    config = require('./config/config.js'),
    knox = require('knox');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
app.set('host', config.host);

// connect S3 with know library
var knoxClient = knox.createClient({
  key: config.S3AccessKey,
  secret: config.S3Secret,
  bucket: config.S3Bucket
})

require('./routes/routes.js')(express, app);

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), function(){
  console.log('PhotoGRID Running on port: ' + app.get('port'));
});
