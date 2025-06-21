/******/!function(e){/******/
/******/
// The require function
/******/
function n(r){/******/
/******/
// Check if module is in cache
/******/
if(t[r])/******/
return t[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var o=t[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}// webpackBootstrap
/******/
// install a JSONP callback for chunk loading
/******/
var r=window.webpackJsonp;/******/
window.webpackJsonp=function(t,a,i){/******/
for(/******/
// add "moreModules" to the modules object,
/******/
// then flag all "chunkIds" as loaded and fire callback
/******/
var c,u,f,s=0,l=[];s<t.length;s++)/******/
u=t[s],/******/
o[u]&&/******/
l.push(o[u][0]),/******/
o[u]=0;/******/
for(c in a)/******/
Object.prototype.hasOwnProperty.call(a,c)&&(/******/
e[c]=a[c]);/******/
for(/******/
r&&r(t,a,i);l.length;)/******/
l.shift()();/******/
if(i)/******/
for(s=0;s<i.length;s++)/******/
f=n(n.s=i[s]);/******/
return f};/******/
/******/
// The module cache
/******/
var t={},o={/******/
manifest:0};/******/
/******/
// This file contains only the entry chunk.
/******/
// The chunk loading function for additional chunks
/******/
n.e=function(e){/******/
function r(){/******/
// avoid mem leaks in IE.
/******/
c.onerror=c.onload=null,/******/
clearTimeout(u);/******/
var n=o[e];/******/
0!==n&&(/******/
n&&/******/
n[1](new Error("Loading chunk "+e+" failed.")),/******/
o[e]=void 0)}/******/
var t=o[e];/******/
if(0===t)/******/
return new Promise(function(e){e()});/******/
/******/
// a Promise means "currently loading".
/******/
if(t)/******/
return t[2];/******/
/******/
// setup Promise in chunk cache
/******/
var a=new Promise(function(n,r){/******/
t=o[e]=[n,r]});/******/
t[2]=a;/******/
/******/
// start chunk loading
/******/
var i=document.getElementsByTagName("head")[0],c=document.createElement("script");/******/
c.type="text/javascript",/******/
c.charset="utf-8",/******/
c.async=!0,/******/
c.timeout=12e4,/******/
/******/
n.nc&&/******/
c.setAttribute("nonce",n.nc),/******/
c.src=n.p+"version/1588261947821/js/"+e+".js";/******/
var u=setTimeout(r,12e4);/******/
/******/
/******/
/******/
return c.onerror=c.onload=r,i.appendChild(c),a},/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
n.m=e,/******/
/******/
// expose the module cache
/******/
n.c=t,/******/
/******/
// define getter function for harmony exports
/******/
n.d=function(e,r,t){/******/
n.o(e,r)||/******/
Object.defineProperty(e,r,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:t})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
n.n=function(e){/******/
var r=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return n.d(r,"a",r),r},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},/******/
/******/
// __webpack_public_path__
/******/
n.p="/bagan/",/******/
/******/
// on error function for async loading
/******/
n.oe=function(e){throw console.error(e),e}}([]);