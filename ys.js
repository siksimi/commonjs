/* ys.js : Private javascript functions */
var ys = ys || {}; (function(){"use strict";
ys.isiOS = (navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'))?true:false;
ys.isAndroid = navigator.userAgent.match('Android')?true:false;
ys.getSearch = function(){return window.location.search;};
ys.getVar = function(a){var b = {}; var c = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,k,v) {b[k] = v;}); return a?(b[a]?b[a]:null):b;};
ys.getVars = function(a){var b = {}; var c = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,k,v) {b[k] = v;}); return a?(b[a]?b[a]:null):b;};
ys.dateToString = function(a){var b = a?new Date(a):new Date(), p = function(i){return (i<10)?"0"+i:i;}; return p(b.getFullYear()) + "." + p(1 + b.getMonth()) + "." + p(b.getDate()) + " " +p(b.getHours()) + ":" +p(b.getMinutes());};
Object.prototype.addComma = function(){return this?parseInt(this).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"):this;};
Object.prototype.cutStr = function(a){return (this.toString().indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a));};
Object.prototype.cutStr = function(a,b){return (this.toString().indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a))+(b?"...":"");};
}());
