/* ys.js : custom javascript functions */
(function(){
	"use strict";
	String.prototype.addComma = function(){return this?this.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"):this;};
	String.prototype.cutStr = function(a){return (this.indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a));}
	String.prototype.cutStr = function(a,b){return (this.indexOf(' ', a)==-1)?this:this.substring(0,this.indexOf(' ', a))+(b?"...":"");}
}());
