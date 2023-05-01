(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&m(w)}).observe(document,{childList:!0,subtree:!0});function d(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerPolicy&&(p.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?p.credentials="include":s.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function m(s){if(s.ep)return;s.ep=!0;const p=d(s);fetch(s.href,p)}})();/*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/(function(b,a,d,m){function s(e,t){return typeof e===t}function p(e){var t=A.className,n=i._config.classPrefix||"";if(_&&(t=t.baseVal),i._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}i._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),_?A.className.baseVal=t:A.className=t)}function w(e,t){if(typeof e=="object")for(var n in e)j(e,n)&&w(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=i[r[0]];if(r.length===2&&(o=o[r[1]]),o!==void 0)return i;t=typeof t=="function"?t():t,r.length===1?i[r[0]]=t:(!i[r[0]]||i[r[0]]instanceof Boolean||(i[r[0]]=new Boolean(i[r[0]])),i[r[0]][r[1]]=t),p([(t&&t!==!1?"":"no-")+r.join("-")]),i._trigger(e,t)}return i}function v(){return typeof d.createElement!="function"?d.createElement(arguments[0]):_?d.createElementNS.call(d,"http://www.w3.org/2000/svg",arguments[0]):d.createElement.apply(d,arguments)}function V(){var e=d.body;return e||(e=v(_?"svg":"body"),e.fake=!0),e}function P(e,t,n,r){var o,f,l,y,S="modernizr",c=v("div"),g=V();if(parseInt(n,10))for(;n--;)l=v("div"),l.id=r?r[n]:S+(n+1),c.appendChild(l);return o=v("style"),o.type="text/css",o.id="s"+S,(g.fake?g:c).appendChild(o),g.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(d.createTextNode(e)),c.id=S,g.fake&&(g.style.background="",g.style.overflow="hidden",y=A.style.overflow,A.style.overflow="hidden",A.appendChild(g)),f=t(c,e),g.fake?(g.parentNode.removeChild(g),A.style.overflow=y,A.offsetHeight):c.parentNode.removeChild(c),!!f}function z(e,t,n){var r;if("getComputedStyle"in a){r=getComputedStyle.call(a,e,t);var o=a.console;if(r!==null)n&&(r=r.getPropertyValue(n));else if(o){var f=o.error?"error":"log";o[f].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}function $(e,t){return!!~(""+e).indexOf(t)}function B(e){return e.replace(/([A-Z])/g,function(t,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function D(e,t){var n=e.length;if("CSS"in a&&"supports"in a.CSS){for(;n--;)if(a.CSS.supports(B(e[n]),t))return!0;return!1}if("CSSSupportsRule"in a){for(var r=[];n--;)r.push("("+B(e[n])+":"+t+")");return r=r.join(" or "),P("@supports ("+r+") { #modernizr { position: absolute; } }",function(o){return z(o,null,"position")==="absolute"})}return m}function F(e){return e.replace(/([a-z])-([a-z])/g,function(t,n,r){return n+r.toUpperCase()}).replace(/^-/,"")}function L(e,t,n,r){function o(){l&&(delete h.style,delete h.modElem)}if(r=!s(r,"undefined")&&r,!s(n,"undefined")){var f=D(e,n);if(!s(f,"undefined"))return f}for(var l,y,S,c,g,H=["modernizr","tspan","samp"];!h.style&&H.length;)l=!0,h.modElem=v(H.shift()),h.style=h.modElem.style;for(S=e.length,y=0;y<S;y++)if(c=e[y],g=h.style[c],$(c,"-")&&(c=F(c)),h.style[c]!==m){if(r||s(n,"undefined"))return o(),t!=="pfx"||c;try{h.style[c]=n}catch{}if(h.style[c]!==g)return o(),t!=="pfx"||c}return o(),!1}function J(e,t){return function(){return e.apply(t,arguments)}}function K(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?J(r,n||t):r);return!1}function k(e,t,n,r,o){var f=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+q.join(f+" ")+f).split(" ");return s(t,"string")||s(t,"undefined")?L(l,t,r,o):(l=(e+" "+T.join(f+" ")+f).split(" "),K(l,t,n))}function C(e,t,n){return k(e,m,m,t,n)}var x=[],u={_version:"3.11.2",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},i=function(){};i.prototype=u,i=new i;var N=[],A=d.documentElement,_=A.nodeName.toLowerCase()==="svg",M="Moz O ms Webkit",T=u._config.usePrefixes?M.toLowerCase().split(" "):[];u._domPrefixes=T;var U=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=U;var j;(function(){var e={}.hasOwnProperty;j=s(e,"undefined")||s(e.call,"undefined")?function(t,n){return n in t&&s(t.constructor.prototype[n],"undefined")}:function(t,n){return e.call(t,n)}})(),u._l={},u.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout(function(){i._trigger(e,i[e])},0)},u._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var r;for(r=0;r<n.length;r++)(0,n[r])(t)},0),delete this._l[e]}},i._q.push(function(){u.addTest=w});var R=function(){function e(n,r){var o;return!!n&&(r&&typeof r!="string"||(r=v(r||"div")),n="on"+n,o=n in r,!o&&t&&(r.setAttribute||(r=v("div")),r.setAttribute(n,""),o=typeof r[n]=="function",r[n]!==m&&(r[n]=m),r.removeAttribute(n)),o)}var t=!("onblur"in A);return e}();u.hasEvent=R;var Q=function(){var e=a.matchMedia||a.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(t){var n=!1;return P("@media "+t+" { #modernizr { position: absolute; } }",function(r){n=z(r,null,"position")==="absolute"}),n}}();u.mq=Q;var Z=function(e,t){var n=!1,r=v("div"),o=r.style;if(e in o){var f=T.length;for(o[e]=t,n=o[e];f--&&!n;)o[e]="-"+T[f]+"-"+t,n=o[e]}return n===""&&(n=!1),n};u.prefixedCSSValue=Z;var q=u._config.usePrefixes?M.split(" "):[];u._cssomPrefixes=q;var I={elem:v("modernizr")};i._q.push(function(){delete I.elem});var h={style:I.elem.style};i._q.unshift(function(){delete h.style}),u.testAllProps=k,u.testAllProps=C,u.testProp=function(e,t,n){return L([e],m,t,n)},u.testStyles=P,i.addTest("customelements","customElements"in a),i.addTest("history",function(){var e=navigator.userAgent;return!!e&&(e.indexOf("Android 2.")===-1&&e.indexOf("Android 4.0")===-1||e.indexOf("Mobile Safari")===-1||e.indexOf("Chrome")!==-1||e.indexOf("Windows Phone")!==-1||location.protocol==="file:")&&a.history&&"pushState"in a.history});var E=[""].concat(T);u._domPrefixesAll=E,i.addTest("pointerevents",function(){for(var e=0,t=E.length;e<t;e++)if(R(E[e]+"pointerdown"))return!0;return!1});var W=!0;try{a.postMessage({toString:function(){W=!1}},"*")}catch{}i.addTest("postmessage",new Boolean("postMessage"in a)),i.addTest("postmessage.structuredclones",W),i.addTest("webgl",function(){return"WebGLRenderingContext"in a});var G=!1;try{G="WebSocket"in a&&a.WebSocket.CLOSING===2}catch{}i.addTest("websockets",G),i.addTest("cssanimations",C("animationName","a",!0)),function(){i.addTest("csscolumns",function(){var o=!1,f=C("columnCount");try{o=!!f,o&&(o=new Boolean(o))}catch{}return o});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=C("column"+n[r]),e!=="breakbefore"&&e!=="breakafter"&&e!=="breakinside"||(t=t||C(n[r])),i.addTest("csscolumns."+e,t)}(),i.addTest("flexbox",C("flexBasis","1px",!0)),i.addTest("picture","HTMLPictureElement"in a),i.addAsyncTest(function(){var e,t,n,r=v("img"),o="sizes"in r;!o&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){w("sizes",r.width===2)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):w("sizes",o)}),i.addTest("srcset","srcset"in v("img")),i.addTest("webworkers","Worker"in a),function(){var e,t,n,r,o,f,l;for(var y in x)if(x.hasOwnProperty(y)){if(e=[],t=x[y],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)f=e[o],l=f.split("."),l.length===1?i[l[0]]=r:(i[l[0]]&&(!i[l[0]]||i[l[0]]instanceof Boolean)||(i[l[0]]=new Boolean(i[l[0]])),i[l[0]][l[1]]=r),N.push((r?"":"no-")+l.join("-"))}}(),p(N),delete u.addTest,delete u.addAsyncTest;for(var O=0;O<i._q.length;O++)i._q[O]();b.Modernizr=i})(window,window,document);(function(){for(var b,a=function(){},d=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],m=d.length,s=window.console=window.console||{};m--;)b=d[m],s[b]||(s[b]=a)})();
