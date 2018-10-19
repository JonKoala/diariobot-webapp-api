var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/publicacoes', require('./routes/publicacoes'));
app.use('/classes', require('./routes/classes'));
app.use('/classificacoes', require('./routes/classificacoes'));
app.use('/predicoes', require('./routes/predicoes'));
app.use('/blacklist', require('./routes/blacklist'));
app.use('/macrorregioes', require('./routes/macrorregioes'));

var port = process.env['DIARIOBOT_API_PORT'];
app.listen(port, function() {
  console.log('Server up and running! Listening on ' + port + '...');
});