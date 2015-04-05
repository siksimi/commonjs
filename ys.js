/* ys.js : Private javascript functions */
var ys = ys || {}; (function(){"use strict";
ys.getSearch = function(){return window.location.search;};
ys.getVar = function(a){var b = {}; var c = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,k,v) {b[k] = v;}); return a?(b[a]?b[a]:null):b;};
ys.getVars = function(a){var b = {}; var c = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,k,v) {b[k] = v;}); return a?(b[a]?b[a]:null):b;};
Object.prototype.addComma = function(){return this?parseInt(this).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"):this;};
Object.prototype.cutStr = function(a){return (this.toString().indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a));};
Object.prototype.cutStr = function(a,b){return (this.toString().indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a))+(b?"...":"");};
}());
