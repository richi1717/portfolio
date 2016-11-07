var context = require.context('./specs', true, /\.jsx?$/);
context.keys().forEach(context);
