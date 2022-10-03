"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _col = _interopRequireDefault(require("../grid/col"));

var _context = require("./context");

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormItemInput = function FormItemInput(props) {
  var prefixCls = props.prefixCls,
      status = props.status,
      wrapperCol = props.wrapperCol,
      children = props.children,
      errors = props.errors,
      warnings = props.warnings,
      formItemRender = props._internalItemRender,
      extra = props.extra,
      help = props.help;
  var baseClassName = "".concat(prefixCls, "-item");
  var formContext = React.useContext(_context.FormContext);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = (0, _classnames["default"])("".concat(baseClassName, "-control"), mergedWrapperCol.className); // Pass to sub FormItem should not with col info

  var subFormContext = React.useMemo(function () {
    return (0, _extends2["default"])({}, formContext);
  }, [formContext]);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  var inputDom = /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children));
  var formItemContext = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      status: status
    };
  }, [prefixCls, status]);
  var errorListDom = /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
    value: formItemContext
  }, /*#__PURE__*/React.createElement(_ErrorList["default"], {
    errors: errors,
    warnings: warnings,
    help: help,
    helpStatus: status,
    className: "".concat(baseClassName, "-explain-connected")
  })); // If extra = 0, && will goes wrong
  // 0&&error -> 0

  var extraDom = extra ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-extra")
  }, extra) : null;
  var dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
    input: inputDom,
    errorList: errorListDom,
    extra: extraDom
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, inputDom, errorListDom, extraDom);
  return /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
    value: subFormContext
  }, /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedWrapperCol, {
    className: className
  }), dom));
};

var _default = FormItemInput;
exports["default"] = _default;