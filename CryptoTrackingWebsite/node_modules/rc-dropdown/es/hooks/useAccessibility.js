import * as React from 'react';
import KeyCode from "rc-util/es/KeyCode";
var ESC = KeyCode.ESC,
    TAB = KeyCode.TAB;
export default function useAccessibility(_ref) {
  var visible = _ref.visible,
      setTriggerVisible = _ref.setTriggerVisible,
      triggerRef = _ref.triggerRef,
      menuRef = _ref.menuRef,
      menuClassName = _ref.menuClassName,
      onVisibleChange = _ref.onVisibleChange;

  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible && triggerRef.current) {
      if (triggerRef.current.triggerRef.current) {
        triggerRef.current.triggerRef.current.focus();
      }

      setTriggerVisible(false);

      if (typeof onVisibleChange === 'function') {
        onVisibleChange(false);
      }
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;

      case TAB:
        handleCloseMenuAndReturnFocus();
        break;
    }
  };

  var focusOpenedMenu = function focusOpenedMenu() {
    if (menuRef.current) {
      var _menuRef$current$clas, _menuRef$current$quer, _menuRef$current;

      var menuList = ((_menuRef$current$clas = menuRef.current.className) === null || _menuRef$current$clas === void 0 ? void 0 : _menuRef$current$clas.includes(menuClassName)) ? menuRef.current : (_menuRef$current$quer = (_menuRef$current = menuRef.current).querySelector) === null || _menuRef$current$quer === void 0 ? void 0 : _menuRef$current$quer.call(_menuRef$current, menuClassName);

      if (menuList) {
        menuList['focus'](); // eslint-disable-line @typescript-eslint/dot-notation
      }
    }
  };

  React.useEffect(function () {
    if (visible) {
      setTimeout(function () {
        focusOpenedMenu();
        window.addEventListener('keydown', handleKeyDown);
      }, 100);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    return function () {
      return null;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  var returnFocus = function returnFocus() {
    if (visible && triggerRef.current) {
      if (triggerRef.current.triggerRef.current) {
        setTimeout(function () {
          var _triggerRef$current, _triggerRef$current$t, _triggerRef$current$t2;

          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$t = _triggerRef$current.triggerRef) === null || _triggerRef$current$t === void 0 ? void 0 : (_triggerRef$current$t2 = _triggerRef$current$t.current) === null || _triggerRef$current$t2 === void 0 ? void 0 : _triggerRef$current$t2.focus();
        }, 100);
      }
    }
  };

  return {
    returnFocus: returnFocus
  };
}