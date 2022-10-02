import * as React from 'react';
import omit from "rc-util/es/omit";
import { FormProvider as RcFormProvider } from 'rc-field-form';
import { useMemo } from 'react';
export var FormContext = /*#__PURE__*/React.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
export var NoStyleItemContext = /*#__PURE__*/React.createContext(null);
export var FormProvider = function FormProvider(props) {
  var providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, providerProps);
};
export var FormItemPrefixContext = /*#__PURE__*/React.createContext({
  prefixCls: ''
});
export var FormItemStatusContext = /*#__PURE__*/React.createContext({});
export var NoFormStatus = function NoFormStatus(_ref) {
  var children = _ref.children;
  var emptyContext = useMemo(function () {
    return {};
  }, []);
  return /*#__PURE__*/React.createElement(FormItemStatusContext.Provider, {
    value: emptyContext
  }, children);
};