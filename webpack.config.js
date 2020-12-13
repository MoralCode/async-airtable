const path = require('path');

module.exports = {
  entry: './lib/asyncAirtable.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asyncAirtable.js',
  },
  optimization: {
    minimize: false,
  },
};
