var context = require.context('./test', true, /-test\.js$/);
context.keys().forEach(context);

context = require.context('./src', true, /\.js$/);
context.keys().forEach(context);
