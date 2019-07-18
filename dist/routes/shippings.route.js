'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _shippings = require('../controllers/shippings.controller');

var _shippings2 = _interopRequireDefault(_shippings);

var _config = require('../config/config.dev');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/shipping', function (req, res) {
  _shippings2.default.getAll(req, res);
});

router.post('/shipping', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _ref2, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios2.default.get(_config2.default.YAddress_BASE_URL, {
              params: {
                AddressLine1: req.body.address,
                AddressLine2: req.body.city,
                UserKey: ''
              }
            });

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!data.ErrorCode) {
              _shippings2.default.addShipping(req, res);
            } else {
              res.send(data.ErrorMessage);
            }
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.delete('/shipping', function (req, res) {
  _shippings2.default.deleteAllShippings(req, res);
});

exports.default = router;