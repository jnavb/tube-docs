import { document } from 'browser-monads';

export const consoleIDEFactory = () => ({
  std: consoleFactory('IDEStd', '\u00AB '),
  log: consoleFactory('IDEConsole', 'Log: '),
  info: consoleFactory('IDEConsole', 'Info: '),
  error: consoleFactory('IDEConsole', 'Error: '),
  warn: consoleFactory('IDEConsole', 'Warn: '),
});

const consoleFactory = (eventName, preffix) => (...args) => {
  const proccessedMsg = args.reduce(
    (msg, v) => msg + (typeof v === 'object' ? JSON.stringify(v) : v),
    ''
  );
  const detail = preffix + proccessedMsg;
  const customEvent = new CustomEvent(eventName, { detail });
  document.dispatchEvent(customEvent);
};
