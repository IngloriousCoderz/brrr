
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('counter', '<div> <h2>Redux Counter:</h2> <p> <button onclick="{onMinusClick}">-</button> {count} <button onclick="{onPlusClick}">+</button> </p> </div>', '', '', function(opts) {
    this.bind('count')

    this.onPlusClick = function() {
      this.dispatch({type: 'INCREMENT'})
    }.bind(this)

    this.onMinusClick = function() {
      this.dispatch({type: 'DECREMENT'})
    }.bind(this)
});
});