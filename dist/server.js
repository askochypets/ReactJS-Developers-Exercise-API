'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _shippings = require('./routes/shippings.route');

var _shippings2 = _interopRequireDefault(_shippings);

var _connect = require('./db/connect');

var _connect2 = _interopRequireDefault(_connect);

var _config = require('./config/config.dev');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _connect2.default)();

var app = (0, _express2.default)();
var port = _config2.default.serverPort;

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/', _shippings2.default);

app.listen(port, function () {
  console.info('App is running on port: ', port);
});