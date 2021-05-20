import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { document } from 'browser-monads';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import media from 'styled-media-query';
import { baseStyles } from '../styles/GlobalStyles';
import { consoleIDEFactory } from './console';
import Editor from './editor';
import { appendResult, clearResult, scrollResultToBottom, transformCodeForIDE } from './helpers';
import RunButton from './run-button';

const __tube_lang__ = require('tube-lang');

const IDEWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 22px;
  height: 100vh;
  align-content: flex-start;
  padding: 8px;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};

  .ace_mobile-menu {
    display: none !important;
  }

  .ace-editor-bottom-margin {
    margin-top: 32px !important;

    ${media.lessThan('small')`
    margin-top: 42px !important;
  `}
  }
`;

const Result = styled.div`
  height: calc(22% - 68px);
  width: 100%;
  flex-grow: 1;

  ${media.lessThan('medium')`
      height: calc(22% - 90px);
    `}

  ${media.lessThan('small')`
    height: calc(100% - 140px);
  `}

  textarea {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    border-radius: 22px;
    color: #abb2bf;
    resize: none;
    outline: none;
    border: none;
    padding: 12px;

    ${media.lessThan('small')`
    margin-top: 0px;
  `}
  }
`;

const EditorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-between;
  column-gap: 16px;
  height: calc(78% - 68px);

  ${media.lessThan('medium')`
      height: calc(78% - 90px);
    `}

  ${media.lessThan('small')`
    height: calc(100% - 162px);
  `}

  & > div,
  .ace_editor {
    height: 100% !important;
  }
`;

const Tabs = styled.div`
  display: flex;
  height: 44px;
  margin-left: 24px;
  column-gap: 8px;
  flex-basis: 100%;
  z-index: 9;

  .btn--active {
    border-top: none;
  }

  ${media.lessThan('small')`
    column-gap: 6px;
  `}
`;

const Tab = styled.button`
  padding: 12px;
  min-width: 100px;
  background-color: #282c34;
  border: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-top: 6px solid #001933;
  font-weight: 600;
  color: #abb2bf;

  ${media.lessThan('small')`
    min-width: 80px;
  `}
`;

const RunWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 28px 8px;
  margin-top: 56px;

  top: 71%;
  left: 0;

  button {
    width: 100%;
    border-radius: 16px;

    &::after {
      border-radius: 16px;
    }
  }

  .button__inner {
    border-radius: 16px !important;
  }

  ${media.lessThan('small')`
    order: 4;
    margin-top: 10px;

    button {
      width: 100%;
      border-radius: 16px;

      &::after {
        border-radius: 16px;
      }
    }

    .button__inner {
      border-radius: 16px !important;
    }
  `}
