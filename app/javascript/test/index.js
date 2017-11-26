const testsContext = require.context('./unit', true, /\.test$/)
testsContext.keys().forEach(testsContext)
