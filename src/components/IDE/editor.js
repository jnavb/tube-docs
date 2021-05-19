import styled from '@emotion/styled';
import Loadable from '@loadable/component';
import React from 'react';
import { defineTubeAceMode } from '../../ace/mode-tube';
import { defineOneDarkTheme } from '../../ace/theme-one-dark';

const borderRadius = '22px';

const EditorWrapper = styled.div`
  flex-grow: 1;
  position: relative;

  .ace_editor {
    width: auto !important;
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  .ace_placeholder {
    font-size: 24px;
  }

  .shortcut-label {
    position: absolute;
    color: #889196;
    right: 11px;
    bottom: -6px;
    z-index: 2;
    border-radius: 2px;
    padding: 0px 3px;
  }
`;

const BlockBeforeEditor = styled.div`
  width: 100%;
  height: ${borderRadius};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  background-color: #282c34;
`;

const AceEditor = Loadable(() => {
  require('ace-builds/src-noconflict/ace');
  require('ace-builds/src-noconflict/mode-javascript');
  defineTubeAceMode();
  defineOneDarkTheme();
  return import('react-ace');
});

export class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, cmdEnter, shortcutLabel, ...props } = this.props;
    const baseEditorProps = {
      fontSize: 16,
      showPrintMargin: false,
      showGutter: false,
      highlightActiveLine: true,
      theme: 'one-dark',

      setOptions: {
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 4,
      },
    };

    return (
      <EditorWrapper className={className}>
        <span className="shortcut-label">{shortcutLabel}</span>
        <BlockBeforeEditor></BlockBeforeEditor>
        <AceEditor
          {...baseEditorProps}
          {...props}
          onLoad={editor => {
            this.setState({ editor });
            editor.commands.addCommand({
              name: 'CmdEnter',
              bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
              exec: () => this.props.cmdEnter && this.props.cmdEnter(),
              readOnly: false,
            });
            editor.commands.addCommand({
              name: 'Cmd1',
              bindKey: { win: 'Ctrl-1', mac: 'Command-1' },
              exec: () => this.props.cmdOne && this.props.cmdOne(),
              readOnly: false,
            });
            editor.commands.addCommand({
              name: 'Cmd2',
              bindKey: { win: 'Ctrl-2', mac: 'Command-2' },
              exec: () => this.props.cmdTwo && this.props.cmdTwo(),
              readOnly: false,
            });
            editor.renderer.setPadding(16);
            editor.renderer.setScrollMargin(16);
          }}
        />
      </EditorWrapper>
    );
  }
}

export default Editor;
