declare global {
  // eslint-disable-next-line no-var
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

// Tell React that it is rendering in a test environment
// See https://github.com/testing-library/react-testing-library/issues/1061
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export {};
