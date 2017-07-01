"use strict";

const fs = require('fs');

/**
 * Web socket server for delivering styles
 */
const io = require('socket.io')();
const webSocketPort = process.env.WEB_SOCKET_PORT || 4001;
const webSocketAddress = `http://localhost:${webSocketPort}`
io.on('connection', function(socket) {
  console.log(`Client connected :: ${socket.request.headers['user-agent']}`);
});
io.listen(webSocketPort);
console.log(`Web socket server started in ${webSocketAddress}/`);

/**
  Chokidar setup for watching CSS changes and emitting changes to socket
 */
const chokidar = require('chokidar');
const watchPath = __dirname + '/frontend/dist/styles/main.dist.css';
const watchOptions = {
  ignored: /[\/\\]\./
};

chokidar
  .watch(watchPath, watchOptions)
  .on('change', (path) => {
    if (fs.readFileSync(path, 'utf-8')) {
      io.emit('change');      
    }
  });

/**
 *  A development server for the rest of the app
 */
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const server = express();

server.use(morgan('dev'));
server.use(compression());

/**
 * Setup static file serving before any other routes
 */
const buildDir = __dirname + '/frontend/dist';
server.use('/assets', express.static(buildDir + '/assets'));
server.use('/scripts', express.static(buildDir + '/scripts'));
server.use('/styles', express.static(buildDir + '/styles'));

/**
 * Serves the same index.html for all routes. Allows
 * using URLs without hashes. This is a naive approach so
 * it might not maybe good for production use.
 */
server.get('*', function rootRoute(req, res) {
  const cheerio = require('cheerio');
  const file = fs.readFileSync(buildDir + '/index.html', 'utf-8');
  
  const $ = cheerio.load(file);

  $('body').append(`
    <script type="text/javascript" src="${webSocketAddress}/socket.io/socket.io.js"></script>
    <script type="text/javascript">
      (function() {
        var socket = io.connect('${webSocketAddress}');
        var linkEl = document.getElementsByTagName('link')[0];
        var initialHref = linkEl.href;
        socket.on('change', function () {
          linkEl.href = initialHref + '?' + Math.random();
          console.info("Styles updated :: ", new Date());
        });
      }())
    </script>
  `);
  
  res.send($.html());
});

const port = process.env.PORT || 4000;
server.listen(port, function() {
  console.log(`Web server started in http://localhost:${port}/`);
});
