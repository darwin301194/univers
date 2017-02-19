webpackJsonp([2],{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(178);

	var _redux = __webpack_require__(185);

	var _actions = __webpack_require__(292);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var People = function (_React$Component) {
	  _inherits(People, _React$Component);

	  function People() {
	    _classCallCheck(this, People);

	    return _possibleConstructorReturn(this, (People.__proto__ || Object.getPrototypeOf(People)).apply(this, arguments));
	  }

	  _createClass(People, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.loadPeopleIfNeeded();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'people' },
	        'Luke Skywalker'
	      );
	    }
	  }]);

	  return People;
	}(_react2.default.Component);

	People.need = [_actions.loadPeople];

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    people: state.people
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)({ loadPeopleIfNeeded: _actions.loadPeopleIfNeeded }, dispatch)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(People);

/***/ }

});