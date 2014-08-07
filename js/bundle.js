(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global){

    var lib = {};

    lib.returnKakeru = function(first, second){
        return first * second;
    };

    // CommonJS module code
    if (typeof define === "function" && define.amd) {
        define(function() { return lib; });
    } else if (typeof exports === "object") {
        module.exports = lib;
    } else {
        global.lib = lib;
    }
    
})(this);
},{}],2:[function(require,module,exports){
(function(global){

    var lib = {};

    lib.returnPlus = function(first, second){
        return first + second;
    };

    // CommonJS module code
    if (typeof define === "function" && define.amd) {
        define(function() { return lib; });
    } else if (typeof exports === "object") {
        module.exports = lib;
    } else {
        global.lib = lib;
    }
    
})(this);
},{}],3:[function(require,module,exports){
(function(){
    var test = require("./module/test");
    var hoge = require("./module/hoge");

    console.log(test.returnPlus(1, 2));
    console.log(hoge.returnKakeru(1, 2));
})();
},{"./module/hoge":1,"./module/test":2}]},{},[3])