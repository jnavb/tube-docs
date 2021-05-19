import * as React from 'react';
import Editor from '../IDE/editor';

const CodeBlock = ({ children: exampleCode, ...props }) => {
  return <Editor></Editor>;
};

export default CodeBlock;
