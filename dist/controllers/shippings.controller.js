'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _shippings = require('../models/shippings.model');

var _shippings2 = _interopRequireDefault(_shippings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var shippings;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _shippings2.default.getAll();

            case 3:
              shippings = _context.sent;

              console.info('sending all shippings...');
              res.send(shippings);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.error('Error in getting shippings- ' + _context.t0);
              res.send('Got error in getAll');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function getAll(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),

  addShipping: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var shippingToAdd, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              shippingToAdd = (0, _shippings2.default)({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                city: req.body.city,
                email: req.body.email,
                phone: req.body.phone,
                notes: req.body.notes
              });
              _context2.prev = 1;
              _context2.next = 4;
              return _shippings2.default.addShipping(shippingToAdd);

            case 4:
              result = _context2.sent;

              console.info('Adding shipping...');
              res.json(result);
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](1);

              console.error('Error in adding shippings- ' + _context2.t0);
              res.send('Got error in addShipping');

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[1, 9]]);
    }));

    return function addShipping(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),

  deleteAllShippings: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _shippings2.default.deleteAll();

            case 3:
              result = _context3.sent;

              res.send(result);
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              console.error('Error in deleting shippings- ' + _context3.t0);
              res.send('Got error in deleteAllShippings');

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function deleteAllShippings(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()
};