"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMergedStatus = exports.getFeedbackIcon = void 0;
exports.getStatusClassNames = getStatusClassNames;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _classnames = _interopRequireDefault(require("classnames"));

var _type = require("./type");

var InputStatuses = (0, _type.tuple)('warning', 'error', '');
var iconMap = {
  success: _CheckCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  validating: _LoadingOutlined["default"]
};

var getFeedbackIcon = function getFeedbackIcon(prefixCls, status) {
  var IconNode = status && iconMap[status];
  return IconNode ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(prefixCls, "-feedback-icon")
  }, /*#__PURE__*/_react["default"].createElement(IconNode, null)) : null;
};

exports.getFeedbackIcon = getFeedbackIcon;

function getStatusClassNames(prefixCls, status, hasFeedback) {
  var _classNames;

  return (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-success"), status === 'success'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-warning"), status === 'warning'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-error"), status === 'error'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-validating"), status === 'validating'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-feedback"), hasFeedback), _classNames));
}

var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};

exports.getMergedStatus = getMergedStatus;