`;

export default class IDE extends Component {
  constructor(props) {
    super(props);

    const {
      pageContext: { jsCode, tubeCode },
    } = this.props;

    this.state = {
      activeTab: 'TUBE',
      jsCode: jsCode || '',
      tubeCode: tubeCode || '',
      result: '',
      runButtonActive: false,
    };

    this.runButton = React.createRef();
    this.jsEditor = React.createRef();
    this.tubeEditor = React.createRef();

    console.ide = consoleIDEFactory();

    document.addEventListener('IDEConsole', ({ detail }) => {
      appendResult('  ' + detail);
    });
    document.addEventListener('IDEStd', ({ detail }) => {
      appendResult(detail);
    });
  }

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  retrieveActiveTheme = () => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));

    this.setState({ isDarkThemeActive });
  };

  onCmdEnter = () => {
    this.runButton.current.click();
  };

  triggerRunButtonAnimation = () => {
    this.setState({ runButtonActive: true }, () =>
      setTimeout(() => this.setState({ runButtonActive: false }), 200)
    );
  };

  run = () => {
    this.triggerRunButtonAnimation();
    clearResult();

    const { tubeCode, jsCode } = this.state;
    try {
      const compiledTubeCode = this.compileTube(tubeCode);
      console.log('/* JS Code */\n\n', jsCode, '\n\n/* Tube compiled Code */\n', compiledTubeCode);
      const transformedCode = transformCodeForIDE(jsCode, compiledTubeCode);
      let result = this.runJS(transformedCode);

      console.ide.std(result);
      scrollResultToBottom();
    } catch (error) {
      appendResult(error.toString().substring(7));
    }
  };

  compileTube = code => {
    try {
      const compiledCode = __tube_lang__.compile(code) || '';
      return compiledCode;
    } catch (error) {
      throw new Error(`-- Tube compile error --\n\n${error}`);
    }
  };

  runJS = code => {
    try {
      const result = eval(code);
      return result;
    } catch (error) {
      throw new Error(`-- Runtime JS error --\n\n${error}`);
    }
  };

  setTab = activeTab => {
    activeTab === 'JS'
      ? this.jsEditor.current.state.editor.focus()
      : this.tubeEditor.current.state.editor.focus();
    this.setState(() => ({
      activeTab,
    }));
  };

  onChange = code => {
    this.setState({ code });
  };

  render() {
    const { activeTab, isDarkThemeActive } = this.state;
    const {
      pageContext: { jsCode: defaultJSCode, tubeCode: defaultTubeCode, title },
    } = this.props;

    return (
      <IDEWrapper isDarkThemeActive={isDarkThemeActive}>
        <Helmet>
          <title>{title}</title>
          <meta name="title" content="Editor" />
          <meta name="description" content="Editor to code TUBE" />
          <meta property="twitter:title" content="Editor" />
          <meta property="twitter:description" content="Editor to code TUBE" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.6.7/rxjs.umd.js" />
          <script src="https://cdn.jsdelivr.net/g/lodash@4(lodash.min.js+lodash.fp.min.js)" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min.js" />
        </Helmet>
        <Global styles={baseStyles} />
        <Tabs className="hide-desktop">
          <Tab
            isDarkThemeActive={isDarkThemeActive}
            className={activeTab === 'JS' ? 'btn--active' : ''}
            onClick={() => this.setTab('JS')}
          >
            JS
          </Tab>
          <Tab
            isDarkThemeActive={isDarkThemeActive}
            className={activeTab === 'TUBE' ? 'btn--active' : ''}
            onClick={() => this.setTab('TUBE')}
          >
            Tube
          </Tab>
          <Tab
            isDarkThemeActive={isDarkThemeActive}
            className={`hide-desktop-tablet ${activeTab === 'RESULT' ? 'btn--active' : ''}`}
            onClick={() => this.setTab('RESULT')}
          >
            Result
          </Tab>
        </Tabs>

        <EditorsWrapper className={`${activeTab === 'RESULT' ? 'hide-tablet-mobile' : ''}`}>
          <Editor
            ref={this.jsEditor}
            onChange={jsCode => this.setState({ jsCode })}
            cmdEnter={this.run}
            cmdOne={() => this.setTab('JS')}
            cmdTwo={() => this.setTab('TUBE')}
            shortcutLabel="⌘1"
            mode="javascript"
            placeholder={`
 Imperative JS 🌍`}
            name="js-editor"
            className={`editor ${activeTab === 'JS' ? '' : 'hide-tablet-mobile'}`}
            defaultValue={defaultJSCode || ''}
          ></Editor>

          <Editor
            ref={this.tubeEditor}
            onChange={tubeCode => this.setState({ tubeCode })}
            cmdEnter={this.run}
            cmdOne={() => this.setTab('JS')}
            cmdTwo={() => this.setTab('TUBE')}
            shortcutLabel="⌘2"
            mode="tube"
            placeholder={`
Tube 🚀 `}
            name="tube-editor"
            className={`editor ${activeTab === 'TUBE' ? '' : 'hide-tablet-mobile'}`}
            defaultValue={defaultTubeCode || ''}
          ></Editor>
        </EditorsWrapper>
        <RunWrapper className={activeTab === 'RESULT' ? '' : 'ace-editor-bottom-margin'}>
          <RunButton
            ref={this.runButton}
            onClick={this.run}
            active={this.state.runButtonActive}
          ></RunButton>
        </RunWrapper>
        <Result className={`${activeTab === 'RESULT' ? '' : 'hide-mobile'}`}>
          <textarea id="tube-ide-result" className="result" readOnly></textarea>
        </Result>
      </IDEWrapper>
    );
  }
}
