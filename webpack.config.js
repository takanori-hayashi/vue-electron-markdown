'use strict';
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(path.join(__dirname, 'dist', 'static', 'js')),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};