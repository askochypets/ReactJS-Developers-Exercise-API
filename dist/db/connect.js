'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config/config.dev');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var connectToDb = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var MONGO_URI;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            MONGO_URI = _config2.default.MONGO_URI;
            _context.prev = 1;
            _context.next = 4;
            return _mongoose2.default.connect(MONGO_URI);

          case 4:
            console.info('Connected to mongo!!!');
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);

            console.error('Could not connect to MongoDB');

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 7]]);
  }));

  return function connectToDb() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = connectToDb;