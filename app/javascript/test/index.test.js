import Vue from 'vue';

Vue.config.productionTip = false;

// Import all test files
const testsContext = require.context('./unit', true, /\.test$/)
testsContext.keys().forEach(testsContext)

// Import all JavaScript files
const srcContext = require.context('../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)

// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)

// Import all pasks
const packsContext = require.context('../packs', true, /\.js$/)
packsContext.keys().forEach(packsContext)
