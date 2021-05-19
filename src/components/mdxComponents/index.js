import styled from '@emotion/styled';
import React from 'react';
import Editor from '../IDE/editor';
import AnchorTag from './anchor';

const ReadOnlyWrapper = styled('div')`
  border: 2px solid #686868;
  border-radius: 24px;

  #ace-editor {
    pointer-events: none;
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
};
