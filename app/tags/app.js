
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('app', '<div id="content"> <h1>&nbsp;</h1> <counter></counter> <h2>Welcome!</h2> <ul> <li> <a href="http://brunch.io/">Brunch</a> </li> <li> <a href="http://riotjs.com/">Riot</a> </li> <li> <a href="http://redux.js.org">Redux</a> </li> </ul> </div>', '', '', function(opts) {
});
});