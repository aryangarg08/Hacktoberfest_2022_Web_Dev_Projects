import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _extends from "@babel/runtime/helpers/esm/extends";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import RcMenu, { ItemGroup } from 'rc-menu';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import SubMenu from './SubMenu';
import Item from './MenuItem';
import { ConfigContext } from '../config-provider';
import devWarning from '../_util/devWarning';
import { SiderContext } from '../layout/Sider';
import collapseMotion from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import MenuContext from './MenuContext';
import MenuDivider from './MenuDivider';

function InternalMenu(props) {
  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      getPopupContainer = _React$useContext.getPopupContainer,
      direction = _React$useContext.direction;

  var rootPrefixCls = getPrefixCls();

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'light' : _props$theme,
      expandIcon = props.expandIcon,
      _internalDisableMenuItemTitleTooltip = props._internalDisableMenuItemTitleTooltip,
      inlineCollapsed = props.inlineCollapsed,
      siderCollapsed = props.siderCollapsed,
      restProps = __rest(props, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed"]);

  var passedProps = omit(restProps, ['collapsedWidth']); // ======================== Warning ==========================

  devWarning(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
  devWarning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.'); // ======================== Collapsed ========================
  // Inline Collapsed

  var mergedInlineCollapsed = React.useMemo(function () {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }

    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  var defaultMotions = {
    horizontal: {
      motionName: "".concat(rootPrefixCls, "-slide-up")
    },
    inline: collapseMotion,
    other: {
      motionName: "".concat(rootPrefixCls, "-zoom-big")
    }
  };
  var prefixCls = getPrefixCls('menu', customizePrefixCls);
  var menuClassName = classNames("".concat(prefixCls, "-").concat(theme), className); // ======================== Context ==========================

  var contextValue = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      inlineCollapsed: mergedInlineCollapsed || false,
      antdMenuTheme: theme,
      direction: direction,
      firstLevel: true,
      disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
    };
  }, [prefixCls, mergedInlineCollapsed, theme, direction, _internalDisableMenuItemTitleTooltip]); // ========================= Render ==========================

  return /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(RcMenu, _extends({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/React.createElement(EllipsisOutlined, null),
    overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: cloneElement(expandIcon, {
      className: "".concat(prefixCls, "-submenu-expand-icon")
    })
  })));
} // We should keep this as ref-able


var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu() {
    _classCallCheck(this, Menu);

    return _super.apply(this, arguments);
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement(SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, _extends({}, _this.props, context));
      });
    }
  }]);

  return Menu;
}(React.Component);

Menu.Divider = MenuDivider;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
export default Menu;