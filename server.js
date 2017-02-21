var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};


var express = require('express')
var app = express()

app.get('/power', function (req, res) {
    server.publish({topic: '/control',payload:'KEY_TV'})
    res.send('Hello World!')
})

app.get('/volumeUp', function (req, res) {
   server.publish({topic: '/control',payload:'KEY_VOLUMEUP'})
  res.send('Hello World!')
})

app.get('/volumeDown', function (req, res) {

   server.publish({topic: '/control',payload:'KEY_VOLUMEDOWN'})
  res.send('Hello World!')
})
app.get('/pictureEffect', function (req, res) {
    server.publish({topic: '/control',payload:'KEY_VIDEO'})
    res.send('Hello World!')
})
app.get('/soundEffect', function (req, res) {
    server.publish({topic: '/control',payload:'KEY_AUDIO'})
    res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(express.static('public'));


var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
