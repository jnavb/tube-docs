import { document } from 'browser-monads';

export const getResultNode = () => document.querySelector('#tube-ide-result');

export const appendValue = retriever => result => {
  const node = retriever();
  node.value = node.value ? node.value + '\n' + result : result;
};

export const appendResult = appendValue(getResultNode);

export const clearValue = retriever => () => {
  retriever().value = '';
};

export const clearResult = clearValue(getResultNode);

export const scrollToBottom = retriever => () => {
  const node = retriever();
  node.scrollTo(0, node.scrollHeight);
};

export const scrollResultToBottom = scrollToBottom(getResultNode);

export const transformCodeForIDE = (jsCode, compiledTubeCode) => {
  const allCode = jsCode + compiledTubeCode;
  return changeConsoleForIDELog(allCode);
};

export const changeConsoleForIDELog = code =>
  code.replace(/console\.(error|log|info|debug)/g, 'console.ide.$1');
