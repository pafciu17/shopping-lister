import "babel-polyfill";
const testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);