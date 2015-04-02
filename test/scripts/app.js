require.config({
  baseUrl: './',
  paths: {
    'jquery'        : '../../node_modules/jquery/dist/jquery',
    'jquery-csv'    : '../../src/jquery.csv',
    'mocha'         : '../../node_modules/mocha/mocha',
    'chai'          : '../../node_modules/chai/chai',
  },
  shim: {
    'mocha': { 
      exports: 'mocha'
    },
    'chai': {
      exports: 'chai'
    },
    'jquery-csv' : {
      deps: ['jquery'],
      exports: 'jQuery.fn.csv',
    }
  },
});

define(['jquery', 'jquery-csv', 'chai', 'mocha'], function(jquery, csv, chai, mocha) {
  //require();
  //require();
  
  // chai setup
  //var chai = require();
  var expect = chai.expect();
  var should = chai.should();

  // mocha setup
  //var mocha = require();
  mocha.setup('bdd');
  mocha.reporter('html');
  mocha.bail(false);
 
  require(['test.js'], function(require) {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });
});
