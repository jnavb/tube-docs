import styled from '@emotion/styled';
import React from 'react';
import Editor from '../IDE/editor';
import AnchorTag from './anchor';

const ReadOnlyWrapper = styled('div')`
  border: 2px solid #686868;
  border-radius: 24px;
  margin-bottom: 32px;
  margin-top: 32px;
  min-width: min(90vw, 700px);

  .ace_mobile-menu {
    display: none !important;
  }

  #ace-editor {
    border-radius: 22px;
  }

  #custom-ace-block {
    display: none;
  }

  .ace_hidden-cursors {
    opacity: 0;
  }
`;

const JSCode = ({ children }) => {
  return <ReadOnlyEditor mode="javascript">{children}</ReadOnlyEditor>;
};

const TubeCode = ({ children }) => {
  return <ReadOnlyEditor mode="tube">{children}</ReadOnlyEditor>;
};

const ReadOnlyEditor = ({ children, ...props }) => (
  <ReadOnlyWrapper>
    <Editor
      {...props}
      defaultValue={children}
      readOnly="true"
      maxLines={Infinity}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 4,
        highlightActiveLine: false,
      }}
    ></Editor>
  </ReadOnlyWrapper>
);

const TextBoxWrapper = styled('span')`
  border: 2px solid #686868;
  border-radius: 8px;
  display: block;
  padding: 16px;
  margin-bottom: 32px;
  margin-top: 32px;
  position: relative;

  .label {
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

const TextBox = ({ children, label }) => (
  <TextBoxWrapper>
    <div className="label">{label}</div>
    {children}
  </TextBoxWrapper>
);

const Note = ({ children }) => <TextBox label="Note">{children}</TextBox>;
const Warning = ({ children }) => <TextBox label="Warning">{children}</TextBox>;
const Limitation = ({ children }) => <TextBox label="Limitation">{children}</TextBox>;

export default {
  h1: props => (
    <h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => (
    <h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <p className="paragraph" {...props} />,
  a: AnchorTag,
  JSCode,
  TubeCode,
  Note,
  Warning,
  Limitation,
};
