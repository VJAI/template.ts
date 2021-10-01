const testsContext = require.context('.', true, /test$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('.', true, /src$/);
srcContext.keys().forEach(srcContext);
