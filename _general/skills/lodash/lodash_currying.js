var _ = require("lodash");
// Load the full build.

// var _ = require('lodash/core');
// Load the core build.
// var fp = require('lodash/fp');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.

// Load method categories.
var array = require("lodash/array");
var object = require("lodash/fp/object");

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require("lodash/at");
var curryN = require("lodash/fp/curryN");

function sum(a, b) {
  return a + b;
}

let carriedSum = _.curry(sum); // lodash 라이브러리의 _.carry 사용

console.log(carriedSum(1, 2));
console.log(carriedSum(1)(2));
