const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  app = express(),
  http = require('http'),
  path = require('path'),
  server = http.createServer(app),
  config = require('./config'),
  minifyHTML = require('express-minify-html'),
  getHtml = require('./build/server');

app.use(helmet());

app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));

app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

app.use('/favicons', express.static(path.join(__dirname, 'favicons')));

app.use('/config', (req, res) => {
  res.send(config.client);
});

app.use('/api/test', (req, res, next) => {
  setTimeout(() => {
    res.send({status: 1})

  }, 2000)
});

/*app.use('/', (req, res, next) => {
  let test = getHtml;

  res.send(getHtml(req.url))
});*/
app.use('/', (req, res, next) => {

  res.sendFile('index.html',{root:__dirname})
});
app.set('port', process.env.PORT || config.port || '3000');

server.listen(app.get('port'), function () {
  console.log(`Приложение запущено http://localhost:${app.get('port')}`);
});
