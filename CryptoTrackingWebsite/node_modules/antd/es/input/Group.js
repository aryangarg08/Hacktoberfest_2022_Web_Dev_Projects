import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';

var Group = function Group(props) {
  var _classNames;

  var _useContext = useContext(ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      direction = _useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('input-group', customizePrefixCls);
  var cls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-compact"), props.compact), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, props.children);
};

export default Group;