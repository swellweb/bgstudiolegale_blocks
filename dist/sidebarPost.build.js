/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/sidebarPost/index.js ***!
  \**********************************/
var __ = wp.i18n.__;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    ColorPicker = _wp$components.ColorPicker,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var _wp$data = wp.data,
    setState = _wp$data.setState,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch,
    useSelect = _wp$data.useSelect,
    select = _wp$data.select,
    withDispatch = _wp$data.withDispatch;

var PluginMetaFields = function PluginMetaFields(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Meta Fields Panel", "mds"),
    icon: "admin-post",
    intialOpen: true
  }, /*#__PURE__*/React.createElement(TextControl, {
    value: props.text_metafield,
    label: __("Text Meta", "mds"),
    onChange: function onChange(value) {
      return props.onMetaFieldChange(value);
    }
  }), /*#__PURE__*/React.createElement(ColorPicker, {
    color: props.text_metafield,
    label: __("Colour Meta", "mds"),
    onChangeComplete: function onChangeComplete(colour) {
      return props.onMetaFieldChange(colour.hex);
    }
  })));
};

PluginMetaFields = withSelect(function (select) {
  return {
    text_metafield: select('core/editor').getEditedPostAttribute('meta')['swellweb_text_metafield']
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(function (dispatch) {
  return {
    onMetaFieldChange: function onMetaFieldChange(value) {
      dispatch('core/editor').editPost({
        meta: {
          swellweb_text_metafield: value
        }
      });
    }
  };
})(PluginMetaFields);
registerPlugin('swellweb-sidebar', {
  icon: 'smiley',
  attributes: {
    colorHead: {
      type: String,
      "default": ''
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PluginSidebarMoreMenuItem, {
      target: "swellweb-sidebar"
    }, __('Meta Options', 'mds')), /*#__PURE__*/React.createElement(PluginSidebar, {
      name: "swellweb-sidebar",
      title: __('Meta Options', 'mds')
    }, /*#__PURE__*/React.createElement(PluginMetaFields, null)));
  }
});
/******/ })()
;
//# sourceMappingURL=sidebarPost.960a8097.map