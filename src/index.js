'use strict';
var Vue = require('vue');
var _ = require('lodash');
var marked = require('marked');

var editor = new Vue({
  el: '#editor',
  data: {
    input: '# 入力してください'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
});