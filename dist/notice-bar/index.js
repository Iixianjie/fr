import 'm78/notice-bar/style';
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import { useMeasure, useUpdateEffect } from 'react-use';
import { useSpring, config, animated } from 'react-spring';
import { useFormState } from '@lxjx/hooks';
import { lineStatusIcons, CloseOutlined } from 'm78/icon';
import { If } from 'm78/fork';
import Button from 'm78/button';
import cls from 'classnames';

var NoticeBar = function NoticeBar(_ref) {
  var _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? true : _ref$closable,
      desc = _ref.desc,
      message = _ref.message,
      status = _ref.status,
      fixedTop = _ref.fixedTop,
      right = _ref.right,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["closable", "desc", "message", "status", "fixedTop", "right", "className", "style"]);

  var _useMeasure = useMeasure(),
      _useMeasure2 = _slicedToArray(_useMeasure, 2),
      ref = _useMeasure2[0],
      height = _useMeasure2[1].height;

  var _useFormState = useFormState(props, true, {
    valueKey: 'show',
    triggerKey: 'onClose'
  }),
      _useFormState2 = _slicedToArray(_useFormState, 2),
      show = _useFormState2[0],
      setShow = _useFormState2[1];

  var _useSpring = useSpring(function () {
    return {
      height: 'auto',
      config: _objectSpread(_objectSpread({}, config.stiff), {}, {
        clamp: true
      })
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      spStyle = _useSpring2[0],
      set = _useSpring2[1];

  useUpdateEffect(function () {
    set({
      height: show ? height + 36 : 0
    }); // 24 = padding 8px * 2 + border 1px * 2 + 12px 下边距(填白)
    // eslint-disable-next-line
  }, [show, height]);
  var StatusIcon = lineStatusIcons[status];
  return /*#__PURE__*/React.createElement(animated.div, {
    style: _objectSpread(_objectSpread({}, spStyle), style),
    className: cls('m78-notice-bar', status && "__".concat(status), {
      __fixed: fixedTop
    }, className)
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "m78-notice-bar_wrap"
  }, /*#__PURE__*/React.createElement(If, {
    when: status
  }, function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "m78-notice-bar_left"
    }, /*#__PURE__*/React.createElement(StatusIcon, null));
  }), /*#__PURE__*/React.createElement("div", {
    className: "m78-notice-bar_cont"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m78-notice-bar_title ellipsis"
  }, message), /*#__PURE__*/React.createElement(If, {
    when: desc
  }, /*#__PURE__*/React.createElement("div", {
    className: "m78-notice-bar_desc"
  }, desc))), /*#__PURE__*/React.createElement("div", {
    className: "m78-notice-bar_right"
  }, right, /*#__PURE__*/React.createElement(If, {
    when: closable && !right
  }, /*#__PURE__*/React.createElement(Button, {
    className: "m78-notice-bar_close",
    icon: true,
    size: "mini",
    onClick: function onClick() {
      setShow(false);
    }
  }, /*#__PURE__*/React.createElement(CloseOutlined, {
    className: "m78-close-icon"
  }))))));
};

export default NoticeBar;