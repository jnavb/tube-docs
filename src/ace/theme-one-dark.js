export const defineOneDarkTheme = () =>
  ace.define('ace/theme/one-dark', ['require', 'exports', 'module', 'ace/lib/dom'], function(
    require,
    exports,
    module
  ) {
    exports.isDark = true;
    exports.cssClass = 'ace-one-dark';
    exports.cssText = `
  .ace-one-dark .ace_gutter {
    background: #282c34;
    color: #5c6370;
  }
  .ace-one-dark .ace_print-margin {
    width: 1px;
    background: #424451;
  }
  .ace-one-dark {
    background-color: #282c34;
    color: #abb2bf;
  }
  .ace-one-dark .ace_cursor {
    color: #528bff;
  }
  .ace-one-dark .ace_marker-layer .ace_selection {
    background: #3d4350;
  }
  .ace-one-dark.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0 #268bd2;
  }
  .ace-one-dark .ace_marker-layer .ace_step {
    background: #3a6da0;
  }
  .ace-one-dark .ace_marker-layer .ace_bracket {
    background-color: #2b313a;
    border: 1px solid #3a6da0;
  }
  .ace-one-dark .ace_marker-layer .ace_active-line {
    background-color: #2b313a;
  }
  .ace-one-dark .ace_gutter-active-line {
    background-color: #2b313a;
  }
  .ace-one-dark .ace_marker-layer .ace_selected-word {
    background-color: #2b313a;
    border: 1px solid #3d4350;
  }
  .ace-one-dark .ace_invisible {
    color: #5c6370;
  }
  .ace-one-dark .ace_entity.ace_name.ace_tag,
  .ace-one-dark .ace_meta.ace_tag,
  .ace-one-dark .ace_storage {
    color: #c678dd;
  }
  .ace-one-dark .ace_keyword,
  .ace-one-dark .ace_punctuation,
  .ace-one-dark .ace_punctuation.ace_tag {
    color: #c678dd;
  }
  .ace-one-dark .ace_entity.ace_other.ace_attribute-name,
  .ace-one-dark .ace_constant.ace_character,
  .ace-one-dark .ace_constant.ace_language,
  .ace-one-dark .ace_constant.ace_numeric,
  .ace-one-dark .ace_constant.ace_other {
    color: #ffc66d;
  }
  .ace-one-dark .ace_invalid {
    color: #fff;
    background-color: #900;
  }
  .ace-one-dark .ace_invalid.ace_deprecated {
    color: #fff;
    background-color: #900;
  }
  .ace-one-dark .ace_support.ace_constant {
    color: #ffc66d;
  }
  .ace-one-dark .ace_support.ace_function {
    color: #61afef;
  }
  .ace-one-dark .ace_fold {
    background-color: #5c6370;
    border-color: #93a1a1;
  }
  .ace-one-dark .ace_storage.ace_type,
  .ace-one-dark .ace_support.ace_class,
  .ace-one-dark .ace_support.ace_type {
    color: #c678dd;
  }
  .ace-one-dark .ace_entity.ace_other,
  .ace-one-dark .ace_entity.ace_name.ace_function {
    color: #61afef;
  }
  .ace-one-dark .ace_variable {
    color: #e06c75;
  }
  .ace-one-dark .ace_variable.ace_parameter {
    color: #e06c75;
    font-style: italic;
  }
  .ace-one-dark .ace_string {
    color: #98c379;
  }
  .ace-one-dark .ace_comment {
    font-style: italic;
    color: #5c6370;
  }
  .ace-one-dark .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ1NbwZfALD/4PAAlTArlEC4r/AAAAAElFTkSuQmCC)
      right repeat-y;
  }
`;

    var dom = require('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  });
