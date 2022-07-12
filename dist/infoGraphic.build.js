/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/infoGraphic/index.js ***!
  \**********************************/
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var InspectorControls = wp.blockEditor.InspectorControls;
var registerBlockType = wp.blocks.registerBlockType;
var RawHTML = wp.element.RawHTML;
registerBlockType("swell/infographic", {
  title: "Inpho graphic",
  icon: "hammer",
  category: "widgets",
  attributes: {
    shortcode: {
      type: String,
      "default": ''
    },
    textColor: {
      type: String,
      "default": ''
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        shortcode = _props$attributes.shortcode,
        textColor = _props$attributes.textColor;
    var setAttributes = props.setAttributes;

    var onChangeTextColor = function onChangeTextColor(newTextColor) {
      setAttributes({
        textColor: newTextColor
      });
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: 'Color settings',
      initialOpen: false,
      colorSettings: [{
        value: textColor,
        onChange: onChangeTextColor,
        label: 'Text color'
      }]
    })), /*#__PURE__*/React.createElement("div", null, "Aggiunta info graphic"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RawHTML, null)));
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var textColor = attributes.textColor;
    var shortcode = "[infographic colors='".concat(textColor, "']");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RawHTML, null, shortcode));
  }
});
/******/ })()
;
//# sourceMappingURL=infoGraphic.4ff291d2.map