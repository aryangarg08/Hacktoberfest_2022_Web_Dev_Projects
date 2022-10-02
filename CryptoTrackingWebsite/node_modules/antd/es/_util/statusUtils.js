import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import classNames from 'classnames';
import { tuple } from './type';
var InputStatuses = tuple('warning', 'error', '');
var iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
};
export var getFeedbackIcon = function getFeedbackIcon(prefixCls, status) {
  var IconNode = status && iconMap[status];
  return IconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-feedback-icon")
  }, /*#__PURE__*/React.createElement(IconNode, null)) : null;
};
export function getStatusClassNames(prefixCls, status, hasFeedback) {
  var _classNames;

  return classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-status-success"), status === 'success'), _defineProperty(_classNames, "".concat(prefixCls, "-status-warning"), status === 'warning'), _defineProperty(_classNames, "".concat(prefixCls, "-status-error"), status === 'error'), _defineProperty(_classNames, "".concat(prefixCls, "-status-validating"), status === 'validating'), _defineProperty(_classNames, "".concat(prefixCls, "-has-feedback"), hasFeedback), _classNames));
}
export var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};