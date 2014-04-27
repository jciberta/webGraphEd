!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function e(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function r(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function o(){}function a(n){return ha+n in this}function c(n){return n=ha+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===ga&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===ga)return!1;return!0}function h(){}function g(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=pa.length;r>e;++e){var u=pa[e]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new o;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function y(){Go.event.preventDefault()}function x(){for(var n,t=Go.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,e=0,r=arguments.length;++e<r;)t[arguments[e]]=m(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Go.event;u.target=n,Go.event=u,t[u.type].apply(e,r)}finally{Go.event=i}}},t}function _(n){return da(n,_a),n}function b(n){return"function"==typeof n?n:function(){return ma(n,this)}}function w(n){return"function"==typeof n?n:function(){return ya(n,this)}}function S(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Go.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Go.requote(n)+"(?:\\s+|$)","g")}function A(n){return n.trim().split(/^|\s+/)}function C(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=A(n).map(N);var u=n.length;return"function"==typeof t?r:e}function N(n){var t=E(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",k(u+" "+n))):e.setAttribute("class",k(u.replace(t," ")))}}function L(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function T(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function q(n){return"function"==typeof n?n:(n=Go.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function R(n){return function(){return Ma(this,n)}}function D(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function U(n){return da(n,wa),n}function j(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Qo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Go.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ka.get(n);return s&&(n=s,c=I),a?t?u:r:t?v:i}function O(n,t){return function(e){var r=Go.event;Go.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Go.event=r}}}function I(n,t){var e=O(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function Y(){var n=".dragsuppress-"+ ++Aa,t="click"+n,e=Go.select(ea).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(Ea){var r=ta.style,u=r[Ea];r[Ea]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),Ea&&(r[Ea]=u),i&&(e.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function V(){return Go.event.changedTouches[0].identifier}function $(){return Go.event.target}function X(){return ea}function B(n){return n>0?1:0>n?-1:0}function J(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function W(n){return n>1?0:-1>n?Ca:Math.acos(n)}function G(n){return n>1?La:-1>n?-La:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function et(){}function rt(n,t,e){return new ut(n,t,e)}function ut(n,t,e){this.h=n,this.s=t,this.l=e}function it(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,yt(u(n+120),u(n),u(n-120))}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.h=n,this.c=t,this.l=e}function ct(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),st(e,Math.cos(n*=za)*t,Math.sin(n)*t)}function st(n,t,e){return new lt(n,t,e)}function lt(n,t,e){this.l=n,this.a=t,this.b=e}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Za,r=gt(r)*Va,i=gt(i)*$a,yt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?ot(Math.atan2(e,t)*Ra,Math.sqrt(t*t+e*e),n):ot(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n){return yt(n>>16,255&n>>8,255&n)}function mt(n){return dt(n)+""}function yt(n,t,e){return new xt(n,t,e)}function xt(n,t,e){this.r=n,this.g=t,this.b=e}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _t(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ja.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),rt(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Za),u=pt((.2126729*n+.7151522*t+.072175*e)/Va),i=pt((.0193339*n+.119192*t+.9503041*e)/$a);return st(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Ct(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Go.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!ea.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Go.event;Go.event=n;try{o.progress.call(i,c)}finally{Go.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Qo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Go.rebind(i,o,"on"),null==r?i:i.get(Lt(r))}function Lt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Tt(){var n=qt(),t=zt()-n;t>24?(isFinite(t)&&(clearTimeout(Qa),Qa=setTimeout(Tt,t)),Ka=0):(Ka=1,tc(Tt))}function qt(){var n=Date.now();for(nc=Wa;nc;)n>=nc.t&&(nc.f=nc.c(n-nc.t)),nc=nc.n;return n}function zt(){for(var n,t=Wa,e=1/0;t;)t.f?t=n?n.n=t.n:Wa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Ga=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*fa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:At;return function(n){var e=rc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=uc.get(g)||Ut;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Go.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new oc(e-1)),1),e}function i(n,e){return t(n=new oc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{oc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{oc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ft(n);return c.floor=c,c.round=Ft(r),c.ceil=Ft(u),c.offset=Ft(i),c.range=a,n}function Ft(n){return function(t,e){try{oc=jt;var r=new jt;return r._=t,n(r,e)._}finally{oc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=cc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&oc!==jt,o=new(i?jt:oc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in cc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{oc=jt;var t=new oc;return t._=n,r(t)}finally{oc=Date}}var r=t(n);return e.parse=function(n){try{oc=jt;var t=r.parse(n);return t&&t._}finally{oc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Go.map(),M=Yt(v),_=Zt(v),b=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ic.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ic.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ic.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:l,S:re,U:$t,w:Vt,W:Xt,x:c,X:s,y:Jt,Y:Bt,Z:Wt,"%":oe};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(Go.requote).join("|")+")","i")}function Zt(n){for(var t=new o,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $t(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Xt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Wt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(fa(t)/60),u=fa(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function oe(n,t,e){lc.lastIndex=0;var r=lc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function se(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function le(n,t){n&&pc.hasOwnProperty(n.type)&&pc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=za,t=t*za/2+Ca/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);dc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;mc.point=function(o,a){mc.point=n,r=(t=o)*za,u=Math.cos(a=(e=a)*za/2+Ca/4),i=Math.sin(a)},mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function _e(n,t){return fa(n[0]-t[0])<Ta&&fa(n[1]-t[1])<Ta}function be(n,t){n*=za;var e=Math.cos(t*=za);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++yc,Mc+=(n-Mc)/yc,_c+=(t-_c)/yc,bc+=(e-bc)/yc}function Se(){function n(n,u){n*=za;var i=Math.cos(u*=za),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);xc+=s,wc+=s*(t+(t=o)),Sc+=s*(e+(e=a)),kc+=s*(r+(r=c)),we(t,e,r)}var t,e,r;Nc.point=function(u,i){u*=za;var o=Math.cos(i*=za);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Nc.point=n,we(t,e,r)}}function ke(){Nc.point=be}function Ee(){function n(n,t){n*=za;var e=Math.cos(t*=za),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-W(g)/h,v=Math.atan2(h,g);Ec+=p*s,Ac+=p*l,Cc+=p*f,xc+=v,wc+=v*(r+(r=o)),Sc+=v*(u+(u=a)),kc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Nc.point=function(o,a){t=o,e=a,Nc.point=n,o*=za;var c=Math.cos(a*=za);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Nc.lineEnd=function(){n(t,e),Nc.lineEnd=ke,Nc.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Le(e,n,null,!0),s=new Le(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new Le(r,n,null,!1),s=new Le(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Le(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Te(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(qe))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Go.merge(g);var n=De(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=ze(),M=t(x),_=!1;return y}}function qe(n){return n.length>1}function ze(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:v,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-La-Ta:La-n[1])-((t=t.x)[0]<0?t[1]-La-Ta:La-t[1])}function De(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;dc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Ca/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Ca/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ca,k=p*x;if(dc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Na:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*G(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ta>i||Ta>i&&0>dc)^1&o}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ca:-Ca,c=fa(i-e);fa(c-Ca)<Ta?(n.point(e,r=(r+o)/2>0?La:-La),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ca&&(fa(e-u)<Ta&&(e-=u*Ta),fa(i-a)<Ta&&(i-=a*Ta),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return fa(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*La,r.point(-Ca,u),r.point(0,u),r.point(Ca,u),r.point(Ca,0),r.point(Ca,-u),r.point(0,-u),r.point(-Ca,-u),r.point(-Ca,0),r.point(-Ca,u);else if(fa(n[0]-t[0])>Ta){var i=n[0]<t[0]?Ca:-Ca;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ca:-Ca),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=fa(A-Ca)<Ta,N=C||Ta>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(fa(_[0]-w)<Ta?k:E):k<=_[1]&&_[1]<=E:A>Ca^(w<=_[0]&&_[0]<=S)){var L=ye(d,(-m+M)/y);return me(L,p),[_,Me(L)]}}}function u(t,e){var r=o?n:Ca-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=fa(i)>Ta,c=gr(n,6*za);return Te(t,e,c,o?[0,-n]:[-Ca,n-Ca])}function Fe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return fa(r[0]-n)<Ta?u>0?0:3:fa(r[0]-e)<Ta?u>0?2:1:fa(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&J(s,i,n)>0&&++t:i[1]<=r&&J(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=ze(),C=Fe(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Go.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ie(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ye(n){var t=0,e=Ca/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ca/180,e=n[1]*Ca/180):[180*(t/Ca),180*(e/Ca)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,G((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){zc+=u*n-r*t,r=n,u=t}var t,e,r,u;jc.point=function(i,o){jc.point=n,t=r=i,e=u=o},jc.lineEnd=function(){n(t,e)}}function $e(n,t){Rc>n&&(Rc=n),n>Pc&&(Pc=n),Dc>t&&(Dc=t),t>Uc&&(Uc=t)}function Xe(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Je(n,t){Mc+=n,_c+=t,++bc}function We(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);wc+=o*(t+n)/2,Sc+=o*(e+r)/2,kc+=o,Je(t=n,e=r)}var t,e;Fc.point=function(r,u){Fc.point=n,Je(t=r,e=u)}}function Ge(){Fc.point=Je}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);wc+=o*(r+n)/2,Sc+=o*(u+t)/2,kc+=o,o=u*n-r*t,Ec+=o*(r+n),Ac+=o*(u+t),Cc+=3*o,Je(r=n,u=t)}var t,e,r,u;Fc.point=function(i,o){Fc.point=n,Je(t=r=i,e=u=o)},Fc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Na)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=fa(fa(w)-1)<Ta||fa(r-h)<Ta?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,T=N-e,q=x*L-y*T;(q*q/M>i||fa((y*L+x*T)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*za),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ra,e*Ra])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*za,n[1]*za),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ra,n[1]*Ra]}function r(){a=Ie(o=sr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()
}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Lc,_=At,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=or(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Lc):He((b=+n)*za),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*za,d=n[1]%360*za,r()):[v*Ra,d*Ra]},t.rotate=function(n){return arguments.length?(m=n[0]%360*za,y=n[1]%360*za,x=n.length>2?n[2]%360*za:0,r()):[m*Ra,y*Ra,x*Ra]},Go.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*za,e*za)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ca?n-Na:-Ca>n?n+Na:n,t]}function sr(n,t,e){return n?t||e?Ie(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function lr(n){return function(t,e){return t+=n,[t>Ca?t-Na:-Ca>t?t+Na:t,e]}}function fr(n){var t=lr(n);return t.invert=lr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),G(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),G(l*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Na)):(u=n+o*Na,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Me([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=W(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function vr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(tt(r-t)+u*o*tt(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ra,Math.atan2(o,Math.sqrt(r*r+u*u))*Ra]}:function(){return[n*Ra,t*Ra]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=za),o=Math.cos(u),a=fa((n*=za)-t),c=Math.cos(a);Oc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Ic.point=function(u,i){t=u*za,e=Math.sin(i*=za),r=Math.cos(i),Ic.point=n},Ic.lineEnd=function(){Ic.point=Ic.lineEnd=v}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-La+Ta>t&&(t=-La+Ta):t>La-Ta&&(t=La-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ca/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=B(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-La]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return fa(u)<Ta?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-B(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ca/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ca*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ca/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&J(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Lr(n,t){return n[0]-t[0]||n[1]-t[1]}function Tr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function qr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function zr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=ns.pop()||new Rr;return t.site=n,t}function Pr(n){$r(n),Gc.remove(n),ns.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&fa(e-c.circle.x)<Ta&&fa(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),$r(c);for(var s=o;s.circle&&fa(e-s.circle.x)<Ta&&fa(r-s.circle.cy)<Ta;)o=s.N,a.push(s),Pr(s),s=o;a.push(s),$r(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Kr(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Wr(c.site,s.site,null,u),Vr(c),Vr(s)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Gc._;a;)if(r=Hr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Fr(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Gc.insert(t,c),t||e){if(t===e)return $r(t),e=Dr(t.site),Gc.insert(c,e),c.edge=e.edge=Wr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Wr(t.site,c.site),void 0;$r(t),$r(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Kr(e.edge,s,p,M),c.edge=Wr(s,n,null,M),e.edge=Wr(n,p,null,M),Vr(t),Vr(e)}}function Hr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Fr(n,t){var e=n.N;if(e)return Hr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Wc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(fa(r-t)>Ta||fa(u-e)>Ta)&&(a.splice(o,0,new Qr(Gr(i.site,l,fa(r-f)<Ta&&p-u>Ta?{x:f,y:fa(t-f)<Ta?e:p}:fa(u-p)<Ta&&h-r>Ta?{x:fa(e-p)<Ta?t:h,y:p}:fa(r-h)<Ta&&u-g>Ta?{x:h,y:fa(t-h)<Ta?e:g}:fa(u-g)<Ta&&r-f>Ta?{x:fa(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-qa)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=ts.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Qc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Qc.insert(y,m),y||(Kc=m)}}}}function $r(n){var t=n.circle;t&&(t.P||(Kc=t.N),Qc.remove(t),ts.push(t),tu(t),n.circle=null)}function Xr(n){for(var t,e=Jc,r=Fe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||fa(t.a.x-t.b.x)<Ta&&fa(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Jr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Wr(n,t,e,r){var u=new Jr(n,t);return Jc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Wc[n.i].edges.push(new Qr(u,n,t)),Wc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Jr(n,null);return r.a=t,r.b=e,Jc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Jc=[],Wc=new Array(n.length),Gc=new nu,Qc=new nu;;)if(u=Kc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Wc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&(Xr(t),Ir(t));var o={cells:Wc,edges:Jc};return Gc=Qc=Jc=Wc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function su(n){return n.y}function lu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Go.rgb(n),t=Go.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+Mt(Math.round(e+i*n))+Mt(Math.round(r+o*n))+Mt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return t-=n=+n,function(e){return n+t*e}}function vu(n,t){var e,r,u,i=rs.lastIndex=us.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=rs.exec(n))&&(r=us.exec(t));)(u=r.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=us.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Go.interpolators.length;--r>=0&&!(e=Go.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*La)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Na*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Na/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tu(n,t){n=Go.hcl(n),t=Go.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Go.hsl(n),t=Go.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return it(e+i*n,r+o*n,u+a*n)+""}}function zu(n,t){n=Go.lab(n),t=Go.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ra,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ra:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=Go.transform(n),o=Go.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Fu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Ou(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Iu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Yu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Yu(n),r=Yu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Xu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Wu(n,t){return Go.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ni,n}function Gu(n){return n.children}function Ku(n){return n.value}function Qu(n,t){return t.value-n.value}function ni(n){return Go.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ti(n){return n.x}function ei(n){return n.y}function ri(n,t,e){n.y0=t,n.y=e}function ui(n){return Go.range(n.length)}function ii(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function oi(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ai(n){return n.reduce(ci,0)}function ci(n,t){return n+t[1]}function si(n,t){return li(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function li(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function fi(n){return[Go.min(n),Go.max(n)]}function hi(n,t){return n.parent==t.parent?1:2}function gi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function pi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function vi(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=vi(e[i],t),n)>0&&(n=r);return n}function di(n,t){return n.x-t.x}function mi(n,t){return t.x-n.x}function yi(n,t){return n.depth-t.depth}function xi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function Mi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function _i(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function bi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function wi(n,t){return n.value-t.value}function Si(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function ki(n,t){n._pack_next=t,t._pack_prev=n}function Ei(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Ai(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Ci),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ti(r,u,i),t(i),Si(r,i),r._pack_prev=i,Si(i,u),u=r._pack_next,o=3;s>o;o++){Ti(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Ei(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Ei(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?ki(r,u=a):ki(r=c,u),o--):(Si(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Ni)}}function Ci(n){n._pack_next=n._pack_prev=n}function Ni(n){delete n._pack_next,delete n._pack_prev}function Li(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Li(u[i],t,e,r)}function Ti(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function qi(n){return 1+Go.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ri(n){var t=n.children;return t&&t.length?Ri(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function Pi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ui(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function ji(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():ji(n.range())}function Fi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Oi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ii(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:vs}function Yi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Go.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Zi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Yi:Fi,c=r?Ou:Fu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Bi(n,t)},i.tickFormat=function(t,e){return Ji(n,t,e)},i.nice=function(t){return $i(n,t),u()},i.copy=function(){return Zi(n,t,e,r)},u()}function Vi(n,t){return Go.rebind(n,t,"range","rangeRound","interpolate","clamp")}function $i(n,t){return Oi(n,Ii(Xi(n,t)[2]))}function Xi(n,t){null==t&&(t=10);var e=ji(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Bi(n,t){return Go.range.apply(Go,Xi(n,t))}function Ji(n,t,e){var r=Xi(n,t);if(e){var u=rc.exec(e);if(u.shift(),"s"===u[8]){var i=Go.formatPrefix(Math.max(fa(r[0]),fa(r[1])));return u[7]||(u[7]="."+Wi(i.scale(r[2]))),u[8]="f",e=Go.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Gi(u[8],r)),e=u.join("")}else e=",."+Wi(r[2])+"f";return Go.format(e)}function Wi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Gi(n,t){var e=Wi(t[2]);return n in ds?Math.abs(e-Wi(Math.max(fa(t[0]),fa(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ki(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Oi(r.map(u),e?Math:ys);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=ji(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return ms;arguments.length<2?t=ms:"function"!=typeof t&&(t=Go.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ki(n.copy(),t,e,r)},Vi(o,n)}function Qi(n,t,e){function r(t){return n(u(t))}var u=no(t),i=no(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Bi(e,n)},r.tickFormat=function(n,t){return Ji(e,n,t)},r.nice=function(n){return r.domain($i(e,n))},r.exponent=function(o){return arguments.length?(u=no(t=o),i=no(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Qi(n.copy(),t,e)},Vi(r,n)}function no(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function to(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Go.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=r.length;++a<c;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=r(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=r(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=r(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return ji(t.a[0])},e.copy=function(){return to(n,t)},e.domain(n)}function eo(e,r){function u(){var n=0,t=r.length;for(o=[];++n<t;)o[n-1]=Go.quantile(e,n/t);return i}function i(n){return isNaN(n=+n)?void 0:r[Go.bisect(o,n)]}var o;return i.domain=function(r){return arguments.length?(e=r.filter(t).sort(n),u()):e},i.range=function(n){return arguments.length?(r=n,u()):r},i.quantiles=function(){return o},i.invertExtent=function(n){return n=r.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},i.copy=function(){return eo(e,r)},u()}function ro(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return ro(n,t,e)},u()}function uo(n,t){function e(e){return e>=e?t[Go.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return uo(n,t)},e}function io(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Bi(n,t)},t.tickFormat=function(t,e){return Ji(n,t,e)},t.copy=function(){return io(n)},t}function oo(n){return n.innerRadius}function ao(n){return n.outerRadius}function co(n){return n.startAngle}function so(n){return n.endAngle}function lo(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=Ar,r=Cr,u=Ae,i=fo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=ks.get(n)||fo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function fo(n){return n.join("L")}function ho(n){return fo(n)+"Z"}function go(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function po(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function mo(n,t){return n.length<4?fo(n):n[1]+Mo(n.slice(1,n.length-1),_o(n,t))}function yo(n,t){return n.length<3?fo(n):n[0]+Mo((n.push(n[0]),n),_o([n[n.length-2]].concat(n,[n[1]]),t))}function xo(n,t){return n.length<3?fo(n):n[0]+Mo(n,_o(n,t))}function Mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return fo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function _o(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function bo(n){if(n.length<3)return fo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Eo(Cs,o),",",Eo(Cs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Ao(c,o,a);return n.pop(),c.push("L",r),c.join("")}function wo(n){if(n.length<4)return fo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Eo(Cs,i)+","+Eo(Cs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Ao(e,i,o);return e.join("")}function So(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Eo(Cs,o),",",Eo(Cs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Ao(t,o,a);return t.join("")}function ko(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return bo(n)}function Eo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ao(n,t,e){n.push("C",Eo(Es,t),",",Eo(Es,e),",",Eo(As,t),",",Eo(As,e),",",Eo(Cs,t),",",Eo(Cs,e))}function Co(n,t){return(t[1]-n[1])/(t[0]-n[0])}function No(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=Co(u,i);++t<e;)r[t]=(o+(o=Co(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=No(n),a=-1,c=n.length-1;++a<c;)t=Co(n[a],n[a+1]),fa(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?fo(n):n[0]+Mo(n,Lo(n))}function qo(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ws,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=Et(e),_=Et(u),b=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=fo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=ks.get(n)||fo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ro(n){return n.radius}function Do(n){return[n.x,n.y]}function Po(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ws;return[e*Math.cos(r),e*Math.sin(r)]}}function Uo(){return 64}function jo(){return"circle"}function Ho(n){var t=Math.sqrt(n/Ca);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Fo(n,t){return da(n,Rs),n.id=t,n}function Oo(n,t,e,r){var u=n.id;return P(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Io(n){return null==n&&(n=""),function(){this.textContent=n}}function Yo(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var a=r.time;i=u[e]={tween:new o,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Go.timer(function(r){function o(r){return u.active>e?s():(u.active=e,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Go.timer(function(){return p.c=c(r||1)?Ae:c,1},0,a),void 0)}function c(r){if(u.active!==e)return s();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[e]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=nc,v=[];return p.t=h+a,r>=h?o(r-h):(p.c=o,void 0)},0,a)}}function Zo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Vo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function $o(n){return n.toISOString()}function Xo(n,t,e){function r(t){return n(t)
}function u(n,e){var r=n[1]-n[0],u=r/e,i=Go.bisect(Ys,u);return i==Ys.length?[t.year,Xi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ys[i-1]<Ys[i]/u?i-1:i]:[$s,Xi(n,e)[2]]}return r.invert=function(t){return Bo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Bo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Bo(+e+1),t).length}var i=r.domain(),o=ji(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Oi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Bo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Bo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=ji(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Bo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Xo(n.copy(),t,e)},Vi(r,n)}function Bo(n){return new Date(n)}function Jo(n){return JSON.parse(n.responseText)}function Wo(n){var t=na.createRange();return t.selectNode(na.body),t.createContextualFragment(n.responseText)}var Go={version:"3.4.6"};Date.now||(Date.now=function(){return+new Date});var Ko=[].slice,Qo=function(n){return Ko.call(n)},na=document,ta=na.documentElement,ea=window;try{Qo(ta.childNodes)[0].nodeType}catch(ra){Qo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{na.createElement("div").style.setProperty("opacity",0,"")}catch(ua){var ia=ea.Element.prototype,oa=ia.setAttribute,aa=ia.setAttributeNS,ca=ea.CSSStyleDeclaration.prototype,sa=ca.setProperty;ia.setAttribute=function(n,t){oa.call(this,n,t+"")},ia.setAttributeNS=function(n,t,e){aa.call(this,n,t,e+"")},ca.setProperty=function(n,t,e){sa.call(this,n,t+"",e)}}Go.ascending=n,Go.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Go.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Go.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Go.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Go.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Go.mean=function(n,e){var r,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(r=n[o])?u+=r:--a;else for(;++o<i;)t(r=e.call(n,n[o],o))?u+=r:--a;return a?u/a:void 0},Go.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Go.median=function(e,r){return arguments.length>1&&(e=e.map(r)),e=e.filter(t),e.length?Go.quantile(e.sort(n),.5):void 0};var la=e(n);Go.bisectLeft=la.left,Go.bisect=Go.bisectRight=la.right,Go.bisector=function(t){return e(1===t.length?function(e,r){return n(t(e),r)}:t)},Go.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Go.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Go.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Go.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Go.min(arguments,r),e=new Array(t);++n<t;)for(var u,i=-1,o=e[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return e},Go.transpose=function(n){return Go.zip.apply(Go,n)},Go.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Go.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Go.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Go.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var fa=Math.abs;Go.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,i=[],o=u(fa(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)i.push(r/o);else for(;(r=n+e*++a)<t;)i.push(r/o);return i},Go.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},i(o,{has:a,get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\x00",ga=ha.charCodeAt(0);Go.nest=function(){function n(t,a,c){if(c>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Go.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Go.set=function(n){var t=new h;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},i(h,{has:a,add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),Go.behavior={},Go.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=g(n,t,t[e]);return n};var pa=["webkit","ms","moz","Moz","o","O"];Go.dispatch=function(){for(var n=new d,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Go.event=null,Go.requote=function(n){return n.replace(va,"\\$&")};var va=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,da={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ma=function(n,t){return t.querySelector(n)},ya=function(n,t){return t.querySelectorAll(n)},xa=ta[p(ta,"matchesSelector")],Ma=function(n,t){return xa.call(n,t)};"function"==typeof Sizzle&&(ma=function(n,t){return Sizzle(n,t)[0]||null},ya=Sizzle,Ma=Sizzle.matchesSelector),Go.selection=function(){return Sa};var _a=Go.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return _(i)},_a.selectAll=function(n){var t,e,r=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Qo(n.call(e,e.__data__,a,u))),t.parentNode=e);return _(r)};var ba={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Go.ns={prefix:ba,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ba.hasOwnProperty(e)?{space:ba[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Go.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=A(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},_a.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(L(e,n[e],t));return this}if(2>r)return ea.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(L(n,t,e))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(T(t,n[t]));return this}return this.each(T(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=q(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=q(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},_a.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(r=-1;++r<a;)d=t.call(u=n[r],u.__data__,r),m.has(d)?v[r]=u:m.set(d,u),x.push(d);for(r=-1;++r<f;)d=t.call(e,i=e[r],r),(u=m.get(d))?(g[r]=u,u.__data__=i):y.has(d)||(p[r]=z(i)),y.set(d,i),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=z(i);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return _(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=D.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return P(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=Qo(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return this.each(function(){++n}),n};var wa=[];Go.selection.enter=U,Go.selection.enter.prototype=wa,wa.append=_a.append,wa.empty=_a.empty,wa.node=_a.node,wa.call=_a.call,wa.size=_a.size,wa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return _(o)},wa.insert=function(n,t){return arguments.length<2&&(t=j(this)),_a.insert.call(this,n,t)},_a.transition=function(){for(var n,t,e=Ls||++Ds,r=[],u=Ts||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Yo(t,c,e,u),n.push(t)}return Fo(r,e)},_a.interrupt=function(){return this.each(H)},Go.select=function(n){var t=["string"==typeof n?ma(n,na):n];return t.parentNode=ta,_([t])},Go.selectAll=function(n){var t=Qo("string"==typeof n?ya(n,na):n);return t.parentNode=ta,_([t])};var Sa=Go.select(ta);_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(F(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(F(n,t,e))};var ka=Go.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in na&&ka.remove(n)});var Ea="onselectstart"in na?null:p(ta.style,"userSelect"),Aa=0;Go.mouse=function(n){return Z(n,x())},Go.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Qo(t).map(function(t){var e=Z(n,t);return e.identifier=t.identifier,e}):[]},Go.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+s[0],y:r[1]+s[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Go.event.target===f),g({type:"dragend"}))}var s,l=this,f=Go.event.target,h=l.parentNode,g=e.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Go.select(u()).on(i+d,a).on(o+d,c),y=Y(),x=t(h,v);r?(s=r.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var e=M(n,"drag","dragstart","dragend"),r=null,u=t(v,Go.mouse,X,"mousemove","mouseup"),i=t(V,Go.touch,$,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Go.rebind(n,e,"on")};var Ca=Math.PI,Na=2*Ca,La=Ca/2,Ta=1e-6,qa=Ta*Ta,za=Ca/180,Ra=180/Ca,Da=Math.SQRT2,Pa=2,Ua=4;Go.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Q(v),o=i/(Pa*h)*(e*nt(Da*t+v)-K(v));return[r+o*s,u+o*l,i*e/Q(Da*t+v)]}return[r+n*s,u+n*l,i*Math.exp(Da*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ua*f)/(2*i*Pa*h),p=(c*c-i*i-Ua*f)/(2*c*Pa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Da;return e.duration=1e3*y,e},Go.behavior.zoom=function(){function n(n){n.on(A,s).on(Fa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Go.mouse(r),g),a(s)}function e(){f.on(C,ea===r?h:null).on(N,null),p(l&&Go.event.target===i),c(s)}var r=this,i=Go.event.target,s=T.of(r,arguments),l=0,f=Go.select(ea).on(C,n).on(N,e),g=t(Go.mouse(r)),p=Y();H.call(r),o(s)}function l(){function n(){var n=Go.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Go.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-m){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),y(),a(p)}m=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];d=h*h+g*g}}function i(){for(var n,t,e,i,o=Go.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Go.event.touches.length){for(var t=Go.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(x,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=T.of(g,arguments),v={},d=0,x=".zoom-"+Go.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=Go.select(Go.event.target).on(M,i).on(_,f),w=Go.select(g).on(A,null).on(L,e),k=Y();H.call(g),e(),o(p)}function f(){var n=T.of(this,arguments);d?clearTimeout(d):(H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y();var e=v||Go.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*ja())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=T.of(this,arguments),e=Go.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Go.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Ha,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",T=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=T.of(this,arguments),t=S;Ls?Go.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Go.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ha:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Go.rebind(n,T,"on")};var ja,Ha=[0,1/0],Fa="onwheel"in na?(ja=function(){return-Go.event.deltaY*(Go.event.deltaMode?120:1)},"wheel"):"onmousewheel"in na?(ja=function(){return Go.event.wheelDelta},"mousewheel"):(ja=function(){return-Go.event.detail},"MozMousePixelScroll");et.prototype.toString=function(){return this.rgb()+""},Go.hsl=function(n,t,e){return 1===arguments.length?n instanceof ut?rt(n.h,n.s,n.l):_t(""+n,bt,rt):rt(+n,+t,+e)};var Oa=ut.prototype=new et;Oa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,this.l/n)},Oa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,n*this.l)},Oa.rgb=function(){return it(this.h,this.s,this.l)},Go.hcl=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.h,n.c,n.l):n instanceof lt?ht(n.l,n.a,n.b):ht((n=wt((n=Go.rgb(n)).r,n.g,n.b)).l,n.a,n.b):ot(+n,+t,+e)};var Ia=at.prototype=new et;Ia.brighter=function(n){return ot(this.h,this.c,Math.min(100,this.l+Ya*(arguments.length?n:1)))},Ia.darker=function(n){return ot(this.h,this.c,Math.max(0,this.l-Ya*(arguments.length?n:1)))},Ia.rgb=function(){return ct(this.h,this.c,this.l).rgb()},Go.lab=function(n,t,e){return 1===arguments.length?n instanceof lt?st(n.l,n.a,n.b):n instanceof at?ct(n.l,n.c,n.h):wt((n=Go.rgb(n)).r,n.g,n.b):st(+n,+t,+e)};var Ya=18,Za=.95047,Va=1,$a=1.08883,Xa=lt.prototype=new et;Xa.brighter=function(n){return st(Math.min(100,this.l+Ya*(arguments.length?n:1)),this.a,this.b)},Xa.darker=function(n){return st(Math.max(0,this.l-Ya*(arguments.length?n:1)),this.a,this.b)},Xa.rgb=function(){return ft(this.l,this.a,this.b)},Go.rgb=function(n,t,e){return 1===arguments.length?n instanceof xt?yt(n.r,n.g,n.b):_t(""+n,yt,it):yt(~~n,~~t,~~e)};var Ba=xt.prototype=new et;Ba.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),yt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):yt(u,u,u)},Ba.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),yt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Ba.hsl=function(){return bt(this.r,this.g,this.b)},Ba.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var Ja=Go.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ja.forEach(function(n,t){Ja.set(n,dt(t))}),Go.functor=Et,Go.xhr=Ct(At),Go.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new h,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Go.csv=Go.dsv(",","text/csv"),Go.tsv=Go.dsv("	","text/tab-separated-values"),Go.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=x().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return Z(n,r)};var Wa,Ga,Ka,Qa,nc,tc=ea[p(ea,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Go.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Ga?Ga.n=i:Wa=i,Ga=i,Ka||(Qa=clearTimeout(Qa),Ka=1,tc(Tt))},Go.timer.flush=function(){qt(),zt()},Go.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var ec=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Go.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Go.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),ec[8+e/3]};var rc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,uc=Go.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Go.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ic=Go.time={},oc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ac.setUTCDate.apply(this._,arguments)},setDay:function(){ac.setUTCDay.apply(this._,arguments)},setFullYear:function(){ac.setUTCFullYear.apply(this._,arguments)},setHours:function(){ac.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ac.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ac.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ac.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ac.setUTCSeconds.apply(this._,arguments)},setTime:function(){ac.setTime.apply(this._,arguments)}};var ac=Date.prototype;ic.year=Ht(function(n){return n=ic.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ic.years=ic.year.range,ic.years.utc=ic.year.utc.range,ic.day=Ht(function(n){var t=new oc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ic.days=ic.day.range,ic.days.utc=ic.day.utc.range,ic.dayOfYear=function(n){var t=ic.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ic[n]=Ht(function(n){return(n=ic.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ic[n+"s"]=e.range,ic[n+"s"].utc=e.utc.range,ic[n+"OfYear"]=function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)}}),ic.week=ic.sunday,ic.weeks=ic.sunday.range,ic.weeks.utc=ic.sunday.utc.range,ic.weekOfYear=ic.sundayOfYear;var cc={"-":"",_:" ",0:"0"},sc=/^\s*\d+/,lc=/^%/;Go.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var fc=Go.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Go.format=fc.numberFormat,Go.geo={},ce.prototype={s:0,t:0,add:function(n){se(n,this.t,hc),se(hc.s,this.s,this),this.s?this.t+=hc.t:this.s=hc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var hc=new ce;Go.geo.stream=function(n,t){n&&gc.hasOwnProperty(n.type)?gc[n.type](n,t):le(n,t)};var gc={Feature:function(n,t){le(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)le(e[r].geometry,t)}},pc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)le(e[r],t)}};Go.geo.area=function(n){return vc=0,Go.geo.stream(n,mc),vc};var vc,dc=new ce,mc={sphere:function(){vc+=4*Ca},point:v,lineStart:v,lineEnd:v,polygonStart:function(){dc.reset(),mc.lineStart=ge},polygonEnd:function(){var n=2*dc;vc+=0>n?4*Ca+n:n,mc.lineStart=mc.lineEnd=mc.point=v}};Go.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*za,e*za]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ra*s,d=fa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ra;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ra;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=fa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;mc.point(n,e),t(n,e)}function i(){mc.lineStart()}function o(){u(v,d),mc.lineEnd(),fa(y)>Ta&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,mc.polygonStart()},polygonEnd:function(){mc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>dc?(l=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Go.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);
for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Go.geo.centroid=function(n){yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,Nc);var t=Ec,e=Ac,r=Cc,u=t*t+e*e+r*r;return qa>u&&(t=wc,e=Sc,r=kc,Ta>xc&&(t=Mc,e=_c,r=bc),u=t*t+e*e+r*r,qa>u)?[0/0,0/0]:[Math.atan2(e,t)*Ra,G(r/Math.sqrt(u))*Ra]};var yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac,Cc,Nc={sphere:v,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Nc.lineStart=Ee},polygonEnd:function(){Nc.lineStart=Se}},Lc=Te(Ae,Pe,je,[-Ca,-Ca/2]),Tc=1e9;Go.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Go.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,Go.geo.albers=function(){return Go.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Go.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Go.geo.albers(),o=Go.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Go.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ta,f+.12*s+Ta],[l-.214*s-Ta,f+.234*s-Ta]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ta,f+.166*s+Ta],[l-.115*s-Ta,f+.234*s-Ta]]).stream(c).point,n},n.scale(1070)};var qc,zc,Rc,Dc,Pc,Uc,jc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){zc=0,jc.lineStart=Ve},polygonEnd:function(){jc.lineStart=jc.lineEnd=jc.point=v,qc+=fa(zc/2)}},Hc={point:$e,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Fc={point:Je,lineStart:We,lineEnd:Ge,polygonStart:function(){Fc.lineStart=Ke},polygonEnd:function(){Fc.point=Je,Fc.lineStart=We,Fc.lineEnd=Ge}};Go.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Go.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return qc=0,Go.geo.stream(n,u(jc)),qc},n.centroid=function(n){return Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,u(Fc)),Cc?[Ec/Cc,Ac/Cc]:kc?[wc/kc,Sc/kc]:bc?[Mc/bc,_c/bc]:[0/0,0/0]},n.bounds=function(n){return Pc=Uc=-(Rc=Dc=1/0),Go.geo.stream(n,u(Hc)),[[Rc,Dc],[Pc,Uc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):At,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Xe:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Go.geo.albersUsa()).context(null)},Go.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Go.geo.projection=ur,Go.geo.projectionMutator=ir,(Go.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Go.geo.rotation=function(n){function t(t){return t=n(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t}return n=sr(n[0]%360*za,n[1]*za,n.length>2?n[2]*za:0),t.invert=function(t){return t=n.invert(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t},t},cr.invert=ar,Go.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=sr(-n[0]*za,-n[1]*za,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ra,n[1]*=Ra}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*za,u*za),n):t},n.precision=function(r){return arguments.length?(e=gr(t*za,(u=+r)*za),n):u},n.angle(90)},Go.geo.distance=function(n,t){var e,r=(t[0]-n[0])*za,u=n[1]*za,i=t[1]*za,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Go.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Go.range(Math.ceil(i/d)*d,u,d).map(h).concat(Go.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Go.range(Math.ceil(r/p)*p,e,p).filter(function(n){return fa(n%d)>Ta}).map(l)).concat(Go.range(Math.ceil(a/v)*v,o,v).filter(function(n){return fa(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=vr(a,o,90),f=dr(r,e,y),h=vr(s,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},Go.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Go.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Go.geo.interpolate=function(n,t){return xr(n[0]*za,n[1]*za,t[0]*za,t[1]*za)},Go.geo.length=function(n){return Oc=0,Go.geo.stream(n,Ic),Oc};var Oc,Ic={sphere:v,point:v,lineStart:Mr,lineEnd:v,polygonStart:v,polygonEnd:v},Yc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Go.geo.azimuthalEqualArea=function(){return ur(Yc)}).raw=Yc;var Zc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(Go.geo.azimuthalEquidistant=function(){return ur(Zc)}).raw=Zc,(Go.geo.conicConformal=function(){return Ye(br)}).raw=br,(Go.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var Vc=_r(function(n){return 1/n},Math.atan);(Go.geo.gnomonic=function(){return ur(Vc)}).raw=Vc,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-La]},(Go.geo.mercator=function(){return kr(Sr)}).raw=Sr;var $c=_r(function(){return 1},Math.asin);(Go.geo.orthographic=function(){return ur($c)}).raw=$c;var Xc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Go.geo.stereographic=function(){return ur(Xc)}).raw=Xc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-La]},(Go.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=Er,Go.geom={},Go.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(Lr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Nr(a),l=Nr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Go.geom.polygon=function(n){return da(n,Bc),n};var Bc=Go.geom.polygon.prototype=[];Bc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Bc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Bc.clip=function(n){for(var t,e,r,u,i,o,a=zr(n),c=-1,s=this.length-zr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Tr(o,l,u)?(Tr(i,l,u)||n.push(qr(i,o,l,u)),n.push(o)):Tr(i,l,u)&&n.push(qr(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Jc,Wc,Gc,Kc,Qc,ns=[],ts=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Go.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=es;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?es:n,t):a===es?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===es?null:a&&a[1]},t)};var es=[[-1e6,-1e6],[1e6,1e6]];Go.geom.delaunay=function(n){return Go.geom.voronoi().triangles(n)},Go.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(fa(c-e)+fa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=lu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=Et(a),M=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=lu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=su,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Go.interpolateRgb=hu,Go.interpolateObject=gu,Go.interpolateNumber=pu,Go.interpolateString=vu;var rs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,us=new RegExp(rs.source,"g");Go.interpolate=du,Go.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ja.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof et?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Go.interpolateArray=mu;var is=function(){return At},os=Go.map({linear:is,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return Lu}}),as=Go.map({"in":At,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Go.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=os.get(e)||is,r=as.get(r)||At,yu(r(e.apply(null,Ko.call(arguments,1))))},Go.interpolateHcl=Tu,Go.interpolateHsl=qu,Go.interpolateLab=zu,Go.interpolateRound=Ru,Go.transform=function(n){var t=na.createElementNS(Go.ns.prefix.svg,"g");return(Go.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:cs)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var cs={a:1,b:0,c:0,d:1,e:0,f:0};Go.interpolateTransform=Hu,Go.layout={},Go.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Iu(n[e]));return t}},Go.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Go.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Go.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Na-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Go.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Go.event.x,n.py=Go.event.y,a.resume()}var e,r,u,i,o,a={},c=Go.dispatch("start","tick","end"),s=[1,1],l=.9,f=ss,h=ls,g=-30,p=fs,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Ju(t=Go.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Go.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Go.behavior.drag().origin(At).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Xu).on("mouseout.force",Bu).call(e),void 0):e},Go.rebind(a,c,"on")};var ss=20,ls=1,fs=1/0;Go.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Qu,u=Gu,i=Ku;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Go.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Go.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Wu(e,r)},Go.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Go.sum(o),s=Go.range(i.length);null!=e&&s.sort(e===hs?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=hs,r=0,u=Na;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var hs={};Go.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Go.permute(s,f),l=Go.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=At,e=ui,r=ii,u=ri,i=ti,o=ei;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:gs.get(t)||ui,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ps.get(t)||ii,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var gs=Go.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(oi),i=n.map(ai),o=Go.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Go.range(n.length).reverse()},"default":ui}),ps=Go.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ii});Go.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Go.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=fi,u=si;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return li(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Go.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;Mi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=pi(a),i=gi(i),a&&i;)c=gi(c),o=pi(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(_i(bi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!pi(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!gi(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];xi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=vi(l,mi),h=vi(l,di),g=vi(l,yi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return xi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,xi(a,function(n){n.r=+l(n.value)}),xi(a,Ai),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;xi(a,function(n){n.r+=f}),xi(a,Ai),xi(a,function(n){n.r-=f})}return Li(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Go.layout.hierarchy().sort(wi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Wu(n,e)},Go.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;xi(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=qi(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ri(c),f=Di(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return xi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Go.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Pi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Pi(t):Ui(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ui(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Pi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Wu(i,a)},Go.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Go.random.normal.apply(Go,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Go.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Go.scale={};var vs={floor:At,ceil:At};Go.scale.linear=function(){return Zi([0,1],[0,1],du,!1)};var ds={s:1,g:1,p:1,r:1,e:1};Go.scale.log=function(){return Ki(Go.scale.linear().domain([0,1]),10,!0,[1,10])};var ms=Go.format(".0e"),ys={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Go.scale.pow=function(){return Qi(Go.scale.linear(),1,[0,1])},Go.scale.sqrt=function(){return Go.scale.pow().exponent(.5)},Go.scale.ordinal=function(){return to([],{t:"range",a:[[]]})},Go.scale.category10=function(){return Go.scale.ordinal().range(xs)},Go.scale.category20=function(){return Go.scale.ordinal().range(Ms)},Go.scale.category20b=function(){return Go.scale.ordinal().range(_s)},Go.scale.category20c=function(){return Go.scale.ordinal().range(bs)};var xs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(mt),Ms=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(mt),_s=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(mt),bs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(mt);Go.scale.quantile=function(){return eo([],[])},Go.scale.quantize=function(){return ro(0,1,[0,1])},Go.scale.threshold=function(){return uo([.5],[0,1])},Go.scale.identity=function(){return io([0,1])},Go.svg={},Go.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ws,a=u.apply(this,arguments)+ws,c=(o>a&&(c=o,o=a,a=c),a-o),s=Ca>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=Ss?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=oo,e=ao,r=co,u=so;return n.innerRadius=function(e){return arguments.length?(t=Et(e),n):t},n.outerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.startAngle=function(t){return arguments.length?(r=Et(t),n):r},n.endAngle=function(t){return arguments.length?(u=Et(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ws;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ws=-La,Ss=Na-Ta;Go.svg.line=function(){return lo(At)};var ks=Go.map({linear:fo,"linear-closed":ho,step:go,"step-before":po,"step-after":vo,basis:bo,"basis-open":wo,"basis-closed":So,bundle:ko,cardinal:xo,"cardinal-open":mo,"cardinal-closed":yo,monotone:To});ks.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Es=[0,2/3,1/3,0],As=[0,1/3,2/3,0],Cs=[0,1/6,2/3,1/6];Go.svg.line.radial=function(){var n=lo(qo);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},po.reverse=vo,vo.reverse=po,Go.svg.area=function(){return zo(At)},Go.svg.area.radial=function(){var n=zo(qo);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Go.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ws,l=s.call(n,u,r)+ws;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ca)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Ro,c=co,s=so;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(s=Et(t),n):s},n},Go.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Do;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Go.svg.diagonal.radial=function(){var n=Go.svg.diagonal(),t=Do,e=n.projection;return n.projection=function(n){return arguments.length?e(Po(t=n)):t},n},Go.svg.symbol=function(){function n(n,r){return(Ns.get(t.call(this,n,r))||Ho)(e.call(this,n,r))}var t=jo,e=Uo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var Ns=Go.map({circle:Ho,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*zs)),e=t*zs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Go.svg.symbolTypes=Ns.keys();var Ls,Ts,qs=Math.sqrt(3),zs=Math.tan(30*za),Rs=[],Ds=0;Rs.call=_a.call,Rs.empty=_a.empty,Rs.node=_a.node,Rs.size=_a.size,Go.transition=function(n){return arguments.length?Ls?n.transition():n:Sa.transition()},Go.transition.prototype=Rs,Rs.select=function(n){var t,e,r,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Yo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Fo(i,u)},Rs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Yo(u,g,o,i),t.push(u)}return Fo(a,o)},Rs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Fo(u,this.id)},Rs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):P(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Rs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:du,a=Go.ns.qualify(n);return Oo(this,"attr."+n,t,a.local?i:u)},Rs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Go.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Rs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=ea.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Oo(this,"style."+n,t,u)},Rs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,ea.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Rs.text=function(n){return Oo(this,"text",n,Io)},Rs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Rs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Go.ease.apply(Go,arguments)),P(this,function(e){e.__transition__[t].ease=n}))},Rs.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Rs.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Rs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Ts,u=Ls;Ls=e,P(this,function(t,r,u){Ts=t.__transition__[e],n.call(t,t.__data__,r,u)}),Ts=r,Ls=u}else P(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Go.dispatch("start","end"))).on(n,t)});return this},Rs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ds,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Yo(e,s,i,r)),n.push(e)}return Fo(o,i)},Go.svg.axis=function(){function n(n){n.each(function(){var n,s=Go.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=Go.transition(p.exit()).style("opacity",Ta).remove(),m=Go.transition(p.order()).style("opacity",1),y=Hi(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Go.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Zo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Zo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Vo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Vo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Go.scale.linear(),r=Ps,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Us?t+"":Ps,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ps="bottom",Us={top:1,right:1,bottom:1,left:1};Go.svg.brush=function(){function n(i){i.each(function(){var i=Go.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return js[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Go.transition(i),h=Go.transition(o);c&&(l=Hi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Hi(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Go.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),y())}function p(){32==Go.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,y())}function v(){var n=Go.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Go.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Hi(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Go.select("body").style("cursor",null),T.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Go.select(Go.event.target),w=a.of(_,arguments),S=Go.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=Y(),L=Go.mouse(_),T=Go.select(ea).on("keydown.brush",u).on("keyup.brush",p);if(Go.event.changedTouches?T.on("touchmove.brush",v).on("touchend.brush",m):T.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),z=+/^n/.test(k);M=[l[1-q]-L[0],f[1-z]-L[1]],L[0]=l[q],L[1]=f[z]}else Go.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Go.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Hs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ls?Go.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(l,t.x),r=mu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Hs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Hs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Go.rebind(n,a,"on")};var js={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Hs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Fs=ic.format=fc.timeFormat,Os=Fs.utc,Is=Os("%Y-%m-%dT%H:%M:%S.%LZ");Fs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?$o:Is,$o.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},$o.toString=Is.toString,ic.second=Ht(function(n){return new oc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ic.seconds=ic.second.range,ic.seconds.utc=ic.second.utc.range,ic.minute=Ht(function(n){return new oc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ic.minutes=ic.minute.range,ic.minutes.utc=ic.minute.utc.range,ic.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new oc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ic.hours=ic.hour.range,ic.hours.utc=ic.hour.utc.range,ic.month=Ht(function(n){return n=ic.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ic.months=ic.month.range,ic.months.utc=ic.month.utc.range;var Ys=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Zs=[[ic.second,1],[ic.second,5],[ic.second,15],[ic.second,30],[ic.minute,1],[ic.minute,5],[ic.minute,15],[ic.minute,30],[ic.hour,1],[ic.hour,3],[ic.hour,6],[ic.hour,12],[ic.day,1],[ic.day,2],[ic.week,1],[ic.month,1],[ic.month,3],[ic.year,1]],Vs=Fs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),$s={range:function(n,t,e){return Go.range(Math.ceil(n/e)*e,+t,e).map(Bo)},floor:At,ceil:At};Zs.year=ic.year,ic.scale=function(){return Xo(Go.scale.linear(),Zs,Vs)};var Xs=Zs.map(function(n){return[n[0].utc,n[1]]}),Bs=Os.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Xs.year=ic.year.utc,ic.scale.utc=function(){return Xo(Go.scale.linear(),Xs,Bs)},Go.text=Ct(function(n){return n.responseText}),Go.json=function(n,t){return Nt(n,"application/json",Jo,t)},Go.html=function(n,t){return Nt(n,"text/html",Wo,t)},Go.xml=Ct(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Go):"object"==typeof module&&module.exports?module.exports=Go:this.d3=Go}();/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2014-01-24
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (/MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, URL = view.URL || view.webkitURL || view
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link =  !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function (ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					URL.revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
                        window.open(object_url, "_blank");
                    }
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				// FF for Android has a nasty garbage collection mechanism
				// that turns all objects that are not pure javascript into 'deadObject'
				// this means `doc` and `save_link` are unusable and need to be recreated
				// `view` is usable though:
				doc = view.document;
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = object_url;
				save_link.download = name;
				var event = doc.createEvent("MouseEvents");
				event.initMouseEvent(
					"click", true, false, view, 0, 0, 0, 0, 0
					, false, false, false, false, 0, null
				);
				save_link.dispatchEvent(event);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined") module.exports = saveAs;
/*! jQuery-Impromptu - v5.2.3 - 2014-03-09
* http://trentrichardson.com/Impromptu
* Copyright (c) 2014 Trent Richardson; Licensed MIT */
(function(t){"use strict";t.prompt=function(e,o){void 0!==o&&void 0!==o.classes&&"string"==typeof o.classes&&(o={box:o.classes}),t.prompt.options=t.extend({},t.prompt.defaults,o),t.prompt.currentPrefix=t.prompt.options.prefix,t.prompt.timeout&&clearTimeout(t.prompt.timeout),t.prompt.timeout=!1;var p=t.prompt.options,r=t(document.body),i=t(window),n='<div class="'+t.prompt.options.prefix+"box "+p.classes.box+'">';n+=p.useiframe&&t("object, applet").length>0?'<iframe src="javascript:false;" style="display:block;position:absolute;z-index:-1;" class="'+p.prefix+"fade "+p.classes.fade+'"></iframe>':'<div class="'+p.prefix+"fade "+p.classes.fade+'"></div>',n+='<div class="'+p.prefix+" "+p.classes.prompt+'">'+'<form action="javascript:false;" onsubmit="return false;" class="'+p.prefix+'form">'+'<div class="'+p.prefix+"close "+p.classes.close+'">'+p.closeText+"</div>"+'<div class="'+p.prefix+'states"></div>'+"</form>"+"</div>"+"</div>",t.prompt.jqib=t(n).appendTo(r),t.prompt.jqi=t.prompt.jqib.children("."+p.prefix),t.prompt.jqif=t.prompt.jqib.children("."+p.prefix+"fade"),e.constructor===String&&(e={state0:{title:p.title,html:e,buttons:p.buttons,position:p.position,focus:p.focus,defaultButton:p.defaultButton,submit:p.submit}}),t.prompt.options.states={};var s,a;for(s in e)a=t.extend({},t.prompt.defaults.state,{name:s},e[s]),t.prompt.addState(a.name,a),""===t.prompt.currentStateName&&(t.prompt.currentStateName=a.name);t.prompt.jqi.on("click","."+p.prefix+"buttons button",function(){var e=t(this),o=e.parents("."+p.prefix+"state"),r=t.prompt.options.states[o.data("jqi-name")],i=o.children("."+p.prefix+"message"),n=r.buttons[e.text()]||r.buttons[e.html()],s={};if(void 0===n)for(var a in r.buttons)(r.buttons[a].title===e.text()||r.buttons[a].title===e.html())&&(n=r.buttons[a].value);t.each(t.prompt.jqi.children("form").serializeArray(),function(t,e){void 0===s[e.name]?s[e.name]=e.value:typeof s[e.name]===Array||"object"==typeof s[e.name]?s[e.name].push(e.value):s[e.name]=[s[e.name],e.value]});var m=new t.Event("impromptu:submit");m.stateName=r.name,m.state=o,o.trigger(m,[n,i,s]),m.isDefaultPrevented()||t.prompt.close(!0,n,i,s)});var m=function(){if(p.persistent){var e=(""+p.top).indexOf("%")>=0?i.height()*(parseInt(p.top,10)/100):parseInt(p.top,10),o=parseInt(t.prompt.jqi.css("top").replace("px",""),10)-e;t("html,body").animate({scrollTop:o},"fast",function(){var e=0;t.prompt.jqib.addClass(p.prefix+"warning");var o=setInterval(function(){t.prompt.jqib.toggleClass(p.prefix+"warning"),e++>1&&(clearInterval(o),t.prompt.jqib.removeClass(p.prefix+"warning"))},100)})}else t.prompt.close(!0)},u=function(e){var o=window.event?event.keyCode:e.keyCode;if(27===o&&m(),13===o){var r=t.prompt.getCurrentState().find("."+p.prefix+"defaultbutton"),i=t(e.target);i.is("textarea,."+p.prefix+"button")===!1&&r.length>0&&(e.preventDefault(),r.click())}if(9===o){var n=t("input,select,textarea,button",t.prompt.getCurrentState()),s=!e.shiftKey&&e.target===n[n.length-1],a=e.shiftKey&&e.target===n[0];if(s||a)return setTimeout(function(){if(n){var t=n[a===!0?n.length-1:0];t&&t.focus()}},10),!1}};return t.prompt.position(),t.prompt.style(),t.prompt.jqif.click(m),i.resize({animate:!1},t.prompt.position),t.prompt.jqi.find("."+p.prefix+"close").click(t.prompt.close),t.prompt.jqib.on("keydown",u).on("impromptu:loaded",p.loaded).on("impromptu:close",p.close).on("impromptu:statechanging",p.statechanging).on("impromptu:statechanged",p.statechanged),t.prompt.jqif[p.show](p.overlayspeed),t.prompt.jqi[p.show](p.promptspeed,function(){var e=t.prompt.jqi.find("."+p.prefix+"states ."+p.prefix+"state").eq(0);t.prompt.goToState(e.data("jqi-name")),t.prompt.jqib.trigger("impromptu:loaded")}),p.timeout>0&&(t.prompt.timeout=setTimeout(function(){t.prompt.close(!0)},p.timeout)),t.prompt.jqib},t.prompt.defaults={prefix:"jqi",classes:{box:"",fade:"",prompt:"",close:"",title:"",message:"",buttons:"",button:"",defaultButton:""},title:"",closeText:"&times;",buttons:{Ok:!0},loaded:function(){},submit:function(){},close:function(){},statechanging:function(){},statechanged:function(){},opacity:.6,zIndex:999,overlayspeed:"slow",promptspeed:"fast",show:"fadeIn",focus:0,defaultButton:0,useiframe:!1,top:"15%",position:{container:null,x:null,y:null,arrow:null,width:null},persistent:!0,timeout:0,states:{},state:{name:null,title:"",html:"",buttons:{Ok:!0},focus:0,defaultButton:0,position:{container:null,x:null,y:null,arrow:null,width:null},submit:function(){return!0}}},t.prompt.currentPrefix=t.prompt.defaults.prefix,t.prompt.currentStateName="",t.prompt.setDefaults=function(e){t.prompt.defaults=t.extend({},t.prompt.defaults,e)},t.prompt.setStateDefaults=function(e){t.prompt.defaults.state=t.extend({},t.prompt.defaults.state,e)},t.prompt.position=function(e){var o=t.fx.off,p=t.prompt.getCurrentState(),r=t.prompt.options.states[p.data("jqi-name")],i=r?r.position:void 0,n=t(window),s=document.body.scrollHeight,a=t(window).height(),m=(t(document).height(),s>a?s:a),u=parseInt(n.scrollTop(),10)+((""+t.prompt.options.top).indexOf("%")>=0?a*(parseInt(t.prompt.options.top,10)/100):parseInt(t.prompt.options.top,10));if(void 0!==e&&e.data.animate===!1&&(t.fx.off=!0),t.prompt.jqib.css({position:"absolute",height:m,width:"100%",top:0,left:0,right:0,bottom:0}),t.prompt.jqif.css({position:"fixed",height:m,width:"100%",top:0,left:0,right:0,bottom:0}),i&&i.container){var f=t(i.container).offset();t.isPlainObject(f)&&void 0!==f.top&&(t.prompt.jqi.css({position:"absolute"}),t.prompt.jqi.animate({top:f.top+i.y,left:f.left+i.x,marginLeft:0,width:void 0!==i.width?i.width:null}),u=f.top+i.y-((""+t.prompt.options.top).indexOf("%")>=0?a*(parseInt(t.prompt.options.top,10)/100):parseInt(t.prompt.options.top,10)),t("html,body").animate({scrollTop:u},"slow","swing",function(){}))}else i&&i.width?(t.prompt.jqi.css({position:"absolute",left:"50%"}),t.prompt.jqi.animate({top:i.y||u,left:i.x||"50%",marginLeft:-1*(i.width/2),width:i.width})):t.prompt.jqi.css({position:"absolute",top:u,left:"50%",marginLeft:-1*(t.prompt.jqi.outerWidth(!1)/2)});void 0!==e&&e.data.animate===!1&&(t.fx.off=o)},t.prompt.style=function(){t.prompt.jqif.css({zIndex:t.prompt.options.zIndex,display:"none",opacity:t.prompt.options.opacity}),t.prompt.jqi.css({zIndex:t.prompt.options.zIndex+1,display:"none"}),t.prompt.jqib.css({zIndex:t.prompt.options.zIndex})},t.prompt.get=function(){return t("."+t.prompt.currentPrefix)},t.prompt.addState=function(e,o,p){var r,i,n,s="",a=null,m="",u="",f=t.prompt.options,l=t("."+t.prompt.currentPrefix+"states"),c=0;o=t.extend({},t.prompt.defaults.state,{name:e},o),null!==o.position.arrow&&(m='<div class="'+f.prefix+"arrow "+f.prefix+"arrow"+o.position.arrow+'"></div>'),o.title&&""!==o.title&&(u='<div class="lead '+f.prefix+"title "+f.classes.title+'">'+o.title+"</div>"),s+='<div id="'+f.prefix+"state_"+e+'" class="'+f.prefix+'state" data-jqi-name="'+e+'" style="display:none;">'+m+u+'<div class="'+f.prefix+"message "+f.classes.message+'">'+o.html+"</div>"+'<div class="'+f.prefix+"buttons "+f.classes.buttons+'"'+(t.isEmptyObject(o.buttons)?'style="display:none;"':"")+">";for(i in o.buttons)n=o.buttons[i],r=o.focus===c||isNaN(o.focus)&&o.defaultButton===c?t.prompt.currentPrefix+"defaultbutton "+f.classes.defaultButton:"","object"==typeof n?(s+='<button class="'+f.classes.button+" "+t.prompt.currentPrefix+"button "+r,n.classes!==void 0&&(s+=" "+(t.isArray(n.classes)?n.classes.join(" "):n.classes)+" "),s+='" name="'+f.prefix+"_"+e+"_button"+n.title.replace(/[^a-z0-9]+/gi,"")+'" id="'+f.prefix+"_"+e+"_button"+n.title.replace(/[^a-z0-9]+/gi,"")+'" value="'+n.value+'">'+n.title+"</button>"):s+='<button class="'+t.prompt.currentPrefix+"button "+f.classes.button+" "+r+'" name="'+f.prefix+"_"+e+"_button"+i.replace(/[^a-z0-9]+/gi,"")+'" id="'+f.prefix+"_"+e+"_button"+i.replace(/[^a-z0-9]+/gi,"")+'" value="'+n+'">'+i+"</button>",c++;return s+="</div></div>",a=t(s),a.on("impromptu:submit",o.submit),void 0!==p?l.find("#"+t.prompt.currentPrefix+"state_"+p).after(a):l.append(a),t.prompt.options.states[e]=o,a},t.prompt.removeState=function(e){var o=t.prompt.getState(e),p=function(){o.remove()};return 0===o.length?!1:("none"!==o.css("display")?o.next().length>0?t.prompt.nextState(p):t.prompt.prevState(p):o.slideUp("slow",p),!0)},t.prompt.getState=function(e){return t("#"+t.prompt.currentPrefix+"state_"+e)},t.prompt.getStateContent=function(e){return t.prompt.getState(e)},t.prompt.getCurrentState=function(){return t.prompt.getState(t.prompt.getCurrentStateName())},t.prompt.getCurrentStateName=function(){return t.prompt.currentStateName},t.prompt.goToState=function(e,o,p){var r=(t.prompt.get(),t.prompt.options),i=t.prompt.getState(e),n=r.states[i.data("jqi-name")],s=new t.Event("impromptu:statechanging");return"function"==typeof o&&(p=o,o=!1),t.prompt.jqib.trigger(s,[t.prompt.getCurrentStateName(),e]),!s.isDefaultPrevented()&&i.length>0&&(t.prompt.jqi.find("."+t.prompt.currentPrefix+"parentstate").removeClass(t.prompt.currentPrefix+"parentstate"),o?(t.prompt.jqi.find("."+t.prompt.currentPrefix+"substate").not(i).slideUp(r.promptspeed).removeClass("."+t.prompt.currentPrefix+"substate").find("."+t.prompt.currentPrefix+"arrow").hide(),t.prompt.jqi.find("."+t.prompt.currentPrefix+"state:visible").addClass(t.prompt.currentPrefix+"parentstate"),i.addClass(t.prompt.currentPrefix+"substate")):t.prompt.jqi.find("."+t.prompt.currentPrefix+"state").not(i).slideUp(r.promptspeed).find("."+t.prompt.currentPrefix+"arrow").hide(),t.prompt.currentStateName=n.name,i.slideDown(r.promptspeed,function(){var o=t(this);"string"==typeof n.focus?o.find(n.focus).eq(0).focus():o.find("."+t.prompt.currentPrefix+"defaultbutton").focus(),o.find("."+t.prompt.currentPrefix+"arrow").show(r.promptspeed),"function"==typeof p&&t.prompt.jqib.on("impromptu:statechanged",p),t.prompt.jqib.trigger("impromptu:statechanged",[e]),"function"==typeof p&&t.prompt.jqib.off("impromptu:statechanged",p)}),o||t.prompt.position()),i},t.prompt.nextState=function(e){var o=t("#"+t.prompt.currentPrefix+"state_"+t.prompt.getCurrentStateName()).next();return o.length>0&&t.prompt.goToState(o.attr("id").replace(t.prompt.currentPrefix+"state_",""),e),o},t.prompt.prevState=function(e){var o=t("#"+t.prompt.currentPrefix+"state_"+t.prompt.getCurrentStateName()).prev();return o.length>0&&t.prompt.goToState(o.attr("id").replace(t.prompt.currentPrefix+"state_",""),e),o},t.prompt.close=function(e,o,p,r){t.prompt.timeout&&(clearTimeout(t.prompt.timeout),t.prompt.timeout=!1),t.prompt.jqib&&t.prompt.jqib.fadeOut("fast",function(){t.prompt.jqib.trigger("impromptu:close",[o,p,r]),t.prompt.jqib.remove(),t(window).off("resize",t.prompt.position)})},t.fn.prompt=function(e){void 0===e&&(e={}),void 0===e.withDataAndEvents&&(e.withDataAndEvents=!1),t.prompt(t(this).clone(e.withDataAndEvents).html(),e)}})(jQuery);
// ----------------------------------------------------------------------------
//                             Global variables
// ----------------------------------------------------------------------------
var margin = {top: -5, right: -5, bottom: -5, left: -5};
var WIDTH = window.screen.availWidth - 40;
var HEIGHT = window.screen.availHeight - 150;

var textFile;
var textFileName = 'noname';

var svg, canvas, container, frame, rect, vis;
var layout;

//var PAN_AND_ZOOM = true;
var BENCHMARK = false;
var EMBEDDED = false;
var oldTranslate, oldScale;

var statusBarMessage = '';

// In case of overlapping events, just execute one
//var doingAction = false;

// For drag and drop behaviour, and other
var source_node = null, source_object = null;
var target_node = null, target_object = null;
var selected_node = null, selected_link = null, selected_object = null;
var linking = false; 
var coord = {x: 0, y: 0};
var pz = {translate: {x: 0, y: 0}, scale: 1}; // Pan & Zoom
var drag_line = null;

function resetVariables() {
	source_node = null, source_object = null;
	target_node = null, target_object = null;
	selected_node = null, selected_link = null, selected_object = null;
	linking = false; 
	coord = {x: 0, y: 0};
	pz = {translate: {x: 0, y: 0}, scale: 1}; // Pan & Zoom
	drag_line = null;
}

// Optimization
var isTree = false; // Global variable in order not to run so many times the DFS algorihms

// Layout types
HORIZONTAL_TREE = 'Horizontal tree';
VERTICAL_TREE = 'Vertical tree';
RADIAL_TREE = 'Radial tree';
FORCE_DIRECTED = 'Force directed';

// Default values
DEFAULT_SHAPE = 'Circle';
DEFAULT_COLOR_NODE = 'White';
DEFAULT_COLOR_LINK = 'Gray';
DEFAULT_WIDTH = 2;

// Debug mode
var DEBUG = true;


function checkBrowserCompatibility() {
  // Check for the various File API support.
  return (window.File && window.FileReader && window.FileList && window.Blob && window.DOMParser);
} 

function installedPlugins() {
  var out = "";
  out = out + "<table cellspacing='4' cellpadding='4'>";
  out = out + "<tr><th bgcolor='#CCCCCC'>Name<\/th><th bgcolor='#CCCCCC'>File<\/th><th bgcolor='#CCCCCC'>Description<\/th><\/tr>";
  for (i=0; i<navigator.plugins.length; i++) {
	  thisPlugin = navigator.plugins[i]
	  out = out + "<tr valign='top'><td bgcolor='#CCCCCC'>" + thisPlugin.name;
	  out = out + "<\/td><td bgcolor='#CCCCCC'>" + thisPlugin.filename;
	  out = out + "<\/td><td bgcolor='#CCCCCC'>" + thisPlugin.description + "<\/td><\/tr>";
  }
  out = out + "<\/table>";
	return out;
}



function console_listNodes(n) {
	var i;
	for (i=0; i<n.length; i++) {
		console.log(
			'id: ' + n[i].id + ', ' +
			'x: ' + n[i].x + ', ' +
			'y: ' + n[i].y + ', ' +
			'label: ' + n[i].label + ', ' +
			'visible: ' + n[i].visible + ', ' +
			'collapsed: ' + n[i].collapsed + ', ' 
		);
	}
}

function console_listLinks(l) {
	var i;
	for (i=0; i<l.length; i++) {
		console.log(
			'source.id: ' + l[i].source.id + ', ' +
			'source.visible: ' + l[i].source.visible + ', ' +
			'source.collapsed: ' + l[i].source.collapsed + ', ' +
			'target.id: ' + l[i].target.id + ', ' +
			'target.visible: ' + l[i].target.visible + ', ' +
			'target.collapsed: ' + l[i].target.collapsed + ', ' 
		);
	}
}
var BENCHMARK_ITERATIONS = 10;

/**
 * Create a Benchmark
 * @constructor
 * @this {Benchmark}
 * @param {Array} files The list of files to benchmark.
*/
Benchmark = function(files) {
	this.files = files;
	this.results = []
	this.waiting = false;
}

/**
 * Starts the benchmark.
 */
Benchmark.prototype.start = function() {
	var i;

	document.body.style.cursor = 'wait';
	this.menuBarDiv = document.getElementById('menuBar');
	this.mainDiv = document.getElementById('main');
	this.statusBarDiv = document.getElementById('statusBar');
	this.logDiv = document.getElementById('log');
	this.logDiv.style.display = '';
	this.logDiv.innerHTML = '<h2>Benchmark results</h2>';
//	HEIGHT = HEIGHT / 2;

	this.results = []
	for (i=0; i<this.files.length; i++) {
		this.loadFile(this.files[i]);
	}
//		this.loadFile(this.files[0]);
};

/**
 * Loads a file.
 * @param {String} filename The name of the file.
 */
Benchmark.prototype.loadFile = function(filename) {
	var timerStart, loadTime, loadFileTime, textFile = '';
	var layoutHorizontalTreeTime, layoutVerticalTreeTime, layoutRadialTreeTime, layoutForceDirected;

	var url = String(window.location);
	var path = getBaseFromURL(url);
	var filenameURL = path + '/' + filename
console.log('filenameURL: ' + filenameURL);

	timerStart = Date.now();

	var self = this;

	$('#buffer').load(filenameURL, function(response, status, xhr) {
		if (status == "error") {
			alert('Error ' + xhr.status + ' ' + xhr.statusText);
			throw 'Benchmark Aborted.'
		}
		self.logDiv.innerHTML += '<h3>File ' + filename + '</h3>';
		self.logDiv.innerHTML += '<ul>';
		textFile = document.getElementById('buffer').innerHTML;
		layout.importGML(textFile);
		loadFileTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Load file: ' + loadFileTime + '</li>';

		// HORIZONTAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutHorizontalTree(container);
		layoutHorizontalTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Horizontal tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('HORIZONTAL_TREE: ' + layoutHorizontalTreeTime + ' s.');
		
		// VERTICAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutVerticalTree(container);
		layoutVerticalTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Vertical tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('VERTICAL_TREE: ' + layoutVerticalTreeTime + ' s.');

		// RADIAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutRadialTree(container);
		layoutRadialTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Radial tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('RADIAL_TREE: ' + layoutRadialTreeTime + ' s.');
	
		// FORCE_DIRECTED
		timerStart = Date.now();
		clearCanvas();
		layout.layoutForceDirected(container);
		layoutForceDirectedTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Force directed: ' + layoutForceDirectedTime + '</li>';
console.log('FORCE_DIRECTED: ' + layoutForceDirectedTime + ' s.');

		self.logDiv.innerHTML += '</ul>';
	
		var layoutTime = {
			loadFile: loadFileTime, 
			horizontalTree: layoutHorizontalTreeTime, 
			verticalTree: layoutVerticalTreeTime, 
			radialTree: layoutRadialTreeTime, 
			forceDirected: layoutForceDirectedTime
		};

		self.results.push({filename: filename, time: layoutTime});
console.log('this.results:' + JSON.stringify(self.results));
		
		layout.clear();	
		if (filename == self.lastFile()) {
			self.menuBarDiv.style.display = 'none';
			self.mainDiv.style.display = 'none';
			self.statusBarDiv.style.display = 'none'; 
			document.body.style.cursor = 'default';

			showResults();
		}
	});
};

/**
 * Show results.
 */
Benchmark.prototype.showResults = function() {
	var i, text = 'Benchmark results\n\n';

	for (i=0; i<this.results.length; i++) {
		text += 'File ' + this.results[i].filename + '\n';
		text += '  - LoadFile: ' + this.results[i].time.loadFile + '\n';
		text += '  - HorizontalTree: ' + this.results[i].time.horizontalTree + '\n';
		text += '  - VerticalTree: ' + this.results[i].time.verticalTree + '\n';
		text += '  - RadialTree: ' + this.results[i].time.radialTree + '\n';
		text += '  - ForceDirected: ' + this.results[i].time.forceDirected + '\n';
	}
	alert(text);
}

/**
 * Returns the last file of the benchmark.
 * @return {string} The last file of the benchmark.
 */
Benchmark.prototype.lastFile = function() {
	var i = this.files.length;
	return i==0 ? null : this.files[i-1];
}

// dom_utils.js

/*function $(id) {
  return document.getElementById(id);
}*/

/**
 * Get parameters from the URL.
 * Adapted from http://stackoverflow.com/questions/979975/how-to-get-the-value-from-url-parameter
 * @return {Object} The node or null.
 */
function getURLParameters() {
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [ query_string[pair[0]], pair[1] ];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	} 
	return query_string;
}

function removeElement(node) {
  if (node.parentNode)
    node.parentNode.removeChild(node);
}

function setNodeAttribute(node, attribute, value) {
  if (attribute == "class")
    node.className = value;
  else if (attribute == "checked")
    node.defaultChecked = value;
  else if (attribute == "for")
    node.htmlFor = value;
  else if (attribute == "style")
    node.style.cssText = value;
  else
    node.setAttribute(attribute, value);
}

function dom(name, attributes) {
  var node = document.createElement(name);
  if (attributes) {
    forEachIn(attributes, function(name, value) {
      setNodeAttribute(node, name, value);
    });
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}

/**
 * Gets the extension of a file
 * @param {string} filename The name of the file.
 * @return {string} The file extension.
 */
function getFileExtension(filename) {
	return filename.split('.').pop();
}

/**
 * Gets the filename from a URL
 * @param {string} url The URL.
 * @return {string} The filename.
 */
function getFileNameFromURL(url) {
	return url.substring(url.lastIndexOf('/')+1);
}

/**
 * Gets the URL without the file and the following.
 * @param {string} url The URL.
 * @return {string} The base.
 */
function getBaseFromURL(url) {
	return url.substring(0, url.lastIndexOf('/'));
}

/**
 * Gets the path from a URL
 * @param {string} url The URL.
 * @return {string} The path.
 */
function getPathFromURL(url) {
console.log('url: ' + url);	
	var a = url.split('://');
	var i = a[1].lastIndexOf('/');
//console.log('a[1]: ' + a[1] + ', i: ' + i);	
//console.log('a[1]: ' + a[1] + ', s: ' + s);	
	return s = a[1].substring(0, i);
}


/*function readFile(that) {
alert("that:" + that.files[0]);
  var output;
	if (that.files && that.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {  
			output = e.target.result;
alert("e:" + output);
		};
		prova = reader.readAsText(that.files[0]);
alert("reader:" + output);
alert("prova:" + prova);
	}
  return output;
} 
*/

// math_utils.js
// See http://en.wikipedia.org/wiki/Polar_coordinate_system

/**
 * Calculates cartesian x from a polar coordinates.
 * @param {real} r The radial coordinate.
 * @param {real} t The angular coordinate.
 * @return {real} The cartesian x coordinate.
 */
function cartesianX(r, t) {
	return r * Math.cos((t - 90) / 180 * Math.PI);
}

/**
 * Calculates cartesian y from a polar coordinates.
 * @param {real} r The radial coordinate.
 * @param {real} t The angular coordinate.
 * @return {real} The cartesian y coordinate.
 */
function cartesianY(r, t) {
	return r * Math.sin((t - 90) / 180 * Math.PI);
}

/**
 * Calculates radial coordinate from a cartesian coordinates.
 * @param {real} x The x coordinate.
 * @param {real} y The y coordinate.
 * @return {real} The radial coordinate.
 */
function polarR(x, y) {
	return Math.sqrt(x*x + y*y);
}

/**
 * Calculates angular coordinate from a cartesian coordinates.
 * @param {real} x The x coordinate.
 * @param {real} y The y coordinate.
 * @return {real} The angular coordinate.
 */
function polarT(x, y) {
	return Math.atan2(y, x);
}
// string_utils.js

/**
 * Gives format to s string like printf/string.format
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 * Example: "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
 * Output: ASP is dead, but ASP.NET is alive! ASP {2}
 */
String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function nextIndexOf(str, substr, from) {
  var str1 = str.substring(from, str.length);
//alert("str1: " + str1);
//alert("str1: " + str.indexOf(substr));
// ...
  return str.indexOf(substr);
} 

function getStringBetween(str, left, right) {
  var i, s = '';

  i = str.indexOf(left);
  if (i>0) {
    s = str.substring(i+left.length, str.length);
    i = s.indexOf(right);
    if (i>0) {
      s = s.substring(0, i);
    }
  }

  return s;
}

/**
 * Gets the next word from position i or from a key word.
 * @return {string} The next word.
 */
function nextWord(str, i) {
	var i, s = '';

	if (typeof i == 'string') {
		i = str.indexOf(i);
		if (i == -1)
			return s;
	}
  
	// Begin of the next word
	i = str.indexOf(' ', i);
	s = str.substring(i, str.length).trim() + ' '; 
	// End of the next word
	i = s.indexOf(' ');
	s = s.substring(0, i).trim();  
	return s;
}

/**
 * Gets the next quoted word from position i or from a key word.
 * @return {string} The next quoted word.
 */
function nextQuotedWord(str, i) {
	var i, s = '';

	if (typeof i == 'string') {
		i = str.indexOf(i);
		if (i == -1)
			return s;
	}

	// Begin of the next word
	i = str.indexOf('"', i);
	if (i>=0) {
		s = str.substring(i+1, str.length).trim();  
		// End of the next word
		i = s.indexOf('"');
		s = s.substring(0, i).trim();  
	}
	return s;
}

// gml_file.js

/**
 * Creates an instance of GMLFile.
 * @constructor
 * @param {string} content The Content of the file.
 */
function GMLFile(content) {
	this.className = 'GMLFile';
    if (content===undefined) { // parameter was omitted in call
        this.content = '';
    }
    else {
        this.content = content.replace(/\r?\n|\r/g, ' '); // Replace ENTER with a space
    }
}

/**
 * Get the properties of an element from a given text or from the whole file 
 * (if not specified), that means, the properties inside the brackets. 
 * @param {string} element The element whose properties must be collected.
 * @return {Array} Array of properties.
 */
GMLFile.prototype.getProperties = function(element, text) {
	var i, a=[], s, openBracket=0;

	if (text == undefined)
		s = this.content;
	else
		s = text;

	i = s.trim().indexOf(element);
	while (i>=0) {
		// String without element
		s = s.substring(i+element.length, s.length).trim();

		// The next must be [
		i = s.indexOf('[');
		if (i==0) {
		openBracket++;
		s = s.substring(i.length, s.length).trim();
		for (i=0; i<s.length; i++) {
			if (s[i]=='[') {
				openBracket++
			}
			else if (s[i]==']') {
				openBracket--;
				if (openBracket==1) {
					// This is the last ]
					rest = s.substring(i+1, s.length).trim();
					s = s.substring(1, i).trim();
					break; 
				}
			}
		}
		s = s.substring(0, i).trim();
		a.push(s);
		openBracket=0;
		}
		else {
			s = '';
		}
		s = rest;
		i = s.trim().indexOf(element);
		rest = '';
	}
	return a;
}

GMLFile.prototype.getPair = function(str, item) {
    var i, r='';

    i = str.indexOf(item);
    if (i>=0) {
        // Item exists
        r = nextWord(str, i);
    }
    return r;
}

GMLFile.prototype.getQuotedPair = function(str, item) {
    var i, r='';

    i = str.indexOf(item);
    if (i>=0) {
        // Item exists
        r = nextQuotedWord(str, i);
    }
    return r;
}

/**
 * Get a list of nodes from a GraphML file.
 * @return {Array} True if the graph drawing is a tree.
 */
GMLFile.prototype.getNodes = function() {
    var a, p, i, n=[], node;
	var shape, color;

    a = this.getProperties('node');
    for (i=0; i<a.length; i++) {
		node = [];
		node.push(this.getPair(a[i], 'id'));
		node.push(this.getQuotedPair(a[i], 'label'));
		p = this.getProperties('graphics', a[i]);
		if (p.length > 0) {
			shape = this.getQuotedPair(p[0], 'type');
			if (shape == 'rectangle') shape = 'Square';
			else shape = 'Circle';
			node.push(shape);
			color = this.getQuotedPair(p[0], 'fill');
			if (color == '') color = DEFAULT_COLOR_NODE;
			node.push(color);
		}
//console.log('node: ' + node)
		n.push(node);
    }
    return n;
}

/**
 * Get a list of edges from a GraphML file.
 * @return {Edge[]} True if the graph drawing is a tree.
 */
GMLFile.prototype.getEdges = function() {
    var a, i, n=[], link;
	var width, color;

    a = this.getProperties('edge');
    for (i=0; i<a.length; i++) {
		link = [];
		link.push(this.getPair(a[i], 'source'));
		link.push(this.getPair(a[i], 'target'));
		link.push(this.getQuotedPair(a[i], 'label'));
		p = this.getProperties('graphics', a[i]);
		if (p.length > 0) {
			width = this.getPair(p[0], 'width');
			if (width == '') width = DEFAULT_WIDTH;
			link.push(width);
			color = this.getQuotedPair(p[0], 'fill');
			if (color == '') color = DEFAULT_COLOR_LINK;
			link.push(color);
		}
//console.log('link: ' + link)
		n.push(link);
    }
    return n;
}

/**
 * Save the current graph drawing in GML format.
 * @param {GraphDrawing} graph The graph drawing.
 * @param {string} filename The name of the file.
 */
GMLFile.prototype.save = function(graph, filename) {
    var i, sFile = '';
    var ENTER = '\n'

    sFile += 'graph [' + ENTER;
    for (i=0;i<graph.listNodes.length;i++) {  
        sFile += '  node [' + ENTER;
        sFile += '    id ' + graph.listNodes[i][0] + ENTER;
		if (graph.listNodes[i][1] != '')
			sFile += '    label "' + graph.listNodes[i][1] + '"' + ENTER;
		sFile += '    graphics [' + ENTER;
		sFile += '      w 10.000' + ENTER;
		sFile += '      h 10.000' + ENTER;
		if (graph.listNodes[i].length > 2 && graph.listNodes[i][2] == 'Square') 
			sFile += '      type "rectangle"' + ENTER;
		else 
			sFile += '      type "oval"' + ENTER;
		if (graph.listNodes[i].length > 3)
			sFile += '      fill "' + graph.listNodes[i][3] + '"' + ENTER;
		else
			sFile += '      fill "' + DEFAULT_COLOR_NODE + '"' + ENTER;
		sFile += '    ]' + ENTER;
		sFile += '  ]' + ENTER;
    }
    for (i=0;i<graph.listEdges.length;i++) {  
        sFile += '  edge [' + ENTER;
        sFile += '    source ' + graph.listEdges[i][0] + ENTER;    
        sFile += '    target ' + graph.listEdges[i][1] + ENTER;    
		sFile += '    graphics [' + ENTER;
		sFile += '      type "line"' + ENTER;
		if (graph.listEdges[i].length > 3)
			sFile += '      width ' + graph.listEdges[i][3] + ENTER;
		else
			sFile += '      width ' + DEFAULT_WIDTH + ENTER;
		if (graph.listEdges[i].length > 4)
			sFile += '      fill "' + graph.listEdges[i][4] + '"' + ENTER;
		else
			sFile += '      fill "' + DEFAULT_COLOR_LINK + '"' + ENTER;
		sFile += '    ]' + ENTER;
		sFile += '  ]' + ENTER;
	}
    sFile += ']' + ENTER;

    var blob = new Blob([sFile], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename + '.gml');
}
// graphml_file.js

/**
 * Creates an instance of GraphMLFile.
 * @constructor
 * @param {string} content The Content of the file.
 */
function GraphMLFile(content) {
    if (content===undefined) { // parameter was omitted in call
        this.content = '';
    }
    else
    {
        this.content = content;
        var parser = new DOMParser();
        this.XML = parser.parseFromString(content, "text/xml");
    }
}

/**
 * Get a list of nodes from a GraphML file.
 * @return {Node[]} True if the graph drawing is a tree.
 */
GraphMLFile.prototype.getNodes = function() {
	var i, j, n = [];
	var nodes, data, key;
	var id, label = '', shape = DEFAULT_SHAPE, color = DEFAULT_COLOR_NODE;

	// Example:
	//  <node id="1">
	//      <data key="label">ORG RECT</data>
	//      <data key="shape">Square</data>
	//      <data key="color">Orange</data>
	//  </node>
	
	nodes = this.XML.getElementsByTagName('node');
	for (i=0; i<nodes.length; i++) {
		id = nodes[i].getAttribute('id');
		data = nodes[i].getElementsByTagName('data');
		label = '', shape = DEFAULT_SHAPE, color = DEFAULT_COLOR_NODE;
		for (j=0; j<data.length; j++) {
			key = data[j].getAttribute('key');
			switch (key) {
				case 'label': 
					label = data[j].textContent;
					break;
				case 'shape': 
					shape = data[j].textContent;
					break;
				case 'color': 
					color = data[j].textContent;
					break;
			}
		}
//console.log('n: ' + id + ', ' + label + ', ' + shape + ', ' + color);		
		n.push([id, label, shape, color]);
	}
	return n;
}

/**
 * Get a list of edges from a GraphML file.
 * @return {Edge[]} True if the graph drawing is a tree.
 */
GraphMLFile.prototype.getEdges = function() {
	var i, s, t, n = [];
	var id, label = '', width = DEFAULT_WIDTH, color = DEFAULT_COLOR_LINK;

	// Example:
    //  <edge source="2" target="4">
    //  	<data key="width">2</data>
    //  	<data key="color">Lime</data>
    //  </edge>
	
	var links = this.XML.getElementsByTagName("edge");
	for (i=0;i<links.length;i++) {
		s = links[i].getAttribute("source");
		t = links[i].getAttribute("target");
		data = links[i].getElementsByTagName('data');
		label = '', width = DEFAULT_WIDTH, color = DEFAULT_COLOR_LINK;
		for (j=0; j<data.length; j++) {
			key = data[j].getAttribute('key');
			switch (key) {
				case 'label': 
					label = data[j].textContent;
					break;
				case 'width': 
					width = data[j].textContent;
					break;
				case 'color': 
					color = data[j].textContent;
					break;
			}
		}		
//console.log('l: ' + s + ', ' + t + ', ' + label + ', ' + width + ', ' + color);		
		n.push([s, t, label, width, color]);
	}
	return n;
}

/**
 * Save the current graph drawing in GraphML format.
 * @param {GraphDrawing} graph The graph drawing.
 * @param {string} filename The name of the file.
 */
GraphMLFile.prototype.save = function(graph, filename) {
    var i, sFile = '';
    var ENTER = '\n'

    sFile += '<?xml version="1.0" encoding="UTF-8"?>' + ENTER;
    sFile += '<graphml>' + ENTER;
    sFile += '  <key id="label" for="node" attr.name="label" attr.type="string"/>' + ENTER;
    sFile += '  <key id="shape" for="node" attr.name="shape" attr.type="string">' + ENTER;
    sFile += '    <default>' + DEFAULT_SHAPE + '</default>' + ENTER;
    sFile += '  </key>' + ENTER;
    sFile += '  <key id="color" for="node" attr.name="color" attr.type="string">' + ENTER;
    sFile += '    <default>' + DEFAULT_COLOR_NODE + '</default>' + ENTER;
    sFile += '  </key>' + ENTER;
    sFile += '  <key id="label" for="edge" attr.name="label" attr.type="string"/>' + ENTER;
    sFile += '  <key id="width" for="edge" attr.name="width" attr.type="int">' + ENTER;
    sFile += '    <default>' + DEFAULT_WIDTH + '</default>' + ENTER;
    sFile += '  </key>' + ENTER;
    sFile += '  <key id="color" for="edge" attr.name="color" attr.type="string">' + ENTER;
    sFile += '    <default>' + DEFAULT_COLOR_LINK + '</default>' + ENTER;
    sFile += '  </key>' + ENTER;
	
    sFile += '  <graph>' + ENTER;
    for (i=0;i<graph.listNodes.length;i++) {  
        sFile += '    <node id="' + graph.listNodes[i][0] + '">' + ENTER;
		if (graph.listNodes[i].length > 1 && graph.listNodes[i][1] != '') 
			sFile += '      <data key="label">' + graph.listNodes[i][1] + '</data>' + ENTER;
		if (graph.listNodes[i].length > 2) 
			sFile += '      <data key="shape">' + graph.listNodes[i][2] + '</data>' + ENTER;
		if (graph.listNodes[i].length > 3) 
			sFile += '      <data key="color">' + graph.listNodes[i][3] + '</data>' + ENTER;
        sFile += '    </node>' + ENTER;
    }
    for (i=0;i<graph.listEdges.length;i++) {  
        sFile += '    <edge source="' + graph.listEdges[i][0] + '" target="' + graph.listEdges[i][1] + '">' + ENTER;
		if (graph.listEdges[i].length > 2 && graph.listEdges[i][2] != '') 
			sFile += '      <data key="label">' + graph.listEdges[i][2] + '</data>' + ENTER;
		if (graph.listEdges[i].length > 3) 
			sFile += '      <data key="width">' + graph.listEdges[i][3] + '</data>' + ENTER;
		if (graph.listEdges[i].length > 4) 
			sFile += '      <data key="color">' + graph.listEdges[i][4] + '</data>' + ENTER;
        sFile += '    </edge>' + ENTER;
    }
    sFile += '  </graph>' + ENTER;
    sFile += '</graphml>' + ENTER;

    var blob = new Blob([sFile], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename + '.graphml');
}
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/** 
 *  @file      graph_drawing.js 
 *  @summary   Capçalera del fitxer de filtres 
 *  @desc      En aquest fitxer hi ha les capçaleres de les utilitats dels filtres de text 
 *  @author    Josep Ciberta 
 *  @version   0.1 
 *  \date      10-12-2011 
 *  @copyright GNU Public License. 
 */ 

/**
 * Creates an instance of Node.
 * @constructor
 * @this {Node}
 * @param {int} id The identification of the node.
 * @param {string} label The label of the node.
 * @param {string} shape The shape of the node.
 * @param {string} color The color of the node.
 */
function Node(id, label, shape, color) {
    this.className = 'Node';

	this.id = id;
	(label == undefined) ? this.label = '' : this.label = label; 
	(shape == undefined) ? this.shape = 'Circle' : this.shape = label; 
	(color == undefined) ? this.color = 'White' : this.color = label; 
}

Node.prototype.getId = function() {
    return this.id;
}

Node.prototype.getLabel = function() {
    return this.label;
}

/**
 * Creates an instance of Edge.
 * @constructor
 * @this {Edge}
 * @param {int} src The source of the edge.
 * @param {int} dst The destinations of the edge.
 * @param {string} label The label of the edge (never used).
 */
function Edge(src, dst, label) {
    this.className = 'Edge';

    this.source = src;
    this.target = dst;
    this.label = label;

    this.getSource = function() { return this.source; };
    this.getTarget = function() { return this.target; };
}

/**
 * Creates an instance of GraphDrawing.
 *
 * @constructor
 * @this {GraphDrawing}
 * @param {Array} ln List of nodes.
 * @param {Array} le List of edges.
 */
function GraphDrawing(ln, le) {
    this.className = 'GraphDrawing';

	if (ln===undefined) { // parameter was omitted in call
		this.listNodes = [];
		this.listEdges = [];
	}
	else {
		this.listNodes = ln;
		this.listEdges = le;
	}

//	this.isDirected = false;
//	this.isPlanar = false;
}

/**
 * Gets the adjacent nodes of a specified node.
 * @param {int} id The id of the node.
 * @return {Array} The adjacent nodes.
 */
GraphDrawing.prototype.getAdjacents = function(n) {
	var r=[], i;

	for (i=0; i<this.listEdges.length; i++) {
		if (this.listEdges[i][0]==n) {
			if (r.indexOf(this.listEdges[i][1]!=-1))
			r.push(this.listEdges[i][1]);
		}
		else if (this.listEdges[i][1]==n) {
			if (r.indexOf(this.listEdges[i][0]!=-1))
			r.push(this.listEdges[i][0]);
		}
	}
	return r;
}

/**
 * Gets the directed adjacent nodes of a specified node.
 * @param {int} id The id of the node.
 * @return {Array} The directed adjacent nodes.
 */
GraphDrawing.prototype.getDirectedAdjacents = function(n) {
    var r=[], i;

    for (i=0; i<this.listEdges.length; i++) {
        if (this.listEdges[i][0]==n) {
            if (r.indexOf(this.listEdges[i][1]!=-1))
            r.push(this.listEdges[i][1]);
        }
    }
    return r;
}

/**
 * Gets the adjacency list of the graph drawing.
 * @return {Array} The adjacency list.
 */
GraphDrawing.prototype.getAdjacencyList = function() {
    var r={}, n, i;

//console.log('this.listNodes: ' + this.listNodes);
//console.log('this.listEdges: ' + this.listEdges);
//console.log('this.listNodes.length: ' + this.listNodes.length);
    for (i=0; i<this.listNodes.length; i++) {
      n = this.listNodes[i][0];
      r[n] = this.getAdjacents(n);
//console.log('n: ' + n + ', ' + r[n]);
    }
    return r;
}

/**
 * Gets the tree of the graph drawing as a JSON object.
 * @return {Object} The tree in JSON notation.
 */
GraphDrawing.prototype.getTreeD3JSON = function() {
//console.log('this: ' + this);
    var t = new Tree(this);
//console.log('Tree.toD3Json: ' + t.toD3JSONString());

//    return t.toD3JSONString();
    return t.toD3JSON();
}

/**
 * Gets the node with a specific id.
 * @param {string} id The id of the node.
 * @return {Node} The node or null.
 */
GraphDrawing.prototype.getNode = function(id) {
    var i;
    for (i=0; i<this.listNodes.length; i++) { 
        if (this.listNodes[i][0]==id)
        return this.listNodes[i];
    } 
    return null;   
}

/**
 * Sets the node with a specific values.
 * @param {int} id The id of the node.
 * @param {string} label The label of the node.
 * @param {string} shape The shape of the node.
 * @param {string} color The color of the node.
 */
GraphDrawing.prototype.setNode = function(id, array) {
    var i;
    for (i=0; i<this.listNodes.length; i++) { 
        if (this.listNodes[i][0]==id) {
			this.listNodes[i][1] = array[1];
			this.listNodes[i][2] = array[2];
			this.listNodes[i][3] = array[3];
//console.log('this.listNodes:');
//console.dir(this.listNodes);			
		}
    } 
}

/**
 * Gets the link with a specific id.
 * @param {int} source The source node id of the link.
 * @param {int} target The target node id of the link.
 * @return {Edge} The link or null.
 */
GraphDrawing.prototype.getLink = function(source, target) {
//console.log('source: ' + source + ', target:' + target);
    var i;
    for (i=0; i<this.listEdges.length; i++) { 
        if (this.listEdges[i][0]==source && this.listEdges[i][1]==target) {
//console.log('this.listEdges[i]: ' + this.listEdges[i]);
			return this.listEdges[i];
		}
    } 
    return null;   
}

/**
 * Gets the root node when the graph drawing represents a tree, otherwise it throw an exception.
 * @return {Node} The root node.
 */
GraphDrawing.prototype.getRoot = function() {
  if (!this.isTree) throw "Not a tree."; 
  
  // The source must be unique, not a target from another node.
  var root, n1, n2, i, j;
  var bRoot = true;
  for (i=0; i<this.listEdges.length; i++) {
    n1 = this.listEdges[i][0];
    bRoot = true;
    for (j=0; j<this.listEdges.length; j++) {
      if (i!=j) {
        n2 = this.listEdges[j][1];
//console.log('i: ' + i + ', j: ' + j + ' n1: ' + n1 + ', n2: ' + n2);
        if (n1==n2) bRoot = false;
      }
    }
    if (bRoot) {
//        root = n1;
//console.log('n1: ' + n1);
      root = this.getNode(n1);
      break;
    }
//console.log('root: ' + root);
  }
  return root;
}

/**
* Imports a file in a GML format.
* @param {String} newFile The file to import.
*/
GraphDrawing.prototype.importGML = function(newFile) {
	var gml, graph, i, n, e;

	gml = new GMLFile(newFile);

	// Get nodes
	this.listNodes = gml.getNodes();
//console.log('Nodes=' + this.listNodes);

	// Get edges
	this.listEdges = gml.getEdges();
//console.log('Edges=' + this.listEdges);
}

/**
* Imports a file in a GraphML format.
* @param {String} newFile The file to import.
*/
GraphDrawing.prototype.importGraphML = function(newFile) {
	var graphml, graph, i, n, e;

	graphml = new GraphMLFile(newFile);

	// Get nodes
	this.listNodes = graphml.getNodes();
//console.log('Nodes=' + this.listNodes);

	// Get edges
	this.listEdges = graphml.getEdges();
//console.log('Edges=' + this.listEdges);
}

/**
* Determines if a graph drawing is connected.
* @return {boolean} True if the graph drawing is connected.
*/
GraphDrawing.prototype.isConnected = function() {
	// Depth-First Search (DFS) variation (non-recursive)
	var l=[]; // List of visited
	var i=0, j;

//console.log('GraphDrawing.isConnected:');
//console.log(' - listNodes: ' + this.listNodes);
//console.log(' - listNodes.length: ' + this.listNodes.length);
	if (this.listNodes.length<2) return false;

	l.push(parseInt(this.listNodes[0][0])); // First node
	while (i<l.length) {
//console.log(' - l (list of visited): ' + l);
		a = this.getAdjacents(l[i]);
//console.log(' - a (adjacents of l): ' + a);
		for (j=0; j<a.length; j++) {
			a[j] = parseInt(a[j]);
			if (l.indexOf(a[j])==-1) {
//console.log('   - l: ' + l);
//console.dir(l);
//console.log('   - a[j]: ' + a[j]);
//console.dir(a[j]);
//console.log('   - l.indexOf(a[j]): ' + l.indexOf(a[j]));
				l.push(a[j]);
			}
		}
		i++;
	}
//console.log(' - l.length: ' + (l.length));
//console.log(' - Result: ' + (this.listNodes.length==l.length));
	return (this.listNodes.length==l.length);
}

/**
 * Determines if a there is a cicle in a graph drawing.
 * @return {boolean} True if the graph drawing is cyclic.
 */
GraphDrawing.prototype.isCyclic = function() {
	// Depth-First Search (DFS) variation (non-recursive)
	var l=[], i=0, j, cycleDetected=false;

	if (this.listNodes.length<2) return false;

	l.push(this.listNodes[0][0]); // First node
	while (i<l.length) {
		a = this.getDirectedAdjacents(l[i]);
		for (j=0; j<a.length; j++) {
			if (l.indexOf(a[j])==-1)
				l.push(a[j]);
			else {
				cycleDetected = true;
				break;
			}
		}
		i++;
	}
	return cycleDetected;
}

/**
 * Determines if a graph drawing is a tree.
 * @return {boolean} True if the graph drawing is a tree.
 */
GraphDrawing.prototype.isTree = function() {
    return (this.isConnected() && !this.isCyclic());
}

/**
 * Determines if a graph drawing is a binary tree.
 * @return {boolean} True if the graph drawing is a binary tree.
 */
GraphDrawing.prototype.isBinaryTree = function() {
	var i, da;
    var bIsBinaryTree = this.isTree();
	
	if (bIsBinaryTree) {
        // Check for each node there is no more than 2 adjacent edges
		for (i=0; i<this.listNodes.length;i++) {
            da = this.getDirectedAdjacents(this.listNodes[i][0]);
            if (da.length > 2) {
                bIsBinaryTree = false;
                break;
            }
        }
	}
    return bIsBinaryTree;
}

/**
 * Saves the graph drawing in the GML format.
 * @param {string} filename The name of the file.
 */
GraphDrawing.prototype.saveAsGML = function(filename) {
	var gml = new GMLFile();
	gml.save(this, filename);
}

/**
 * Saves the graph drawing in the GraphML format.
 * @param {string} filename The name of the file.
 */
GraphDrawing.prototype.saveAsGraphML = function(filename) {
	var graphml = new GraphMLFile();
	graphml.save(this, filename);
}

/**
 * Changes label on a specified node.
 * @param {string} id The id the node.
 * @param {string} label The new label.
 */
GraphDrawing.prototype.changeLabel = function(id, label) {
	var i;
	for (i=0; i<this.listNodes.length; i++) {
		if (this.listNodes[i][0]==id) {
			this.listNodes[i][1] = label;
			break;
		}
	}
}

/**
 * Obtain a new id for the node.
 * @return {integer} The new node's id.
 */
GraphDrawing.prototype.getNewNodeId = function() {
	var i, max=0;
	for (i=0; i<this.listNodes.length; i++) {
		if (parseInt(this.listNodes[i][0])>max) 
			max=this.listNodes[i][0];
	}
	return parseInt(max)+1;
}

/**
 * Adds a node to the graph drawing
 * @param {int} id The identification of the node.
 * @param {string} label The label of the node.
 */
GraphDrawing.prototype.addNode = function(id, label) {
    this.listNodes.push([id, label]);
console.log('Nodes=' + this.listNodes);

//	n.push([this.getPair(a[i], 'id'), this.getQuotedPair(a[i], 'label')]);
//	this.id = id;
//    this.label = label; 
}

/**
 * Deletes a node from the graph drawing
 * @param {int} id The identification of the node.
 */
GraphDrawing.prototype.deleteNode = function(id) {
console.log('id=' + id);

	var i;
console.log('Nodes: ' + this.listNodes);
	for (i=0; i<this.listNodes.length; i++) {
		if (this.listNodes[i][0] == id) {
			this.listNodes.splice(i, 1);
			break;
		}
	}
console.log('Nodes: ' + this.listNodes);

console.log('Edges: ' + this.listEdges);
	for (i=this.listEdges.length-1; i>=0; i--) {
		if (this.listEdges[i][0] == id) {
			this.listEdges.splice(i, 1);
		} 
		else if (this.listEdges[i][1] == id) {
			this.listEdges.splice(i, 1);
		} 
	}
console.log('Edges: ' + this.listEdges);
}

/**
 * Deletes a link from the graph drawing
 * @param {int} source The source of the link.
 * @param {int} target The target of the link.
 */
GraphDrawing.prototype.deleteLink = function(source, target) {
	var i;
console.log('Links: ' + this.listEdges);
	for (i=0; i<this.listEdges.length; i++) {
		if (this.listEdges[i][0] == source && this.listEdges[i][1] == target) {
			this.listEdges.splice(i, 1);
			break;
		}
	}
console.log('Links: ' + this.listEdges);
}
/** 
 *  @file      tree.js 
 *  @author    Josep Ciberta 
 *  @version   0.1 
 *  \date      10-12-2011 
 *  @copyright GNU Public License. 
 */ 

/**
 * Creates a node for a tree.
 * @class A tree is composed by nodes. TreeNode implements this behaviour with 2 properties:
 * <ul>
 * <li>node: then node itself.
 * <li>listChildren: list of children nodes. These are also TreeNode.
 * </ul>
 * @constructor
 * @param {Node} node Node of the tree.
 */
TreeNode = function(node) {
    this.node = node;
    this.listChildren = [];
};

/**
 * Add tree node children to the tree recursively.
 * @param {GraphDrawing} graph The graph drawing data to populate the tree.
 */
TreeNode.prototype.addChildren = function(graph) {
    var i, tn, sonId, newTreeNode;
//    console.log('graph.listNodes: ' + graph.listNodes);
//    console.log('graph.listEdges: ' + graph.listEdges);

    for (i=0;i<graph.listEdges.length;i++) {
//console.log('this.node: ' + this.node);
        if (this.node[0] == graph.listEdges[i][0]) {
            // Add node
            sonId = graph.listEdges[i][1];
//console.log('sonId: ' + sonId);
            newTreeNode = new TreeNode(graph.getNode(sonId));
            this.listChildren.push(newTreeNode);
//            console.log('newTreeNode.node: ' + newTreeNode.node);
            newTreeNode.addChildren(graph);
        }
    }
};

/**
 * Indicates if a tree nodes has children.
 * @return {boolean} True if the tree nodes has children.
 */
TreeNode.prototype.hasChildren = function() {
    return (this.listChildren.length>0);
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {string} The nested JSON string.
 */
TreeNode.prototype.toD3JSONString = function() {
    var i, sReturn;

    sReturn = '{';
    sReturn += '"id": "' + this.node[0]+ '", ';
    sReturn += '"name": "' + this.node[1]+ '"';
//console.log('** this.node: ' + this.node);
    if (this.hasChildren()) {
        sReturn += ', "children": [';
//console.log('** this.listChildren.length: ' + this.listChildren.length);
        for (i=0;i<this.listChildren.length;i++) {
        //    console.log('** this.listChildren[i]: ' + this.listChildren[i]);
            sReturn += this.listChildren[i].toD3JSONString();
            if (i<this.listChildren.length-1)  
            sReturn += ', ';
        }
        sReturn += ']';
    }
    else {
        sReturn += ', "size": 1';
    }
    sReturn += '}';
    return sReturn;
};


/**
 * Creates a tree.
 * @class The Tree class contains the root node and a list of TreeNode.
 * @constructor
 * @param {GraphDrawing} graph The graph drawing data to populate the tree.
 */
Tree = function(graph) {
    var root = graph.getRoot();
    //  this.listChildren = [];
    this.graph = graph;
    this.treeNode = new TreeNode(root);

//console.log('root: ' + root);
//console.log('treeNode: ' + this.treeNode);

    //  this.treeNode.addChildren(this.treeNode);            
    this.treeNode.addChildren(graph);            

    //    listEdges = [[1,2], [1,3], [2,4], [2,5], [3,6], [3,7], [4,8]];
};

/**
 * Add tree node children to the tree recursively.
 * @param {TreeNode} tn The tree node to insert.
 */
Tree.prototype.addChildren = function(tn) {
    var i, tn, sonId;
//    console.log('TreeNode: ' + tn);
//    console.log('TreeNode.node: ' + tn.node);
//    console.log('graph.listNodes: ' + this.graph.listNodes);
//    console.log('graph.listEdges: ' + this.graph.listEdges);

    for (i=0;i<this.graph.listEdges.length;i++) {
        console.log('tn.node: ' + tn.node);
        if (tn.node[0] == this.graph.listEdges[i][0]) {
            // Add node
            sonId = this.graph.listEdges[i][1];
            tnew = new TreeNode(this.graph.getNode(sonId));
            this.listChildren.push(tnew);
            console.log('tnew.node: ' + tnew.node);
            this.addChildren(tnew);
        }
    }
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {D3JSON} The nested JSON object.
 */
Tree.prototype.toD3JSON = function() {
    var s;
    s = this.treeNode.toD3JSONString();
//    console.log('this.treeNode.toD3JSONString(): ' + this.treeNode.toD3JSONString());
    return JSON.parse(s);
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {string} The nested JSON string.
 */
Tree.prototype.toD3JSONString = function() {
    return this.treeNode.toD3JSONString();
};


/**
 * Create a Layout
 * @constructor
 * @this {Layout}
 */
Layout = function() {
	this.className = 'Layout';

	this.graph = new GraphDrawing();
	this.file = "";
	this.fileName = "";
	this.type = 'None';
	this.layout = new CustomLayout(canvas, this.graph);
//console_listNodes(this.layout.nodes);
}

/**
 * Clear the layout.
 */
Layout.prototype.clear = function() {
	delete this.graph;
	this.graph = new GraphDrawing();
	this.type = 'None';
	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph);
};

/**
 * Updates the layout.
 */
Layout.prototype.update = function() {
	var nodes = this.layout.nodes;
	var links = this.layout.links;
//console.dir(nodes);	
//console.dir(links);
    clearCanvas();	
	if (this.type == 'Force directed')
		this.layout = new ForceDirectedLayout(canvas, this.graph, nodes, links)
	else
		this.layout = new CustomLayout(canvas, this.graph, nodes, links);
//	this.center();	
};

/**
 * Set the file.
 * @param {string} newFile The file.
 */
Layout.prototype.setFile = function(newFile) {
	this.file = newFile;
};

/**
 * Set the file name.
 * @param {string} newFile The name of the file.
 */
Layout.prototype.setFileName = function(newFileName) {
	this.fileName = newFileName;
};

/**
 * Import a GML file.
 * @param {string} newFile The GML file.
 */
Layout.prototype.importGML = function(newFile) {
	this.file = newFile;
	this.graph.importGML(this.file);
};

/**
 * Import a GraphML file.
 * @param {string} newFile The GML file.
 */
Layout.prototype.importGraphML = function(newFile) {
	this.file = newFile;
	this.graph.importGraphML(this.file);
};

/**
 * Export to GML file.
 */
Layout.prototype.exportGML = function() {
	this.graph.saveAsGML(this.fileName);
};

/**
 * Export to GraphML file.
 */
Layout.prototype.exportGraphML = function() {
	this.graph.saveAsGraphML(this.fileName);
};

/**
 * Depict an empty Directed layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {EmptyLayout} The new layout object.
 */
Layout.prototype.layoutCustom = function(canvas) {
	this.layout = new CustomLayout(canvas, this.graph);
};

/**
 * Depict a Force Directed layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {ForceDirectedLayout} The new layout object.
 */
Layout.prototype.layoutForceDirected = function(canvas) {
	this.type = FORCE_DIRECTED;
//		clearCanvas();

//console.log('this.layout.nodes:');
//console.dir(this.layout.nodes);		
	var nodes = this.layout.nodes;
//console.log('this.layout.links:');
//console.dir(this.layout.links);		
	var links = this.layout.links;
//	delete this.layout;
	this.layout = new ForceDirectedLayout(canvas, this.graph, nodes, links, this.type);
	updateEditMenu(this.type);

/*	// Calculate the new layout
	this.layout.layoutForceDirected();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, 'Force directed');
//	this.center();*/
};

/**
 * Depict a Horizontal Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutHorizontalTree = function(canvas) {
	this.type = HORIZONTAL_TREE;
	// Calculate the new layout
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	var nodes = horizontalTree.nodes;
	var links = horizontalTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Depict a Vertical Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutVerticalTree = function(canvas) {
	this.type = VERTICAL_TREE;
	// Calculate the new layout
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	var nodes = verticalTree.nodes;
	var links = verticalTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Depict a Radial Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutRadialTree = function(canvas) {
	this.type = RADIAL_TREE;
	// Calculate the new layout
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	var nodes = radialTree.nodes;
	var links = radialTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Adds a node to the corresponding layout.
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
 */
Layout.prototype.addNode = function(x, y) {
//console.log('this.layout.addNode(x, y)');
	this.layout.addNode(x, y);
};

/**
 * Gets the margins of the layout.
 */
Layout.prototype.getLayoutMargins = function() {
	var xmin=0, ymin=0, xmax=0, ymax=0;
	var i, n, l;
	
	if (this.layout.nodes.length>0) {
		n = this.layout.nodes[0];
		xmin = n.x;
		xmax = n.x;
		ymin = n.y;
		ymax = n.y;
	}
	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
		if (n.x < xmin) xmin = n.x;
		if (n.x > xmax) xmax = n.x;
		if (n.y < ymin) ymin = n.y;
		if (n.y > ymax) ymax = n.y;
	}
	return {xMin: xmin, xMax: xmax, yMin: ymin, yMax: ymax};
}

/**
 * Sets the origin to 0,0.
 */
Layout.prototype.setOrigin = function() {
	var pz = getPanAndZoom();
	var coord = [-WIDTH/2*(pz.scale-1), -HEIGHT/2*(pz.scale-1)];
	zoom.translate(coord);
	zoom.scale(pz.scale);
//console.log('setOrigin.scale: ' + pz.scale);	
	container.attr('transform', 'translate(' + coord + ')scale(' + pz.scale + ')');
	updateStatusBar();
}

/**
 * Sets the origin to 0,0 and scale to 1.
*/
Layout.prototype.setOriginWithNoZoom = function() {
	zoom.translate([0, 0]);
	zoom.scale(1);
	container.attr('transform', 'translate(0,0)scale(1)');
	updateStatusBar();
}

/**
 * Centers the layout.
 */
Layout.prototype.center = function() {
	this.setOrigin();
//console.log('** Layout.prototype.center **');	
	var box = this.getLayoutMargins();
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);
	var deltaX = (box.xMax - box.xMin) / 2 + box.xMin; // - (WIDTH / 2);
	var deltaY = (box.yMax - box.yMin) / 2 + box.yMin; //- (HEIGHT / 2); 
//console.log('deltaX=' + deltaX + ', deltaY=' + deltaY);	

	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
//console.log('n.x=' + n.x + ', n.y=' + n.y);	
		n.x = n.x - deltaX;
		n.y = n.y - deltaY; 
//console.log('this.layout.nodes[i]:');	
//console.dir(this.layout.nodes[i]);	
	}

	var nodes = this.layout.nodes;
	var links = this.layout.links;
	clearCanvas();
//console.dir(nodes);	
//console.dir(links);
/*	if (d3.event) {
		d3.event.translate[0] = 0;
		d3.event.translate[1] = 0;
	}*/
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
}

/**
 * Fits the layout.
 */
Layout.prototype.fit = function() {
	var k = 4; // k times the margin for fitting
	var box = this.getLayoutMargins();
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
	
	var deltaX = box.xMax - box.xMin - (k*margin.left + k*margin.right);
	var deltaY = box.yMax - box.yMin - (k*margin.top + k*margin.bottom); 
	
	var factorX = WIDTH / deltaX;
	var factorY = HEIGHT / deltaY;
	
	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
		n.x = (n.x - box.xMin) * factorX - WIDTH/2 + k*margin.left;
		n.y = (n.y - box.yMin) * factorY - HEIGHT/2 + k*margin.top;
	}
	
	
//console.dir(this.layout.nodes);	
//console.dir(this.layout.links);	
	
//	this.layout.updateLayout();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
	clearCanvas();
//console.dir(nodes);	
//console.dir(links);	

//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);

	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
	this.setOriginWithNoZoom();
	this.center();
	
};

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
Layout.prototype.isCollapsed = function(d) {
	return this.layout.isCollapsed();
}

/**
 * Uncollapse all nodes.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
Layout.prototype.uncollapseAll = function(d) {
	var i;
	for (i=0; i<this.layout.nodes.length; i++) { 
		this.layout.nodes[i].collapsed = false;
		this.layout.nodes[i].visible = true;
	}
	this.layout.updateCollapsedLayout();
}

/**
 * Changes the color of a node.
 * @param {Object} d The node.
 */
Layout.prototype.changeNodeColor = function(d) {
	d3.select("#circle" + d.id)
		.style('fill', d.color);
	d3.select("#rect" + d.id)
		.style('fill', d.color);
}

/**
 * Changes the shape of a node.
 * @param {Object} d The node.
 */
Layout.prototype.changeNodeShape = function(d) {
	d3.select("#circle" + d.id)		
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? 5 : 0; 
		})
	d3.select("#rect" + d.id)
		.attr("width", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? 10 : 0; })
}

/**
 * Changes the color of a link.
 * @param {Object} d The link.
 */
Layout.prototype.changeLinkColor = function(d) {
	d3.select("#path" + d.source.id + '_' + d.target.id)
		.style('stroke', d.color);
}

/**
 * Changes the width of a link.
 * @param {Object} d The link.
 */
Layout.prototype.changeLinkWidth = function(d) {
	d3.select("#path" + d.source.id + '_' + d.target.id)		
		.style("stroke-width", function(d) { return d.width == undefined ? 2 : d.width; })
/*	d3.select("#rect" + d.id)
		.attr("width", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? 10 : 0; })*/
}

/**
 * Unselects a node or link.
 */
Layout.prototype.unselectElement = function() {
	// Unselect old link/node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
		selected_object.style('stroke-dasharray', 'none');	
	}
	selected_object = null;
	selected_node = null;
	selected_link = null;
}

/**
 * Selects or unselects a node.
 * @param {Object} node The node.
 * @param {Object} object The object that represents the node on the canvas.
 */
Layout.prototype.selectNode = function(node, object) {
	var sameNode = (node == selected_node);

	this.unselectElement();
/*	// Unselect old node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
	}
	selected_object = null;
	selected_node = null;*/

	if (!sameNode) {
		// Select new node
		selected_node = node;
		selected_object = object;
		selected_object.select("circle").style("stroke-width", "3");	
		selected_object.select("rect").style("stroke-width", "3");	
	}
}

/**
 * Selects or unselects a link.
 * @param {Object} node The link.
 * @param {Object} object The object that represents the link on the canvas.
 */
Layout.prototype.selectLink = function(link, object) {
	var sameLink = (link == selected_link);

	this.unselectElement();
/*	// Unselect old link/node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
		selected_object.style('stroke-dasharray', 'none');	
	}
	selected_object = null;
	selected_link = null;*/

	if (!sameLink) {
		// Select new link
		selected_link = link;
		selected_object = object;
		selected_object.style("stroke-dasharray", "10, 2");	
//		selected_object.select("path").style("stroke-dasharray", "5, 5");	
//		selected_object.select("line").style("stroke-dasharray", "5, 5");	
	}
}

/**
 * Update elements on the layout.
 * @param {Object} self The layout itself.
 * @param {Object} node The node.
 * @param {Object} link The link.
 */
Layout.prototype.updateElements = function(self, node, link) {
/*	node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? ((d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 0) : 0; 
		})
		.attr("id", function(d) { return 'circle' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

	// SQUARE
	node.append("rect")
		.attr("x", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("y", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("width", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("height", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("id", function(d) { return 'rect' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.attr("stroke", "#000")
		.attr("stroke-width", 1)
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	
		
	// TEXT
	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d, i) { return d.name; })
		.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
		});*/
}

/**
 * Deletes a link from the layout
 * @param {int} source The source of the link.
 * @param {int} target The target of the link.
 */
Layout.prototype.deleteLink = function(source, target) {
	var i;

	this.graph.deleteLink(source, target);
	for (i=0; i<this.layout.links.length; i++) {
		if (this.layout.links[i].source.id == source && this.layout.links[i].target.id == target) {		
			this.layout.links.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.layout.updateLayout();
	updateMenu(this.graph);
}



/**
 * Create an custom layout
 * @constructor
 * @this {CustomLayout}
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
CustomLayout = function(canvas, graph, nodes, links, type) {
	this.className = 'CustomLayout';

//console.log('**layout');
//console.dir(layout);
	this.canvas = canvas;
	this.graph = graph;
	
	// Layout structure
	if (nodes === undefined) {
		this.nodes = [];
		this.links = [];
		this.type = 'None';
	} else {
		this.nodes = nodes;
		this.links = links;
		this.type = type;
	}
//console.log('Type: ' + this.type);	
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;
	
	var self = this;
	
	canvas.on('dblclick', doubleclick)
			.on("mousedown", mousedown)
			.on("mousemove", mousemove)
			.on("mouseup", mouseup);
			
	// Add keyboard callback
	d3.select(window)
		.on("keydown", keydown);
	
	var computeTransitionPath = function(d) {
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 7 : 2,
        targetPadding = d.right ? 7 : 2,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;		
	};	
	
	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
//	var drag_line = canvas.append("line")
//	var drag_line = container.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	function mousedown() {
//console.log('source_node: ' + source_node);	
//console.log('linking: ' + linking);	
		if (source_node!=null || linking) {
            coord.x = d3.mouse(this)[0] - WIDTH / 2;
            coord.y = d3.mouse(this)[1] - HEIGHT / 2;
            linking = true;
            drag_line.attr("class", "drag_line");
        }
	}

	function mousemove() {
		if (linking) {
			var x2 = d3.mouse(this)[0] / pz.scale - WIDTH / 2 - pz.translate.x / pz.scale;
			var y2 = d3.mouse(this)[1] / pz.scale - HEIGHT / 2 - pz.translate.y / pz.scale;
			// Update drag line
			drag_line
				.attr("class", "drag_line")
				.attr("x1", coord.x)
				.attr("y1", coord.y)
				.attr("x2", x2)
				.attr("y2", y2);
        }
	}

	function mouseup() {
//console.log('canvas.mouseup');	
//console.log('linking: ' + linking);	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	

//		if (!linking) return;
		// Hide drag line
		drag_line.attr("class", "drag_line_hidden");
		linking = false;
		source_node = null;
		target_node = null;
	}	

	function doubleclick() {
//console.log('2');
console.log('CL.canvas.doubleclick');	
			coord.x = parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale);
			coord.y = parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale);
//console.log('doubleclick: ' + coord.x + ', ' + coord.y);
			self.addNode(coord.x, coord.y);
	}	
	
	function keydown() {
		if (selected_node == null && selected_link == null) return;
		if (self.isCollapsed()) return; // Delete nodes is not allowed when there are some collapsed nodes

		switch (d3.event.keyCode) {
			case 8: // Backspace
			case 46: // Delete
				var text = selected_link == null ? 'You are going to delete the node and its links. \nAre you sure?' : 'You are going to delete the link. \nAre you sure?';
				var answer = confirm(text);
				if (answer == true) {
					if (selected_link == null)
						self.deleteNode(selected_node.id);
					else 
//						self.deleteLink(selected_link.source.id, selected_link.target.id);
						layout.deleteLink(selected_link.source.id, selected_link.target.id);
				}
				break;
		}
	}	

	this.drag = d3.behavior.drag()
		.on("dragstart", function(d) {
//console.log('dragstart');	
			if (d3.event.ctrlKey) return;
			
			// Stop propagation on the source event to prevent multiple actions
			// https://github.com/mbostock/d3/wiki/Drag-Behavior#on
			d3.event.sourceEvent.stopPropagation();
			d3.select(this).classed("dragging", true);
		})
		.on("drag", function(d, i) {
			var e = d3.event.sourceEvent;
//console.log('drag');	
//console.log('event.ctrlKey: ' + event.ctrlKey);	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
//console.log('e.ctrlKey: ' + e.ctrlKey);
			// BUG: d3.event.ctrlKey DOES NOT WORK! When event.ctrlKe is true or false, d3.event.ctrlKey undefined.
			// But d3.event.sourceEvent WORKS!
            if (e.ctrlKey) return; 
//console.log('onDrag:');
//console.dir(d);
				d.x += d3.event.dx
				d.y += d3.event.dy
				d3.select(this).select("circle").style("stroke-width", "3");
				d3.select(this).select("rect").style("stroke-width", "3");
				d3.select(this).attr("transform", function(d){
//console.log('translate:');
//console.dir(d);
					return "translate(" + [ d.x, d.y ] + ")";
				})
//console.log('selectAll:');
//console.dir(d3.selectAll('path.link'));
				d3.selectAll('path.link')
//					.style('fill', 'blue')
					.attr('d', computeTransitionPath);
		})
		.on("dragend", function(d) {
//console.log('dragend');	
			var e = d3.event.sourceEvent;
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
            if (e.ctrlKey) return;
			d3.select(this).classed("dragging", false);
			//d3.select(this).select("circle").style("stroke-width", "1.5");
		});		

	this.updateLayout();
	
/*	this.addNode(-10, -10); // 1
	this.addNode(-100, -100); // 2
	this.addNode(-50, -100); // 3
	this.addNode(-50, -50); // 4
	this.addLink(this.getNode(1), this.getNode(2));
	this.addLink(this.getNode(1), this.getNode(3));*/
	
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
CustomLayout.prototype.updateLayout = function(source) {
//console.log('** CustomLayout.prototype.updateLayout **');
	var i, l, n;
	var vis = d3.select("#vis");
	var self = this;

	vis.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
	
	// http://stackoverflow.com/questions/16070150/d3-substituting-d3-svg-diagonal-with-d3-svg-line
    var line = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    function lineData(d){
        var points = [
            {x: d.source.x, y: d.source.y},
            {x: d.target.x, y: d.target.y}
        ]
        return line(points);
    }    

	// Apply properties to the nodes (shape, color)
	for (i=0; i<this.nodes.length; i++) {
		n = this.graph.getNode(this.nodes[i].id);
        if (n == null) break;
		if (n.length > 2) this.nodes[i].shape = n[2];
		if (n.length > 3) this.nodes[i].color = n[3];
	}

	// Apply properties to the link (shape, color)
	for (i=0; i<this.links.length; i++) {
		l = this.graph.getLink(this.links[i].source.id, this.links[i].target.id);
        if (l == null) break;
		if (l.length > 3) this.links[i].width = l[3];
		if (l.length > 4) this.links[i].color = l[4];
	}
	
	
//console.log('VIS: ');
//console.dir(vis);
	
//console.log('Links: ');
//console.dir(this.links);
    var link = vis.selectAll(".link")
        .data(this.links)
        .enter().append("path")
            .attr("class", "link")
			.attr("id", function(d) { return 'path' + d.source.id + '_' + d.target.id; })
			.style("stroke", function(d) { return d.color == undefined ? DEFAULT_COLOR_LINK : d.color; })
			.style("stroke-width", function(d) { return d.width == undefined ? 2 : d.width; })
			.style('cursor', 'pointer')
			.attr("d", lineData)
			.on("mousedown", function(d) {
				layout.selectLink(d, d3.select(this));
			})
			.on("dblclick", function(d) { 
				event.stopPropagation();
				chooseLinkProperties(d);
			});	
	
	//if (this.type != 'Force directed') 
	//	link.attr("d", lineData);
		
//console.log('- link: ' + link);	
//console.dir(link); 
	
//console.log('Nodes: ');
//console.dir(this.nodes);
	var node = vis.selectAll(".node")
		.data(this.nodes)
//    var nodeEnter = node
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
//				console.dir(d); 
//				return d;
				return d.id; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
//			.call(this.drag)
			.on("mousedown", function(d) {
//console.log('node.mousedown');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
				source_node = d;
				source_object = d3.select(this);


//                linking = true;
                if (d3.event.ctrlKey) {
					layout.selectNode(d, d3.select(this));
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
					d3.select(this).select("rect").style("stroke-width", "3");	
//console.log('Linking...');	
                    coord.x = d.x;
                    coord.y = d.y;
//                    coord.x = d3.mouse(this)[0] - WIDTH / 2;
//                    coord.y = d3.mouse(this)[1] - HEIGHT / 2;
//                    drag_line.attr("class", "drag_line");
                }
				else if (d3.event.shiftKey) {
//console.log('Colapse. Is a tree? ' + isTree);	
//console.dir(d);	
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
                    self.updateLayout(d);
				}
				else {
					layout.selectNode(d, d3.select(this));
				}
//console.dir(source_node);		
			})
//			.on("mousemove", mousemove)
			.on("mouseover", function(d) {
				if (linking) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "3");
					target_object.select("rect").style("stroke-width", "3");
				}
			})
			.on("mouseout", function(d) {
				if (linking && d!=source_node) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");
				}
			})
			.on("mouseup", function(d) {	
//console.log('node.mouseup');	
//console.dir(d);	
//console.dir(d.firstChild);	
//				d.firstChild.style("stroke-width", "3");
                //drag_line.attr("class", "drag_line_hidden");
				target_node = d;
				target_object = d3.select(this);
//console.log('target_node: ' + target_node);	
//console.dir(target_node); 
				if (d3.event.ctrlKey && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
//console.dir(self); 
                    // Add link
//                    self.links.unshift({source: source_node, target: target_node});
                    self.links.push({source: source_node, target: target_node});
//console_listLinks(self.links);					
					
//console.log('addLink.source_node: ' + source_node);	
//console.dir(source_node);
					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);
//console.dir(source_node);

//console.log('createLinks called');	
//console.dir(self.links);
					self.updateLayout();
					updateMenu(self.graph);
                    
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
					v.insertBefore(element, v.firstChild);
					
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n);
//console.log('Lets put the last link node in the first place');	
//console_listLinks(self.links);					

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					source_object.select("rect").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");
				}
			})

	node.call(this.drag);
	
	updateGenericLayout(this, node, link);
//console.dir(layout);
//	layout.updateElements(this, node, link);

	
/*	// CIRCLE
	node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? 5 : 0; 
		})
		.attr("id", function(d) { return 'circle' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

	// SQUARE
	node.append("rect")
		.attr("x", -5).attr("y", -5)
		.attr("width", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("id", function(d) { return 'rect' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.attr("stroke", "#000")
		.attr("stroke-width", 1)
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

	// TEXT
	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("dblclick", function(d) { 
			event.stopPropagation();
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
		});*/
	
		
}

/**
 * Selects or unselects a node.
 * @param {Object} node The node.
 * @param {Object} object The object that represents the node on the canvas.
 */
/*CustomLayout.prototype.selectNode = function(node, object) {
	var sameNode = (node == selected_node);

	// Unselect old node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
	}
	selected_object = null;
	selected_node = null;

	if (!sameNode) {
		// Select new node
		selected_node = node;
		selected_object = object;
		selected_object.select("circle").style("stroke-width", "3");	
		selected_object.select("rect").style("stroke-width", "3");	
	}
}*/

/**
 * Gets the node with a specific id.
 * @param {int} id The id of the node.
 * @return {Object} The node or null.
 */
CustomLayout.prototype.getNode = function(id) {
    var i;
    for (i=0; i<this.nodes.length; i++) { 
        if (this.nodes[i].id==id)
			return this.nodes[i];
    } 
    return null;   
}

/**
 * Adds a node to the corresponding layout.
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
 */
CustomLayout.prototype.addNode = function(x, y) {
	var newId = this.graph.getNewNodeId();
	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + x + ', y: ' + y + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Deletes a node from the graph drawing
 * @param {int} id The identification of the node.
 */
CustomLayout.prototype.deleteNode = function(id) {
	var i;

	this.graph.deleteNode(id);

	for (i=this.links.length-1; i>=0; i--) {
		if (this.links[i].source.id == id) {
			this.links.splice(i, 1);
		} 
		else if (this.links[i].target.id == id) {
			this.links.splice(i, 1);
		} 
	}
	
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].id == id) {
			this.nodes.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.updateLayout();
	updateMenu(this.graph);
}

/**
 * Adds a link to the corresponding layout. NOT WORKING!
 * @param {int} source_node The source node.
 * @param {int} target_node The target node.
 */
CustomLayout.prototype.addLink = function(source_node, target_node) {
//	var source_node = this.getNode(a);
//	var target_node = this.getNode(b);

	// Add an edge (to the GraphDrawing structure)
	this.graph.listEdges.push([source_node.id, target_node.id]);
	// Add a link (to the Layout structure)
	this.links.push({source: source_node, target: target_node});
//console_listLinks(this.links);					
	// Add child
	if (!source_node.children) source_node.children = [];
	source_node.children.push(target_node);

	this.updateLayout();
	updateMenu(this.graph);
	
	// Let's put the link (path) in the first place, if not it overwrites the node
	var v = document.getElementById('vis');
	var element = v.lastChild;
	v.insertBefore(element, v.firstChild);
					
	// Let's put the last link node in the first place
	var n = this.links.pop();
	this.links.unshift(n);
//console_listLinks(this.links);					

	// Unselect nodes
	source_object.select("circle").style("stroke-width", "1.5");	
	source_object.select("rect").style("stroke-width", "1.5");	
	target_object.select("circle").style("stroke-width", "1.5");	
	target_object.select("rect").style("stroke-width", "1.5");	
}

/**
 * Loads into the [nodes, links] structure a Force-directed graph.
 */
/*CustomLayout.prototype.layoutForceDirected = function() {
	var forceDirected = new ForceDirectedLayout(canvas, this.graph);
	this.nodes = forceDirected.nodes;
	this.links = forceDirected.links;
	this.type = 'Force directed';
};*/

/**
 * Loads into the [nodes, links] structure a Radial Tree layout.
 */
/*CustomLayout.prototype.layoutRadialTree = function() {
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	this.nodes = radialTree.nodes;
	this.links = radialTree.links;
	this.type = 'Radial tree';
};*/

/**
 * Loads into the [nodes, links] structure a Horizontal Tree layout.
 */
/*CustomLayout.prototype.layoutHorizontalTree = function() {
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	this.nodes = horizontalTree.nodes;
	this.links = horizontalTree.links;
	this.type = 'Horizontal tree';
};*/

/**
 * Loads into the [nodes, links] structure a Vertical Tree layout.
 */
/*CustomLayout.prototype.layoutVerticalTree = function() {
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	this.nodes = verticalTree.nodes;
	this.links = verticalTree.links;
	this.type = 'Vertical tree';
};*/

/**
 * Toggle a node between collapsed and uncollapsed.
 * @param {Object} d The node to toggle.
 */
CustomLayout.prototype.toggle = function(d) {

	// Leaves are not allowed to collapse
	if (!d.children) return;

	function toggle(node, v) {
//console.log(' - Toggle ' + node.id);	
//console.dir(node);
		if (node.children) {
			var i;
			
			for (i = 0; i<node.children.length; i++) {
				if (node.children[i].collapsed == undefined) node.children[i].collapsed = false;
				if (!node.children[i].collapsed)
					toggle(node.children[i], v)
				else
					node.children[i].visible = v;
			}			
		}
		node.visible = v;
	}
	
//console.log('d.collapsed=' + d.collapsed);	
	if (d.collapsed == undefined) d.collapsed = false;
	d.collapsed = !d.collapsed;
	toggle(d, !d.collapsed);
	d.visible = true;
	
	this.updateCollapsedLayout();	
}

/**
 * Updates the layout when collapsing/uncollapsing.
 */
CustomLayout.prototype.updateCollapsedLayout = function(d) {
console.log('Update the layout (collapse)	');	
	// Update the layout (collapse)	
	var vis = d3.select("#vis");
	var node = vis.selectAll("g");
	var c = vis.selectAll("circle")
	c.attr("r", function(d) {
		return (d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 1e-6; 
	})

	var r = vis.selectAll("rect")
	r.attr("x", function(d) { return (d.collapsed ? -8 : -5); });
	r.attr("y", function(d) { return (d.collapsed ? -8 : -5); });
	r.attr("width", function(d) { 
		if (d.shape == 'Square')
			return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
		else
			return 0;
	});
	r.attr("height", function(d) { 
		if (d.shape == 'Square')
			return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
		else
			return 0;
	});
	
	var t = vis.selectAll("text")
		t.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		});
	
//console_listLinks(this.links);	
	
	var l = vis.selectAll("path");
//console.log('link:');	
//console.dir(l);	
	l.style("stroke-width", function(d) { 
		var hideLink;
		if (d.source.visible == undefined) d.source.visible = true;
		if (d.target.visible == undefined) d.target.visible = true;
//console.dir(d);	
//console.log('d.source.id:' + d.source.id + ', d.target.id:' + d.target.id);	
//console.log('d.source.visible:' + d.source.visible);	
//console.log('d.target.visible:' + d.target.visible);	
		hideLink = (!d.source.visible || !d.target.visible);
//console.log('hideLink:' + hideLink);	
		return hideLink ? 1e-6 : 1.5; 
	});
	
	menuUncollapseAll.setEnabled(this.isCollapsed());
}

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
CustomLayout.prototype.isCollapsed = function() {
//console.dir(this);
	var i;
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].collapsed != undefined && this.nodes[i].collapsed)
			return true;
	}
	return false;
}

/**
 * Create a Force Directed layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
ForceDirectedLayout = function(canvas2, graph, nodes, links, type) {
	this.className = 'ForceDirectedLayout';
	
console.log('ForceDirectedLayout.create');	
	this.canvas = canvas2;
	this.graph = graph;
	this.type = FORCE_DIRECTED;

	resetVariables();
	
	this.nodes = [];
	this.links = [];
	
	for (i=0; i<graph.listNodes.length; i++) { 
		node = {
			id: graph.listNodes[i][0],
			name: graph.listNodes[i][1],
			x: 0,
			y: 0,
			shape: graph.listNodes[i][2],
			color: graph.listNodes[i][3]
		};
		this.nodes.push(node);
	}

	for (i=0; i<graph.listEdges.length; i++) { 
		s = graph.listEdges[i][0];
		d = graph.listEdges[i][1];
		this.links.push({
			source: this.getNode(s),
			target: this.getNode(d),
			width: graph.listEdges[i][3],
			color: graph.listEdges[i][4],
			weight: 1
		});
	}	

    var self = this;
    
	// WARNING: When we assign on_mousemove to mousemove, we are registering multiple listeners for the same event type
	// https://github.com/mbostock/d3/wiki/Selections#on
	destroyCanvas();
	createCanvas();
	container.attr('transform', 'translate(0,0)scale(1)');
	
	canvas.on('dblclick', doubleclick)
		.on("mousedown", mousedown)
		.on("mousemove", mousemove)
		.on("mouseup", mouseup);				
	
	// Add keyboard callback
	d3.select(window)
		.on("keydown", keydown);
	
	vis.attr('transform', 'translate(0,0)scale(1)');

	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
//console.log('drag_line');		
	
	function mousedown() {
		if (source_node!=null || linking) {
            coord.x = d3.mouse(this)[0];
            coord.y = d3.mouse(this)[1];
            linking = true;
            drag_line.attr("class", "drag_line");
        }
	}

	function mousemove() {
		if (linking) {
			var x2 = d3.mouse(this)[0] / pz.scale - pz.translate.x / pz.scale;
			var y2 = d3.mouse(this)[1] / pz.scale - pz.translate.y / pz.scale;
			// Update drag line
			drag_line
				.attr("class", "drag_line")
				.attr("x1", coord.x)
				.attr("y1", coord.y)
				.attr("x2", x2)
				.attr("y2", y2);
		}
	}

	function mouseup() {
		// Hide drag line
		drag_line.attr("class", "drag_line_hidden");
		linking = false;
		source_node = null;
		target_node = null;
	}	

	function doubleclick() {
console.log('FD.doubleclick');	
		coord.x = parseInt(d3.mouse(this)[0] / pz.scale) ;
		coord.y = parseInt(d3.mouse(this)[1] / pz.scale) ;
//		coord.x = parseInt((d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale);
//		coord.y = parseInt((d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);
		self.addNode(coord.x, coord.y);
	}	
	
	function keydown() {
		if (selected_node == null && selected_link == null) return;
		// Delete nodes is not allowed when there are some collapsed nodes
		if (self.isCollapsed()) return;

		switch (d3.event.keyCode) {
			case 8: // Backspace
			case 46: // Delete
				var text = selected_link == null ? 'You are going to delete the node and its links. \nAre you sure?' : 'You are going to delete the link. \nAre you sure?';
				var answer = confirm(text);
				if (answer == true) {
					if (selected_link == null)
						self.deleteNode(selected_node.id);
					else 
//						self.deleteLink(selected_link.source.id, selected_link.target.id);
						layout.deleteLink(selected_link.source.id, selected_link.target.id);
				}
				break;
		}
	}	
    
	this.createForce();
/*	this.force = d3.layout.force().size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links)
		.gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
			return x.weight * 10
		});
	this.force.start();	*/
	this.link = vis.selectAll("line.link");
	this.node = vis.selectAll("g.node");
	
	this.updateLayout();
}

ForceDirectedLayout.prototype.createForce = function() {
	this.force = d3.layout.force().size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links)
		.gravity(1).linkDistance(50)
		.charge(-3000)
		.linkStrength(function(x) {
			return x.weight * 10
		})
		.on('end', function() {
			// Message when the force is balanced 
			// (the "end" event is dispatched when the simulations internal alpha cooling parameter reaches zero)
			// https://github.com/mbostock/d3/wiki/Force-Layout#on
			statusBarMessage = 'Force directed layout stopped in ' + (Date.now()-timerStart)/1000 + ' s.';
			updateStatusBar();
		});
	//this.force.start();	
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
ForceDirectedLayout.prototype.updateLayout = function() {
	clearCanvas();
	var vis = d3.select("#vis");
	var self = this;
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;

	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	this.drag = d3.behavior.drag()
		.on("dragstart", dragstart)
		.on("drag", dragmove)
		.on("dragend", dragend);

	function dragstart(d, i) {
		d3.event.sourceEvent.stopPropagation();
		self.force.stop() // Stops the force auto positioning before you start dragging
	}

	function dragmove(d, i) {
//console.dir(event);	
//console.dir(d3.event);	
		var e = d3.event.sourceEvent;
		if (e.ctrlKey) return;
		d.px += d3.event.dx;
		d.py += d3.event.dy;
		d.x += d3.event.dx;
		d.y += d3.event.dy; 
		d3.select(this).select("circle").style("stroke-width", "3");
		d3.select(this).select("rect").style("stroke-width", "3");
		tick(); 
	}

	function dragend(d, i) {
		if (d3.event.ctrlKey) return;
		//d3.select(this).select("circle").style("stroke-width", "1.5");
		//d3.select(this).select("rect").style("stroke-width", "1.5");
		tick();
		self.force.resume();
	}	
	
	this.link = vis.selectAll("line.link")
		.data(this.links)
//	this.link = this.link
//		.data(this.force.links())
		.enter().append("svg:line")
			.attr("class", "link")
			.attr("id", function(d) { return 'path' + d.source.id + '_' + d.target.id; })
			.style("stroke", function(d) { return d.color == undefined ? DEFAULT_COLOR_LINK : d.color; })
			.style("stroke-width", function(d) { 
				var hideLink;
				if (d.source.visible == undefined) d.source.visible = true;
				if (d.target.visible == undefined) d.target.visible = true;
				hideLink = (!d.source.visible || !d.target.visible);
//				return hideLink ? 1e-6 : 1.5; 
				return hideLink ? 1e-6 : (d.width == undefined ? 2 : d.width); 
			})
			.style('cursor', 'pointer')
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; })
			.on("mousedown", function(d) {
				layout.selectLink(d, d3.select(this));
			})
			.on("dblclick", function(d) { 
				event.stopPropagation();
				chooseLinkProperties(d);
			});	
		
	this.node = vis.selectAll("g.node")
		.data(this.nodes)
//	this.node = this.node
//		.data(this.force.nodes())
		.enter().append("svg:g")
			.attr("class", "node")
			.attr("id", function(d) { return d.id; })
			.call(this.drag)
			.on("mousedown", function(d) {
//console.log('1. node.mousedown. d3.event.ctrlKey: ' + d3.event.ctrlKey);	
//console.log('2. coord.x: ' + coord.x + ', coord.y: ' + coord.y + ', mousex: ' + d3.mouse(this)[0] + ', mousey: ' + d3.mouse(this)[1] + ', pz: ' + JSON.stringify(pz));	
//console.log('x2: ' + (d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale + ', y2: ' + (d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);	

				source_node = d;
				source_object = d3.select(this);

                if (d3.event.ctrlKey) {
					layout.selectNode(d, d3.select(this));
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
					d3.select(this).select("rect").style("stroke-width", "3");	
                    coord.x = d.x;
                    coord.y = d.y;
//console.log('3. d.x: ' + d.x + ', d.y: ' + d.y);	
//		coord.x = d3.mouse(this)[0] / pz.scale;
//		coord.y = d3.mouse(this)[1] / pz.scale;
//console.log('4. coord.x: ' + coord.x + ', coord.y: ' + coord.y);                    
                }
				else if (d3.event.shiftKey) {
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
//                    self.updateLayout(d);
				}
				else {
					layout.selectNode(d, d3.select(this));
				}
			})
			.on("mouseover", function(d) {
				if (linking) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "3");
					target_object.select("rect").style("stroke-width", "3");
				}
			})
			.on("mouseout", function(d) {
				if (linking && d!=source_node) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");
				}
			})
			.on("mouseup", function(d) {	
				target_node = d;
				target_object = d3.select(this);

				if (d3.event.ctrlKey && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
                    // Add link
console.log('source_node:');                  
console.dir(source_node);  
console.log('target_node:');                  
console.dir(target_node);  
console.log('target_object:');                  
console.dir(target_object);  

/*					var target_coord = {
						x: (d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale,
						y: (d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale
					};
console.log('x: ' + target_coord.x + ', y: ' + target_coord.y);                  
					
					target_node.x = target_coord.x;
					target_node.px = target_coord.x;
					target_node.y = target_coord.y;
					target_node.py = target_coord.y;*/

                    self.links.push({source: source_node, target: target_node, weight: 1});
console_listLinks(self.links);					
console.dir(self.links);  
console.log('self.force.links():');					
console.dir(self.force.links());  

					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);

                    self.updateLayout();
					
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
					v.insertBefore(element, v.firstChild);
					
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n); 
console.log('self.links:');
console_listLinks(self.links);					
console.dir(self.links);  

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					source_object.select("rect").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");

                    //tick();
                    //self.force.resume();
					updateMenu(self.graph);
					tick();
					//self.force.resume();
					//self.force.start();
					//clearCanvas();
					//self.createForce();
//                    self.updateLayout();
					//self.force.start();
//					layout.layoutForceDirected(canvas)
				}
			})
//		.exit().remove();	
			
			
	updateGenericLayout(this, this.node, this.link);
//	layout.updateElements(this, this.node, this.link);
	
/*	// CIRCLE
	this.node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? ((d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 0) : 0; 
		})
		.attr("id", function(d) { return 'circle' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

	// SQUARE
	this.node.append("rect")
		.attr("x", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("y", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("width", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("height", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("id", function(d) { return 'rect' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.attr("stroke", "#000")
		.attr("stroke-width", 1)
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	
		
	// TEXT
	this.node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d, i) { return d.name; })
		.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
		});*/
		
//	node.call(this.drag);

	link = this.link;
	node = this.node;
    this.force.on("tick", tick);

    function tick() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });
		node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    };	
	
/*	var updateLink = function() {
		this
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

	}

	var updateNode = function() {
		this.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	}

	force.on("tick", tick);*/
	//this.createForce();
	
//	this.force
//		.nodes(this.nodes)
//		.links(this.links);
	this.force.start();
}

/**
 * Gets the node with a specific id.
 * @param {int} id The id of the node.
 * @return {Object} The node or null.
 */
ForceDirectedLayout.prototype.getNode = function(id) {
    var i;
    for (i=0; i<this.nodes.length; i++) { 
        if (this.nodes[i].id==id)
			return this.nodes[i];
    } 
    return null;   
}

/**
 * Adds a node to the corresponding layout.
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
 */
ForceDirectedLayout.prototype.addNode = function(coordX, coordY) {
console.log('x: ' + coordX + ', y:' + coordY);
console.dir(this.nodes);
	var newId = this.graph.getNewNodeId();
	var n = {id: newId, name: 'Node ' + newId, x: coordX, y: coordY, weight: 1};
//	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + x + ', y: ' + y + ', size: 1, depth: 1}';
//	eval(obj);
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Deletes a node from the layout
 * @param {int} id The identification of the node.
 */
ForceDirectedLayout.prototype.deleteNode = function(id) {
	var i;

	this.graph.deleteNode(id);

	for (i=this.links.length-1; i>=0; i--) {
		if (this.links[i].source.id == id) {
			this.links.splice(i, 1);
		} 
		else if (this.links[i].target.id == id) {
			this.links.splice(i, 1);
		} 
	}
	
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].id == id) {
			this.nodes.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.updateLayout();
	updateMenu(this.graph);
}

/**
 * Deletes a link from the layout
 * @param {int} source The source of the link.
 * @param {int} target The target of the link.
 */
/*ForceDirectedLayout.prototype.deleteLink = function(source, target) {
	var i;

	this.graph.deleteLink(source, target);
	for (i=0; i<this.links.length; i++) {
		if (this.links[i].source.id == source && this.links[i].target.id == target) {		
			this.links.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.updateLayout();
	updateMenu(this.graph);
}*/

/**
 * Given a force directed layout structure, put children to their nodes (like tree layouts).
 */
ForceDirectedLayout.prototype.putChildren = function() {
	//var root = this.graph.getRoot();
	var i, j, id;
	var lc = [];
	
	for (i = 0; i<this.nodes.length; i++) {
		id = this.nodes[i].id;
		lc = this.graph.getDirectedAdjacents(id);
//console.log('getAdjacents(' + id + '): ' + lc);		
		for (j = 0; j<lc.length; j++) {
			if (!this.nodes[i].children) this.nodes[i].children = [];
			this.nodes[i].children[j] = this.getNode(lc[j]);
		}
	}
	
//	for (i = 0; i<this.links.length; i++) {
		
//	}
}

/**
 * Toggle a node between collapsed and uncollapsed.
 * @param {Object} d The node to toggle.
 */
ForceDirectedLayout.prototype.toggle = function(d) {
	this.putChildren();
console.dir(d);
	// Leaves are not allowed to collapse
	if (!d.children) return;

	function toggle(node, v) {
		if (node.children) {
			var i;
			
			for (i = 0; i<node.children.length; i++) {
				if (node.children[i].collapsed == undefined) node.children[i].collapsed = false;
				if (!node.children[i].collapsed)
					toggle(node.children[i], v)
				else
					node.children[i].visible = v;
			}			
		}
		node.visible = v;
	}
	
	if (d.collapsed == undefined) d.collapsed = false;
	d.collapsed = !d.collapsed;
	toggle(d, !d.collapsed);
	d.visible = true;
	
	this.updateCollapsedLayout();	
}

/**
 * Updates the layout when collapsing/uncollapsing.
 */
ForceDirectedLayout.prototype.updateCollapsedLayout = function(d) {
/*console.log('Update the layout (collapse). Nodes:');	
console.dir(this.nodes);
	// Update the layout (collapse)	
	var vis = d3.select("#vis");
	var node = vis.selectAll("g");
	var c = vis.selectAll("circle")
console.dir(c);
	c.style("r", function(d) {
console.dir(d);
//		return 10;
		return (d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 1e-6; 
	})
	var t = vis.selectAll("text")
		t.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		});
	var l = vis.selectAll("path");
	l.style("stroke-width", function(d) { 
		var hideLink;
		if (d.source.visible == undefined) d.source.visible = true;
		if (d.target.visible == undefined) d.target.visible = true;
		hideLink = (!d.source.visible || !d.target.visible);
		return hideLink ? 1e-6 : 1.5; 
	});*/
	this.updateLayout(d);
	menuUncollapseAll.setEnabled(this.isCollapsed());
}

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
ForceDirectedLayout.prototype.isCollapsed = function() {
	var i;
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].collapsed != undefined && this.nodes[i].collapsed)
			return true;
	}
	return false;
}

ForceDirectedLayout.prototype.updateNodes = function() {
  node = node.data(force.nodes(), function(d) { return d.id; });
  node.enter().append("circle").attr("class", function(d) { return "node " + d.id; }).attr("r", 8);
  node.exit().remove();

  force.start();
}

/**
 * Selects or unselects a node.
 * @param {Object} node The node.
 * @param {Object} object The object that represents the node on the canvas.
 */
/*ForceDirectedLayout.prototype.selectNode = function(node, object) {
	var sameNode = (node == selected_node);

	// Unselect old node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
	}
	selected_object = null;
	selected_node = null;

	if (!sameNode) {
		// Select new node
		selected_node = node;
		selected_object = object;
		selected_object.select("circle").style("stroke-width", "3");	
		selected_object.select("rect").style("stroke-width", "3");	
	}
}*/

/**
 * Create a Radial Tree based on the Reingold Tilford Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
RadialTreeLayout = function(canvas, graph) {
//console.log('RadialTreeLayout');
    var jsonList = graph.getTreeD3JSON();
//console.log('jsonList: ' + JSON.stringify(jsonList));

    var diameter = HEIGHT;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });
	
    this.nodes = tree.nodes(jsonList);
    this.links = tree.links(this.nodes);
	
//console.log('nodes:');
//console.dir(this.nodes);
//console.log('links:');
//console.dir(this.links);

	// Transform polar coordinates to cartesian coordinates in the layout
	this.transformToCartesianCoordinates(this.nodes[0], 0, 0);

//console.log('nodes:');
//console.dir(this.nodes);
//console.log('links:');
//console.dir(this.links);
}

RadialTreeLayout.prototype.transformToCartesianCoordinates = function(obj, x, y) {
	var i, r = obj.y, t = obj.x;
	obj.x = cartesianX(r, t);
	obj.y = cartesianY(r, t);
//console.log('r: ' + r + ', t: ' + t + ' -> x: ' + obj.x + ', y: ' + obj.y);		
	for (i=0; i<this.links.length;i++) {
		if (this.links[i].source.id == obj.id) {
			this.links[i].source.x = obj.x;
			this.links[i].source.y = obj.y;
		}
		else if (this.links[i].target.id == obj.id) {
			this.links[i].target.x = obj.x;
			this.links[i].target.y = obj.y;
		}
	}
		if (obj.hasOwnProperty('children')) {
		for (i=0; i<obj.children.length;i++) {
			this.transformToCartesianCoordinates(obj.children[i], obj.x, obj.y);
		}
	}
}

/**
 * Create a Radial Tree based on the Reingold Tilford Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
RadialTreeLayout.prototype.getSubTree = function(node) {

}
/**
 * Create a Radial Tree based on the Reingold Tilford Tree layout
 * Based on http://bl.ocks.org/mbostock/4063550
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
/*RadialTreeLayout2 = function(canvas, graph) {
	this.canvas = canvas;
	this.graph = graph;
 
    var jsonList = graph.getTreeD3JSON();
//console.log('jsonList: ' + jsonList);

    var diameter = HEIGHT;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

	// http://stackoverflow.com/questions/16070150/d3-substituting-d3-svg-diagonal-with-d3-svg-line
    var line = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    function lineData(d){
        var points = [
            {x: d.source.x, y: d.source.y},
            {x: d.target.x, y: d.target.y}
        ]
        return line(points);
    }    

    var vis = container
        .append("svg:g")
        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
	this.viss = vis;

	var computeTransitionPath = function(d) {
console.log('computeTransitionPath - d:');
console.dir(d);
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 7 : 2,
        targetPadding = d.right ? 7 : 2,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;		
	};	
	
//	var drag = d3.behavior.drag()
	this.drag = d3.behavior.drag()
		.on("dragstart", dragstarted)
		.on("drag", function(d, i) {
console.log('onDrag:');
console.dir(d);
//console.log('d: ' + JSON.stringify(d));
			d.x += d3.event.dx
			d.y += d3.event.dy
			d3.select(this).select("circle").style("fill", "yellow");
			d3.select(this).attr("transform", function(d){
				return "translate(" + [ d.x, d.y ] + ")";
			})
console.log('selectAll:');
console.dir(d3.selectAll('path.link'));
			d3.selectAll('path.link')
				.attr( 'd', computeTransitionPath);
		})
		.on("dragend", function(d) {
			if (PAN_AND_ZOOM) {
				d3.select(this).classed("dragging", false);
				d3.select(this).select("circle").style("fill", "white");
			}
		});	
    
    var nodes = tree.nodes(jsonList),
        links = tree.links(nodes);
//console.dir(nodes);
console.log('links:');
console.dir(links);

	function transformToCartesianCoordinates(obj, x, y) {
		var i, r = obj.y, t = obj.x;
//console.log('r: ' + r + ', t: ' + t);		
		obj.x = cartesianX(r, t);
		obj.y = cartesianY(r, t);
		for (i=0; i<links.length;i++) {
			if (links[i].source.id == obj.id) {
				links[i].source.x = obj.x;
				links[i].source.y = obj.y;
			}
			else if (links[i].target.id == obj.id) {
				links[i].target.x = obj.x;
				links[i].target.y = obj.y;
			}
		}
			if (obj.hasOwnProperty('children')) {
			for (i=0; i<obj.children.length;i++) {
				transformToCartesianCoordinates(obj.children[i], obj.x, obj.y);
			}
		}
	}

	// Transform polar coordinates to cartesian coordinates in the layout
	transformToCartesianCoordinates(nodes[0], 0, 0);
//console.dir(nodes);
//console.dir(links);

    var link = vis.selectAll(".link")
        .data(links)
        .enter().append("path")
            .attr("class", "link")
            .attr("d", lineData);
  
console.log('nodes:');
console.dir(nodes);
    var node = vis.selectAll(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				//console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);

	node.append("circle")
		.attr("r", 4.5)

	node.append("text")
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d.name);
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});
}*/

/**
 * Adds a node to the corresponding layout.
 */
RadialTreeLayout.prototype.addNode = function() {
	var newId = this.graph.getNewNodeId();
//console.log('newId: ' + newId);		
	this.graph.addNode(newId, 'Node ' + newId);
	
	var graph = this.graph;

	var nodes = [];
	var obj = 'var n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
	eval(obj);
	nodes.push(n);
console.dir(nodes);		
	
	
/*	var node = this.viss 
		.append("g")
			.attr("class", "node")
//			.attr("id", newId)
			.attr("id", function(d) { 
				var obj = 'var node = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
//				var node = '{"id": "' + newId + '", "name": "Node ' + newId + '", "x": ' + (-WIDTH/4) + ', "y": ' + (-HEIGHT/4) + '}';
//console.log('node: ' + node);		
//console.dir('node: ' + JSON.parse(node));		
//				return JSON.parse(node); 
				eval(obj);
console.dir(node);		
				return node; 
			})
//			.attr("id", JSON.parse('{"id": "' + newId + '", "name": "Node ' + newId + '", "x": ' + (-WIDTH/4) + ', "y": ' + (-HEIGHT/4) + '}'))
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);*/
			
//    var node = vis.selectAll(".node")
    var node = this.viss.selectAll(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				console.log('id...'); 
				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);
			
	node.append("circle")
		.attr("r", 4.5)
//		.attr("cx", -WIDTH/4)
//		.attr("cy", -HEIGHT/4);

	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", 'translate(' + [-WIDTH/4 + 8, -HEIGHT/4] + ')')
		.text('Node ' + newId)
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d3.select(this).text());
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(newId, answer);
			}
		});		
	
};

  


/**
 * Create a Horizontal Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
HorizontalTreeLayout = function(canvas, graph) {
	this.className = 'HorizontalTreeLayout';

    var jsonList = graph.getTreeD3JSON();

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;

	// Compute the new tree layout.
	this.nodes = tree.nodes(root).reverse();

	// Normalize for fixed-depth.
	this.nodes.forEach(function(d) { d.y = d.depth * 180; });

	// By default, D3 tree is vertical. Coordinates must be changed (x <-> y)
	var swap;
	for (i=0; i<this.nodes.length; i++) {
		n = this.nodes[i];
		swap = n.x;
		n.x = n.y;
		n.y = swap;
	}
	
	this.links = tree.links(this.nodes);
}

/**
 * Create a Vertical Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
VerticalTreeLayout = function(canvas, graph) {
	this.className = 'HorizontalTreeLayout';

    var jsonList = graph.getTreeD3JSON();

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;

	// Compute the new tree layout.
	this.nodes = tree.nodes(root).reverse();

	// Normalize for fixed-depth.
	this.nodes.forEach(function(d) { d.y = d.depth * 180 / 2; });

	this.links = tree.links(this.nodes);
}
var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};
goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};
goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a,b){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(new RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};goog.debug={};goog.debug.Error=function(a){Error.captureStackTrace?Error.captureStackTrace(this,goog.debug.Error):this.stack=Error().stack||"";a&&(this.message=String(a))};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string={};goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.subs=function(a,b){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptySafe=function(a){return goog.string.isEmpty(goog.string.makeSafe(a))};goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)return a.replace(goog.string.amperRe_,"&amp;").replace(goog.string.ltRe_,"&lt;").replace(goog.string.gtRe_,"&gt;").replace(goog.string.quotRe_,"&quot;");if(!goog.string.allRe_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.amperRe_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.ltRe_,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.gtRe_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.quotRe_,"&quot;"));return a};
goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/\"/g;goog.string.allRe_=/[&<>\"]/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesUsingDom_=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c=document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.toMap=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=!0;return b};
goog.string.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};goog.string.removeAll=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var n=l.exec(h)||["","",""],p=m.exec(k)||["","",""];if(0==n[0].length&&0==p[0].length)break;var c=0==n[1].length?0:parseInt(n[1],10),q=0==p[1].length?0:parseInt(p[1],10),c=goog.string.compareElements_(c,q)||goog.string.compareElements_(0==
n[2].length,0==p[2].length)||goog.string.compareElements_(n[2],p[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new goog.asserts.AssertionError(""+e,f||[]);};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.fail=function(a,b){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,3));return a};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.peek=function(a){return a[a.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.indexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.lastIndexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.forEach?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.filter?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.map?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};goog.array.reduce=function(a,b,c,d){if(a.reduce)return d?a.reduce(goog.bind(b,d),c):a.reduce(b,c);var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=function(a,b,c,d){if(a.reduceRight)return d?a.reduceRight(goog.bind(b,d),c):a.reduceRight(b,c);var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.some?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.every?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&Object.prototype.hasOwnProperty.call(d,"callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b){for(var c=b||a,d={},e=0,f=0;f<a.length;){var g=a[f++],h=goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1,l;l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.sort.call(a,b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortObjectsByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(a[b],c[b])})};
goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare=function(a,b,c){return goog.array.equals(a,b,c)};
goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b){for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e,d,a);goog.isDef(f)&&(c[f]||(c[f]=[])).push(e)}return c};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};
goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];goog.isArray(d)?b.push.apply(b,goog.array.flatten.apply(null,d)):b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};
goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.color={};
goog.color.names={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};goog.math={};goog.math.randomInt=function(a){return Math.floor(Math.random()*a)};goog.math.uniformRandom=function(a,b){return a+Math.random()*(b-a)};goog.math.clamp=function(a,b,c){return Math.min(Math.max(a,b),c)};goog.math.modulo=function(a,b){var c=a%b;return 0>c*b?c+b:c};goog.math.lerp=function(a,b,c){return a+c*(b-a)};goog.math.nearlyEquals=function(a,b,c){return Math.abs(a-b)<=(c||1E-6)};goog.math.standardAngle=function(a){return goog.math.modulo(a,360)};
goog.math.toRadians=function(a){return a*Math.PI/180};goog.math.toDegrees=function(a){return 180*a/Math.PI};goog.math.angleDx=function(a,b){return b*Math.cos(goog.math.toRadians(a))};goog.math.angleDy=function(a,b){return b*Math.sin(goog.math.toRadians(a))};goog.math.angle=function(a,b,c,d){return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(d-b,c-a)))};goog.math.angleDifference=function(a,b){var c=goog.math.standardAngle(b)-goog.math.standardAngle(a);180<c?c-=360:-180>=c&&(c=360+c);return c};
goog.math.sign=function(a){return 0==a?0:0>a?-1:1};goog.math.longestCommonSubsequence=function(a,b,c,d){c=c||function(a,b){return a==b};d=d||function(b,c){return a[b]};for(var e=a.length,f=b.length,g=[],h=0;h<e+1;h++)g[h]=[],g[h][0]=0;for(var k=0;k<f+1;k++)g[0][k]=0;for(h=1;h<=e;h++)for(k=1;k<=e;k++)c(a[h-1],b[k-1])?g[h][k]=g[h-1][k-1]+1:g[h][k]=Math.max(g[h-1][k],g[h][k-1]);for(var l=[],h=e,k=f;0<h&&0<k;)c(a[h-1],b[k-1])?(l.unshift(d(h-1,k-1)),h--,k--):g[h-1][k]>g[h][k-1]?h--:k--;return l};
goog.math.sum=function(a){return goog.array.reduce(arguments,function(a,c){return a+c},0)};goog.math.average=function(a){return goog.math.sum.apply(null,arguments)/arguments.length};goog.math.standardDeviation=function(a){var b=arguments.length;if(2>b)return 0;var c=goog.math.average.apply(null,arguments),b=goog.math.sum.apply(null,goog.array.map(arguments,function(a){return Math.pow(a-c,2)}))/(b-1);return Math.sqrt(b)};goog.math.isInt=function(a){return isFinite(a)&&0==a%1};
goog.math.isFiniteNumber=function(a){return isFinite(a)&&!isNaN(a)};goog.math.safeFloor=function(a,b){goog.asserts.assert(!goog.isDef(b)||0<b);return Math.floor(a+(b||2E-15))};goog.math.safeCeil=function(a,b){goog.asserts.assert(!goog.isDef(b)||0<b);return Math.ceil(a-(b||2E-15))};goog.color.parse=function(a){var b={};a=String(a);var c=goog.color.prependHashIfNecessaryHelper(a);if(goog.color.isValidHexColor_(c))return b.hex=goog.color.normalizeHex(c),b.type="hex",b;c=goog.color.isValidRgbColor_(a);if(c.length)return b.hex=goog.color.rgbArrayToHex(c),b.type="rgb",b;if(goog.color.names&&(c=goog.color.names[a.toLowerCase()]))return b.hex=c,b.type="named",b;throw Error(a+" is not a valid color string");};
goog.color.isValidColor=function(a){var b=goog.color.prependHashIfNecessaryHelper(a);return!!(goog.color.isValidHexColor_(b)||goog.color.isValidRgbColor_(a).length||goog.color.names&&goog.color.names[a.toLowerCase()])};goog.color.parseRgb=function(a){var b=goog.color.isValidRgbColor_(a);if(!b.length)throw Error(a+" is not a valid RGB color");return b};goog.color.hexToRgbStyle=function(a){return goog.color.rgbStyle_(goog.color.hexToRgb(a))};goog.color.hexTripletRe_=/#(.)(.)(.)/;
goog.color.normalizeHex=function(a){if(!goog.color.isValidHexColor_(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(goog.color.hexTripletRe_,"#$1$1$2$2$3$3"));return a.toLowerCase()};goog.color.hexToRgb=function(a){a=goog.color.normalizeHex(a);var b=parseInt(a.substr(1,2),16),c=parseInt(a.substr(3,2),16);a=parseInt(a.substr(5,2),16);return[b,c,a]};
goog.color.rgbToHex=function(a,b,c){a=Number(a);b=Number(b);c=Number(c);if(isNaN(a)||0>a||255<a||isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c)throw Error('"('+a+","+b+","+c+'") is not a valid RGB color');a=goog.color.prependZeroIfNecessaryHelper(a.toString(16));b=goog.color.prependZeroIfNecessaryHelper(b.toString(16));c=goog.color.prependZeroIfNecessaryHelper(c.toString(16));return"#"+a+b+c};goog.color.rgbArrayToHex=function(a){return goog.color.rgbToHex(a[0],a[1],a[2])};
goog.color.rgbToHsl=function(a,b,c){a/=255;b/=255;c/=255;var d=Math.max(a,b,c),e=Math.min(a,b,c),f=0,g=0,h=0.5*(d+e);d!=e&&(d==a?f=60*(b-c)/(d-e):d==b?f=60*(c-a)/(d-e)+120:d==c&&(f=60*(a-b)/(d-e)+240),g=0<h&&0.5>=h?(d-e)/(2*h):(d-e)/(2-2*h));return[Math.round(f+360)%360,g,h]};goog.color.rgbArrayToHsl=function(a){return goog.color.rgbToHsl(a[0],a[1],a[2])};goog.color.hueToRgb_=function(a,b,c){0>c?c+=1:1<c&&(c-=1);return 1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a};
goog.color.hslToRgb=function(a,b,c){var d=0,e=0,f=0;a/=360;if(0==b)d=e=f=255*c;else var g=f=0,g=0.5>c?c*(1+b):c+b-b*c,f=2*c-g,d=255*goog.color.hueToRgb_(f,g,a+1/3),e=255*goog.color.hueToRgb_(f,g,a),f=255*goog.color.hueToRgb_(f,g,a-1/3);return[Math.round(d),Math.round(e),Math.round(f)]};goog.color.hslArrayToRgb=function(a){return goog.color.hslToRgb(a[0],a[1],a[2])};goog.color.validHexColorRe_=/^#(?:[0-9a-f]{3}){1,2}$/i;goog.color.isValidHexColor_=function(a){return goog.color.validHexColorRe_.test(a)};
goog.color.normalizedHexColorRe_=/^#[0-9a-f]{6}$/;goog.color.isNormalizedHexColor_=function(a){return goog.color.normalizedHexColorRe_.test(a)};goog.color.rgbColorRe_=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;goog.color.isValidRgbColor_=function(a){var b=a.match(goog.color.rgbColorRe_);if(b){a=Number(b[1]);var c=Number(b[2]),b=Number(b[3]);if(0<=a&&255>=a&&0<=c&&255>=c&&0<=b&&255>=b)return[a,c,b]}return[]};
goog.color.prependZeroIfNecessaryHelper=function(a){return 1==a.length?"0"+a:a};goog.color.prependHashIfNecessaryHelper=function(a){return"#"==a.charAt(0)?a:"#"+a};goog.color.rgbStyle_=function(a){return"rgb("+a.join(",")+")"};
goog.color.hsvToRgb=function(a,b,c){var d=0,e=0,f=0;if(0==b)f=e=d=c;else{var g=Math.floor(a/60),h=a/60-g;a=c*(1-b);var k=c*(1-b*h);b=c*(1-b*(1-h));switch(g){case 1:d=k;e=c;f=a;break;case 2:d=a;e=c;f=b;break;case 3:d=a;e=k;f=c;break;case 4:d=b;e=a;f=c;break;case 5:d=c;e=a;f=k;break;case 6:case 0:d=c,e=b,f=a}}return[Math.floor(d),Math.floor(e),Math.floor(f)]};
goog.color.rgbToHsv=function(a,b,c){var d=Math.max(Math.max(a,b),c),e=Math.min(Math.min(a,b),c);if(e==d)e=a=0;else{var f=d-e,e=f/d;a=60*(a==d?(b-c)/f:b==d?2+(c-a)/f:4+(a-b)/f);0>a&&(a+=360);360<a&&(a-=360)}return[a,e,d]};goog.color.rgbArrayToHsv=function(a){return goog.color.rgbToHsv(a[0],a[1],a[2])};goog.color.hsvArrayToRgb=function(a){return goog.color.hsvToRgb(a[0],a[1],a[2])};goog.color.hexToHsl=function(a){a=goog.color.hexToRgb(a);return goog.color.rgbToHsl(a[0],a[1],a[2])};
goog.color.hslToHex=function(a,b,c){return goog.color.rgbArrayToHex(goog.color.hslToRgb(a,b,c))};goog.color.hslArrayToHex=function(a){return goog.color.rgbArrayToHex(goog.color.hslToRgb(a[0],a[1],a[2]))};goog.color.hexToHsv=function(a){return goog.color.rgbArrayToHsv(goog.color.hexToRgb(a))};goog.color.hsvToHex=function(a,b,c){return goog.color.rgbArrayToHex(goog.color.hsvToRgb(a,b,c))};goog.color.hsvArrayToHex=function(a){return goog.color.hsvToHex(a[0],a[1],a[2])};
goog.color.hslDistance=function(a,b){var c,d;c=0.5>=a[2]?a[1]*a[2]:a[1]*(1-a[2]);d=0.5>=b[2]?b[1]*b[2]:b[1]*(1-b[2]);return(a[2]-b[2])*(a[2]-b[2])+c*c+d*d-2*c*d*Math.cos(2*(a[0]/360-b[0]/360)*Math.PI)};goog.color.blend=function(a,b,c){c=goog.math.clamp(c,0,1);return[Math.round(c*a[0]+(1-c)*b[0]),Math.round(c*a[1]+(1-c)*b[1]),Math.round(c*a[2]+(1-c)*b[2])]};goog.color.darken=function(a,b){return goog.color.blend([0,0,0],a,b)};
goog.color.lighten=function(a,b){return goog.color.blend([255,255,255],a,b)};goog.color.highContrast=function(a,b){for(var c=[],d=0;d<b.length;d++)c.push({color:b[d],diff:goog.color.yiqBrightnessDiff_(b[d],a)+goog.color.colorDiff_(b[d],a)});c.sort(function(a,b){return b.diff-a.diff});return c[0].color};goog.color.yiqBrightness_=function(a){return Math.round((299*a[0]+587*a[1]+114*a[2])/1E3)};goog.color.yiqBrightnessDiff_=function(a,b){return Math.abs(goog.color.yiqBrightness_(a)-goog.color.yiqBrightness_(b))};
goog.color.colorDiff_=function(a,b){return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])+Math.abs(a[2]-b[2])};goog.debug.entryPointRegistry={};goog.debug.EntryPointMonitor=function(){};goog.debug.entryPointRegistry.refList_=[];goog.debug.entryPointRegistry.monitors_=[];goog.debug.entryPointRegistry.monitorsMayExist_=!1;goog.debug.entryPointRegistry.register=function(a){goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length]=a;if(goog.debug.entryPointRegistry.monitorsMayExist_)for(var b=goog.debug.entryPointRegistry.monitors_,c=0;c<b.length;c++)a(goog.bind(b[c].wrap,b[c]))};
goog.debug.entryPointRegistry.monitorAll=function(a){goog.debug.entryPointRegistry.monitorsMayExist_=!0;for(var b=goog.bind(a.wrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](b);goog.debug.entryPointRegistry.monitors_.push(a)};
goog.debug.entryPointRegistry.unmonitorAllIfPossible=function(a){var b=goog.debug.entryPointRegistry.monitors_;goog.asserts.assert(a==b[b.length-1],"Only the most recent monitor can be unwrapped.");a=goog.bind(a.unwrap,a);for(var c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](a);b.length--};goog.debug.errorHandlerWeakDep={protectEntryPoint:function(a,b){return a}};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString=function(){return goog.global.navigator?goog.global.navigator.userAgent:null};goog.userAgent.getNavigator=function(){return goog.global.navigator};
goog.userAgent.init_=function(){goog.userAgent.detectedOpera_=!1;goog.userAgent.detectedIe_=!1;goog.userAgent.detectedWebkit_=!1;goog.userAgent.detectedMobile_=!1;goog.userAgent.detectedGecko_=!1;var a;if(!goog.userAgent.BROWSER_KNOWN_&&(a=goog.userAgent.getUserAgentString())){var b=goog.userAgent.getNavigator();goog.userAgent.detectedOpera_=0==a.indexOf("Opera");goog.userAgent.detectedIe_=!goog.userAgent.detectedOpera_&&-1!=a.indexOf("MSIE");goog.userAgent.detectedWebkit_=!goog.userAgent.detectedOpera_&&
-1!=a.indexOf("WebKit");goog.userAgent.detectedMobile_=goog.userAgent.detectedWebkit_&&-1!=a.indexOf("Mobile");goog.userAgent.detectedGecko_=!goog.userAgent.detectedOpera_&&!goog.userAgent.detectedWebkit_&&"Gecko"==b.product}};goog.userAgent.BROWSER_KNOWN_||goog.userAgent.init_();goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.userAgent.detectedOpera_;goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.userAgent.detectedIe_;
goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.userAgent.detectedGecko_;goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.userAgent.detectedWebkit_;goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.detectedMobile_;goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};
goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;goog.userAgent.ASSUME_IPAD=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD;
goog.userAgent.initPlatform_=function(){goog.userAgent.detectedMac_=goog.string.contains(goog.userAgent.PLATFORM,"Mac");goog.userAgent.detectedWindows_=goog.string.contains(goog.userAgent.PLATFORM,"Win");goog.userAgent.detectedLinux_=goog.string.contains(goog.userAgent.PLATFORM,"Linux");goog.userAgent.detectedX11_=!!goog.userAgent.getNavigator()&&goog.string.contains(goog.userAgent.getNavigator().appVersion||"","X11");var a=goog.userAgent.getUserAgentString();goog.userAgent.detectedAndroid_=!!a&&
0<=a.indexOf("Android");goog.userAgent.detectedIPhone_=!!a&&0<=a.indexOf("iPhone");goog.userAgent.detectedIPad_=!!a&&0<=a.indexOf("iPad")};goog.userAgent.PLATFORM_KNOWN_||goog.userAgent.initPlatform_();goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.userAgent.detectedMac_;goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.userAgent.detectedWindows_;
goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.detectedLinux_;goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.detectedX11_;goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.userAgent.detectedAndroid_;goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.userAgent.detectedIPhone_;
goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.userAgent.detectedIPad_;
goog.userAgent.determineVersion_=function(){var a="",b;goog.userAgent.OPERA&&goog.global.opera?(a=goog.global.opera.version,a="function"==typeof a?a():a):(goog.userAgent.GECKO?b=/rv\:([^\);]+)(\)|;)/:goog.userAgent.IE?b=/MSIE\s+([^\);]+)(\)|;)/:goog.userAgent.WEBKIT&&(b=/WebKit\/(\S+)/),b&&(a=(a=b.exec(goog.userAgent.getUserAgentString()))?a[1]:""));return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?String(b):a};
goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionCache_={};goog.userAgent.isVersion=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionCache_[a]||(goog.userAgent.isVersionCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};
goog.userAgent.isDocumentMode=function(a){return goog.userAgent.IE&&goog.userAgent.DOCUMENT_MODE>=a};goog.userAgent.DOCUMENT_MODE=function(){var a=goog.global.document;return a&&goog.userAgent.IE?goog.userAgent.getDocumentMode_()||("CSS1Compat"==a.compatMode?parseInt(goog.userAgent.VERSION,10):5):void 0}();goog.events={};
goog.events.BrowserFeature={HAS_W3C_BUTTON:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE&&!goog.userAgent.isVersion("9"),HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT||goog.userAgent.isVersion("528"),HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9b")||goog.userAgent.IE&&goog.userAgent.isVersion("8")||goog.userAgent.OPERA&&goog.userAgent.isVersion("9.5")||
goog.userAgent.WEBKIT&&goog.userAgent.isVersion("528"),HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO&&!goog.userAgent.isVersion("8")||goog.userAgent.IE&&!goog.userAgent.isVersion("9"),TOUCH_ENABLED:"ontouchstart"in goog.global||!!(goog.global.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!goog.global.navigator||!goog.global.navigator.msMaxTouchPoints)};goog.disposable={};goog.disposable.IDisposable=function(){};goog.Disposable=function(){goog.Disposable.MONITORING_MODE!=goog.Disposable.MonitoringMode.OFF&&(this.creationStack=Error().stack,goog.Disposable.instances_[goog.getUid(this)]=this)};goog.Disposable.MonitoringMode={OFF:0,PERMANENT:1,INTERACTIVE:2};goog.Disposable.MONITORING_MODE=0;goog.Disposable.instances_={};goog.Disposable.getUndisposedObjects=function(){var a=[],b;for(b in goog.Disposable.instances_)goog.Disposable.instances_.hasOwnProperty(b)&&a.push(goog.Disposable.instances_[Number(b)]);return a};
goog.Disposable.clearUndisposedObjects=function(){goog.Disposable.instances_={}};goog.Disposable.prototype.disposed_=!1;goog.Disposable.prototype.isDisposed=function(){return this.disposed_};goog.Disposable.prototype.getDisposed=goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose=function(){if(!this.disposed_&&(this.disposed_=!0,this.disposeInternal(),goog.Disposable.MONITORING_MODE!=goog.Disposable.MonitoringMode.OFF)){var a=goog.getUid(this);if(goog.Disposable.MONITORING_MODE==goog.Disposable.MonitoringMode.PERMANENT&&!goog.Disposable.instances_.hasOwnProperty(a))throw Error(this+" did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");delete goog.Disposable.instances_[a]}};
goog.Disposable.prototype.registerDisposable=function(a){this.addOnDisposeCallback(goog.partial(goog.dispose,a))};goog.Disposable.prototype.addOnDisposeCallback=function(a,b){this.onDisposeCallbacks_||(this.onDisposeCallbacks_=[]);this.onDisposeCallbacks_.push(goog.bind(a,b))};goog.Disposable.prototype.disposeInternal=function(){if(this.onDisposeCallbacks_)for(;this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()};
goog.Disposable.isDisposed=function(a){return a&&"function"==typeof a.isDisposed?a.isDisposed():!1};goog.dispose=function(a){a&&"function"==typeof a.dispose&&a.dispose()};goog.disposeAll=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];goog.isArrayLike(d)?goog.disposeAll.apply(null,d):goog.dispose(d)}};goog.events.Event=function(a,b){this.type=a;this.currentTarget=this.target=b};goog.events.Event.prototype.disposeInternal=function(){};goog.events.Event.prototype.dispose=function(){};goog.events.Event.prototype.propagationStopped_=!1;goog.events.Event.prototype.defaultPrevented=!1;goog.events.Event.prototype.returnValue_=!0;goog.events.Event.prototype.stopPropagation=function(){this.propagationStopped_=!0};
goog.events.Event.prototype.preventDefault=function(){this.defaultPrevented=!0;this.returnValue_=!1};goog.events.Event.stopPropagation=function(a){a.stopPropagation()};goog.events.Event.preventDefault=function(a){a.preventDefault()};goog.events.EventType={CLICK:"click",DBLCLICK:"dblclick",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",SELECTSTART:"selectstart",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",BLUR:"blur",FOCUS:"focus",DEACTIVATE:"deactivate",FOCUSIN:goog.userAgent.IE?"focusin":"DOMFocusIn",FOCUSOUT:goog.userAgent.IE?"focusout":"DOMFocusOut",CHANGE:"change",SELECT:"select",SUBMIT:"submit",INPUT:"input",PROPERTYCHANGE:"propertychange",DRAGSTART:"dragstart",
DRAG:"drag",DRAGENTER:"dragenter",DRAGOVER:"dragover",DRAGLEAVE:"dragleave",DROP:"drop",DRAGEND:"dragend",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",TOUCHCANCEL:"touchcancel",BEFOREUNLOAD:"beforeunload",CONTEXTMENU:"contextmenu",ERROR:"error",HELP:"help",LOAD:"load",LOSECAPTURE:"losecapture",READYSTATECHANGE:"readystatechange",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload",HASHCHANGE:"hashchange",PAGEHIDE:"pagehide",PAGESHOW:"pageshow",POPSTATE:"popstate",COPY:"copy",PASTE:"paste",
CUT:"cut",BEFORECOPY:"beforecopy",BEFORECUT:"beforecut",BEFOREPASTE:"beforepaste",ONLINE:"online",OFFLINE:"offline",MESSAGE:"message",CONNECT:"connect",TRANSITIONEND:goog.userAgent.WEBKIT?"webkitTransitionEnd":goog.userAgent.OPERA?"oTransitionEnd":"transitionend",MSGESTURECHANGE:"MSGestureChange",MSGESTUREEND:"MSGestureEnd",MSGESTUREHOLD:"MSGestureHold",MSGESTURESTART:"MSGestureStart",MSGESTURETAP:"MSGestureTap",MSGOTPOINTERCAPTURE:"MSGotPointerCapture",MSINERTIASTART:"MSInertiaStart",MSLOSTPOINTERCAPTURE:"MSLostPointerCapture",
MSPOINTERCANCEL:"MSPointerCancel",MSPOINTERDOWN:"MSPointerDown",MSPOINTERMOVE:"MSPointerMove",MSPOINTEROVER:"MSPointerOver",MSPOINTEROUT:"MSPointerOut",MSPOINTERUP:"MSPointerUp",TEXTINPUT:"textinput",COMPOSITIONSTART:"compositionstart",COMPOSITIONUPDATE:"compositionupdate",COMPOSITIONEND:"compositionend"};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.events.BrowserEvent=function(a,b){a&&this.init(a,b)};goog.inherits(goog.events.BrowserEvent,goog.events.Event);goog.events.BrowserEvent.MouseButton={LEFT:0,MIDDLE:1,RIGHT:2};goog.events.BrowserEvent.IEButtonMap=[1,4,2];goog.events.BrowserEvent.prototype.target=null;goog.events.BrowserEvent.prototype.relatedTarget=null;goog.events.BrowserEvent.prototype.offsetX=0;goog.events.BrowserEvent.prototype.offsetY=0;goog.events.BrowserEvent.prototype.clientX=0;
goog.events.BrowserEvent.prototype.clientY=0;goog.events.BrowserEvent.prototype.screenX=0;goog.events.BrowserEvent.prototype.screenY=0;goog.events.BrowserEvent.prototype.button=0;goog.events.BrowserEvent.prototype.keyCode=0;goog.events.BrowserEvent.prototype.charCode=0;goog.events.BrowserEvent.prototype.ctrlKey=!1;goog.events.BrowserEvent.prototype.altKey=!1;goog.events.BrowserEvent.prototype.shiftKey=!1;goog.events.BrowserEvent.prototype.metaKey=!1;
goog.events.BrowserEvent.prototype.platformModifierKey=!1;goog.events.BrowserEvent.prototype.event_=null;
goog.events.BrowserEvent.prototype.init=function(a,b){var c=this.type=a.type;goog.events.Event.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;d?goog.userAgent.GECKO&&(goog.reflect.canAccessProperty(d,"nodeName")||(d=null)):c==goog.events.EventType.MOUSEOVER?d=a.fromElement:c==goog.events.EventType.MOUSEOUT&&(d=a.toElement);this.relatedTarget=d;this.offsetX=goog.userAgent.WEBKIT||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=goog.userAgent.WEBKIT||void 0!==
a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.platformModifierKey=goog.userAgent.MAC?a.metaKey:a.ctrlKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault();
delete this.propagationStopped_};goog.events.BrowserEvent.prototype.isButton=function(a){return goog.events.BrowserFeature.HAS_W3C_BUTTON?this.event_.button==a:"click"==this.type?a==goog.events.BrowserEvent.MouseButton.LEFT:!!(this.event_.button&goog.events.BrowserEvent.IEButtonMap[a])};goog.events.BrowserEvent.prototype.isMouseActionButton=function(){return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT)&&!(goog.userAgent.WEBKIT&&goog.userAgent.MAC&&this.ctrlKey)};
goog.events.BrowserEvent.prototype.stopPropagation=function(){goog.events.BrowserEvent.superClass_.stopPropagation.call(this);this.event_.stopPropagation?this.event_.stopPropagation():this.event_.cancelBubble=!0};
goog.events.BrowserEvent.prototype.preventDefault=function(){goog.events.BrowserEvent.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};goog.events.BrowserEvent.prototype.getBrowserEvent=function(){return this.event_};goog.events.BrowserEvent.prototype.disposeInternal=function(){};goog.events.EventWrapper=function(){};goog.events.EventWrapper.prototype.listen=function(a,b,c,d,e){};goog.events.EventWrapper.prototype.unlisten=function(a,b,c,d,e){};goog.events.Listenable=function(){};goog.events.Listenable.USE_LISTENABLE_INTERFACE=!1;goog.events.Listenable.IMPLEMENTED_BY_PROP_="__closure_listenable";goog.events.Listenable.addImplementation=function(a){a.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP_]=!0};goog.events.Listenable.isImplementedBy=function(a){return!(!a||!a[goog.events.Listenable.IMPLEMENTED_BY_PROP_])};goog.events.ListenableKey=function(){};goog.events.ListenableKey.counter_=0;goog.events.ListenableKey.reserveKey=function(){return++goog.events.ListenableKey.counter_};goog.events.Listener=function(){goog.events.Listener.ENABLE_MONITORING&&(this.creationStack=Error().stack)};goog.events.Listener.ENABLE_MONITORING=!1;goog.events.Listener.prototype.key=0;goog.events.Listener.prototype.removed=!1;goog.events.Listener.prototype.callOnce=!1;
goog.events.Listener.prototype.init=function(a,b,c,d,e,f){if(goog.isFunction(a))this.isFunctionListener_=!0;else if(a&&a.handleEvent&&goog.isFunction(a.handleEvent))this.isFunctionListener_=!1;else throw Error("Invalid listener argument");this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!e;this.handler=f;this.callOnce=!1;this.key=goog.events.ListenableKey.reserveKey();this.removed=!1};
goog.events.Listener.prototype.handleEvent=function(a){return this.isFunctionListener_?this.listener.call(this.handler||this.src,a):this.listener.handleEvent.call(this.listener,a)};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};
goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};goog.events.listeners_={};goog.events.listenerTree_={};goog.events.sources_={};goog.events.onString_="on";goog.events.onStringMap_={};goog.events.keySeparator_="_";
goog.events.listen=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listen(a,b[f],c,d,e);return null}a=goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a)?a.listen(b,goog.events.wrapListener_(c),d,e):goog.events.listen_(a,b,c,!1,d,e);b=a.key;goog.events.listeners_[b]=a;return b};
goog.events.listen_=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");e=!!e;var g=goog.events.listenerTree_;b in g||(g[b]={count_:0,remaining_:0});g=g[b];e in g||(g[e]={count_:0,remaining_:0},g.count_++);var g=g[e],h=goog.getUid(a),k;g.remaining_++;if(g[h]){k=g[h];for(var l=0;l<k.length;l++)if(g=k[l],g.listener==c&&g.handler==f){if(g.removed)break;d||(k[l].callOnce=!1);return k[l]}}else k=g[h]=[],g.count_++;l=goog.events.getProxy();g=new goog.events.Listener;g.init(c,l,a,b,e,f);g.callOnce=
d;l.src=a;l.listener=g;k.push(g);goog.events.sources_[h]||(goog.events.sources_[h]=[]);goog.events.sources_[h].push(g);a.addEventListener?a!=goog.global&&a.customEvent_||a.addEventListener(b,l,e):a.attachEvent(goog.events.getOnString_(b),l);return g};goog.events.getProxy=function(){var a=goog.events.handleBrowserEvent_,b=goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b};
goog.events.listenOnce=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listenOnce(a,b[f],c,d,e);return null}a=goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a)?a.listenOnce(b,goog.events.wrapListener_(c),d,e):goog.events.listen_(a,b,c,!0,d,e);b=a.key;goog.events.listeners_[b]=a;return b};goog.events.listenWithWrapper=function(a,b,c,d,e){b.listen(a,c,d,e)};
goog.events.unlisten=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.unlisten(a,b[f],c,d,e);return null}if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a))return a.unlisten(b,goog.events.wrapListener_(c),d,e);d=!!d;a=goog.events.getListeners_(a,b,d);if(!a)return!1;for(f=0;f<a.length;f++)if(a[f].listener==c&&a[f].capture==d&&a[f].handler==e)return goog.events.unlistenByKey(a[f].key);return!1};
goog.events.unlistenByKey=function(a){var b=goog.events.listeners_[a];if(!b||b.removed)return!1;var c=b.src;if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(c))return c.unlistenByKey(b);var d=b.type,e=b.proxy,f=b.capture;c.removeEventListener?c!=goog.global&&c.customEvent_||c.removeEventListener(d,e,f):c.detachEvent&&c.detachEvent(goog.events.getOnString_(d),e);c=goog.getUid(c);goog.events.sources_[c]&&(e=goog.events.sources_[c],goog.array.remove(e,b),0==
e.length&&delete goog.events.sources_[c]);b.removed=!0;if(b=goog.events.listenerTree_[d][f][c])b.needsCleanup_=!0,goog.events.cleanUp_(d,f,c,b);delete goog.events.listeners_[a];return!0};goog.events.unlistenWithWrapper=function(a,b,c,d,e){b.unlisten(a,c,d,e)};goog.events.cleanUp=function(a){delete goog.events.listeners_[a.key]};
goog.events.cleanUp_=function(a,b,c,d){if(!d.locked_&&d.needsCleanup_){for(var e=0,f=0;e<d.length;e++)d[e].removed?d[e].proxy.src=null:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.needsCleanup_=!1;0==f&&(delete goog.events.listenerTree_[a][b][c],goog.events.listenerTree_[a][b].count_--,0==goog.events.listenerTree_[a][b].count_&&(delete goog.events.listenerTree_[a][b],goog.events.listenerTree_[a].count_--),0==goog.events.listenerTree_[a].count_&&delete goog.events.listenerTree_[a])}};
goog.events.removeAll=function(a,b){var c=0,d=null==b;if(null!=a){if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&a&&goog.events.Listenable.isImplementedBy(a))return a.removeAllListeners(b);var e=goog.getUid(a);if(goog.events.sources_[e])for(var e=goog.events.sources_[e],f=e.length-1;0<=f;f--){var g=e[f];if(d||b==g.type)goog.events.unlistenByKey(g.key),c++}}else goog.object.forEach(goog.events.listeners_,function(a,b){goog.events.unlistenByKey(b);c++});return c};
goog.events.getListeners=function(a,b,c){return goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a)?a.getListeners(b,c):goog.events.getListeners_(a,b,c)||[]};goog.events.getListeners_=function(a,b,c){var d=goog.events.listenerTree_;return b in d&&(d=d[b],c in d&&(d=d[c],a=goog.getUid(a),d[a]))?d[a]:null};
goog.events.getListener=function(a,b,c,d,e){d=!!d;if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a))return a.getListener(b,goog.events.wrapListener_(c),d,e);if(a=goog.events.getListeners_(a,b,d))for(b=0;b<a.length;b++)if(!a[b].removed&&a[b].listener==c&&a[b].capture==d&&a[b].handler==e)return a[b];return null};
goog.events.hasListener=function(a,b,c){if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a))return a.hasListener(b,c);a=goog.getUid(a);var d=goog.events.sources_[a];if(d){var e=goog.isDef(b),f=goog.isDef(c);return e&&f?(d=goog.events.listenerTree_[b],!!d&&!!d[c]&&a in d[c]):e||f?goog.array.some(d,function(a){return e&&a.type==b||f&&a.capture==c}):!0}return!1};
goog.events.expose=function(a){var b=[],c;for(c in a)a[c]&&a[c].id?b.push(c+" = "+a[c]+" ("+a[c].id+")"):b.push(c+" = "+a[c]);return b.join("\n")};goog.events.getOnString_=function(a){return a in goog.events.onStringMap_?goog.events.onStringMap_[a]:goog.events.onStringMap_[a]=goog.events.onString_+a};
goog.events.fireListeners=function(a,b,c,d){if(goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.isImplementedBy(a))return a.fireListeners(b,c,d);var e=goog.events.listenerTree_;return b in e&&(e=e[b],c in e)?goog.events.fireListeners_(e[c],a,b,c,d):!0};
goog.events.fireListeners_=function(a,b,c,d,e){var f=1;b=goog.getUid(b);if(a[b]){var g=--a.remaining_,h=a[b];h.locked_?h.locked_++:h.locked_=1;try{for(var k=h.length,l=0;l<k;l++){var m=h[l];m&&!m.removed&&(f&=!1!==goog.events.fireListener(m,e))}}finally{a.remaining_=Math.max(g,a.remaining_),h.locked_--,goog.events.cleanUp_(c,d,b,h)}}return Boolean(f)};goog.events.fireListener=function(a,b){a.callOnce&&goog.events.unlistenByKey(a.key);return a.handleEvent(b)};goog.events.getTotalListenerCount=function(){return goog.object.getCount(goog.events.listeners_)};
goog.events.dispatchEvent=function(a,b){if(goog.events.Listenable.USE_LISTENABLE_INTERFACE)return a.dispatchEvent(b);var c=b.type||b,d=goog.events.listenerTree_;if(!(c in d))return!0;if(goog.isString(b))b=new goog.events.Event(b,a);else if(b instanceof goog.events.Event)b.target=b.target||a;else{var e=b;b=new goog.events.Event(c,a);goog.object.extend(b,e)}var e=1,f,d=d[c],c=!0 in d,g;if(c){f=[];for(g=a;g;g=g.getParentEventTarget())f.push(g);g=d[!0];g.remaining_=g.count_;for(var h=f.length-1;!b.propagationStopped_&&
0<=h&&g.remaining_;h--)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,f[h],b.type,!0,b)&&!1!=b.returnValue_}if(!1 in d)if(g=d[!1],g.remaining_=g.count_,c)for(h=0;!b.propagationStopped_&&h<f.length&&g.remaining_;h++)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,f[h],b.type,!1,b)&&!1!=b.returnValue_;else for(d=a;!b.propagationStopped_&&d&&g.remaining_;d=d.getParentEventTarget())b.currentTarget=d,e&=goog.events.fireListeners_(g,d,b.type,!1,b)&&!1!=b.returnValue_;return Boolean(e)};
goog.events.protectBrowserEventEntryPoint=function(a){goog.events.handleBrowserEvent_=a.protectEntryPoint(goog.events.handleBrowserEvent_)};
goog.events.handleBrowserEvent_=function(a,b){if(a.removed)return!0;var c=a.type,d=goog.events.listenerTree_;if(!(c in d))return!0;var d=d[c],e,f;if(!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT){e=b||goog.getObjectByName("window.event");var g=!0 in d,h=!1 in d;if(g){if(goog.events.isMarkedIeEvent_(e))return!0;goog.events.markIeEvent_(e)}var k=new goog.events.BrowserEvent;k.init(e,this);e=!0;try{if(g){for(var l=[],m=k.currentTarget;m;m=m.parentNode)l.push(m);f=d[!0];f.remaining_=f.count_;for(var n=
l.length-1;!k.propagationStopped_&&0<=n&&f.remaining_;n--)k.currentTarget=l[n],e&=goog.events.fireListeners_(f,l[n],c,!0,k);if(h)for(f=d[!1],f.remaining_=f.count_,n=0;!k.propagationStopped_&&n<l.length&&f.remaining_;n++)k.currentTarget=l[n],e&=goog.events.fireListeners_(f,l[n],c,!1,k)}else e=goog.events.fireListener(a,k)}finally{l&&(l.length=0)}return e}c=new goog.events.BrowserEvent(b,this);return e=goog.events.fireListener(a,c)};
goog.events.markIeEvent_=function(a){var b=!1;if(0==a.keyCode)try{a.keyCode=-1;return}catch(c){b=!0}if(b||void 0==a.returnValue)a.returnValue=!0};goog.events.isMarkedIeEvent_=function(a){return 0>a.keyCode||void 0!=a.returnValue};goog.events.uniqueIdCounter_=0;goog.events.getUniqueId=function(a){return a+"_"+goog.events.uniqueIdCounter_++};goog.events.LISTENER_WRAPPER_PROP_="__closure_events_fn_"+(1E9*Math.random()>>>0);
goog.events.wrapListener_=function(a){return goog.isFunction(a)?a:a[goog.events.LISTENER_WRAPPER_PROP_]||(a[goog.events.LISTENER_WRAPPER_PROP_]=function(b){return a.handleEvent(b)})};goog.debug.entryPointRegistry.register(function(a){goog.events.handleBrowserEvent_=a(goog.events.handleBrowserEvent_)});goog.debug.RelativeTimeProvider=function(){this.relativeTimeStart_=goog.now()};goog.debug.RelativeTimeProvider.defaultInstance_=new goog.debug.RelativeTimeProvider;goog.debug.RelativeTimeProvider.prototype.set=function(a){this.relativeTimeStart_=a};goog.debug.RelativeTimeProvider.prototype.reset=function(){this.set(goog.now())};goog.debug.RelativeTimeProvider.prototype.get=function(){return this.relativeTimeStart_};goog.debug.RelativeTimeProvider.getDefaultInstance=function(){return goog.debug.RelativeTimeProvider.defaultInstance_};goog.debug.Formatter=function(a){this.prefix_=a||"";this.startTimeProvider_=goog.debug.RelativeTimeProvider.getDefaultInstance()};goog.debug.Formatter.prototype.showAbsoluteTime=!0;goog.debug.Formatter.prototype.showRelativeTime=!0;goog.debug.Formatter.prototype.showLoggerName=!0;goog.debug.Formatter.prototype.showExceptionText=!1;goog.debug.Formatter.prototype.showSeverityLevel=!1;goog.debug.Formatter.prototype.setStartTimeProvider=function(a){this.startTimeProvider_=a};
goog.debug.Formatter.prototype.getStartTimeProvider=function(){return this.startTimeProvider_};goog.debug.Formatter.prototype.resetRelativeTimeStart=function(){this.startTimeProvider_.reset()};
goog.debug.Formatter.getDateTimeStamp_=function(a){a=new Date(a.getMillis());return goog.debug.Formatter.getTwoDigitString_(a.getFullYear()-2E3)+goog.debug.Formatter.getTwoDigitString_(a.getMonth()+1)+goog.debug.Formatter.getTwoDigitString_(a.getDate())+" "+goog.debug.Formatter.getTwoDigitString_(a.getHours())+":"+goog.debug.Formatter.getTwoDigitString_(a.getMinutes())+":"+goog.debug.Formatter.getTwoDigitString_(a.getSeconds())+"."+goog.debug.Formatter.getTwoDigitString_(Math.floor(a.getMilliseconds()/
10))};goog.debug.Formatter.getTwoDigitString_=function(a){return 10>a?"0"+a:String(a)};goog.debug.Formatter.getRelativeTime_=function(a,b){var c=(a.getMillis()-b)/1E3,d=c.toFixed(3),e=0;if(1>c)e=2;else for(;100>c;)e++,c*=10;for(;0<e--;)d=" "+d;return d};goog.debug.HtmlFormatter=function(a){goog.debug.Formatter.call(this,a)};goog.inherits(goog.debug.HtmlFormatter,goog.debug.Formatter);goog.debug.HtmlFormatter.prototype.showExceptionText=!0;
goog.debug.HtmlFormatter.prototype.formatRecord=function(a){var b;switch(a.getLevel().value){case goog.debug.Logger.Level.SHOUT.value:b="dbg-sh";break;case goog.debug.Logger.Level.SEVERE.value:b="dbg-sev";break;case goog.debug.Logger.Level.WARNING.value:b="dbg-w";break;case goog.debug.Logger.Level.INFO.value:b="dbg-i";break;default:b="dbg-f"}var c=[];c.push(this.prefix_," ");this.showAbsoluteTime&&c.push("[",goog.debug.Formatter.getDateTimeStamp_(a),"] ");this.showRelativeTime&&c.push("[",goog.string.whitespaceEscape(goog.debug.Formatter.getRelativeTime_(a,
this.startTimeProvider_.get())),"s] ");this.showLoggerName&&c.push("[",goog.string.htmlEscape(a.getLoggerName()),"] ");this.showSeverityLevel&&c.push("[",goog.string.htmlEscape(a.getLevel().name),"] ");c.push('<span class="',b,'">',goog.string.newLineToBr(goog.string.whitespaceEscape(goog.string.htmlEscape(a.getMessage()))));this.showExceptionText&&a.getException()&&c.push("<br>",goog.string.newLineToBr(goog.string.whitespaceEscape(a.getExceptionText()||"")));c.push("</span><br>");return c.join("")};
goog.debug.TextFormatter=function(a){goog.debug.Formatter.call(this,a)};goog.inherits(goog.debug.TextFormatter,goog.debug.Formatter);
goog.debug.TextFormatter.prototype.formatRecord=function(a){var b=[];b.push(this.prefix_," ");this.showAbsoluteTime&&b.push("[",goog.debug.Formatter.getDateTimeStamp_(a),"] ");this.showRelativeTime&&b.push("[",goog.debug.Formatter.getRelativeTime_(a,this.startTimeProvider_.get()),"s] ");this.showLoggerName&&b.push("[",a.getLoggerName(),"] ");this.showSeverityLevel&&b.push("[",a.getLevel().name,"] ");b.push(a.getMessage(),"\n");this.showExceptionText&&a.getException()&&b.push(a.getExceptionText(),
"\n");return b.join("")};goog.structs={};goog.structs.getCount=function(a){return"function"==typeof a.getCount?a.getCount():goog.isArrayLike(a)||goog.isString(a)?a.length:goog.object.getCount(a)};goog.structs.getValues=function(a){if("function"==typeof a.getValues)return a.getValues();if(goog.isString(a))return a.split("");if(goog.isArrayLike(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return goog.object.getValues(a)};
goog.structs.getKeys=function(a){if("function"==typeof a.getKeys)return a.getKeys();if("function"!=typeof a.getValues){if(goog.isArrayLike(a)||goog.isString(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return goog.object.getKeys(a)}};goog.structs.contains=function(a,b){return"function"==typeof a.contains?a.contains(b):"function"==typeof a.containsValue?a.containsValue(b):goog.isArrayLike(a)||goog.isString(a)?goog.array.contains(a,b):goog.object.containsValue(a,b)};
goog.structs.isEmpty=function(a){return"function"==typeof a.isEmpty?a.isEmpty():goog.isArrayLike(a)||goog.isString(a)?goog.array.isEmpty(a):goog.object.isEmpty(a)};goog.structs.clear=function(a){"function"==typeof a.clear?a.clear():goog.isArrayLike(a)?goog.array.clear(a):goog.object.clear(a)};
goog.structs.forEach=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(goog.isArrayLike(a)||goog.isString(a))goog.array.forEach(a,b,c);else for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};
goog.structs.filter=function(a,b,c){if("function"==typeof a.filter)return a.filter(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.filter(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)b.call(c,f[h],e[h],a)&&(d[e[h]]=f[h])}else for(d=[],h=0;h<g;h++)b.call(c,f[h],void 0,a)&&d.push(f[h]);return d};
goog.structs.map=function(a,b,c){if("function"==typeof a.map)return a.map(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.map(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)d[e[h]]=b.call(c,f[h],e[h],a)}else for(d=[],h=0;h<g;h++)d[h]=b.call(c,f[h],void 0,a);return d};
goog.structs.some=function(a,b,c){if("function"==typeof a.some)return a.some(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.some(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(b.call(c,e[g],d&&d[g],a))return!0;return!1};
goog.structs.every=function(a,b,c){if("function"==typeof a.every)return a.every(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.every(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(!b.call(c,e[g],d&&d[g],a))return!1;return!0};goog.structs.Collection=function(){};goog.iter={};goog.iter.StopIteration="StopIteration"in goog.global?goog.global.StopIteration:Error("StopIteration");goog.iter.Iterator=function(){};goog.iter.Iterator.prototype.next=function(){throw goog.iter.StopIteration;};goog.iter.Iterator.prototype.__iterator__=function(a){return this};
goog.iter.toIterator=function(a){if(a instanceof goog.iter.Iterator)return a;if("function"==typeof a.__iterator__)return a.__iterator__(!1);if(goog.isArrayLike(a)){var b=0,c=new goog.iter.Iterator;c.next=function(){for(;;){if(b>=a.length)throw goog.iter.StopIteration;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");};
goog.iter.forEach=function(a,b,c){if(goog.isArrayLike(a))try{goog.array.forEach(a,b,c)}catch(d){if(d!==goog.iter.StopIteration)throw d;}else{a=goog.iter.toIterator(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(e){if(e!==goog.iter.StopIteration)throw e;}}};goog.iter.filter=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){for(;;){var a=d.next();if(b.call(c,a,void 0,d))return a}};return a};
goog.iter.range=function(a,b,c){var d=0,e=a,f=c||1;1<arguments.length&&(d=a,e=b);if(0==f)throw Error("Range step argument must not be zero");var g=new goog.iter.Iterator;g.next=function(){if(0<f&&d>=e||0>f&&d<=e)throw goog.iter.StopIteration;var a=d;d+=f;return a};return g};goog.iter.join=function(a,b){return goog.iter.toArray(a).join(b)};goog.iter.map=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){for(;;){var a=d.next();return b.call(c,a,void 0,d)}};return a};
goog.iter.reduce=function(a,b,c,d){var e=c;goog.iter.forEach(a,function(a){e=b.call(d,e,a)});return e};goog.iter.some=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(b.call(c,a.next(),void 0,a))return!0}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!1};goog.iter.every=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(!b.call(c,a.next(),void 0,a))return!1}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!0};
goog.iter.chain=function(a){var b=arguments,c=b.length,d=0,e=new goog.iter.Iterator;e.next=function(){try{if(d>=c)throw goog.iter.StopIteration;return goog.iter.toIterator(b[d]).next()}catch(a){if(a!==goog.iter.StopIteration||d>=c)throw a;d++;return this.next()}};return e};goog.iter.dropWhile=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;var e=!0;a.next=function(){for(;;){var a=d.next();if(!e||!b.call(c,a,void 0,d))return e=!1,a}};return a};
goog.iter.takeWhile=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;var e=!0;a.next=function(){for(;;)if(e){var a=d.next();if(b.call(c,a,void 0,d))return a;e=!1}else throw goog.iter.StopIteration;};return a};goog.iter.toArray=function(a){if(goog.isArrayLike(a))return goog.array.toArray(a);a=goog.iter.toIterator(a);var b=[];goog.iter.forEach(a,function(a){b.push(a)});return b};
goog.iter.equals=function(a,b){a=goog.iter.toIterator(a);b=goog.iter.toIterator(b);var c,d;try{for(;;){c=d=!1;var e=a.next();c=!0;var f=b.next();d=!0;if(e!=f)break}}catch(g){if(g!==goog.iter.StopIteration)throw g;if(c&&!d)return!1;if(!d)try{b.next()}catch(h){if(h!==goog.iter.StopIteration)throw h;return!0}}return!1};goog.iter.nextOrValue=function(a,b){try{return goog.iter.toIterator(a).next()}catch(c){if(c!=goog.iter.StopIteration)throw c;return b}};
goog.iter.product=function(a){if(goog.array.some(arguments,function(a){return!a.length})||!arguments.length)return new goog.iter.Iterator;var b=new goog.iter.Iterator,c=arguments,d=goog.array.repeat(0,c.length);b.next=function(){if(d){for(var a=goog.array.map(d,function(a,b){return c[b][a]}),b=d.length-1;0<=b;b--){goog.asserts.assert(d);if(d[b]<c[b].length-1){d[b]++;break}if(0==b){d=null;break}d[b]=0}return a}throw goog.iter.StopIteration;};return b};
goog.iter.cycle=function(a){var b=goog.iter.toIterator(a),c=[],d=0;a=new goog.iter.Iterator;var e=!1;a.next=function(){var a=null;if(!e)try{return a=b.next(),c.push(a),a}catch(g){if(g!=goog.iter.StopIteration||goog.array.isEmpty(c))throw g;e=!0}a=c[d];d=(d+1)%c.length;return a};return a};goog.structs.Map=function(a,b){this.map_={};this.keys_=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};goog.structs.Map.prototype.count_=0;goog.structs.Map.prototype.version_=0;goog.structs.Map.prototype.getCount=function(){return this.count_};
goog.structs.Map.prototype.getValues=function(){this.cleanupKeysArray_();for(var a=[],b=0;b<this.keys_.length;b++)a.push(this.map_[this.keys_[b]]);return a};goog.structs.Map.prototype.getKeys=function(){this.cleanupKeysArray_();return this.keys_.concat()};goog.structs.Map.prototype.containsKey=function(a){return goog.structs.Map.hasKey_(this.map_,a)};
goog.structs.Map.prototype.containsValue=function(a){for(var b=0;b<this.keys_.length;b++){var c=this.keys_[b];if(goog.structs.Map.hasKey_(this.map_,c)&&this.map_[c]==a)return!0}return!1};goog.structs.Map.prototype.equals=function(a,b){if(this===a)return!0;if(this.count_!=a.getCount())return!1;var c=b||goog.structs.Map.defaultEquals;this.cleanupKeysArray_();for(var d,e=0;d=this.keys_[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};goog.structs.Map.defaultEquals=function(a,b){return a===b};
goog.structs.Map.prototype.isEmpty=function(){return 0==this.count_};goog.structs.Map.prototype.clear=function(){this.map_={};this.version_=this.count_=this.keys_.length=0};goog.structs.Map.prototype.remove=function(a){return goog.structs.Map.hasKey_(this.map_,a)?(delete this.map_[a],this.count_--,this.version_++,this.keys_.length>2*this.count_&&this.cleanupKeysArray_(),!0):!1};
goog.structs.Map.prototype.cleanupKeysArray_=function(){if(this.count_!=this.keys_.length){for(var a=0,b=0;a<this.keys_.length;){var c=this.keys_[a];goog.structs.Map.hasKey_(this.map_,c)&&(this.keys_[b++]=c);a++}this.keys_.length=b}if(this.count_!=this.keys_.length){for(var d={},b=a=0;a<this.keys_.length;)c=this.keys_[a],goog.structs.Map.hasKey_(d,c)||(this.keys_[b++]=c,d[c]=1),a++;this.keys_.length=b}};
goog.structs.Map.prototype.get=function(a,b){return goog.structs.Map.hasKey_(this.map_,a)?this.map_[a]:b};goog.structs.Map.prototype.set=function(a,b){goog.structs.Map.hasKey_(this.map_,a)||(this.count_++,this.keys_.push(a),this.version_++);this.map_[a]=b};goog.structs.Map.prototype.addAll=function(a){var b;a instanceof goog.structs.Map?(b=a.getKeys(),a=a.getValues()):(b=goog.object.getKeys(a),a=goog.object.getValues(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};
goog.structs.Map.prototype.clone=function(){return new goog.structs.Map(this)};goog.structs.Map.prototype.transpose=function(){for(var a=new goog.structs.Map,b=0;b<this.keys_.length;b++){var c=this.keys_[b];a.set(this.map_[c],c)}return a};goog.structs.Map.prototype.toObject=function(){this.cleanupKeysArray_();for(var a={},b=0;b<this.keys_.length;b++){var c=this.keys_[b];a[c]=this.map_[c]}return a};goog.structs.Map.prototype.getKeyIterator=function(){return this.__iterator__(!0)};
goog.structs.Map.prototype.getValueIterator=function(){return this.__iterator__(!1)};goog.structs.Map.prototype.__iterator__=function(a){this.cleanupKeysArray_();var b=0,c=this.keys_,d=this.map_,e=this.version_,f=this,g=new goog.iter.Iterator;g.next=function(){for(;;){if(e!=f.version_)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw goog.iter.StopIteration;var g=c[b++];return a?g:d[g]}};return g};
goog.structs.Map.hasKey_=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};goog.structs.Set=function(a){this.map_=new goog.structs.Map;a&&this.addAll(a)};goog.structs.Set.getKey_=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+goog.getUid(a):b.substr(0,1)+a};goog.structs.Set.prototype.getCount=function(){return this.map_.getCount()};goog.structs.Set.prototype.add=function(a){this.map_.set(goog.structs.Set.getKey_(a),a)};goog.structs.Set.prototype.addAll=function(a){a=goog.structs.getValues(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};
goog.structs.Set.prototype.removeAll=function(a){a=goog.structs.getValues(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};goog.structs.Set.prototype.remove=function(a){return this.map_.remove(goog.structs.Set.getKey_(a))};goog.structs.Set.prototype.clear=function(){this.map_.clear()};goog.structs.Set.prototype.isEmpty=function(){return this.map_.isEmpty()};goog.structs.Set.prototype.contains=function(a){return this.map_.containsKey(goog.structs.Set.getKey_(a))};
goog.structs.Set.prototype.containsAll=function(a){return goog.structs.every(a,this.contains,this)};goog.structs.Set.prototype.intersection=function(a){var b=new goog.structs.Set;a=goog.structs.getValues(a);for(var c=0;c<a.length;c++){var d=a[c];this.contains(d)&&b.add(d)}return b};goog.structs.Set.prototype.difference=function(a){var b=this.clone();b.removeAll(a);return b};goog.structs.Set.prototype.getValues=function(){return this.map_.getValues()};goog.structs.Set.prototype.clone=function(){return new goog.structs.Set(this)};
goog.structs.Set.prototype.equals=function(a){return this.getCount()==goog.structs.getCount(a)&&this.isSubsetOf(a)};goog.structs.Set.prototype.isSubsetOf=function(a){var b=goog.structs.getCount(a);if(this.getCount()>b)return!1;!(a instanceof goog.structs.Set)&&5<b&&(a=new goog.structs.Set(a));return goog.structs.every(this,function(b){return goog.structs.contains(a,b)})};goog.structs.Set.prototype.__iterator__=function(a){return this.map_.__iterator__(!1)};goog.debug.catchErrors=function(a,b,c){c=c||goog.global;var d=c.onerror,e=!!b;goog.userAgent.WEBKIT&&!goog.userAgent.isVersion("535.3")&&(e=!e);c.onerror=function(b,c,h){d&&d(b,c,h);a({message:b,fileName:c,line:h});return e}};goog.debug.expose=function(a,b){if("undefined"==typeof a)return"undefined";if(null==a)return"NULL";var c=[],d;for(d in a)if(b||!goog.isFunction(a[d])){var e=d+" = ";try{e+=a[d]}catch(f){e+="*** "+f+" ***"}c.push(e)}return c.join("\n")};
goog.debug.deepExpose=function(a,b){var c=new goog.structs.Set,d=[],e=function(a,g){var h=g+"  ";try{if(goog.isDef(a))if(goog.isNull(a))d.push("NULL");else if(goog.isString(a))d.push('"'+a.replace(/\n/g,"\n"+g)+'"');else if(goog.isFunction(a))d.push(String(a).replace(/\n/g,"\n"+g));else if(goog.isObject(a))if(c.contains(a))d.push("*** reference loop detected ***");else{c.add(a);d.push("{");for(var k in a)if(b||!goog.isFunction(a[k]))d.push("\n"),d.push(h),d.push(k+" = "),e(a[k],h);d.push("\n"+g+"}")}else d.push(a);
else d.push("undefined")}catch(l){d.push("*** "+l+" ***")}};e(a,"");return d.join("")};goog.debug.exposeArray=function(a){for(var b=[],c=0;c<a.length;c++)goog.isArray(a[c])?b.push(goog.debug.exposeArray(a[c])):b.push(a[c]);return"[ "+b.join(", ")+" ]"};
goog.debug.exposeException=function(a,b){try{var c=goog.debug.normalizeErrorObject(a);return"Message: "+goog.string.htmlEscape(c.message)+'\nUrl: <a href="view-source:'+c.fileName+'" target="_new">'+c.fileName+"</a>\nLine: "+c.lineNumber+"\n\nBrowser stack:\n"+goog.string.htmlEscape(c.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+goog.string.htmlEscape(goog.debug.getStacktrace(b)+"-> ")}catch(d){return"Exception trying to expose exception! You win, we lose. "+d}};
goog.debug.normalizeErrorObject=function(a){var b=goog.getObjectByName("window.location.href");if(goog.isString(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c,d,e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||goog.global.$googDebugFname||b}catch(g){d="Not available",e=!0}return!e&&a.lineNumber&&a.fileName&&a.stack?a:{message:a.message,name:a.name,lineNumber:c,fileName:d,
stack:a.stack||"Not available"}};goog.debug.enhanceError=function(a,b){var c="string"==typeof a?Error(a):a;c.stack||(c.stack=goog.debug.getStacktrace(arguments.callee.caller));if(b){for(var d=0;c["message"+d];)++d;c["message"+d]=String(b)}return c};
goog.debug.getStacktraceSimple=function(a){for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(goog.debug.getFunctionName(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(d>=goog.debug.MAX_STACK_DEPTH){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")};goog.debug.MAX_STACK_DEPTH=50;
goog.debug.getStacktrace=function(a){return goog.debug.getStacktraceHelper_(a||arguments.callee.caller,[])};
goog.debug.getStacktraceHelper_=function(a,b){var c=[];if(goog.array.contains(b,a))c.push("[...circular reference...]");else if(a&&b.length<goog.debug.MAX_STACK_DEPTH){c.push(goog.debug.getFunctionName(a)+"(");for(var d=a.arguments,e=0;e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=goog.debug.getFunctionName(f))?f:"[fn]";break;default:f=
typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(goog.debug.getStacktraceHelper_(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")};goog.debug.setFunctionResolver=function(a){goog.debug.fnNameResolver_=a};
goog.debug.getFunctionName=function(a){if(goog.debug.fnNameCache_[a])return goog.debug.fnNameCache_[a];if(goog.debug.fnNameResolver_){var b=goog.debug.fnNameResolver_(a);if(b)return goog.debug.fnNameCache_[a]=b}a=String(a);goog.debug.fnNameCache_[a]||(b=/function ([^\(]+)/.exec(a),goog.debug.fnNameCache_[a]=b?b[1]:"[Anonymous]");return goog.debug.fnNameCache_[a]};
goog.debug.makeWhitespaceVisible=function(a){return a.replace(/ /g,"[_]").replace(/\f/g,"[f]").replace(/\n/g,"[n]\n").replace(/\r/g,"[r]").replace(/\t/g,"[t]")};goog.debug.fnNameCache_={};goog.debug.LogRecord=function(a,b,c,d,e){this.reset(a,b,c,d,e)};goog.debug.LogRecord.prototype.sequenceNumber_=0;goog.debug.LogRecord.prototype.exception_=null;goog.debug.LogRecord.prototype.exceptionText_=null;goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS=!0;goog.debug.LogRecord.nextSequenceNumber_=0;
goog.debug.LogRecord.prototype.reset=function(a,b,c,d,e){goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS&&(this.sequenceNumber_="number"==typeof e?e:goog.debug.LogRecord.nextSequenceNumber_++);this.time_=d||goog.now();this.level_=a;this.msg_=b;this.loggerName_=c;delete this.exception_;delete this.exceptionText_};goog.debug.LogRecord.prototype.getLoggerName=function(){return this.loggerName_};goog.debug.LogRecord.prototype.getException=function(){return this.exception_};
goog.debug.LogRecord.prototype.setException=function(a){this.exception_=a};goog.debug.LogRecord.prototype.getExceptionText=function(){return this.exceptionText_};goog.debug.LogRecord.prototype.setExceptionText=function(a){this.exceptionText_=a};goog.debug.LogRecord.prototype.setLoggerName=function(a){this.loggerName_=a};goog.debug.LogRecord.prototype.getLevel=function(){return this.level_};goog.debug.LogRecord.prototype.setLevel=function(a){this.level_=a};
goog.debug.LogRecord.prototype.getMessage=function(){return this.msg_};goog.debug.LogRecord.prototype.setMessage=function(a){this.msg_=a};goog.debug.LogRecord.prototype.getMillis=function(){return this.time_};goog.debug.LogRecord.prototype.setMillis=function(a){this.time_=a};goog.debug.LogRecord.prototype.getSequenceNumber=function(){return this.sequenceNumber_};goog.debug.LogBuffer=function(){goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(),"Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");this.clear()};goog.debug.LogBuffer.getInstance=function(){goog.debug.LogBuffer.instance_||(goog.debug.LogBuffer.instance_=new goog.debug.LogBuffer);return goog.debug.LogBuffer.instance_};goog.debug.LogBuffer.CAPACITY=0;
goog.debug.LogBuffer.prototype.addRecord=function(a,b,c){var d=(this.curIndex_+1)%goog.debug.LogBuffer.CAPACITY;this.curIndex_=d;if(this.isFull_)return d=this.buffer_[d],d.reset(a,b,c),d;this.isFull_=d==goog.debug.LogBuffer.CAPACITY-1;return this.buffer_[d]=new goog.debug.LogRecord(a,b,c)};goog.debug.LogBuffer.isBufferingEnabled=function(){return 0<goog.debug.LogBuffer.CAPACITY};
goog.debug.LogBuffer.prototype.clear=function(){this.buffer_=Array(goog.debug.LogBuffer.CAPACITY);this.curIndex_=-1;this.isFull_=!1};goog.debug.LogBuffer.prototype.forEachRecord=function(a){var b=this.buffer_;if(b[0]){var c=this.curIndex_,d=this.isFull_?c:-1;do d=(d+1)%goog.debug.LogBuffer.CAPACITY,a(b[d]);while(d!=c)}};goog.debug.Logger=function(a){this.name_=a};goog.debug.Logger.prototype.parent_=null;goog.debug.Logger.prototype.level_=null;goog.debug.Logger.prototype.children_=null;goog.debug.Logger.prototype.handlers_=null;goog.debug.Logger.ENABLE_HIERARCHY=!0;goog.debug.Logger.ENABLE_HIERARCHY||(goog.debug.Logger.rootHandlers_=[]);goog.debug.Logger.Level=function(a,b){this.name=a;this.value=b};goog.debug.Logger.Level.prototype.toString=function(){return this.name};
goog.debug.Logger.Level.OFF=new goog.debug.Logger.Level("OFF",Infinity);goog.debug.Logger.Level.SHOUT=new goog.debug.Logger.Level("SHOUT",1200);goog.debug.Logger.Level.SEVERE=new goog.debug.Logger.Level("SEVERE",1E3);goog.debug.Logger.Level.WARNING=new goog.debug.Logger.Level("WARNING",900);goog.debug.Logger.Level.INFO=new goog.debug.Logger.Level("INFO",800);goog.debug.Logger.Level.CONFIG=new goog.debug.Logger.Level("CONFIG",700);goog.debug.Logger.Level.FINE=new goog.debug.Logger.Level("FINE",500);
goog.debug.Logger.Level.FINER=new goog.debug.Logger.Level("FINER",400);goog.debug.Logger.Level.FINEST=new goog.debug.Logger.Level("FINEST",300);goog.debug.Logger.Level.ALL=new goog.debug.Logger.Level("ALL",0);
goog.debug.Logger.Level.PREDEFINED_LEVELS=[goog.debug.Logger.Level.OFF,goog.debug.Logger.Level.SHOUT,goog.debug.Logger.Level.SEVERE,goog.debug.Logger.Level.WARNING,goog.debug.Logger.Level.INFO,goog.debug.Logger.Level.CONFIG,goog.debug.Logger.Level.FINE,goog.debug.Logger.Level.FINER,goog.debug.Logger.Level.FINEST,goog.debug.Logger.Level.ALL];goog.debug.Logger.Level.predefinedLevelsCache_=null;
goog.debug.Logger.Level.createPredefinedLevelsCache_=function(){goog.debug.Logger.Level.predefinedLevelsCache_={};for(var a=0,b;b=goog.debug.Logger.Level.PREDEFINED_LEVELS[a];a++)goog.debug.Logger.Level.predefinedLevelsCache_[b.value]=b,goog.debug.Logger.Level.predefinedLevelsCache_[b.name]=b};
goog.debug.Logger.Level.getPredefinedLevel=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();return goog.debug.Logger.Level.predefinedLevelsCache_[a]||null};
goog.debug.Logger.Level.getPredefinedLevelByValue=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();if(a in goog.debug.Logger.Level.predefinedLevelsCache_)return goog.debug.Logger.Level.predefinedLevelsCache_[a];for(var b=0;b<goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++b){var c=goog.debug.Logger.Level.PREDEFINED_LEVELS[b];if(c.value<=a)return c}return null};goog.debug.Logger.getLogger=function(a){return goog.debug.LogManager.getLogger(a)};
goog.debug.Logger.logToProfilers=function(a){goog.global.console&&(goog.global.console.timeStamp?goog.global.console.timeStamp(a):goog.global.console.markTimeline&&goog.global.console.markTimeline(a));goog.global.msWriteProfilerMark&&goog.global.msWriteProfilerMark(a)};goog.debug.Logger.prototype.getName=function(){return this.name_};
goog.debug.Logger.prototype.addHandler=function(a){goog.debug.Logger.ENABLE_HIERARCHY?(this.handlers_||(this.handlers_=[]),this.handlers_.push(a)):(goog.asserts.assert(!this.name_,"Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),goog.debug.Logger.rootHandlers_.push(a))};goog.debug.Logger.prototype.removeHandler=function(a){var b=goog.debug.Logger.ENABLE_HIERARCHY?this.handlers_:goog.debug.Logger.rootHandlers_;return!!b&&goog.array.remove(b,a)};
goog.debug.Logger.prototype.getParent=function(){return this.parent_};goog.debug.Logger.prototype.getChildren=function(){this.children_||(this.children_={});return this.children_};goog.debug.Logger.prototype.setLevel=function(a){goog.debug.Logger.ENABLE_HIERARCHY?this.level_=a:(goog.asserts.assert(!this.name_,"Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),goog.debug.Logger.rootLevel_=a)};goog.debug.Logger.prototype.getLevel=function(){return this.level_};
goog.debug.Logger.prototype.getEffectiveLevel=function(){if(!goog.debug.Logger.ENABLE_HIERARCHY)return goog.debug.Logger.rootLevel_;if(this.level_)return this.level_;if(this.parent_)return this.parent_.getEffectiveLevel();goog.asserts.fail("Root logger has no level set.");return null};goog.debug.Logger.prototype.isLoggable=function(a){return a.value>=this.getEffectiveLevel().value};goog.debug.Logger.prototype.log=function(a,b,c){this.isLoggable(a)&&this.doLogRecord_(this.getLogRecord(a,b,c))};
goog.debug.Logger.prototype.getLogRecord=function(a,b,c){var d=goog.debug.LogBuffer.isBufferingEnabled()?goog.debug.LogBuffer.getInstance().addRecord(a,b,this.name_):new goog.debug.LogRecord(a,String(b),this.name_);c&&(d.setException(c),d.setExceptionText(goog.debug.exposeException(c,arguments.callee.caller)));return d};goog.debug.Logger.prototype.shout=function(a,b){this.log(goog.debug.Logger.Level.SHOUT,a,b)};
goog.debug.Logger.prototype.severe=function(a,b){this.log(goog.debug.Logger.Level.SEVERE,a,b)};goog.debug.Logger.prototype.warning=function(a,b){this.log(goog.debug.Logger.Level.WARNING,a,b)};goog.debug.Logger.prototype.info=function(a,b){this.log(goog.debug.Logger.Level.INFO,a,b)};goog.debug.Logger.prototype.config=function(a,b){this.log(goog.debug.Logger.Level.CONFIG,a,b)};goog.debug.Logger.prototype.fine=function(a,b){this.log(goog.debug.Logger.Level.FINE,a,b)};
goog.debug.Logger.prototype.finer=function(a,b){this.log(goog.debug.Logger.Level.FINER,a,b)};goog.debug.Logger.prototype.finest=function(a,b){this.log(goog.debug.Logger.Level.FINEST,a,b)};goog.debug.Logger.prototype.logRecord=function(a){this.isLoggable(a.getLevel())&&this.doLogRecord_(a)};
goog.debug.Logger.prototype.doLogRecord_=function(a){goog.debug.Logger.logToProfilers("log:"+a.getMessage());if(goog.debug.Logger.ENABLE_HIERARCHY)for(var b=this;b;)b.callPublish_(a),b=b.getParent();else for(var b=0,c;c=goog.debug.Logger.rootHandlers_[b++];)c(a)};goog.debug.Logger.prototype.callPublish_=function(a){if(this.handlers_)for(var b=0,c;c=this.handlers_[b];b++)c(a)};goog.debug.Logger.prototype.setParent_=function(a){this.parent_=a};
goog.debug.Logger.prototype.addChild_=function(a,b){this.getChildren()[a]=b};goog.debug.LogManager={};goog.debug.LogManager.loggers_={};goog.debug.LogManager.rootLogger_=null;goog.debug.LogManager.initialize=function(){goog.debug.LogManager.rootLogger_||(goog.debug.LogManager.rootLogger_=new goog.debug.Logger(""),goog.debug.LogManager.loggers_[""]=goog.debug.LogManager.rootLogger_,goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG))};goog.debug.LogManager.getLoggers=function(){return goog.debug.LogManager.loggers_};
goog.debug.LogManager.getRoot=function(){goog.debug.LogManager.initialize();return goog.debug.LogManager.rootLogger_};goog.debug.LogManager.getLogger=function(a){goog.debug.LogManager.initialize();return goog.debug.LogManager.loggers_[a]||goog.debug.LogManager.createLogger_(a)};goog.debug.LogManager.createFunctionForCatchErrors=function(a){return function(b){(a||goog.debug.LogManager.getRoot()).severe("Error: "+b.message+" ("+b.fileName+" @ Line: "+b.line+")")}};
goog.debug.LogManager.createLogger_=function(a){var b=new goog.debug.Logger(a);if(goog.debug.Logger.ENABLE_HIERARCHY){var c=a.lastIndexOf("."),d=a.substr(0,c),c=a.substr(c+1),d=goog.debug.LogManager.getLogger(d);d.addChild_(c,b);b.setParent_(d)}return goog.debug.LogManager.loggers_[a]=b};goog.dom={};goog.dom.BrowserFeature={CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO&&!goog.userAgent.IE||goog.userAgent.IE&&goog.userAgent.isDocumentMode(9)||goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9.1"),CAN_USE_INNER_TEXT:goog.userAgent.IE&&!goog.userAgent.isVersion("9"),CAN_USE_PARENT_ELEMENT_PROPERTY:goog.userAgent.IE||goog.userAgent.OPERA||goog.userAgent.WEBKIT,INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};goog.dom.TagName={A:"A",ABBR:"ABBR",ACRONYM:"ACRONYM",ADDRESS:"ADDRESS",APPLET:"APPLET",AREA:"AREA",ARTICLE:"ARTICLE",ASIDE:"ASIDE",AUDIO:"AUDIO",B:"B",BASE:"BASE",BASEFONT:"BASEFONT",BDI:"BDI",BDO:"BDO",BIG:"BIG",BLOCKQUOTE:"BLOCKQUOTE",BODY:"BODY",BR:"BR",BUTTON:"BUTTON",CANVAS:"CANVAS",CAPTION:"CAPTION",CENTER:"CENTER",CITE:"CITE",CODE:"CODE",COL:"COL",COLGROUP:"COLGROUP",COMMAND:"COMMAND",DATA:"DATA",DATALIST:"DATALIST",DD:"DD",DEL:"DEL",DETAILS:"DETAILS",DFN:"DFN",DIALOG:"DIALOG",DIR:"DIR",DIV:"DIV",
DL:"DL",DT:"DT",EM:"EM",EMBED:"EMBED",FIELDSET:"FIELDSET",FIGCAPTION:"FIGCAPTION",FIGURE:"FIGURE",FONT:"FONT",FOOTER:"FOOTER",FORM:"FORM",FRAME:"FRAME",FRAMESET:"FRAMESET",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",HEAD:"HEAD",HEADER:"HEADER",HGROUP:"HGROUP",HR:"HR",HTML:"HTML",I:"I",IFRAME:"IFRAME",IMG:"IMG",INPUT:"INPUT",INS:"INS",ISINDEX:"ISINDEX",KBD:"KBD",KEYGEN:"KEYGEN",LABEL:"LABEL",LEGEND:"LEGEND",LI:"LI",LINK:"LINK",MAP:"MAP",MARK:"MARK",MATH:"MATH",MENU:"MENU",META:"META",METER:"METER",
NAV:"NAV",NOFRAMES:"NOFRAMES",NOSCRIPT:"NOSCRIPT",OBJECT:"OBJECT",OL:"OL",OPTGROUP:"OPTGROUP",OPTION:"OPTION",OUTPUT:"OUTPUT",P:"P",PARAM:"PARAM",PRE:"PRE",PROGRESS:"PROGRESS",Q:"Q",RP:"RP",RT:"RT",RUBY:"RUBY",S:"S",SAMP:"SAMP",SCRIPT:"SCRIPT",SECTION:"SECTION",SELECT:"SELECT",SMALL:"SMALL",SOURCE:"SOURCE",SPAN:"SPAN",STRIKE:"STRIKE",STRONG:"STRONG",STYLE:"STYLE",SUB:"SUB",SUMMARY:"SUMMARY",SUP:"SUP",SVG:"SVG",TABLE:"TABLE",TBODY:"TBODY",TD:"TD",TEXTAREA:"TEXTAREA",TFOOT:"TFOOT",TH:"TH",THEAD:"THEAD",
TIME:"TIME",TITLE:"TITLE",TR:"TR",TRACK:"TRACK",TT:"TT",U:"U",UL:"UL",VAR:"VAR",VIDEO:"VIDEO",WBR:"WBR"};goog.dom.classes={};goog.dom.classes.set=function(a,b){a.className=b};goog.dom.classes.get=function(a){a=a.className;return goog.isString(a)&&a.match(/\S+/g)||[]};goog.dom.classes.add=function(a,b){var c=goog.dom.classes.get(a),d=goog.array.slice(arguments,1),e=c.length+d.length;goog.dom.classes.add_(c,d);goog.dom.classes.set(a,c.join(" "));return c.length==e};
goog.dom.classes.remove=function(a,b){var c=goog.dom.classes.get(a),d=goog.array.slice(arguments,1),e=goog.dom.classes.getDifference_(c,d);goog.dom.classes.set(a,e.join(" "));return e.length==c.length-d.length};goog.dom.classes.add_=function(a,b){for(var c=0;c<b.length;c++)goog.array.contains(a,b[c])||a.push(b[c])};goog.dom.classes.getDifference_=function(a,b){return goog.array.filter(a,function(a){return!goog.array.contains(b,a)})};
goog.dom.classes.swap=function(a,b,c){for(var d=goog.dom.classes.get(a),e=!1,f=0;f<d.length;f++)d[f]==b&&(goog.array.splice(d,f--,1),e=!0);e&&(d.push(c),goog.dom.classes.set(a,d.join(" ")));return e};goog.dom.classes.addRemove=function(a,b,c){var d=goog.dom.classes.get(a);goog.isString(b)?goog.array.remove(d,b):goog.isArray(b)&&(d=goog.dom.classes.getDifference_(d,b));goog.isString(c)&&!goog.array.contains(d,c)?d.push(c):goog.isArray(c)&&goog.dom.classes.add_(d,c);goog.dom.classes.set(a,d.join(" "))};
goog.dom.classes.has=function(a,b){return goog.array.contains(goog.dom.classes.get(a),b)};goog.dom.classes.enable=function(a,b,c){c?goog.dom.classes.add(a,b):goog.dom.classes.remove(a,b)};goog.dom.classes.toggle=function(a,b){var c=!goog.dom.classes.has(a,b);goog.dom.classes.enable(a,b,c);return c};goog.math.Coordinate=function(a,b){this.x=goog.isDef(a)?a:0;this.y=goog.isDef(b)?b:0};goog.math.Coordinate.prototype.clone=function(){return new goog.math.Coordinate(this.x,this.y)};goog.DEBUG&&(goog.math.Coordinate.prototype.toString=function(){return"("+this.x+", "+this.y+")"});goog.math.Coordinate.equals=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};goog.math.Coordinate.distance=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
goog.math.Coordinate.magnitude=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)};goog.math.Coordinate.azimuth=function(a){return goog.math.angle(0,0,a.x,a.y)};goog.math.Coordinate.squaredDistance=function(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d};goog.math.Coordinate.difference=function(a,b){return new goog.math.Coordinate(a.x-b.x,a.y-b.y)};goog.math.Coordinate.sum=function(a,b){return new goog.math.Coordinate(a.x+b.x,a.y+b.y)};
goog.math.Coordinate.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};goog.math.Coordinate.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};goog.math.Coordinate.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};goog.math.Coordinate.prototype.translate=function(a,b){a instanceof goog.math.Coordinate?(this.x+=a.x,this.y+=a.y):(this.x+=a,goog.isNumber(b)&&(this.y+=b));return this};
goog.math.Coordinate.prototype.scale=function(a,b){var c=goog.isNumber(b)?b:a;this.x*=a;this.y*=c;return this};goog.math.Size=function(a,b){this.width=a;this.height=b};goog.math.Size.equals=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};goog.math.Size.prototype.clone=function(){return new goog.math.Size(this.width,this.height)};goog.DEBUG&&(goog.math.Size.prototype.toString=function(){return"("+this.width+" x "+this.height+")"});goog.math.Size.prototype.getLongest=function(){return Math.max(this.width,this.height)};
goog.math.Size.prototype.getShortest=function(){return Math.min(this.width,this.height)};goog.math.Size.prototype.area=function(){return this.width*this.height};goog.math.Size.prototype.perimeter=function(){return 2*(this.width+this.height)};goog.math.Size.prototype.aspectRatio=function(){return this.width/this.height};goog.math.Size.prototype.isEmpty=function(){return!this.area()};goog.math.Size.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
goog.math.Size.prototype.fitsInside=function(a){return this.width<=a.width&&this.height<=a.height};goog.math.Size.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};goog.math.Size.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};goog.math.Size.prototype.scale=function(a,b){var c=goog.isNumber(b)?b:a;this.width*=a;this.height*=c;return this};
goog.math.Size.prototype.scaleToFit=function(a){a=this.aspectRatio()>a.aspectRatio()?a.width/this.width:a.height/this.height;return this.scale(a)};goog.dom.ASSUME_QUIRKS_MODE=!1;goog.dom.ASSUME_STANDARDS_MODE=!1;goog.dom.COMPAT_MODE_KNOWN_=goog.dom.ASSUME_QUIRKS_MODE||goog.dom.ASSUME_STANDARDS_MODE;goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.dom.getDomHelper=function(a){return a?new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)):goog.dom.defaultDomHelper_||(goog.dom.defaultDomHelper_=new goog.dom.DomHelper)};
goog.dom.getDocument=function(){return document};goog.dom.getElement=function(a){return goog.isString(a)?document.getElementById(a):a};goog.dom.$=goog.dom.getElement;goog.dom.getElementsByTagNameAndClass=function(a,b,c){return goog.dom.getElementsByTagNameAndClass_(document,a,b,c)};
goog.dom.getElementsByClass=function(a,b){var c=b||document;return goog.dom.canUseQuerySelector_(c)?c.querySelectorAll("."+a):c.getElementsByClassName?c.getElementsByClassName(a):goog.dom.getElementsByTagNameAndClass_(document,"*",a,b)};goog.dom.getElementByClass=function(a,b){var c=b||document,d=null;return(d=goog.dom.canUseQuerySelector_(c)?c.querySelector("."+a):goog.dom.getElementsByClass(a,b)[0])||null};goog.dom.canUseQuerySelector_=function(a){return!(!a.querySelectorAll||!a.querySelector)};
goog.dom.getElementsByTagNameAndClass_=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(goog.dom.canUseQuerySelector_(a)&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&goog.array.contains(b.split(/\s+/),c)&&(d[e++]=g);d.length=
e;return d}return a};goog.dom.$$=goog.dom.getElementsByTagNameAndClass;goog.dom.setProperties=function(a,b){goog.object.forEach(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in goog.dom.DIRECT_ATTRIBUTE_MAP_?a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[d],b):goog.string.startsWith(d,"aria-")||goog.string.startsWith(d,"data-")?a.setAttribute(d,b):a[d]=b})};
goog.dom.DIRECT_ATTRIBUTE_MAP_={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};goog.dom.getViewportSize=function(a){return goog.dom.getViewportSize_(a||window)};goog.dom.getViewportSize_=function(a){a=a.document;a=goog.dom.isCss1CompatMode_(a)?a.documentElement:a.body;return new goog.math.Size(a.clientWidth,a.clientHeight)};
goog.dom.getDocumentHeight=function(){return goog.dom.getDocumentHeight_(window)};goog.dom.getDocumentHeight_=function(a){var b=a.document,c=0;if(b){a=goog.dom.getViewportSize_(a).height;var c=b.body,d=b.documentElement;if(goog.dom.isCss1CompatMode_(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c};
goog.dom.getPageScroll=function(a){return goog.dom.getDomHelper((a||goog.global||window).document).getDocumentScroll()};goog.dom.getDocumentScroll=function(){return goog.dom.getDocumentScroll_(document)};goog.dom.getDocumentScroll_=function(a){var b=goog.dom.getDocumentScrollElement_(a);a=goog.dom.getWindow_(a);return new goog.math.Coordinate(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};goog.dom.getDocumentScrollElement=function(){return goog.dom.getDocumentScrollElement_(document)};
goog.dom.getDocumentScrollElement_=function(a){return!goog.userAgent.WEBKIT&&goog.dom.isCss1CompatMode_(a)?a.documentElement:a.body};goog.dom.getWindow=function(a){return a?goog.dom.getWindow_(a):window};goog.dom.getWindow_=function(a){return a.parentWindow||a.defaultView};goog.dom.createDom=function(a,b,c){return goog.dom.createDom_(document,arguments)};
goog.dom.createDom_=function(a,b){var c=b[0],d=b[1];if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',goog.string.htmlEscape(d.name),'"');if(d.type){c.push(' type="',goog.string.htmlEscape(d.type),'"');var e={};goog.object.extend(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(goog.isString(d)?c.className=d:goog.isArray(d)?goog.dom.classes.add.apply(null,[c].concat(d)):goog.dom.setProperties(c,d));2<b.length&&
goog.dom.append_(a,c,b,2);return c};goog.dom.append_=function(a,b,c,d){function e(c){c&&b.appendChild(goog.isString(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];goog.isArrayLike(f)&&!goog.dom.isNodeLike(f)?goog.array.forEach(goog.dom.isNodeList(f)?goog.array.toArray(f):f,e):e(f)}};goog.dom.$dom=goog.dom.createDom;goog.dom.createElement=function(a){return document.createElement(a)};goog.dom.createTextNode=function(a){return document.createTextNode(String(a))};
goog.dom.createTable=function(a,b,c){return goog.dom.createTable_(document,a,b,!!c)};goog.dom.createTable_=function(a,b,c,d){for(var e=["<tr>"],f=0;f<c;f++)e.push(d?"<td>&nbsp;</td>":"<td></td>");e.push("</tr>");e=e.join("");c=["<table>"];for(f=0;f<b;f++)c.push(e);c.push("</table>");a=a.createElement(goog.dom.TagName.DIV);a.innerHTML=c.join("");return a.removeChild(a.firstChild)};goog.dom.htmlToDocumentFragment=function(a){return goog.dom.htmlToDocumentFragment_(document,a)};
goog.dom.htmlToDocumentFragment_=function(a,b){var c=a.createElement("div");goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT?(c.innerHTML="<br>"+b,c.removeChild(c.firstChild)):c.innerHTML=b;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(var d=a.createDocumentFragment();c.firstChild;)d.appendChild(c.firstChild);return d};goog.dom.getCompatMode=function(){return goog.dom.isCss1CompatMode()?"CSS1Compat":"BackCompat"};goog.dom.isCss1CompatMode=function(){return goog.dom.isCss1CompatMode_(document)};
goog.dom.isCss1CompatMode_=function(a){return goog.dom.COMPAT_MODE_KNOWN_?goog.dom.ASSUME_STANDARDS_MODE:"CSS1Compat"==a.compatMode};goog.dom.canHaveChildren=function(a){if(a.nodeType!=goog.dom.NodeType.ELEMENT)return!1;switch(a.tagName){case goog.dom.TagName.APPLET:case goog.dom.TagName.AREA:case goog.dom.TagName.BASE:case goog.dom.TagName.BR:case goog.dom.TagName.COL:case goog.dom.TagName.COMMAND:case goog.dom.TagName.EMBED:case goog.dom.TagName.FRAME:case goog.dom.TagName.HR:case goog.dom.TagName.IMG:case goog.dom.TagName.INPUT:case goog.dom.TagName.IFRAME:case goog.dom.TagName.ISINDEX:case goog.dom.TagName.KEYGEN:case goog.dom.TagName.LINK:case goog.dom.TagName.NOFRAMES:case goog.dom.TagName.NOSCRIPT:case goog.dom.TagName.META:case goog.dom.TagName.OBJECT:case goog.dom.TagName.PARAM:case goog.dom.TagName.SCRIPT:case goog.dom.TagName.SOURCE:case goog.dom.TagName.STYLE:case goog.dom.TagName.TRACK:case goog.dom.TagName.WBR:return!1}return!0};
goog.dom.appendChild=function(a,b){a.appendChild(b)};goog.dom.append=function(a,b){goog.dom.append_(goog.dom.getOwnerDocument(a),a,arguments,1)};goog.dom.removeChildren=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};goog.dom.insertSiblingBefore=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};goog.dom.insertSiblingAfter=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};goog.dom.insertChildAt=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
goog.dom.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};goog.dom.replaceNode=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)};goog.dom.flattenElement=function(a){var b,c=a.parentNode;if(c&&c.nodeType!=goog.dom.NodeType.DOCUMENT_FRAGMENT){if(a.removeNode)return a.removeNode(!1);for(;b=a.firstChild;)c.insertBefore(b,a);return goog.dom.removeNode(a)}};
goog.dom.getChildren=function(a){return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE&&void 0!=a.children?a.children:goog.array.filter(a.childNodes,function(a){return a.nodeType==goog.dom.NodeType.ELEMENT})};goog.dom.getFirstElementChild=function(a){return void 0!=a.firstElementChild?a.firstElementChild:goog.dom.getNextElementNode_(a.firstChild,!0)};goog.dom.getLastElementChild=function(a){return void 0!=a.lastElementChild?a.lastElementChild:goog.dom.getNextElementNode_(a.lastChild,!1)};
goog.dom.getNextElementSibling=function(a){return void 0!=a.nextElementSibling?a.nextElementSibling:goog.dom.getNextElementNode_(a.nextSibling,!0)};goog.dom.getPreviousElementSibling=function(a){return void 0!=a.previousElementSibling?a.previousElementSibling:goog.dom.getNextElementNode_(a.previousSibling,!1)};goog.dom.getNextElementNode_=function(a,b){for(;a&&a.nodeType!=goog.dom.NodeType.ELEMENT;)a=b?a.nextSibling:a.previousSibling;return a};
goog.dom.getNextNode=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};goog.dom.getPreviousNode=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};goog.dom.isNodeLike=function(a){return goog.isObject(a)&&0<a.nodeType};goog.dom.isElement=function(a){return goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT};
goog.dom.isWindow=function(a){return goog.isObject(a)&&a.window==a};goog.dom.getParentElement=function(a){if(goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY)return a.parentElement;a=a.parentNode;return goog.dom.isElement(a)?a:null};goog.dom.contains=function(a,b){if(a.contains&&b.nodeType==goog.dom.NodeType.ELEMENT)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
goog.dom.compareNodeOrder=function(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(goog.userAgent.IE&&!goog.userAgent.isDocumentMode(9)){if(a.nodeType==goog.dom.NodeType.DOCUMENT)return-1;if(b.nodeType==goog.dom.NodeType.DOCUMENT)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=a.nodeType==goog.dom.NodeType.ELEMENT,d=b.nodeType==goog.dom.NodeType.ELEMENT;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=
b.parentNode;return e==f?goog.dom.compareSiblingOrder_(a,b):!c&&goog.dom.contains(e,b)?-1*goog.dom.compareParentsDescendantNodeIe_(a,b):!d&&goog.dom.contains(f,a)?goog.dom.compareParentsDescendantNodeIe_(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=goog.dom.getOwnerDocument(a);c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(goog.global.Range.START_TO_END,d)};
goog.dom.compareParentsDescendantNodeIe_=function(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return goog.dom.compareSiblingOrder_(d,a)};goog.dom.compareSiblingOrder_=function(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};
goog.dom.findCommonAncestor=function(a){var b,c=arguments.length;if(!c)return null;if(1==c)return arguments[0];var d=[],e=Infinity;for(b=0;b<c;b++){for(var f=[],g=arguments[b];g;)f.unshift(g),g=g.parentNode;d.push(f);e=Math.min(e,f.length)}f=null;for(b=0;b<e;b++){for(var g=d[0][b],h=1;h<c;h++)if(g!=d[h][b])return f;f=g}return f};goog.dom.getOwnerDocument=function(a){return a.nodeType==goog.dom.NodeType.DOCUMENT?a:a.ownerDocument||a.document};
goog.dom.getFrameContentDocument=function(a){return a.contentDocument||a.contentWindow.document};goog.dom.getFrameContentWindow=function(a){return a.contentWindow||goog.dom.getWindow_(goog.dom.getFrameContentDocument(a))};
goog.dom.setTextContent=function(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&a.firstChild.nodeType==goog.dom.NodeType.TEXT){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{goog.dom.removeChildren(a);var c=goog.dom.getOwnerDocument(a);a.appendChild(c.createTextNode(String(b)))}};goog.dom.getOuterHtml=function(a){if("outerHTML"in a)return a.outerHTML;var b=goog.dom.getOwnerDocument(a).createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML};
goog.dom.findNode=function(a,b){var c=[];return goog.dom.findNodes_(a,b,c,!0)?c[0]:void 0};goog.dom.findNodes=function(a,b){var c=[];goog.dom.findNodes_(a,b,c,!1);return c};goog.dom.findNodes_=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||goog.dom.findNodes_(a,b,c,d))return!0;a=a.nextSibling}return!1};goog.dom.TAGS_TO_IGNORE_={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};goog.dom.PREDEFINED_TAG_VALUES_={IMG:" ",BR:"\n"};
goog.dom.isFocusableTabIndex=function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?(a=a.tabIndex,goog.isNumber(a)&&0<=a&&32768>a):!1};goog.dom.setFocusableTabIndex=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};
goog.dom.getTextContent=function(a){if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT&&"innerText"in a)a=goog.string.canonicalizeNewlines(a.innerText);else{var b=[];goog.dom.getTextContent_(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");goog.dom.BrowserFeature.CAN_USE_INNER_TEXT||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a};goog.dom.getRawTextContent=function(a){var b=[];goog.dom.getTextContent_(a,b,!1);return b.join("")};
goog.dom.getTextContent_=function(a,b,c){if(!(a.nodeName in goog.dom.TAGS_TO_IGNORE_))if(a.nodeType==goog.dom.NodeType.TEXT)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_)b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName]);else for(a=a.firstChild;a;)goog.dom.getTextContent_(a,b,c),a=a.nextSibling};goog.dom.getNodeTextLength=function(a){return goog.dom.getTextContent(a).length};
goog.dom.getNodeTextOffset=function(a,b){for(var c=b||goog.dom.getOwnerDocument(a).body,d=[];a&&a!=c;){for(var e=a;e=e.previousSibling;)d.unshift(goog.dom.getTextContent(e));a=a.parentNode}return goog.string.trimLeft(d.join("")).replace(/ +/g," ").length};
goog.dom.getNodeAtOffset=function(a,b,c){a=[a];for(var d=0,e=null;0<a.length&&d<b;)if(e=a.pop(),!(e.nodeName in goog.dom.TAGS_TO_IGNORE_))if(e.nodeType==goog.dom.NodeType.TEXT)var f=e.nodeValue.replace(/(\r\n|\r|\n)/g,"").replace(/ +/g," "),d=d+f.length;else if(e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_)d+=goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName].length;else for(f=e.childNodes.length-1;0<=f;f--)a.push(e.childNodes[f]);goog.isObject(c)&&(c.remainder=e?e.nodeValue.length+b-d-1:0,c.node=e);return e};
goog.dom.isNodeList=function(a){if(a&&"number"==typeof a.length){if(goog.isObject(a))return"function"==typeof a.item||"string"==typeof a.item;if(goog.isFunction(a))return"function"==typeof a.item}return!1};goog.dom.getAncestorByTagNameAndClass=function(a,b,c){if(!b&&!c)return null;var d=b?b.toUpperCase():null;return goog.dom.getAncestor(a,function(a){return(!d||a.nodeName==d)&&(!c||goog.dom.classes.has(a,c))},!0)};
goog.dom.getAncestorByClass=function(a,b){return goog.dom.getAncestorByTagNameAndClass(a,null,b)};goog.dom.getAncestor=function(a,b,c,d){c||(a=a.parentNode);c=null==d;for(var e=0;a&&(c||e<=d);){if(b(a))return a;a=a.parentNode;e++}return null};goog.dom.getActiveElement=function(a){try{return a&&a.activeElement}catch(b){}return null};goog.dom.DomHelper=function(a){this.document_=a||goog.global.document||document};goog.dom.DomHelper.prototype.getDomHelper=goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument=function(a){this.document_=a};goog.dom.DomHelper.prototype.getDocument=function(){return this.document_};goog.dom.DomHelper.prototype.getElement=function(a){return goog.isString(a)?this.document_.getElementById(a):a};goog.dom.DomHelper.prototype.$=goog.dom.DomHelper.prototype.getElement;goog.dom.DomHelper.prototype.getElementsByTagNameAndClass=function(a,b,c){return goog.dom.getElementsByTagNameAndClass_(this.document_,a,b,c)};
goog.dom.DomHelper.prototype.getElementsByClass=function(a,b){return goog.dom.getElementsByClass(a,b||this.document_)};goog.dom.DomHelper.prototype.getElementByClass=function(a,b){return goog.dom.getElementByClass(a,b||this.document_)};goog.dom.DomHelper.prototype.$$=goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;goog.dom.DomHelper.prototype.setProperties=goog.dom.setProperties;goog.dom.DomHelper.prototype.getViewportSize=function(a){return goog.dom.getViewportSize(a||this.getWindow())};
goog.dom.DomHelper.prototype.getDocumentHeight=function(){return goog.dom.getDocumentHeight_(this.getWindow())};goog.dom.DomHelper.prototype.createDom=function(a,b,c){return goog.dom.createDom_(this.document_,arguments)};goog.dom.DomHelper.prototype.$dom=goog.dom.DomHelper.prototype.createDom;goog.dom.DomHelper.prototype.createElement=function(a){return this.document_.createElement(a)};goog.dom.DomHelper.prototype.createTextNode=function(a){return this.document_.createTextNode(String(a))};
goog.dom.DomHelper.prototype.createTable=function(a,b,c){return goog.dom.createTable_(this.document_,a,b,!!c)};goog.dom.DomHelper.prototype.htmlToDocumentFragment=function(a){return goog.dom.htmlToDocumentFragment_(this.document_,a)};goog.dom.DomHelper.prototype.getCompatMode=function(){return this.isCss1CompatMode()?"CSS1Compat":"BackCompat"};goog.dom.DomHelper.prototype.isCss1CompatMode=function(){return goog.dom.isCss1CompatMode_(this.document_)};goog.dom.DomHelper.prototype.getWindow=function(){return goog.dom.getWindow_(this.document_)};
goog.dom.DomHelper.prototype.getDocumentScrollElement=function(){return goog.dom.getDocumentScrollElement_(this.document_)};goog.dom.DomHelper.prototype.getDocumentScroll=function(){return goog.dom.getDocumentScroll_(this.document_)};goog.dom.DomHelper.prototype.getActiveElement=function(a){return goog.dom.getActiveElement(a||this.document_)};goog.dom.DomHelper.prototype.appendChild=goog.dom.appendChild;goog.dom.DomHelper.prototype.append=goog.dom.append;
goog.dom.DomHelper.prototype.canHaveChildren=goog.dom.canHaveChildren;goog.dom.DomHelper.prototype.removeChildren=goog.dom.removeChildren;goog.dom.DomHelper.prototype.insertSiblingBefore=goog.dom.insertSiblingBefore;goog.dom.DomHelper.prototype.insertSiblingAfter=goog.dom.insertSiblingAfter;goog.dom.DomHelper.prototype.insertChildAt=goog.dom.insertChildAt;goog.dom.DomHelper.prototype.removeNode=goog.dom.removeNode;goog.dom.DomHelper.prototype.replaceNode=goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement=goog.dom.flattenElement;goog.dom.DomHelper.prototype.getChildren=goog.dom.getChildren;goog.dom.DomHelper.prototype.getFirstElementChild=goog.dom.getFirstElementChild;goog.dom.DomHelper.prototype.getLastElementChild=goog.dom.getLastElementChild;goog.dom.DomHelper.prototype.getNextElementSibling=goog.dom.getNextElementSibling;goog.dom.DomHelper.prototype.getPreviousElementSibling=goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode=goog.dom.getNextNode;goog.dom.DomHelper.prototype.getPreviousNode=goog.dom.getPreviousNode;goog.dom.DomHelper.prototype.isNodeLike=goog.dom.isNodeLike;goog.dom.DomHelper.prototype.isElement=goog.dom.isElement;goog.dom.DomHelper.prototype.isWindow=goog.dom.isWindow;goog.dom.DomHelper.prototype.getParentElement=goog.dom.getParentElement;goog.dom.DomHelper.prototype.contains=goog.dom.contains;goog.dom.DomHelper.prototype.compareNodeOrder=goog.dom.compareNodeOrder;
goog.dom.DomHelper.prototype.findCommonAncestor=goog.dom.findCommonAncestor;goog.dom.DomHelper.prototype.getOwnerDocument=goog.dom.getOwnerDocument;goog.dom.DomHelper.prototype.getFrameContentDocument=goog.dom.getFrameContentDocument;goog.dom.DomHelper.prototype.getFrameContentWindow=goog.dom.getFrameContentWindow;goog.dom.DomHelper.prototype.setTextContent=goog.dom.setTextContent;goog.dom.DomHelper.prototype.getOuterHtml=goog.dom.getOuterHtml;goog.dom.DomHelper.prototype.findNode=goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes=goog.dom.findNodes;goog.dom.DomHelper.prototype.isFocusableTabIndex=goog.dom.isFocusableTabIndex;goog.dom.DomHelper.prototype.setFocusableTabIndex=goog.dom.setFocusableTabIndex;goog.dom.DomHelper.prototype.getTextContent=goog.dom.getTextContent;goog.dom.DomHelper.prototype.getNodeTextLength=goog.dom.getNodeTextLength;goog.dom.DomHelper.prototype.getNodeTextOffset=goog.dom.getNodeTextOffset;goog.dom.DomHelper.prototype.getNodeAtOffset=goog.dom.getNodeAtOffset;
goog.dom.DomHelper.prototype.isNodeList=goog.dom.isNodeList;goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass=goog.dom.getAncestorByTagNameAndClass;goog.dom.DomHelper.prototype.getAncestorByClass=goog.dom.getAncestorByClass;goog.dom.DomHelper.prototype.getAncestor=goog.dom.getAncestor;goog.dom.vendor={};goog.dom.vendor.getVendorJsPrefix=function(){return goog.userAgent.WEBKIT?"Webkit":goog.userAgent.GECKO?"Moz":goog.userAgent.IE?"ms":goog.userAgent.OPERA?"O":null};goog.dom.vendor.getVendorPrefix=function(){return goog.userAgent.WEBKIT?"-webkit":goog.userAgent.GECKO?"-moz":goog.userAgent.IE?"-ms":goog.userAgent.OPERA?"-o":null};goog.math.Box=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};goog.math.Box.boundingBox=function(a){for(var b=new goog.math.Box(arguments[0].y,arguments[0].x,arguments[0].y,arguments[0].x),c=1;c<arguments.length;c++){var d=arguments[c];b.top=Math.min(b.top,d.y);b.right=Math.max(b.right,d.x);b.bottom=Math.max(b.bottom,d.y);b.left=Math.min(b.left,d.x)}return b};goog.math.Box.prototype.clone=function(){return new goog.math.Box(this.top,this.right,this.bottom,this.left)};
goog.DEBUG&&(goog.math.Box.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"});goog.math.Box.prototype.contains=function(a){return goog.math.Box.contains(this,a)};goog.math.Box.prototype.expand=function(a,b,c,d){goog.isObject(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
goog.math.Box.prototype.expandToInclude=function(a){this.left=Math.min(this.left,a.left);this.top=Math.min(this.top,a.top);this.right=Math.max(this.right,a.right);this.bottom=Math.max(this.bottom,a.bottom)};goog.math.Box.equals=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
goog.math.Box.contains=function(a,b){return a&&b?b instanceof goog.math.Box?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};goog.math.Box.relativePositionX=function(a,b){return b.x<a.left?b.x-a.left:b.x>a.right?b.x-a.right:0};goog.math.Box.relativePositionY=function(a,b){return b.y<a.top?b.y-a.top:b.y>a.bottom?b.y-a.bottom:0};
goog.math.Box.distance=function(a,b){var c=goog.math.Box.relativePositionX(a,b),d=goog.math.Box.relativePositionY(a,b);return Math.sqrt(c*c+d*d)};goog.math.Box.intersects=function(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom};goog.math.Box.intersectsWithPadding=function(a,b,c){return a.left<=b.right+c&&b.left<=a.right+c&&a.top<=b.bottom+c&&b.top<=a.bottom+c};
goog.math.Box.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};goog.math.Box.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
goog.math.Box.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};goog.math.Box.prototype.translate=function(a,b){a instanceof goog.math.Coordinate?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,goog.isNumber(b)&&(this.top+=b,this.bottom+=b));return this};
goog.math.Box.prototype.scale=function(a,b){var c=goog.isNumber(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};goog.math.Rect=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};goog.math.Rect.prototype.clone=function(){return new goog.math.Rect(this.left,this.top,this.width,this.height)};goog.math.Rect.prototype.toBox=function(){return new goog.math.Box(this.top,this.left+this.width,this.top+this.height,this.left)};goog.math.Rect.createFromBox=function(a){return new goog.math.Rect(a.left,a.top,a.right-a.left,a.bottom-a.top)};
goog.DEBUG&&(goog.math.Rect.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"});goog.math.Rect.equals=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
goog.math.Rect.prototype.intersection=function(a){var b=Math.max(this.left,a.left),c=Math.min(this.left+this.width,a.left+a.width);if(b<=c){var d=Math.max(this.top,a.top);a=Math.min(this.top+this.height,a.top+a.height);if(d<=a)return this.left=b,this.top=d,this.width=c-b,this.height=a-d,!0}return!1};
goog.math.Rect.intersection=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return new goog.math.Rect(c,e,d-c,f-e)}return null};goog.math.Rect.intersects=function(a,b){return a.left<=b.left+b.width&&b.left<=a.left+a.width&&a.top<=b.top+b.height&&b.top<=a.top+a.height};goog.math.Rect.prototype.intersects=function(a){return goog.math.Rect.intersects(this,a)};
goog.math.Rect.difference=function(a,b){var c=goog.math.Rect.intersection(a,b);if(!c||!c.height||!c.width)return[a.clone()];var c=[],d=a.top,e=a.height,f=a.left+a.width,g=a.top+a.height,h=b.left+b.width,k=b.top+b.height;b.top>a.top&&(c.push(new goog.math.Rect(a.left,a.top,a.width,b.top-a.top)),d=b.top,e-=b.top-a.top);k<g&&(c.push(new goog.math.Rect(a.left,k,a.width,g-k)),e=k-d);b.left>a.left&&c.push(new goog.math.Rect(a.left,d,b.left-a.left,e));h<f&&c.push(new goog.math.Rect(h,d,f-h,e));return c};
goog.math.Rect.prototype.difference=function(a){return goog.math.Rect.difference(this,a)};goog.math.Rect.prototype.boundingRect=function(a){var b=Math.max(this.left+this.width,a.left+a.width),c=Math.max(this.top+this.height,a.top+a.height);this.left=Math.min(this.left,a.left);this.top=Math.min(this.top,a.top);this.width=b-this.left;this.height=c-this.top};goog.math.Rect.boundingRect=function(a,b){if(!a||!b)return null;var c=a.clone();c.boundingRect(b);return c};
goog.math.Rect.prototype.contains=function(a){return a instanceof goog.math.Rect?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};goog.math.Rect.prototype.getSize=function(){return new goog.math.Size(this.width,this.height)};
goog.math.Rect.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};goog.math.Rect.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
goog.math.Rect.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};goog.math.Rect.prototype.translate=function(a,b){a instanceof goog.math.Coordinate?(this.left+=a.x,this.top+=a.y):(this.left+=a,goog.isNumber(b)&&(this.top+=b));return this};goog.math.Rect.prototype.scale=function(a,b){var c=goog.isNumber(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};goog.style={};goog.style.setStyle=function(a,b,c){goog.isString(b)?goog.style.setStyle_(a,c,b):goog.object.forEach(b,goog.partial(goog.style.setStyle_,a))};goog.style.setStyle_=function(a,b,c){(c=goog.style.getVendorJsStyleName_(a,c))&&(a.style[c]=b)};goog.style.getVendorJsStyleName_=function(a,b){var c=goog.string.toCamelCase(b);if(void 0===a.style[c]){var d=goog.dom.vendor.getVendorJsPrefix()+goog.string.toTitleCase(b);if(void 0!==a.style[d])return d}return c};
goog.style.getVendorStyleName_=function(a,b){var c=goog.string.toCamelCase(b);return void 0===a.style[c]&&(c=goog.dom.vendor.getVendorJsPrefix()+goog.string.toTitleCase(b),void 0!==a.style[c])?goog.dom.vendor.getVendorPrefix()+"-"+b:b};goog.style.getStyle=function(a,b){var c=a.style[goog.string.toCamelCase(b)];return"undefined"!==typeof c?c:a.style[goog.style.getVendorJsStyleName_(a,b)]||""};
goog.style.getComputedStyle=function(a,b){var c=goog.dom.getOwnerDocument(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};goog.style.getCascadedStyle=function(a,b){return a.currentStyle?a.currentStyle[b]:null};goog.style.getStyle_=function(a,b){return goog.style.getComputedStyle(a,b)||goog.style.getCascadedStyle(a,b)||a.style&&a.style[b]};
goog.style.getComputedPosition=function(a){return goog.style.getStyle_(a,"position")};goog.style.getBackgroundColor=function(a){return goog.style.getStyle_(a,"backgroundColor")};goog.style.getComputedOverflowX=function(a){return goog.style.getStyle_(a,"overflowX")};goog.style.getComputedOverflowY=function(a){return goog.style.getStyle_(a,"overflowY")};goog.style.getComputedZIndex=function(a){return goog.style.getStyle_(a,"zIndex")};
goog.style.getComputedTextAlign=function(a){return goog.style.getStyle_(a,"textAlign")};goog.style.getComputedCursor=function(a){return goog.style.getStyle_(a,"cursor")};goog.style.setPosition=function(a,b,c){var d,e=goog.userAgent.GECKO&&(goog.userAgent.MAC||goog.userAgent.X11)&&goog.userAgent.isVersion("1.9");b instanceof goog.math.Coordinate?(d=b.x,b=b.y):(d=b,b=c);a.style.left=goog.style.getPixelStyleValue_(d,e);a.style.top=goog.style.getPixelStyleValue_(b,e)};
goog.style.getPosition=function(a){return new goog.math.Coordinate(a.offsetLeft,a.offsetTop)};goog.style.getClientViewportElement=function(a){a=a?goog.dom.getOwnerDocument(a):goog.dom.getDocument();return!goog.userAgent.IE||goog.userAgent.isDocumentMode(9)||goog.dom.getDomHelper(a).isCss1CompatMode()?a.documentElement:a.body};goog.style.getViewportPageOffset=function(a){var b=a.body;a=a.documentElement;return new goog.math.Coordinate(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)};
goog.style.getBoundingClientRect_=function(a){var b=a.getBoundingClientRect();goog.userAgent.IE&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
goog.style.getOffsetParent=function(a){if(goog.userAgent.IE&&!goog.userAgent.isDocumentMode(8))return a.offsetParent;var b=goog.dom.getOwnerDocument(a),c=goog.style.getStyle_(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=goog.style.getStyle_(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
goog.style.getVisibleRectForElement=function(a){for(var b=new goog.math.Box(0,Infinity,Infinity,0),c=goog.dom.getDomHelper(a),d=c.getDocument().body,e=c.getDocument().documentElement,f=c.getDocumentScrollElement();a=goog.style.getOffsetParent(a);)if(!(goog.userAgent.IE&&0==a.clientWidth||goog.userAgent.WEBKIT&&0==a.clientHeight&&a==d||a==d||a==e||"visible"==goog.style.getStyle_(a,"overflow"))){var g=goog.style.getPageOffset(a),h=goog.style.getClientLeftTop(a);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,
g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=c.getViewportSize();b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
goog.style.getContainerOffsetToScrollInto=function(a,b,c){var d=goog.style.getPageOffset(a),e=goog.style.getPageOffset(b),f=goog.style.getBorderBox(b),g=d.x-e.x-f.left,d=d.y-e.y-f.top,e=b.clientWidth-a.offsetWidth;a=b.clientHeight-a.offsetHeight;f=b.scrollLeft;b=b.scrollTop;c?(f+=g-e/2,b+=d-a/2):(f+=Math.min(g,Math.max(g-e,0)),b+=Math.min(d,Math.max(d-a,0)));return new goog.math.Coordinate(f,b)};
goog.style.scrollIntoContainerView=function(a,b,c){a=goog.style.getContainerOffsetToScrollInto(a,b,c);b.scrollLeft=a.x;b.scrollTop=a.y};
goog.style.getClientLeftTop=function(a){if(goog.userAgent.GECKO&&!goog.userAgent.isVersion("1.9")){var b=parseFloat(goog.style.getComputedStyle(a,"borderLeftWidth"));if(goog.style.isRightToLeft(a))var c=a.offsetWidth-a.clientWidth-b-parseFloat(goog.style.getComputedStyle(a,"borderRightWidth")),b=b+c;return new goog.math.Coordinate(b,parseFloat(goog.style.getComputedStyle(a,"borderTopWidth")))}return new goog.math.Coordinate(a.clientLeft,a.clientTop)};
goog.style.getPageOffset=function(a){var b,c=goog.dom.getOwnerDocument(a),d=goog.style.getStyle_(a,"position");goog.asserts.assertObject(a,"Parameter is required");var e=goog.userAgent.GECKO&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new goog.math.Coordinate(0,0),g=goog.style.getClientViewportElement(c);if(a==g)return f;if(a.getBoundingClientRect)b=goog.style.getBoundingClientRect_(a),a=goog.dom.getDomHelper(c).getDocumentScroll(),
f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{b=a;do{f.x+=b.offsetLeft;f.y+=b.offsetTop;b!=a&&(f.x+=b.clientLeft||0,f.y+=b.clientTop||0);if(goog.userAgent.WEBKIT&&"fixed"==goog.style.getComputedPosition(b)){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(goog.userAgent.OPERA||goog.userAgent.WEBKIT&&"absolute"==d)f.y-=c.body.offsetTop;for(b=a;(b=goog.style.getOffsetParent(b))&&
b!=c.body&&b!=g;)f.x-=b.scrollLeft,goog.userAgent.OPERA&&"TR"==b.tagName||(f.y-=b.scrollTop)}return f};goog.style.getPageOffsetLeft=function(a){return goog.style.getPageOffset(a).x};goog.style.getPageOffsetTop=function(a){return goog.style.getPageOffset(a).y};
goog.style.getFramedPageOffset=function(a,b){var c=new goog.math.Coordinate(0,0),d=goog.dom.getWindow(goog.dom.getOwnerDocument(a)),e=a;do{var f=d==b?goog.style.getPageOffset(e):goog.style.getClientPosition(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&(e=d.frameElement)&&(d=d.parent));return c};
goog.style.translateRectForAnotherFrame=function(a,b,c){if(b.getDocument()!=c.getDocument()){var d=b.getDocument().body;c=goog.style.getFramedPageOffset(d,c.getWindow());c=goog.math.Coordinate.difference(c,goog.style.getPageOffset(d));goog.userAgent.IE&&!b.isCss1CompatMode()&&(c=goog.math.Coordinate.difference(c,b.getDocumentScroll()));a.left+=c.x;a.top+=c.y}};
goog.style.getRelativePosition=function(a,b){var c=goog.style.getClientPosition(a),d=goog.style.getClientPosition(b);return new goog.math.Coordinate(c.x-d.x,c.y-d.y)};
goog.style.getClientPosition=function(a){var b=new goog.math.Coordinate;if(a.nodeType==goog.dom.NodeType.ELEMENT){if(a.getBoundingClientRect){var c=goog.style.getBoundingClientRect_(a);b.x=c.left;b.y=c.top}else{var c=goog.dom.getDomHelper(a).getDocumentScroll(),d=goog.style.getPageOffset(a);b.x=d.x-c.x;b.y=d.y-c.y}goog.userAgent.GECKO&&!goog.userAgent.isVersion(12)&&(b=goog.math.Coordinate.sum(b,goog.style.getCssTranslation(a)))}else c=goog.isFunction(a.getBrowserEvent),d=a,a.targetTouches?d=a.targetTouches[0]:
c&&a.getBrowserEvent().targetTouches&&(d=a.getBrowserEvent().targetTouches[0]),b.x=d.clientX,b.y=d.clientY;return b};goog.style.setPageOffset=function(a,b,c){var d=goog.style.getPageOffset(a);b instanceof goog.math.Coordinate&&(c=b.y,b=b.x);goog.style.setPosition(a,a.offsetLeft+(b-d.x),a.offsetTop+(c-d.y))};
goog.style.setSize=function(a,b,c){if(b instanceof goog.math.Size)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");goog.style.setWidth(a,b);goog.style.setHeight(a,c)};goog.style.getPixelStyleValue_=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};goog.style.setHeight=function(a,b){a.style.height=goog.style.getPixelStyleValue_(b,!0)};goog.style.setWidth=function(a,b){a.style.width=goog.style.getPixelStyleValue_(b,!0)};
goog.style.getSize=function(a){if("none"!=goog.style.getStyle_(a,"display"))return goog.style.getSizeWithDisplay_(a);var b=a.style,c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=goog.style.getSizeWithDisplay_(a);b.display=c;b.position=e;b.visibility=d;return a};
goog.style.getSizeWithDisplay_=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=goog.userAgent.WEBKIT&&!b&&!c;return goog.isDef(b)&&!d||!a.getBoundingClientRect?new goog.math.Size(b,c):(a=goog.style.getBoundingClientRect_(a),new goog.math.Size(a.right-a.left,a.bottom-a.top))};goog.style.getBounds=function(a){var b=goog.style.getPageOffset(a);a=goog.style.getSize(a);return new goog.math.Rect(b.x,b.y,a.width,a.height)};goog.style.toCamelCase=function(a){return goog.string.toCamelCase(String(a))};
goog.style.toSelectorCase=function(a){return goog.string.toSelectorCase(a)};goog.style.getOpacity=function(a){var b=a.style;a="";"opacity"in b?a=b.opacity:"MozOpacity"in b?a=b.MozOpacity:"filter"in b&&(b=b.filter.match(/alpha\(opacity=([\d.]+)\)/))&&(a=String(b[1]/100));return""==a?a:Number(a)};goog.style.setOpacity=function(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")};
goog.style.setTransparentBackgroundImage=function(a,b){var c=a.style;goog.userAgent.IE&&!goog.userAgent.isVersion("8")?c.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+b+'", sizingMethod="crop")':(c.backgroundImage="url("+b+")",c.backgroundPosition="top left",c.backgroundRepeat="no-repeat")};goog.style.clearTransparentBackgroundImage=function(a){a=a.style;"filter"in a?a.filter="":a.backgroundImage="none"};goog.style.showElement=function(a,b){a.style.display=b?"":"none"};
goog.style.isElementShown=function(a){return"none"!=a.style.display};goog.style.installStyles=function(a,b){var c=goog.dom.getDomHelper(b),d=null;if(goog.userAgent.IE)d=c.getDocument().createStyleSheet(),goog.style.setStyles(d,a);else{var e=c.getElementsByTagNameAndClass("head")[0];e||(d=c.getElementsByTagNameAndClass("body")[0],e=c.createDom("head"),d.parentNode.insertBefore(e,d));d=c.createDom("style");goog.style.setStyles(d,a);c.appendChild(e,d)}return d};
goog.style.uninstallStyles=function(a){goog.dom.removeNode(a.ownerNode||a.owningElement||a)};goog.style.setStyles=function(a,b){goog.userAgent.IE?a.cssText=b:a.innerHTML=b};goog.style.setPreWrap=function(a){a=a.style;goog.userAgent.IE&&!goog.userAgent.isVersion("8")?(a.whiteSpace="pre",a.wordWrap="break-word"):a.whiteSpace=goog.userAgent.GECKO?"-moz-pre-wrap":"pre-wrap"};
goog.style.setInlineBlock=function(a){a=a.style;a.position="relative";goog.userAgent.IE&&!goog.userAgent.isVersion("8")?(a.zoom="1",a.display="inline"):a.display=goog.userAgent.GECKO?goog.userAgent.isVersion("1.9a")?"inline-block":"-moz-inline-box":"inline-block"};goog.style.isRightToLeft=function(a){return"rtl"==goog.style.getStyle_(a,"direction")};goog.style.unselectableStyle_=goog.userAgent.GECKO?"MozUserSelect":goog.userAgent.WEBKIT?"WebkitUserSelect":null;
goog.style.isUnselectable=function(a){return goog.style.unselectableStyle_?"none"==a.style[goog.style.unselectableStyle_].toLowerCase():goog.userAgent.IE||goog.userAgent.OPERA?"on"==a.getAttribute("unselectable"):!1};
goog.style.setUnselectable=function(a,b,c){c=c?null:a.getElementsByTagName("*");var d=goog.style.unselectableStyle_;if(d){if(b=b?"none":"",a.style[d]=b,c){a=0;for(var e;e=c[a];a++)e.style[d]=b}}else if(goog.userAgent.IE||goog.userAgent.OPERA)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;e=c[a];a++)e.setAttribute("unselectable",b)};goog.style.getBorderBoxSize=function(a){return new goog.math.Size(a.offsetWidth,a.offsetHeight)};
goog.style.setBorderBoxSize=function(a,b){var c=goog.dom.getOwnerDocument(a),d=goog.dom.getDomHelper(c).isCss1CompatMode();if(!goog.userAgent.IE||d&&goog.userAgent.isVersion("8"))goog.style.setBoxSizingSize_(a,b,"border-box");else if(c=a.style,d){var d=goog.style.getPaddingBox(a),e=goog.style.getBorderBox(a);c.pixelWidth=b.width-e.left-d.left-d.right-e.right;c.pixelHeight=b.height-e.top-d.top-d.bottom-e.bottom}else c.pixelWidth=b.width,c.pixelHeight=b.height};
goog.style.getContentBoxSize=function(a){var b=goog.dom.getOwnerDocument(a),c=goog.userAgent.IE&&a.currentStyle;if(c&&goog.dom.getDomHelper(b).isCss1CompatMode()&&"auto"!=c.width&&"auto"!=c.height&&!c.boxSizing)return b=goog.style.getIePixelValue_(a,c.width,"width","pixelWidth"),a=goog.style.getIePixelValue_(a,c.height,"height","pixelHeight"),new goog.math.Size(b,a);c=goog.style.getBorderBoxSize(a);b=goog.style.getPaddingBox(a);a=goog.style.getBorderBox(a);return new goog.math.Size(c.width-a.left-
b.left-b.right-a.right,c.height-a.top-b.top-b.bottom-a.bottom)};
goog.style.setContentBoxSize=function(a,b){var c=goog.dom.getOwnerDocument(a),d=goog.dom.getDomHelper(c).isCss1CompatMode();if(!goog.userAgent.IE||d&&goog.userAgent.isVersion("8"))goog.style.setBoxSizingSize_(a,b,"content-box");else if(c=a.style,d)c.pixelWidth=b.width,c.pixelHeight=b.height;else{var d=goog.style.getPaddingBox(a),e=goog.style.getBorderBox(a);c.pixelWidth=b.width+e.left+d.left+d.right+e.right;c.pixelHeight=b.height+e.top+d.top+d.bottom+e.bottom}};
goog.style.setBoxSizingSize_=function(a,b,c){a=a.style;goog.userAgent.GECKO?a.MozBoxSizing=c:goog.userAgent.WEBKIT?a.WebkitBoxSizing=c:a.boxSizing=c;a.width=Math.max(b.width,0)+"px";a.height=Math.max(b.height,0)+"px"};goog.style.getIePixelValue_=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b};
goog.style.getIePixelDistance_=function(a,b){var c=goog.style.getCascadedStyle(a,b);return c?goog.style.getIePixelValue_(a,c,"left","pixelLeft"):0};
goog.style.getBox_=function(a,b){if(goog.userAgent.IE){var c=goog.style.getIePixelDistance_(a,b+"Left"),d=goog.style.getIePixelDistance_(a,b+"Right"),e=goog.style.getIePixelDistance_(a,b+"Top"),f=goog.style.getIePixelDistance_(a,b+"Bottom");return new goog.math.Box(e,d,f,c)}c=goog.style.getComputedStyle(a,b+"Left");d=goog.style.getComputedStyle(a,b+"Right");e=goog.style.getComputedStyle(a,b+"Top");f=goog.style.getComputedStyle(a,b+"Bottom");return new goog.math.Box(parseFloat(e),parseFloat(d),parseFloat(f),
parseFloat(c))};goog.style.getPaddingBox=function(a){return goog.style.getBox_(a,"padding")};goog.style.getMarginBox=function(a){return goog.style.getBox_(a,"margin")};goog.style.ieBorderWidthKeywords_={thin:2,medium:4,thick:6};
goog.style.getIePixelBorder_=function(a,b){if("none"==goog.style.getCascadedStyle(a,b+"Style"))return 0;var c=goog.style.getCascadedStyle(a,b+"Width");return c in goog.style.ieBorderWidthKeywords_?goog.style.ieBorderWidthKeywords_[c]:goog.style.getIePixelValue_(a,c,"left","pixelLeft")};
goog.style.getBorderBox=function(a){if(goog.userAgent.IE){var b=goog.style.getIePixelBorder_(a,"borderLeft"),c=goog.style.getIePixelBorder_(a,"borderRight"),d=goog.style.getIePixelBorder_(a,"borderTop");a=goog.style.getIePixelBorder_(a,"borderBottom");return new goog.math.Box(d,c,a,b)}b=goog.style.getComputedStyle(a,"borderLeftWidth");c=goog.style.getComputedStyle(a,"borderRightWidth");d=goog.style.getComputedStyle(a,"borderTopWidth");a=goog.style.getComputedStyle(a,"borderBottomWidth");return new goog.math.Box(parseFloat(d),
parseFloat(c),parseFloat(a),parseFloat(b))};goog.style.getFontFamily=function(a){var b=goog.dom.getOwnerDocument(a),c="";if(b.body.createTextRange){b=b.body.createTextRange();b.moveToElementText(a);try{c=b.queryCommandValue("FontName")}catch(d){c=""}}c||(c=goog.style.getStyle_(a,"fontFamily"));a=c.split(",");1<a.length&&(c=a[0]);return goog.string.stripQuotes(c,"\"'")};goog.style.lengthUnitRegex_=/[^\d]+$/;
goog.style.getLengthUnits=function(a){return(a=a.match(goog.style.lengthUnitRegex_))&&a[0]||null};goog.style.ABSOLUTE_CSS_LENGTH_UNITS_={cm:1,"in":1,mm:1,pc:1,pt:1};goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_={em:1,ex:1};
goog.style.getFontSize=function(a){var b=goog.style.getStyle_(a,"fontSize"),c=goog.style.getLengthUnits(b);if(b&&"px"==c)return parseInt(b,10);if(goog.userAgent.IE){if(c in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_)return goog.style.getIePixelValue_(a,b,"left","pixelLeft");if(a.parentNode&&a.parentNode.nodeType==goog.dom.NodeType.ELEMENT&&c in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_)return a=a.parentNode,c=goog.style.getStyle_(a,"fontSize"),goog.style.getIePixelValue_(a,b==c?"1em":b,"left","pixelLeft")}c=
goog.dom.createDom("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});goog.dom.appendChild(a,c);b=c.offsetHeight;goog.dom.removeNode(c);return b};goog.style.parseStyleAttribute=function(a){var b={};goog.array.forEach(a.split(/\s*;\s*/),function(a){a=a.split(/\s*:\s*/);2==a.length&&(b[goog.string.toCamelCase(a[0].toLowerCase())]=a[1])});return b};
goog.style.toStyleAttribute=function(a){var b=[];goog.object.forEach(a,function(a,d){b.push(goog.string.toSelectorCase(d),":",a,";")});return b.join("")};goog.style.setFloat=function(a,b){a.style[goog.userAgent.IE?"styleFloat":"cssFloat"]=b};goog.style.getFloat=function(a){return a.style[goog.userAgent.IE?"styleFloat":"cssFloat"]||""};
goog.style.getScrollbarWidth=function(a){var b=goog.dom.createElement("div");a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=goog.dom.createElement("div");goog.style.setSize(a,"200px","200px");b.appendChild(a);goog.dom.appendChild(goog.dom.getDocument().body,b);a=b.offsetWidth-b.clientWidth;goog.dom.removeNode(b);return a};goog.style.MATRIX_TRANSLATION_REGEX_=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
goog.style.getCssTranslation=function(a){var b;goog.userAgent.IE?b="-ms-transform":goog.userAgent.WEBKIT?b="-webkit-transform":goog.userAgent.OPERA?b="-o-transform":goog.userAgent.GECKO&&(b="-moz-transform");var c;b&&(c=goog.style.getStyle_(a,b));c||(c=goog.style.getStyle_(a,"transform"));return c?(a=c.match(goog.style.MATRIX_TRANSLATION_REGEX_))?new goog.math.Coordinate(parseFloat(a[1]),parseFloat(a[2])):new goog.math.Coordinate(0,0):new goog.math.Coordinate(0,0)};goog.debug.DivConsole=function(a){this.publishHandler_=goog.bind(this.addLogRecord,this);this.formatter_=new goog.debug.HtmlFormatter;this.isCapturing_=this.formatter_.showAbsoluteTime=!1;this.element_=a;this.elementOwnerDocument_=this.element_.ownerDocument||this.element_.document;this.installStyles()};
goog.debug.DivConsole.prototype.installStyles=function(){goog.style.installStyles(".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}",this.element_);this.element_.className+=" logdiv"};
goog.debug.DivConsole.prototype.setCapturing=function(a){if(a!=this.isCapturing_){var b=goog.debug.LogManager.getRoot();a?b.addHandler(this.publishHandler_):(b.removeHandler(this.publishHandler_),this.logBuffer="");this.isCapturing_=a}};
goog.debug.DivConsole.prototype.addLogRecord=function(a){var b=100>=this.element_.scrollHeight-this.element_.scrollTop-this.element_.clientHeight,c=this.elementOwnerDocument_.createElement("div");c.className="logmsg";c.innerHTML=this.formatter_.formatRecord(a);this.element_.appendChild(c);b&&(this.element_.scrollTop=this.element_.scrollHeight)};goog.debug.DivConsole.prototype.getFormatter=function(){return this.formatter_};goog.debug.DivConsole.prototype.setFormatter=function(a){this.formatter_=a};
goog.debug.DivConsole.prototype.addSeparator=function(){var a=this.elementOwnerDocument_.createElement("div");a.className="logmsg logsep";this.element_.appendChild(a)};goog.debug.DivConsole.prototype.clear=function(){this.element_.innerHTML=""};goog.ui={};goog.a11y={};goog.a11y.aria={};
goog.a11y.aria.Role={ALERT:"alert",ALERTDIALOG:"alertdialog",APPLICATION:"application",ARTICLE:"article",BANNER:"banner",BUTTON:"button",CHECKBOX:"checkbox",COLUMNHEADER:"columnheader",COMBOBOX:"combobox",COMPLEMENTARY:"complementary",CONTENTINFO:"contentinfo",DEFINITION:"definition",DIALOG:"dialog",DIRECTORY:"directory",DOCUMENT:"document",FORM:"form",GRID:"grid",GRIDCELL:"gridcell",GROUP:"group",HEADING:"heading",IMG:"img",LINK:"link",LIST:"list",LISTBOX:"listbox",LISTITEM:"listitem",LOG:"log",
MAIN:"main",MARQUEE:"marquee",MATH:"math",MENU:"menu",MENUBAR:"menubar",MENU_ITEM:"menuitem",MENU_ITEM_CHECKBOX:"menuitemcheckbox",MENU_ITEM_RADIO:"menuitemradio",NAVIGATION:"navigation",NOTE:"note",OPTION:"option",PRESENTATION:"presentation",PROGRESSBAR:"progressbar",RADIO:"radio",RADIOGROUP:"radiogroup",REGION:"region",ROW:"row",ROWGROUP:"rowgroup",ROWHEADER:"rowheader",SCROLLBAR:"scrollbar",SEARCH:"search",SEPARATOR:"separator",SLIDER:"slider",SPINBUTTON:"spinbutton",STATUS:"status",TAB:"tab",
TAB_LIST:"tablist",TAB_PANEL:"tabpanel",TEXTBOX:"textbox",TIMER:"timer",TOOLBAR:"toolbar",TOOLTIP:"tooltip",TREE:"tree",TREEGRID:"treegrid",TREEITEM:"treeitem"};goog.a11y.aria.State={ACTIVEDESCENDANT:"activedescendant",ATOMIC:"atomic",AUTOCOMPLETE:"autocomplete",BUSY:"busy",CHECKED:"checked",CONTROLS:"controls",DESCRIBEDBY:"describedby",DISABLED:"disabled",DROPEFFECT:"dropeffect",EXPANDED:"expanded",FLOWTO:"flowto",GRABBED:"grabbed",HASPOPUP:"haspopup",HIDDEN:"hidden",INVALID:"invalid",LABEL:"label",LABELLEDBY:"labelledby",LEVEL:"level",LIVE:"live",MULTILINE:"multiline",MULTISELECTABLE:"multiselectable",ORIENTATION:"orientation",OWNS:"owns",POSINSET:"posinset",
PRESSED:"pressed",READONLY:"readonly",RELEVANT:"relevant",REQUIRED:"required",SELECTED:"selected",SETSIZE:"setsize",SORT:"sort",VALUEMAX:"valuemax",VALUEMIN:"valuemin",VALUENOW:"valuenow",VALUETEXT:"valuetext"};goog.a11y.aria.LivePriority={OFF:"off",POLITE:"polite",ASSERTIVE:"assertive"};goog.a11y.aria.setRole=function(a,b){a.setAttribute("role",b)};goog.a11y.aria.getRole=function(a){return a.getAttribute("role")||""};goog.a11y.aria.setState=function(a,b,c){a.setAttribute("aria-"+b,c)};goog.a11y.aria.getState=function(a,b){var c=a.getAttribute("aria-"+b);return!0===c||!1===c?c?"true":"false":c?String(c):""};goog.a11y.aria.getActiveDescendant=function(a){var b=goog.a11y.aria.getState(a,goog.a11y.aria.State.ACTIVEDESCENDANT);return goog.dom.getOwnerDocument(a).getElementById(b)};
goog.a11y.aria.setActiveDescendant=function(a,b){goog.a11y.aria.setState(a,goog.a11y.aria.State.ACTIVEDESCENDANT,b?b.id:"")};goog.a11y.aria.getLabel=function(a){return goog.a11y.aria.getState(a,goog.a11y.aria.State.LABEL)};goog.a11y.aria.setLabel=function(a,b){goog.a11y.aria.setState(a,goog.a11y.aria.State.LABEL,b)};goog.ui.ButtonSide={NONE:0,START:1,END:2,BOTH:3};goog.events.EventHandler=function(a){goog.Disposable.call(this);this.handler_=a;this.keys_=[]};goog.inherits(goog.events.EventHandler,goog.Disposable);goog.events.EventHandler.typeArray_=[];goog.events.EventHandler.prototype.listen=function(a,b,c,d,e){goog.isArray(b)||(goog.events.EventHandler.typeArray_[0]=b,b=goog.events.EventHandler.typeArray_);for(var f=0;f<b.length;f++){var g=goog.events.listen(a,b[f],c||this,d||!1,e||this.handler_||this);this.keys_.push(g)}return this};
goog.events.EventHandler.prototype.listenOnce=function(a,b,c,d,e){if(goog.isArray(b))for(var f=0;f<b.length;f++)this.listenOnce(a,b[f],c,d,e);else a=goog.events.listenOnce(a,b,c||this,d,e||this.handler_||this),this.keys_.push(a);return this};goog.events.EventHandler.prototype.listenWithWrapper=function(a,b,c,d,e){b.listen(a,c,d,e||this.handler_||this,this);return this};goog.events.EventHandler.prototype.getListenerCount=function(){return this.keys_.length};
goog.events.EventHandler.prototype.unlisten=function(a,b,c,d,e){if(goog.isArray(b))for(var f=0;f<b.length;f++)this.unlisten(a,b[f],c,d,e);else if(a=goog.events.getListener(a,b,c||this,d,e||this.handler_||this))a=a.key,goog.events.unlistenByKey(a),goog.array.remove(this.keys_,a);return this};goog.events.EventHandler.prototype.unlistenWithWrapper=function(a,b,c,d,e){b.unlisten(a,c,d,e||this.handler_||this,this);return this};
goog.events.EventHandler.prototype.removeAll=function(){goog.array.forEach(this.keys_,goog.events.unlistenByKey);this.keys_.length=0};goog.events.EventHandler.prototype.disposeInternal=function(){goog.events.EventHandler.superClass_.disposeInternal.call(this);this.removeAll()};goog.events.EventHandler.prototype.handleEvent=function(a){throw Error("EventHandler.handleEvent not implemented");};goog.events.EventTarget=function(){goog.Disposable.call(this);goog.events.Listenable.USE_LISTENABLE_INTERFACE&&(this.eventTargetListeners_={},this.reallyDisposed_=!1,this.actualEventTarget_=this)};goog.inherits(goog.events.EventTarget,goog.Disposable);goog.events.Listenable.USE_LISTENABLE_INTERFACE&&goog.events.Listenable.addImplementation(goog.events.EventTarget);goog.events.EventTarget.MAX_ANCESTORS_=1E3;goog.events.EventTarget.prototype.customEvent_=!0;
goog.events.EventTarget.prototype.parentEventTarget_=null;goog.events.EventTarget.prototype.getParentEventTarget=function(){return this.parentEventTarget_};goog.events.EventTarget.prototype.setParentEventTarget=function(a){this.parentEventTarget_=a};goog.events.EventTarget.prototype.addEventListener=function(a,b,c,d){goog.events.listen(this,a,b,c,d)};goog.events.EventTarget.prototype.removeEventListener=function(a,b,c,d){goog.events.unlisten(this,a,b,c,d)};
goog.events.EventTarget.prototype.dispatchEvent=function(a){if(goog.events.Listenable.USE_LISTENABLE_INTERFACE){if(this.reallyDisposed_)return!0;var b,c=this.getParentEventTarget();if(c){b=[];for(var d=1;c;c=c.getParentEventTarget())b.push(c),goog.asserts.assert(++d<goog.events.EventTarget.MAX_ANCESTORS_,"infinite loop")}return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_,a,b)}return goog.events.dispatchEvent(this,a)};
goog.events.EventTarget.prototype.disposeInternal=function(){goog.events.EventTarget.superClass_.disposeInternal.call(this);goog.events.Listenable.USE_LISTENABLE_INTERFACE?(this.removeAllListeners(),this.reallyDisposed_=!0):goog.events.removeAll(this);this.parentEventTarget_=null};
goog.events.Listenable.USE_LISTENABLE_INTERFACE&&(goog.events.EventTarget.prototype.listen=function(a,b,c,d){return this.listenInternal_(a,b,!1,c,d)},goog.events.EventTarget.prototype.listenOnce=function(a,b,c,d){return this.listenInternal_(a,b,!0,c,d)},goog.events.EventTarget.prototype.listenInternal_=function(a,b,c,d,e){goog.asserts.assert(!this.reallyDisposed_,"Can not listen on disposed object.");var f=this.eventTargetListeners_[a]||(this.eventTargetListeners_[a]=[]),g;g=goog.events.EventTarget.findListenerIndex_(f,
b,d,e);if(-1<g)return g=f[g],c||(g.callOnce=!1),g;g=new goog.events.Listener;g.init(b,null,this,a,!!d,e);g.callOnce=c;f.push(g);return g},goog.events.EventTarget.prototype.unlisten=function(a,b,c,d){if(!(a in this.eventTargetListeners_))return!1;a=this.eventTargetListeners_[a];b=goog.events.EventTarget.findListenerIndex_(a,b,c,d);return-1<b?(c=a[b],goog.events.cleanUp(c),c.removed=!0,goog.array.removeAt(a,b)):!1},goog.events.EventTarget.prototype.unlistenByKey=function(a){var b=a.type;if(!(b in this.eventTargetListeners_))return!1;
if(b=goog.array.remove(this.eventTargetListeners_[b],a))goog.events.cleanUp(a),a.removed=!0;return b},goog.events.EventTarget.prototype.removeAllListeners=function(a,b){var c=0,d;for(d in this.eventTargetListeners_)if(!a||d==a){for(var e=this.eventTargetListeners_[d],f=0;f<e.length;f++)++c,goog.events.cleanUp(e[f]),e[f].removed=!0;e.length=0}return c},goog.events.EventTarget.prototype.fireListeners=function(a,b,c){goog.asserts.assert(!this.reallyDisposed_,"Can not fire listeners after dispose() completed.");
if(!(a in this.eventTargetListeners_))return!0;var d=!0;a=goog.array.clone(this.eventTargetListeners_[a]);for(var e=0;e<a.length;++e){var f=a[e];f&&!f.removed&&f.capture==b&&(f.callOnce&&this.unlistenByKey(f),d=!1!==f.handleEvent(c)&&d)}return d&&!1!=c.returnValue_},goog.events.EventTarget.prototype.getListeners=function(a,b){var c=this.eventTargetListeners_[a],d=[];if(c)for(var e=0;e<c.length;++e){var f=c[e];f.capture==b&&d.push(f)}return d},goog.events.EventTarget.prototype.getListener=function(a,
b,c,d){a=this.eventTargetListeners_[a];var e=-1;a&&(e=goog.events.EventTarget.findListenerIndex_(a,b,c,d));return-1<e?a[e]:null},goog.events.EventTarget.prototype.hasListener=function(a,b){var c=goog.isDef(a),d=goog.isDef(b);return goog.object.some(this.eventTargetListeners_,function(e,f){for(var g=0;g<e.length;++g)if(!(c&&e[g].type!=a||d&&e[g].capture!=b))return!0;return!1})},goog.events.EventTarget.prototype.setTargetForTesting=function(a){this.actualEventTarget_=a},goog.events.EventTarget.dispatchEventInternal_=
function(a,b,c){var d=b.type||b;if(goog.isString(b))b=new goog.events.Event(b,a);else if(b instanceof goog.events.Event)b.target=b.target||a;else{var e=b;b=new goog.events.Event(d,a);goog.object.extend(b,e)}var e=!0,f;if(c)for(var g=c.length-1;!b.propagationStopped_&&0<=g;g--)f=b.currentTarget=c[g],e=f.fireListeners(d,!0,b)&&e;b.propagationStopped_||(f=b.currentTarget=a,e=f.fireListeners(d,!0,b)&&e,b.propagationStopped_||(e=f.fireListeners(d,!1,b)&&e));if(c)for(g=0;!b.propagationStopped_&&g<c.length;g++)f=
b.currentTarget=c[g],e=f.fireListeners(d,!1,b)&&e;return e},goog.events.EventTarget.findListenerIndex_=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1});goog.ui.IdGenerator=function(){};goog.addSingletonGetter(goog.ui.IdGenerator);goog.ui.IdGenerator.prototype.nextId_=0;goog.ui.IdGenerator.prototype.getNextUniqueId=function(){return":"+(this.nextId_++).toString(36)};goog.ui.IdGenerator.instance=goog.ui.IdGenerator.getInstance();goog.ui.Component=function(a){goog.events.EventTarget.call(this);this.dom_=a||goog.dom.getDomHelper();this.rightToLeft_=goog.ui.Component.defaultRightToLeft_};goog.inherits(goog.ui.Component,goog.events.EventTarget);goog.ui.Component.prototype.idGenerator_=goog.ui.IdGenerator.getInstance();goog.ui.Component.defaultRightToLeft_=null;
goog.ui.Component.EventType={BEFORE_SHOW:"beforeshow",SHOW:"show",HIDE:"hide",DISABLE:"disable",ENABLE:"enable",HIGHLIGHT:"highlight",UNHIGHLIGHT:"unhighlight",ACTIVATE:"activate",DEACTIVATE:"deactivate",SELECT:"select",UNSELECT:"unselect",CHECK:"check",UNCHECK:"uncheck",FOCUS:"focus",BLUR:"blur",OPEN:"open",CLOSE:"close",ENTER:"enter",LEAVE:"leave",ACTION:"action",CHANGE:"change"};
goog.ui.Component.Error={NOT_SUPPORTED:"Method not supported",DECORATE_INVALID:"Invalid element to decorate",ALREADY_RENDERED:"Component already rendered",PARENT_UNABLE_TO_BE_SET:"Unable to set parent component",CHILD_INDEX_OUT_OF_BOUNDS:"Child component index out of bounds",NOT_OUR_CHILD:"Child is not in parent component",NOT_IN_DOCUMENT:"Operation not supported while component is not in document",STATE_INVALID:"Invalid component state"};
goog.ui.Component.State={ALL:255,DISABLED:1,HOVER:2,ACTIVE:4,SELECTED:8,CHECKED:16,FOCUSED:32,OPENED:64};
goog.ui.Component.getStateTransitionEvent=function(a,b){switch(a){case goog.ui.Component.State.DISABLED:return b?goog.ui.Component.EventType.DISABLE:goog.ui.Component.EventType.ENABLE;case goog.ui.Component.State.HOVER:return b?goog.ui.Component.EventType.HIGHLIGHT:goog.ui.Component.EventType.UNHIGHLIGHT;case goog.ui.Component.State.ACTIVE:return b?goog.ui.Component.EventType.ACTIVATE:goog.ui.Component.EventType.DEACTIVATE;case goog.ui.Component.State.SELECTED:return b?goog.ui.Component.EventType.SELECT:
goog.ui.Component.EventType.UNSELECT;case goog.ui.Component.State.CHECKED:return b?goog.ui.Component.EventType.CHECK:goog.ui.Component.EventType.UNCHECK;case goog.ui.Component.State.FOCUSED:return b?goog.ui.Component.EventType.FOCUS:goog.ui.Component.EventType.BLUR;case goog.ui.Component.State.OPENED:return b?goog.ui.Component.EventType.OPEN:goog.ui.Component.EventType.CLOSE}throw Error(goog.ui.Component.Error.STATE_INVALID);};
goog.ui.Component.setDefaultRightToLeft=function(a){goog.ui.Component.defaultRightToLeft_=a};goog.ui.Component.prototype.id_=null;goog.ui.Component.prototype.inDocument_=!1;goog.ui.Component.prototype.element_=null;goog.ui.Component.prototype.rightToLeft_=null;goog.ui.Component.prototype.model_=null;goog.ui.Component.prototype.parent_=null;goog.ui.Component.prototype.children_=null;goog.ui.Component.prototype.childIndex_=null;goog.ui.Component.prototype.wasDecorated_=!1;
goog.ui.Component.prototype.getId=function(){return this.id_||(this.id_=this.idGenerator_.getNextUniqueId())};goog.ui.Component.prototype.setId=function(a){this.parent_&&this.parent_.childIndex_&&(goog.object.remove(this.parent_.childIndex_,this.id_),goog.object.add(this.parent_.childIndex_,a,this));this.id_=a};goog.ui.Component.prototype.getElement=function(){return this.element_};
goog.ui.Component.prototype.getElementStrict=function(){var a=this.element_;goog.asserts.assert(a,"Can not call getElementStrict before rendering/decorating.");return a};goog.ui.Component.prototype.setElementInternal=function(a){this.element_=a};goog.ui.Component.prototype.getElementsByClass=function(a){return this.element_?this.dom_.getElementsByClass(a,this.element_):[]};goog.ui.Component.prototype.getElementByClass=function(a){return this.element_?this.dom_.getElementByClass(a,this.element_):null};
goog.ui.Component.prototype.getHandler=function(){return this.googUiComponentHandler_||(this.googUiComponentHandler_=new goog.events.EventHandler(this))};goog.ui.Component.prototype.setParent=function(a){if(this==a)throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);if(a&&this.parent_&&this.id_&&this.parent_.getChild(this.id_)&&this.parent_!=a)throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);this.parent_=a;goog.ui.Component.superClass_.setParentEventTarget.call(this,a)};
goog.ui.Component.prototype.getParent=function(){return this.parent_};goog.ui.Component.prototype.setParentEventTarget=function(a){if(this.parent_&&this.parent_!=a)throw Error(goog.ui.Component.Error.NOT_SUPPORTED);goog.ui.Component.superClass_.setParentEventTarget.call(this,a)};goog.ui.Component.prototype.getDomHelper=function(){return this.dom_};goog.ui.Component.prototype.isInDocument=function(){return this.inDocument_};goog.ui.Component.prototype.createDom=function(){this.element_=this.dom_.createElement("div")};
goog.ui.Component.prototype.render=function(a){this.render_(a)};goog.ui.Component.prototype.renderBefore=function(a){this.render_(a.parentNode,a)};goog.ui.Component.prototype.render_=function(a,b){if(this.inDocument_)throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.element_||this.createDom();a?a.insertBefore(this.element_,b||null):this.dom_.getDocument().body.appendChild(this.element_);this.parent_&&!this.parent_.isInDocument()||this.enterDocument()};
goog.ui.Component.prototype.decorate=function(a){if(this.inDocument_)throw Error(goog.ui.Component.Error.ALREADY_RENDERED);if(a&&this.canDecorate(a))this.wasDecorated_=!0,this.dom_&&this.dom_.getDocument()==goog.dom.getOwnerDocument(a)||(this.dom_=goog.dom.getDomHelper(a)),this.decorateInternal(a),this.enterDocument();else throw Error(goog.ui.Component.Error.DECORATE_INVALID);};goog.ui.Component.prototype.canDecorate=function(a){return!0};goog.ui.Component.prototype.wasDecorated=function(){return this.wasDecorated_};
goog.ui.Component.prototype.decorateInternal=function(a){this.element_=a};goog.ui.Component.prototype.enterDocument=function(){this.inDocument_=!0;this.forEachChild(function(a){!a.isInDocument()&&a.getElement()&&a.enterDocument()})};goog.ui.Component.prototype.exitDocument=function(){this.forEachChild(function(a){a.isInDocument()&&a.exitDocument()});this.googUiComponentHandler_&&this.googUiComponentHandler_.removeAll();this.inDocument_=!1};
goog.ui.Component.prototype.disposeInternal=function(){this.inDocument_&&this.exitDocument();this.googUiComponentHandler_&&(this.googUiComponentHandler_.dispose(),delete this.googUiComponentHandler_);this.forEachChild(function(a){a.dispose()});!this.wasDecorated_&&this.element_&&goog.dom.removeNode(this.element_);this.parent_=this.model_=this.element_=this.childIndex_=this.children_=null;goog.ui.Component.superClass_.disposeInternal.call(this)};
goog.ui.Component.prototype.makeId=function(a){return this.getId()+"."+a};goog.ui.Component.prototype.makeIds=function(a){var b={},c;for(c in a)b[c]=this.makeId(a[c]);return b};goog.ui.Component.prototype.getModel=function(){return this.model_};goog.ui.Component.prototype.setModel=function(a){this.model_=a};goog.ui.Component.prototype.getFragmentFromId=function(a){return a.substring(this.getId().length+1)};
goog.ui.Component.prototype.getElementByFragment=function(a){if(!this.inDocument_)throw Error(goog.ui.Component.Error.NOT_IN_DOCUMENT);return this.dom_.getElement(this.makeId(a))};goog.ui.Component.prototype.addChild=function(a,b){this.addChildAt(a,this.getChildCount(),b)};
goog.ui.Component.prototype.addChildAt=function(a,b,c){if(a.inDocument_&&(c||!this.inDocument_))throw Error(goog.ui.Component.Error.ALREADY_RENDERED);if(0>b||b>this.getChildCount())throw Error(goog.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);this.childIndex_&&this.children_||(this.childIndex_={},this.children_=[]);a.getParent()==this?(goog.object.set(this.childIndex_,a.getId(),a),goog.array.remove(this.children_,a)):goog.object.add(this.childIndex_,a.getId(),a);a.setParent(this);goog.array.insertAt(this.children_,
a,b);a.inDocument_&&this.inDocument_&&a.getParent()==this?(c=this.getContentElement(),c.insertBefore(a.getElement(),c.childNodes[b]||null)):c?(this.element_||this.createDom(),b=this.getChildAt(b+1),a.render_(this.getContentElement(),b?b.element_:null)):this.inDocument_&&!a.inDocument_&&a.element_&&a.element_.parentNode&&a.element_.parentNode.nodeType==goog.dom.NodeType.ELEMENT&&a.enterDocument()};goog.ui.Component.prototype.getContentElement=function(){return this.element_};
goog.ui.Component.prototype.isRightToLeft=function(){null==this.rightToLeft_&&(this.rightToLeft_=goog.style.isRightToLeft(this.inDocument_?this.element_:this.dom_.getDocument().body));return this.rightToLeft_};goog.ui.Component.prototype.setRightToLeft=function(a){if(this.inDocument_)throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.rightToLeft_=a};goog.ui.Component.prototype.hasChildren=function(){return!!this.children_&&0!=this.children_.length};
goog.ui.Component.prototype.getChildCount=function(){return this.children_?this.children_.length:0};goog.ui.Component.prototype.getChildIds=function(){var a=[];this.forEachChild(function(b){a.push(b.getId())});return a};goog.ui.Component.prototype.getChild=function(a){return this.childIndex_&&a?goog.object.get(this.childIndex_,a)||null:null};goog.ui.Component.prototype.getChildAt=function(a){return this.children_?this.children_[a]||null:null};
goog.ui.Component.prototype.forEachChild=function(a,b){this.children_&&goog.array.forEach(this.children_,a,b)};goog.ui.Component.prototype.indexOfChild=function(a){return this.children_&&a?goog.array.indexOf(this.children_,a):-1};
goog.ui.Component.prototype.removeChild=function(a,b){if(a){var c=goog.isString(a)?a:a.getId();a=this.getChild(c);c&&a&&(goog.object.remove(this.childIndex_,c),goog.array.remove(this.children_,a),b&&(a.exitDocument(),a.element_&&goog.dom.removeNode(a.element_)),a.setParent(null))}if(!a)throw Error(goog.ui.Component.Error.NOT_OUR_CHILD);return a};goog.ui.Component.prototype.removeChildAt=function(a,b){return this.removeChild(this.getChildAt(a),b)};
goog.ui.Component.prototype.removeChildren=function(a){for(var b=[];this.hasChildren();)b.push(this.removeChildAt(0,a));return b};goog.ui.ControlRenderer=function(){};goog.addSingletonGetter(goog.ui.ControlRenderer);goog.ui.ControlRenderer.getCustomRenderer=function(a,b){var c=new a;c.getCssClass=function(){return b};return c};goog.ui.ControlRenderer.CSS_CLASS="goog-control";goog.ui.ControlRenderer.IE6_CLASS_COMBINATIONS=[];goog.ui.ControlRenderer.prototype.getAriaRole=function(){};
goog.ui.ControlRenderer.prototype.createDom=function(a){var b=a.getDomHelper().createDom("div",this.getClassNames(a).join(" "),a.getContent());this.setAriaStates(a,b);return b};goog.ui.ControlRenderer.prototype.getContentElement=function(a){return a};
goog.ui.ControlRenderer.prototype.enableClassName=function(a,b,c){if(a=a.getElement?a.getElement():a)if(goog.userAgent.IE&&!goog.userAgent.isVersion("7")){var d=this.getAppliedCombinedClassNames_(goog.dom.classes.get(a),b);d.push(b);goog.partial(c?goog.dom.classes.add:goog.dom.classes.remove,a).apply(null,d)}else goog.dom.classes.enable(a,b,c)};goog.ui.ControlRenderer.prototype.enableExtraClassName=function(a,b,c){this.enableClassName(a,b,c)};goog.ui.ControlRenderer.prototype.canDecorate=function(a){return!0};
goog.ui.ControlRenderer.prototype.decorate=function(a,b){b.id&&a.setId(b.id);var c=this.getContentElement(b);c&&c.firstChild?a.setContentInternal(c.firstChild.nextSibling?goog.array.clone(c.childNodes):c.firstChild):a.setContentInternal(null);var d=0,e=this.getCssClass(),f=this.getStructuralCssClass(),g=!1,h=!1,c=!1,k=goog.dom.classes.get(b);goog.array.forEach(k,function(a){g||a!=e?h||a!=f?d|=this.getStateFromClass(a):h=!0:(g=!0,f==e&&(h=!0))},this);a.setStateInternal(d);g||(k.push(e),f==e&&(h=!0));
h||k.push(f);var l=a.getExtraClassNames();l&&k.push.apply(k,l);if(goog.userAgent.IE&&!goog.userAgent.isVersion("7")){var m=this.getAppliedCombinedClassNames_(k);0<m.length&&(k.push.apply(k,m),c=!0)}g&&h&&!l&&!c||goog.dom.classes.set(b,k.join(" "));this.setAriaStates(a,b);return b};goog.ui.ControlRenderer.prototype.initializeDom=function(a){a.isRightToLeft()&&this.setRightToLeft(a.getElement(),!0);a.isEnabled()&&this.setFocusable(a,a.isVisible())};
goog.ui.ControlRenderer.prototype.setAriaRole=function(a,b){var c=b||this.getAriaRole();c&&(goog.asserts.assert(a,"The element passed as a first parameter cannot be null."),goog.a11y.aria.setRole(a,c))};
goog.ui.ControlRenderer.prototype.setAriaStates=function(a,b){goog.asserts.assert(a);goog.asserts.assert(b);a.isVisible()||goog.a11y.aria.setState(b,goog.a11y.aria.State.HIDDEN,!a.isVisible());a.isEnabled()||this.updateAriaState(b,goog.ui.Component.State.DISABLED,!a.isEnabled());a.isSupportedState(goog.ui.Component.State.SELECTED)&&this.updateAriaState(b,goog.ui.Component.State.SELECTED,a.isSelected());a.isSupportedState(goog.ui.Component.State.CHECKED)&&this.updateAriaState(b,goog.ui.Component.State.CHECKED,
a.isChecked());a.isSupportedState(goog.ui.Component.State.OPENED)&&this.updateAriaState(b,goog.ui.Component.State.OPENED,a.isOpen())};goog.ui.ControlRenderer.prototype.setAllowTextSelection=function(a,b){goog.style.setUnselectable(a,!b,!goog.userAgent.IE&&!goog.userAgent.OPERA)};goog.ui.ControlRenderer.prototype.setRightToLeft=function(a,b){this.enableClassName(a,this.getStructuralCssClass()+"-rtl",b)};
goog.ui.ControlRenderer.prototype.isFocusable=function(a){var b;return a.isSupportedState(goog.ui.Component.State.FOCUSED)&&(b=a.getKeyEventTarget())?goog.dom.isFocusableTabIndex(b):!1};goog.ui.ControlRenderer.prototype.setFocusable=function(a,b){var c;if(a.isSupportedState(goog.ui.Component.State.FOCUSED)&&(c=a.getKeyEventTarget())){if(!b&&a.isFocused()){try{c.blur()}catch(d){}a.isFocused()&&a.handleBlur(null)}goog.dom.isFocusableTabIndex(c)!=b&&goog.dom.setFocusableTabIndex(c,b)}};
goog.ui.ControlRenderer.prototype.setVisible=function(a,b){goog.style.showElement(a,b);a&&goog.a11y.aria.setState(a,goog.a11y.aria.State.HIDDEN,!b)};goog.ui.ControlRenderer.prototype.setState=function(a,b,c){var d=a.getElement();if(d){var e=this.getClassForState(b);e&&this.enableClassName(a,e,c);this.updateAriaState(d,b,c)}};
goog.ui.ControlRenderer.prototype.updateAriaState=function(a,b,c){goog.ui.ControlRenderer.ARIA_STATE_MAP_||(goog.ui.ControlRenderer.ARIA_STATE_MAP_=goog.object.create(goog.ui.Component.State.DISABLED,goog.a11y.aria.State.DISABLED,goog.ui.Component.State.SELECTED,goog.a11y.aria.State.SELECTED,goog.ui.Component.State.CHECKED,goog.a11y.aria.State.CHECKED,goog.ui.Component.State.OPENED,goog.a11y.aria.State.EXPANDED));if(b=goog.ui.ControlRenderer.ARIA_STATE_MAP_[b])goog.asserts.assert(a,"The element passed as a first parameter cannot be null."),
goog.a11y.aria.setState(a,b,c)};goog.ui.ControlRenderer.prototype.setContent=function(a,b){var c=this.getContentElement(a);if(c&&(goog.dom.removeChildren(c),b))if(goog.isString(b))goog.dom.setTextContent(c,b);else{var d=function(a){if(a){var b=goog.dom.getOwnerDocument(c);c.appendChild(goog.isString(a)?b.createTextNode(a):a)}};goog.isArray(b)?goog.array.forEach(b,d):!goog.isArrayLike(b)||"nodeType"in b?d(b):goog.array.forEach(goog.array.clone(b),d)}};
goog.ui.ControlRenderer.prototype.getKeyEventTarget=function(a){return a.getElement()};goog.ui.ControlRenderer.prototype.getCssClass=function(){return goog.ui.ControlRenderer.CSS_CLASS};goog.ui.ControlRenderer.prototype.getIe6ClassCombinations=function(){return[]};goog.ui.ControlRenderer.prototype.getStructuralCssClass=function(){return this.getCssClass()};
goog.ui.ControlRenderer.prototype.getClassNames=function(a){var b=this.getCssClass(),c=[b],d=this.getStructuralCssClass();d!=b&&c.push(d);b=this.getClassNamesForState(a.getState());c.push.apply(c,b);(a=a.getExtraClassNames())&&c.push.apply(c,a);goog.userAgent.IE&&!goog.userAgent.isVersion("7")&&c.push.apply(c,this.getAppliedCombinedClassNames_(c));return c};
goog.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_=function(a,b){var c=[];b&&(a=a.concat([b]));goog.array.forEach(this.getIe6ClassCombinations(),function(d){!goog.array.every(d,goog.partial(goog.array.contains,a))||b&&!goog.array.contains(d,b)||c.push(d.join("_"))});return c};goog.ui.ControlRenderer.prototype.getClassNamesForState=function(a){for(var b=[];a;){var c=a&-a;b.push(this.getClassForState(c));a&=~c}return b};
goog.ui.ControlRenderer.prototype.getClassForState=function(a){this.classByState_||this.createClassByStateMap_();return this.classByState_[a]};goog.ui.ControlRenderer.prototype.getStateFromClass=function(a){this.stateByClass_||this.createStateByClassMap_();a=parseInt(this.stateByClass_[a],10);return isNaN(a)?0:a};
goog.ui.ControlRenderer.prototype.createClassByStateMap_=function(){var a=this.getStructuralCssClass();this.classByState_=goog.object.create(goog.ui.Component.State.DISABLED,a+"-disabled",goog.ui.Component.State.HOVER,a+"-hover",goog.ui.Component.State.ACTIVE,a+"-active",goog.ui.Component.State.SELECTED,a+"-selected",goog.ui.Component.State.CHECKED,a+"-checked",goog.ui.Component.State.FOCUSED,a+"-focused",goog.ui.Component.State.OPENED,a+"-open")};
goog.ui.ControlRenderer.prototype.createStateByClassMap_=function(){this.classByState_||this.createClassByStateMap_();this.stateByClass_=goog.object.transpose(this.classByState_)};goog.ui.ButtonRenderer=function(){goog.ui.ControlRenderer.call(this)};goog.inherits(goog.ui.ButtonRenderer,goog.ui.ControlRenderer);goog.addSingletonGetter(goog.ui.ButtonRenderer);goog.ui.ButtonRenderer.CSS_CLASS="goog-button";goog.ui.ButtonRenderer.prototype.getAriaRole=function(){return goog.a11y.aria.Role.BUTTON};
goog.ui.ButtonRenderer.prototype.updateAriaState=function(a,b,c){b==goog.ui.Component.State.CHECKED?(goog.asserts.assert(a,"The button DOM element cannot be null."),goog.a11y.aria.setState(a,goog.a11y.aria.State.PRESSED,c)):goog.ui.ButtonRenderer.superClass_.updateAriaState.call(this,a,b,c)};
goog.ui.ButtonRenderer.prototype.createDom=function(a){var b=goog.ui.ButtonRenderer.superClass_.createDom.call(this,a),c=a.getTooltip();c&&this.setTooltip(b,c);(c=a.getValue())&&this.setValue(b,c);a.isSupportedState(goog.ui.Component.State.CHECKED)&&this.updateAriaState(b,goog.ui.Component.State.CHECKED,a.isChecked());return b};
goog.ui.ButtonRenderer.prototype.decorate=function(a,b){b=goog.ui.ButtonRenderer.superClass_.decorate.call(this,a,b);a.setValueInternal(this.getValue(b));a.setTooltipInternal(this.getTooltip(b));a.isSupportedState(goog.ui.Component.State.CHECKED)&&this.updateAriaState(b,goog.ui.Component.State.CHECKED,a.isChecked());return b};goog.ui.ButtonRenderer.prototype.getValue=goog.nullFunction;goog.ui.ButtonRenderer.prototype.setValue=goog.nullFunction;goog.ui.ButtonRenderer.prototype.getTooltip=function(a){return a.title};
goog.ui.ButtonRenderer.prototype.setTooltip=function(a,b){a&&(a.title=b||"")};goog.ui.ButtonRenderer.prototype.setCollapsed=function(a,b){var c=a.isRightToLeft(),d=this.getStructuralCssClass()+"-collapse-left",e=this.getStructuralCssClass()+"-collapse-right";a.enableClassName(c?e:d,!!(b&goog.ui.ButtonSide.START));a.enableClassName(c?d:e,!!(b&goog.ui.ButtonSide.END))};goog.ui.ButtonRenderer.prototype.getCssClass=function(){return goog.ui.ButtonRenderer.CSS_CLASS};goog.ui.INLINE_BLOCK_CLASSNAME="goog-inline-block";goog.ui.CustomButtonRenderer=function(){goog.ui.ButtonRenderer.call(this)};goog.inherits(goog.ui.CustomButtonRenderer,goog.ui.ButtonRenderer);goog.addSingletonGetter(goog.ui.CustomButtonRenderer);goog.ui.CustomButtonRenderer.CSS_CLASS="goog-custom-button";
goog.ui.CustomButtonRenderer.prototype.createDom=function(a){var b=this.getClassNames(a),b={"class":goog.ui.INLINE_BLOCK_CLASSNAME+" "+b.join(" "),title:a.getTooltip()||""},b=a.getDomHelper().createDom("div",b,this.createButton(a.getContent(),a.getDomHelper()));this.setAriaStates(a,b);return b};goog.ui.CustomButtonRenderer.prototype.getAriaRole=function(){return goog.a11y.aria.Role.BUTTON};goog.ui.CustomButtonRenderer.prototype.getContentElement=function(a){return a&&a.firstChild.firstChild};
goog.ui.CustomButtonRenderer.prototype.createButton=function(a,b){return b.createDom("div",goog.ui.INLINE_BLOCK_CLASSNAME+" "+(this.getCssClass()+"-outer-box"),b.createDom("div",goog.ui.INLINE_BLOCK_CLASSNAME+" "+(this.getCssClass()+"-inner-box"),a))};goog.ui.CustomButtonRenderer.prototype.canDecorate=function(a){return"DIV"==a.tagName};
goog.ui.CustomButtonRenderer.prototype.hasBoxStructure=function(a,b){var c=a.getDomHelper().getFirstElementChild(b),d=this.getCssClass()+"-outer-box";return c&&goog.dom.classes.has(c,d)&&(c=a.getDomHelper().getFirstElementChild(c),d=this.getCssClass()+"-inner-box",c&&goog.dom.classes.has(c,d))?!0:!1};
goog.ui.CustomButtonRenderer.prototype.decorate=function(a,b){goog.ui.CustomButtonRenderer.trimTextNodes_(b,!0);goog.ui.CustomButtonRenderer.trimTextNodes_(b,!1);this.hasBoxStructure(a,b)||b.appendChild(this.createButton(b.childNodes,a.getDomHelper()));goog.dom.classes.add(b,goog.ui.INLINE_BLOCK_CLASSNAME,this.getCssClass());return goog.ui.CustomButtonRenderer.superClass_.decorate.call(this,a,b)};goog.ui.CustomButtonRenderer.prototype.getCssClass=function(){return goog.ui.CustomButtonRenderer.CSS_CLASS};
goog.ui.CustomButtonRenderer.trimTextNodes_=function(a,b){if(a)for(var c=b?a.firstChild:a.lastChild,d;c&&c.parentNode==a;){d=b?c.nextSibling:c.previousSibling;if(c.nodeType==goog.dom.NodeType.TEXT){var e=c.nodeValue;if(""==goog.string.trim(e))a.removeChild(c);else{c.nodeValue=b?goog.string.trimLeft(e):goog.string.trimRight(e);break}}else break;c=d}};goog.events.KeyCodes={WIN_KEY_FF_LINUX:0,MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,
X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SCROLL_LOCK:145,FIRST_MEDIA_KEY:166,LAST_MEDIA_KEY:183,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,
SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,PHANTOM:255};
goog.events.KeyCodes.isTextModifyingKeyEvent=function(a){if(a.altKey&&!a.ctrlKey||a.metaKey||a.keyCode>=goog.events.KeyCodes.F1&&a.keyCode<=goog.events.KeyCodes.F12)return!1;switch(a.keyCode){case goog.events.KeyCodes.ALT:case goog.events.KeyCodes.CAPS_LOCK:case goog.events.KeyCodes.CONTEXT_MENU:case goog.events.KeyCodes.CTRL:case goog.events.KeyCodes.DOWN:case goog.events.KeyCodes.END:case goog.events.KeyCodes.ESC:case goog.events.KeyCodes.HOME:case goog.events.KeyCodes.INSERT:case goog.events.KeyCodes.LEFT:case goog.events.KeyCodes.MAC_FF_META:case goog.events.KeyCodes.META:case goog.events.KeyCodes.NUMLOCK:case goog.events.KeyCodes.NUM_CENTER:case goog.events.KeyCodes.PAGE_DOWN:case goog.events.KeyCodes.PAGE_UP:case goog.events.KeyCodes.PAUSE:case goog.events.KeyCodes.PHANTOM:case goog.events.KeyCodes.PRINT_SCREEN:case goog.events.KeyCodes.RIGHT:case goog.events.KeyCodes.SCROLL_LOCK:case goog.events.KeyCodes.SHIFT:case goog.events.KeyCodes.UP:case goog.events.KeyCodes.WIN_KEY:case goog.events.KeyCodes.WIN_KEY_RIGHT:return!1;case goog.events.KeyCodes.WIN_KEY_FF_LINUX:return!goog.userAgent.GECKO;
default:return a.keyCode<goog.events.KeyCodes.FIRST_MEDIA_KEY||a.keyCode>goog.events.KeyCodes.LAST_MEDIA_KEY}};
goog.events.KeyCodes.firesKeyPressEvent=function(a,b,c,d,e){if(!(goog.userAgent.IE||goog.userAgent.WEBKIT&&goog.userAgent.isVersion("525")))return!0;if(goog.userAgent.MAC&&e)return goog.events.KeyCodes.isCharacterKey(a);if(e&&!d||!c&&(b==goog.events.KeyCodes.CTRL||b==goog.events.KeyCodes.ALT||goog.userAgent.MAC&&b==goog.events.KeyCodes.META))return!1;if(goog.userAgent.WEBKIT&&d&&c)switch(a){case goog.events.KeyCodes.BACKSLASH:case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:case goog.events.KeyCodes.TILDE:case goog.events.KeyCodes.SEMICOLON:case goog.events.KeyCodes.DASH:case goog.events.KeyCodes.EQUALS:case goog.events.KeyCodes.COMMA:case goog.events.KeyCodes.PERIOD:case goog.events.KeyCodes.SLASH:case goog.events.KeyCodes.APOSTROPHE:case goog.events.KeyCodes.SINGLE_QUOTE:return!1}if(goog.userAgent.IE&&d&&
b==a)return!1;switch(a){case goog.events.KeyCodes.ENTER:return!(goog.userAgent.IE&&goog.userAgent.isDocumentMode(9));case goog.events.KeyCodes.ESC:return!goog.userAgent.WEBKIT}return goog.events.KeyCodes.isCharacterKey(a)};
goog.events.KeyCodes.isCharacterKey=function(a){if(a>=goog.events.KeyCodes.ZERO&&a<=goog.events.KeyCodes.NINE||a>=goog.events.KeyCodes.NUM_ZERO&&a<=goog.events.KeyCodes.NUM_MULTIPLY||a>=goog.events.KeyCodes.A&&a<=goog.events.KeyCodes.Z||goog.userAgent.WEBKIT&&0==a)return!0;switch(a){case goog.events.KeyCodes.SPACE:case goog.events.KeyCodes.QUESTION_MARK:case goog.events.KeyCodes.NUM_PLUS:case goog.events.KeyCodes.NUM_MINUS:case goog.events.KeyCodes.NUM_PERIOD:case goog.events.KeyCodes.NUM_DIVISION:case goog.events.KeyCodes.SEMICOLON:case goog.events.KeyCodes.FF_SEMICOLON:case goog.events.KeyCodes.DASH:case goog.events.KeyCodes.EQUALS:case goog.events.KeyCodes.FF_EQUALS:case goog.events.KeyCodes.COMMA:case goog.events.KeyCodes.PERIOD:case goog.events.KeyCodes.SLASH:case goog.events.KeyCodes.APOSTROPHE:case goog.events.KeyCodes.SINGLE_QUOTE:case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:case goog.events.KeyCodes.BACKSLASH:case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:return!0;default:return!1}};
goog.events.KeyCodes.normalizeGeckoKeyCode=function(a){switch(a){case goog.events.KeyCodes.FF_EQUALS:return goog.events.KeyCodes.EQUALS;case goog.events.KeyCodes.FF_SEMICOLON:return goog.events.KeyCodes.SEMICOLON;case goog.events.KeyCodes.MAC_FF_META:return goog.events.KeyCodes.META;case goog.events.KeyCodes.WIN_KEY_FF_LINUX:return goog.events.KeyCodes.WIN_KEY;default:return a}};goog.events.KeyHandler=function(a,b){goog.events.EventTarget.call(this);a&&this.attach(a,b)};goog.inherits(goog.events.KeyHandler,goog.events.EventTarget);goog.events.KeyHandler.prototype.element_=null;goog.events.KeyHandler.prototype.keyPressKey_=null;goog.events.KeyHandler.prototype.keyDownKey_=null;goog.events.KeyHandler.prototype.keyUpKey_=null;goog.events.KeyHandler.prototype.lastKey_=-1;goog.events.KeyHandler.prototype.keyCode_=-1;goog.events.KeyHandler.prototype.altKey_=!1;
goog.events.KeyHandler.EventType={KEY:"key"};
goog.events.KeyHandler.safariKey_={3:goog.events.KeyCodes.ENTER,12:goog.events.KeyCodes.NUMLOCK,63232:goog.events.KeyCodes.UP,63233:goog.events.KeyCodes.DOWN,63234:goog.events.KeyCodes.LEFT,63235:goog.events.KeyCodes.RIGHT,63236:goog.events.KeyCodes.F1,63237:goog.events.KeyCodes.F2,63238:goog.events.KeyCodes.F3,63239:goog.events.KeyCodes.F4,63240:goog.events.KeyCodes.F5,63241:goog.events.KeyCodes.F6,63242:goog.events.KeyCodes.F7,63243:goog.events.KeyCodes.F8,63244:goog.events.KeyCodes.F9,63245:goog.events.KeyCodes.F10,
63246:goog.events.KeyCodes.F11,63247:goog.events.KeyCodes.F12,63248:goog.events.KeyCodes.PRINT_SCREEN,63272:goog.events.KeyCodes.DELETE,63273:goog.events.KeyCodes.HOME,63275:goog.events.KeyCodes.END,63276:goog.events.KeyCodes.PAGE_UP,63277:goog.events.KeyCodes.PAGE_DOWN,63289:goog.events.KeyCodes.NUMLOCK,63302:goog.events.KeyCodes.INSERT};
goog.events.KeyHandler.keyIdentifier_={Up:goog.events.KeyCodes.UP,Down:goog.events.KeyCodes.DOWN,Left:goog.events.KeyCodes.LEFT,Right:goog.events.KeyCodes.RIGHT,Enter:goog.events.KeyCodes.ENTER,F1:goog.events.KeyCodes.F1,F2:goog.events.KeyCodes.F2,F3:goog.events.KeyCodes.F3,F4:goog.events.KeyCodes.F4,F5:goog.events.KeyCodes.F5,F6:goog.events.KeyCodes.F6,F7:goog.events.KeyCodes.F7,F8:goog.events.KeyCodes.F8,F9:goog.events.KeyCodes.F9,F10:goog.events.KeyCodes.F10,F11:goog.events.KeyCodes.F11,F12:goog.events.KeyCodes.F12,
"U+007F":goog.events.KeyCodes.DELETE,Home:goog.events.KeyCodes.HOME,End:goog.events.KeyCodes.END,PageUp:goog.events.KeyCodes.PAGE_UP,PageDown:goog.events.KeyCodes.PAGE_DOWN,Insert:goog.events.KeyCodes.INSERT};goog.events.KeyHandler.USES_KEYDOWN_=goog.userAgent.IE||goog.userAgent.WEBKIT&&goog.userAgent.isVersion("525");goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_=goog.userAgent.MAC&&goog.userAgent.GECKO;
goog.events.KeyHandler.prototype.handleKeyDown_=function(a){goog.userAgent.WEBKIT&&(this.lastKey_==goog.events.KeyCodes.CTRL&&!a.ctrlKey||this.lastKey_==goog.events.KeyCodes.ALT&&!a.altKey||goog.userAgent.MAC&&this.lastKey_==goog.events.KeyCodes.META&&!a.metaKey)&&(this.keyCode_=this.lastKey_=-1);-1==this.lastKey_&&(a.ctrlKey&&a.keyCode!=goog.events.KeyCodes.CTRL?this.lastKey_=goog.events.KeyCodes.CTRL:a.altKey&&a.keyCode!=goog.events.KeyCodes.ALT?this.lastKey_=goog.events.KeyCodes.ALT:a.metaKey&&
a.keyCode!=goog.events.KeyCodes.META&&(this.lastKey_=goog.events.KeyCodes.META));goog.events.KeyHandler.USES_KEYDOWN_&&!goog.events.KeyCodes.firesKeyPressEvent(a.keyCode,this.lastKey_,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.keyCode_=goog.userAgent.GECKO?goog.events.KeyCodes.normalizeGeckoKeyCode(a.keyCode):a.keyCode,goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_&&(this.altKey_=a.altKey))};goog.events.KeyHandler.prototype.resetState=function(){this.keyCode_=this.lastKey_=-1};
goog.events.KeyHandler.prototype.handleKeyup_=function(a){this.resetState();this.altKey_=a.altKey};
goog.events.KeyHandler.prototype.handleEvent=function(a){var b=a.getBrowserEvent(),c,d,e=b.altKey;goog.userAgent.IE&&a.type==goog.events.EventType.KEYPRESS?(c=this.keyCode_,d=c!=goog.events.KeyCodes.ENTER&&c!=goog.events.KeyCodes.ESC?b.keyCode:0):goog.userAgent.WEBKIT&&a.type==goog.events.EventType.KEYPRESS?(c=this.keyCode_,d=0<=b.charCode&&63232>b.charCode&&goog.events.KeyCodes.isCharacterKey(c)?b.charCode:0):goog.userAgent.OPERA?(c=this.keyCode_,d=goog.events.KeyCodes.isCharacterKey(c)?b.keyCode:
0):(c=b.keyCode||this.keyCode_,d=b.charCode||0,goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_&&(e=this.altKey_),goog.userAgent.MAC&&d==goog.events.KeyCodes.QUESTION_MARK&&c==goog.events.KeyCodes.WIN_KEY&&(c=goog.events.KeyCodes.SLASH));var f=c,g=b.keyIdentifier;c?63232<=c&&c in goog.events.KeyHandler.safariKey_?f=goog.events.KeyHandler.safariKey_[c]:25==c&&a.shiftKey&&(f=9):g&&g in goog.events.KeyHandler.keyIdentifier_&&(f=goog.events.KeyHandler.keyIdentifier_[g]);a=f==this.lastKey_;this.lastKey_=
f;b=new goog.events.KeyEvent(f,d,a,b);b.altKey=e;this.dispatchEvent(b)};goog.events.KeyHandler.prototype.getElement=function(){return this.element_};
goog.events.KeyHandler.prototype.attach=function(a,b){this.keyUpKey_&&this.detach();this.element_=a;this.keyPressKey_=goog.events.listen(this.element_,goog.events.EventType.KEYPRESS,this,b);this.keyDownKey_=goog.events.listen(this.element_,goog.events.EventType.KEYDOWN,this.handleKeyDown_,b,this);this.keyUpKey_=goog.events.listen(this.element_,goog.events.EventType.KEYUP,this.handleKeyup_,b,this)};
goog.events.KeyHandler.prototype.detach=function(){this.keyPressKey_&&(goog.events.unlistenByKey(this.keyPressKey_),goog.events.unlistenByKey(this.keyDownKey_),goog.events.unlistenByKey(this.keyUpKey_),this.keyUpKey_=this.keyDownKey_=this.keyPressKey_=null);this.element_=null;this.keyCode_=this.lastKey_=-1};goog.events.KeyHandler.prototype.disposeInternal=function(){goog.events.KeyHandler.superClass_.disposeInternal.call(this);this.detach()};
goog.events.KeyEvent=function(a,b,c,d){goog.events.BrowserEvent.call(this,d);this.type=goog.events.KeyHandler.EventType.KEY;this.keyCode=a;this.charCode=b;this.repeat=c};goog.inherits(goog.events.KeyEvent,goog.events.BrowserEvent);goog.ui.registry={};goog.ui.registry.getDefaultRenderer=function(a){for(var b;a;){b=goog.getUid(a);if(b=goog.ui.registry.defaultRenderers_[b])break;a=a.superClass_?a.superClass_.constructor:null}return b?goog.isFunction(b.getInstance)?b.getInstance():new b:null};
goog.ui.registry.setDefaultRenderer=function(a,b){if(!goog.isFunction(a))throw Error("Invalid component class "+a);if(!goog.isFunction(b))throw Error("Invalid renderer class "+b);var c=goog.getUid(a);goog.ui.registry.defaultRenderers_[c]=b};goog.ui.registry.getDecoratorByClassName=function(a){return a in goog.ui.registry.decoratorFunctions_?goog.ui.registry.decoratorFunctions_[a]():null};
goog.ui.registry.setDecoratorByClassName=function(a,b){if(!a)throw Error("Invalid class name "+a);if(!goog.isFunction(b))throw Error("Invalid decorator function "+b);goog.ui.registry.decoratorFunctions_[a]=b};goog.ui.registry.getDecorator=function(a){for(var b=goog.dom.classes.get(a),c=0,d=b.length;c<d;c++)if(a=goog.ui.registry.getDecoratorByClassName(b[c]))return a;return null};goog.ui.registry.reset=function(){goog.ui.registry.defaultRenderers_={};goog.ui.registry.decoratorFunctions_={}};
goog.ui.registry.defaultRenderers_={};goog.ui.registry.decoratorFunctions_={};goog.ui.decorate=function(a){var b=goog.ui.registry.getDecorator(a);b&&b.decorate(a);return b};goog.ui.Control=function(a,b,c){goog.ui.Component.call(this,c);this.renderer_=b||goog.ui.registry.getDefaultRenderer(this.constructor);this.setContentInternal(a)};goog.inherits(goog.ui.Control,goog.ui.Component);goog.ui.Control.registerDecorator=goog.ui.registry.setDecoratorByClassName;goog.ui.Control.getDecorator=goog.ui.registry.getDecorator;goog.ui.Control.decorate=goog.ui.decorate;goog.ui.Control.prototype.content_=null;goog.ui.Control.prototype.state_=0;
goog.ui.Control.prototype.supportedStates_=goog.ui.Component.State.DISABLED|goog.ui.Component.State.HOVER|goog.ui.Component.State.ACTIVE|goog.ui.Component.State.FOCUSED;goog.ui.Control.prototype.autoStates_=goog.ui.Component.State.ALL;goog.ui.Control.prototype.statesWithTransitionEvents_=0;goog.ui.Control.prototype.visible_=!0;goog.ui.Control.prototype.extraClassNames_=null;goog.ui.Control.prototype.handleMouseEvents_=!0;goog.ui.Control.prototype.allowTextSelection_=!1;
goog.ui.Control.prototype.preferredAriaRole_=null;goog.ui.Control.prototype.isHandleMouseEvents=function(){return this.handleMouseEvents_};goog.ui.Control.prototype.setHandleMouseEvents=function(a){this.isInDocument()&&a!=this.handleMouseEvents_&&this.enableMouseEventHandling_(a);this.handleMouseEvents_=a};goog.ui.Control.prototype.getKeyEventTarget=function(){return this.renderer_.getKeyEventTarget(this)};
goog.ui.Control.prototype.getKeyHandler=function(){return this.keyHandler_||(this.keyHandler_=new goog.events.KeyHandler)};goog.ui.Control.prototype.getRenderer=function(){return this.renderer_};goog.ui.Control.prototype.setRenderer=function(a){if(this.isInDocument())throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.getElement()&&this.setElementInternal(null);this.renderer_=a};goog.ui.Control.prototype.getExtraClassNames=function(){return this.extraClassNames_};
goog.ui.Control.prototype.addClassName=function(a){a&&(this.extraClassNames_?goog.array.contains(this.extraClassNames_,a)||this.extraClassNames_.push(a):this.extraClassNames_=[a],this.renderer_.enableExtraClassName(this,a,!0))};goog.ui.Control.prototype.removeClassName=function(a){a&&this.extraClassNames_&&(goog.array.remove(this.extraClassNames_,a),0==this.extraClassNames_.length&&(this.extraClassNames_=null),this.renderer_.enableExtraClassName(this,a,!1))};
goog.ui.Control.prototype.enableClassName=function(a,b){b?this.addClassName(a):this.removeClassName(a)};goog.ui.Control.prototype.createDom=function(){var a=this.renderer_.createDom(this);this.setElementInternal(a);this.renderer_.setAriaRole(a,this.getPreferredAriaRole());this.isAllowTextSelection()||this.renderer_.setAllowTextSelection(a,!1);this.isVisible()||this.renderer_.setVisible(a,!1)};goog.ui.Control.prototype.getPreferredAriaRole=function(){return this.preferredAriaRole_};
goog.ui.Control.prototype.setPreferredAriaRole=function(a){this.preferredAriaRole_=a};goog.ui.Control.prototype.getContentElement=function(){return this.renderer_.getContentElement(this.getElement())};goog.ui.Control.prototype.canDecorate=function(a){return this.renderer_.canDecorate(a)};
goog.ui.Control.prototype.decorateInternal=function(a){a=this.renderer_.decorate(this,a);this.setElementInternal(a);this.renderer_.setAriaRole(a,this.getPreferredAriaRole());this.isAllowTextSelection()||this.renderer_.setAllowTextSelection(a,!1);this.visible_="none"!=a.style.display};
goog.ui.Control.prototype.enterDocument=function(){goog.ui.Control.superClass_.enterDocument.call(this);this.renderer_.initializeDom(this);if(this.supportedStates_&~goog.ui.Component.State.DISABLED&&(this.isHandleMouseEvents()&&this.enableMouseEventHandling_(!0),this.isSupportedState(goog.ui.Component.State.FOCUSED))){var a=this.getKeyEventTarget();if(a){var b=this.getKeyHandler();b.attach(a);this.getHandler().listen(b,goog.events.KeyHandler.EventType.KEY,this.handleKeyEvent).listen(a,goog.events.EventType.FOCUS,
this.handleFocus).listen(a,goog.events.EventType.BLUR,this.handleBlur)}}};
goog.ui.Control.prototype.enableMouseEventHandling_=function(a){var b=this.getHandler(),c=this.getElement();a?(b.listen(c,goog.events.EventType.MOUSEOVER,this.handleMouseOver).listen(c,goog.events.EventType.MOUSEDOWN,this.handleMouseDown).listen(c,goog.events.EventType.MOUSEUP,this.handleMouseUp).listen(c,goog.events.EventType.MOUSEOUT,this.handleMouseOut),this.handleContextMenu!=goog.nullFunction&&b.listen(c,goog.events.EventType.CONTEXTMENU,this.handleContextMenu),goog.userAgent.IE&&b.listen(c,
goog.events.EventType.DBLCLICK,this.handleDblClick)):(b.unlisten(c,goog.events.EventType.MOUSEOVER,this.handleMouseOver).unlisten(c,goog.events.EventType.MOUSEDOWN,this.handleMouseDown).unlisten(c,goog.events.EventType.MOUSEUP,this.handleMouseUp).unlisten(c,goog.events.EventType.MOUSEOUT,this.handleMouseOut),this.handleContextMenu!=goog.nullFunction&&b.unlisten(c,goog.events.EventType.CONTEXTMENU,this.handleContextMenu),goog.userAgent.IE&&b.unlisten(c,goog.events.EventType.DBLCLICK,this.handleDblClick))};
goog.ui.Control.prototype.exitDocument=function(){goog.ui.Control.superClass_.exitDocument.call(this);this.keyHandler_&&this.keyHandler_.detach();this.isVisible()&&this.isEnabled()&&this.renderer_.setFocusable(this,!1)};goog.ui.Control.prototype.disposeInternal=function(){goog.ui.Control.superClass_.disposeInternal.call(this);this.keyHandler_&&(this.keyHandler_.dispose(),delete this.keyHandler_);delete this.renderer_;this.extraClassNames_=this.content_=null};goog.ui.Control.prototype.getContent=function(){return this.content_};
goog.ui.Control.prototype.setContent=function(a){this.renderer_.setContent(this.getElement(),a);this.setContentInternal(a)};goog.ui.Control.prototype.setContentInternal=function(a){this.content_=a};goog.ui.Control.prototype.getCaption=function(){var a=this.getContent();if(!a)return"";a=goog.isString(a)?a:goog.isArray(a)?goog.array.map(a,goog.dom.getRawTextContent).join(""):goog.dom.getTextContent(a);return goog.string.collapseBreakingSpaces(a)};goog.ui.Control.prototype.setCaption=function(a){this.setContent(a)};
goog.ui.Control.prototype.setRightToLeft=function(a){goog.ui.Control.superClass_.setRightToLeft.call(this,a);var b=this.getElement();b&&this.renderer_.setRightToLeft(b,a)};goog.ui.Control.prototype.isAllowTextSelection=function(){return this.allowTextSelection_};goog.ui.Control.prototype.setAllowTextSelection=function(a){this.allowTextSelection_=a;var b=this.getElement();b&&this.renderer_.setAllowTextSelection(b,a)};goog.ui.Control.prototype.isVisible=function(){return this.visible_};
goog.ui.Control.prototype.setVisible=function(a,b){if(b||this.visible_!=a&&this.dispatchEvent(a?goog.ui.Component.EventType.SHOW:goog.ui.Component.EventType.HIDE)){var c=this.getElement();c&&this.renderer_.setVisible(c,a);this.isEnabled()&&this.renderer_.setFocusable(this,a);this.visible_=a;return!0}return!1};goog.ui.Control.prototype.isEnabled=function(){return!this.hasState(goog.ui.Component.State.DISABLED)};
goog.ui.Control.prototype.isParentDisabled_=function(){var a=this.getParent();return!!a&&"function"==typeof a.isEnabled&&!a.isEnabled()};goog.ui.Control.prototype.setEnabled=function(a){!this.isParentDisabled_()&&this.isTransitionAllowed(goog.ui.Component.State.DISABLED,!a)&&(a||(this.setActive(!1),this.setHighlighted(!1)),this.isVisible()&&this.renderer_.setFocusable(this,a),this.setState(goog.ui.Component.State.DISABLED,!a))};goog.ui.Control.prototype.isHighlighted=function(){return this.hasState(goog.ui.Component.State.HOVER)};
goog.ui.Control.prototype.setHighlighted=function(a){this.isTransitionAllowed(goog.ui.Component.State.HOVER,a)&&this.setState(goog.ui.Component.State.HOVER,a)};goog.ui.Control.prototype.isActive=function(){return this.hasState(goog.ui.Component.State.ACTIVE)};goog.ui.Control.prototype.setActive=function(a){this.isTransitionAllowed(goog.ui.Component.State.ACTIVE,a)&&this.setState(goog.ui.Component.State.ACTIVE,a)};goog.ui.Control.prototype.isSelected=function(){return this.hasState(goog.ui.Component.State.SELECTED)};
goog.ui.Control.prototype.setSelected=function(a){this.isTransitionAllowed(goog.ui.Component.State.SELECTED,a)&&this.setState(goog.ui.Component.State.SELECTED,a)};goog.ui.Control.prototype.isChecked=function(){return this.hasState(goog.ui.Component.State.CHECKED)};goog.ui.Control.prototype.setChecked=function(a){this.isTransitionAllowed(goog.ui.Component.State.CHECKED,a)&&this.setState(goog.ui.Component.State.CHECKED,a)};goog.ui.Control.prototype.isFocused=function(){return this.hasState(goog.ui.Component.State.FOCUSED)};
goog.ui.Control.prototype.setFocused=function(a){this.isTransitionAllowed(goog.ui.Component.State.FOCUSED,a)&&this.setState(goog.ui.Component.State.FOCUSED,a)};goog.ui.Control.prototype.isOpen=function(){return this.hasState(goog.ui.Component.State.OPENED)};goog.ui.Control.prototype.setOpen=function(a){this.isTransitionAllowed(goog.ui.Component.State.OPENED,a)&&this.setState(goog.ui.Component.State.OPENED,a)};goog.ui.Control.prototype.getState=function(){return this.state_};
goog.ui.Control.prototype.hasState=function(a){return!!(this.state_&a)};goog.ui.Control.prototype.setState=function(a,b){this.isSupportedState(a)&&b!=this.hasState(a)&&(this.renderer_.setState(this,a,b),this.state_=b?this.state_|a:this.state_&~a)};goog.ui.Control.prototype.setStateInternal=function(a){this.state_=a};goog.ui.Control.prototype.isSupportedState=function(a){return!!(this.supportedStates_&a)};
goog.ui.Control.prototype.setSupportedState=function(a,b){if(this.isInDocument()&&this.hasState(a)&&!b)throw Error(goog.ui.Component.Error.ALREADY_RENDERED);!b&&this.hasState(a)&&this.setState(a,!1);this.supportedStates_=b?this.supportedStates_|a:this.supportedStates_&~a};goog.ui.Control.prototype.isAutoState=function(a){return!!(this.autoStates_&a)&&this.isSupportedState(a)};goog.ui.Control.prototype.setAutoStates=function(a,b){this.autoStates_=b?this.autoStates_|a:this.autoStates_&~a};
goog.ui.Control.prototype.isDispatchTransitionEvents=function(a){return!!(this.statesWithTransitionEvents_&a)&&this.isSupportedState(a)};goog.ui.Control.prototype.setDispatchTransitionEvents=function(a,b){this.statesWithTransitionEvents_=b?this.statesWithTransitionEvents_|a:this.statesWithTransitionEvents_&~a};
goog.ui.Control.prototype.isTransitionAllowed=function(a,b){return this.isSupportedState(a)&&this.hasState(a)!=b&&(!(this.statesWithTransitionEvents_&a)||this.dispatchEvent(goog.ui.Component.getStateTransitionEvent(a,b)))&&!this.isDisposed()};goog.ui.Control.prototype.handleMouseOver=function(a){!goog.ui.Control.isMouseEventWithinElement_(a,this.getElement())&&this.dispatchEvent(goog.ui.Component.EventType.ENTER)&&this.isEnabled()&&this.isAutoState(goog.ui.Component.State.HOVER)&&this.setHighlighted(!0)};
goog.ui.Control.prototype.handleMouseOut=function(a){!goog.ui.Control.isMouseEventWithinElement_(a,this.getElement())&&this.dispatchEvent(goog.ui.Component.EventType.LEAVE)&&(this.isAutoState(goog.ui.Component.State.ACTIVE)&&this.setActive(!1),this.isAutoState(goog.ui.Component.State.HOVER)&&this.setHighlighted(!1))};goog.ui.Control.prototype.handleContextMenu=goog.nullFunction;goog.ui.Control.isMouseEventWithinElement_=function(a,b){return!!a.relatedTarget&&goog.dom.contains(b,a.relatedTarget)};
goog.ui.Control.prototype.handleMouseDown=function(a){this.isEnabled()&&(this.isAutoState(goog.ui.Component.State.HOVER)&&this.setHighlighted(!0),a.isMouseActionButton()&&(this.isAutoState(goog.ui.Component.State.ACTIVE)&&this.setActive(!0),this.renderer_.isFocusable(this)&&this.getKeyEventTarget().focus()));!this.isAllowTextSelection()&&a.isMouseActionButton()&&a.preventDefault()};
goog.ui.Control.prototype.handleMouseUp=function(a){this.isEnabled()&&(this.isAutoState(goog.ui.Component.State.HOVER)&&this.setHighlighted(!0),this.isActive()&&this.performActionInternal(a)&&this.isAutoState(goog.ui.Component.State.ACTIVE)&&this.setActive(!1))};goog.ui.Control.prototype.handleDblClick=function(a){this.isEnabled()&&this.performActionInternal(a)};
goog.ui.Control.prototype.performActionInternal=function(a){this.isAutoState(goog.ui.Component.State.CHECKED)&&this.setChecked(!this.isChecked());this.isAutoState(goog.ui.Component.State.SELECTED)&&this.setSelected(!0);this.isAutoState(goog.ui.Component.State.OPENED)&&this.setOpen(!this.isOpen());var b=new goog.events.Event(goog.ui.Component.EventType.ACTION,this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.platformModifierKey=a.platformModifierKey);return this.dispatchEvent(b)};
goog.ui.Control.prototype.handleFocus=function(a){this.isAutoState(goog.ui.Component.State.FOCUSED)&&this.setFocused(!0)};goog.ui.Control.prototype.handleBlur=function(a){this.isAutoState(goog.ui.Component.State.ACTIVE)&&this.setActive(!1);this.isAutoState(goog.ui.Component.State.FOCUSED)&&this.setFocused(!1)};goog.ui.Control.prototype.handleKeyEvent=function(a){return this.isVisible()&&this.isEnabled()&&this.handleKeyEventInternal(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
goog.ui.Control.prototype.handleKeyEventInternal=function(a){return a.keyCode==goog.events.KeyCodes.ENTER&&this.performActionInternal(a)};goog.ui.registry.setDefaultRenderer(goog.ui.Control,goog.ui.ControlRenderer);goog.ui.registry.setDecoratorByClassName(goog.ui.ControlRenderer.CSS_CLASS,function(){return new goog.ui.Control(null)});goog.ui.MenuSeparatorRenderer=function(){goog.ui.ControlRenderer.call(this)};goog.inherits(goog.ui.MenuSeparatorRenderer,goog.ui.ControlRenderer);goog.addSingletonGetter(goog.ui.MenuSeparatorRenderer);goog.ui.MenuSeparatorRenderer.CSS_CLASS="goog-menuseparator";goog.ui.MenuSeparatorRenderer.prototype.createDom=function(a){return a.getDomHelper().createDom("div",this.getCssClass())};
goog.ui.MenuSeparatorRenderer.prototype.decorate=function(a,b){b.id&&a.setId(b.id);if("HR"==b.tagName){var c=b;b=this.createDom(a);goog.dom.insertSiblingBefore(b,c);goog.dom.removeNode(c)}else goog.dom.classes.add(b,this.getCssClass());return b};goog.ui.MenuSeparatorRenderer.prototype.setContent=function(a,b){};goog.ui.MenuSeparatorRenderer.prototype.getCssClass=function(){return goog.ui.MenuSeparatorRenderer.CSS_CLASS};goog.ui.Separator=function(a,b){goog.ui.Control.call(this,null,a||goog.ui.MenuSeparatorRenderer.getInstance(),b);this.setSupportedState(goog.ui.Component.State.DISABLED,!1);this.setSupportedState(goog.ui.Component.State.HOVER,!1);this.setSupportedState(goog.ui.Component.State.ACTIVE,!1);this.setSupportedState(goog.ui.Component.State.FOCUSED,!1);this.setStateInternal(goog.ui.Component.State.DISABLED)};goog.inherits(goog.ui.Separator,goog.ui.Control);
goog.ui.Separator.prototype.enterDocument=function(){goog.ui.Separator.superClass_.enterDocument.call(this);var a=this.getElement();goog.asserts.assert(a,"The DOM element for the separator cannot be null.");goog.a11y.aria.setRole(a,"separator")};goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS,function(){return new goog.ui.Separator});goog.ui.ContainerRenderer=function(){};goog.addSingletonGetter(goog.ui.ContainerRenderer);goog.ui.ContainerRenderer.getCustomRenderer=function(a,b){var c=new a;c.getCssClass=function(){return b};return c};goog.ui.ContainerRenderer.CSS_CLASS="goog-container";goog.ui.ContainerRenderer.prototype.getAriaRole=function(){};goog.ui.ContainerRenderer.prototype.enableTabIndex=function(a,b){a&&(a.tabIndex=b?0:-1)};
goog.ui.ContainerRenderer.prototype.createDom=function(a){return a.getDomHelper().createDom("div",this.getClassNames(a).join(" "))};goog.ui.ContainerRenderer.prototype.getContentElement=function(a){return a};goog.ui.ContainerRenderer.prototype.canDecorate=function(a){return"DIV"==a.tagName};
goog.ui.ContainerRenderer.prototype.decorate=function(a,b){b.id&&a.setId(b.id);var c=this.getCssClass(),d=!1,e=goog.dom.classes.get(b);e&&goog.array.forEach(e,function(b){b==c?d=!0:b&&this.setStateFromClassName(a,b,c)},this);d||goog.dom.classes.add(b,c);this.decorateChildren(a,this.getContentElement(b));return b};
goog.ui.ContainerRenderer.prototype.setStateFromClassName=function(a,b,c){b==c+"-disabled"?a.setEnabled(!1):b==c+"-horizontal"?a.setOrientation(goog.ui.Container.Orientation.HORIZONTAL):b==c+"-vertical"&&a.setOrientation(goog.ui.Container.Orientation.VERTICAL)};
goog.ui.ContainerRenderer.prototype.decorateChildren=function(a,b,c){if(b){c=c||b.firstChild;for(var d;c&&c.parentNode==b;){d=c.nextSibling;if(c.nodeType==goog.dom.NodeType.ELEMENT){var e=this.getDecoratorForChild(c);e&&(e.setElementInternal(c),a.isEnabled()||e.setEnabled(!1),a.addChild(e),e.decorate(c))}else c.nodeValue&&""!=goog.string.trim(c.nodeValue)||b.removeChild(c);c=d}}};goog.ui.ContainerRenderer.prototype.getDecoratorForChild=function(a){return goog.ui.registry.getDecorator(a)};
goog.ui.ContainerRenderer.prototype.initializeDom=function(a){a=a.getElement();goog.asserts.assert(a,"The container DOM element cannot be null.");goog.style.setUnselectable(a,!0,goog.userAgent.GECKO);goog.userAgent.IE&&(a.hideFocus=!0);var b=this.getAriaRole();b&&goog.a11y.aria.setRole(a,b)};goog.ui.ContainerRenderer.prototype.getKeyEventTarget=function(a){return a.getElement()};goog.ui.ContainerRenderer.prototype.getCssClass=function(){return goog.ui.ContainerRenderer.CSS_CLASS};
goog.ui.ContainerRenderer.prototype.getClassNames=function(a){var b=this.getCssClass(),c=a.getOrientation()==goog.ui.Container.Orientation.HORIZONTAL,c=[b,c?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};goog.ui.ContainerRenderer.prototype.getDefaultOrientation=function(){return goog.ui.Container.Orientation.VERTICAL};goog.ui.Container=function(a,b,c){goog.ui.Component.call(this,c);this.renderer_=b||goog.ui.ContainerRenderer.getInstance();this.orientation_=a||this.renderer_.getDefaultOrientation()};goog.inherits(goog.ui.Container,goog.ui.Component);goog.ui.Container.EventType={AFTER_SHOW:"aftershow",AFTER_HIDE:"afterhide"};goog.ui.Container.Orientation={HORIZONTAL:"horizontal",VERTICAL:"vertical"};goog.ui.Container.prototype.keyEventTarget_=null;goog.ui.Container.prototype.keyHandler_=null;
goog.ui.Container.prototype.renderer_=null;goog.ui.Container.prototype.orientation_=null;goog.ui.Container.prototype.visible_=!0;goog.ui.Container.prototype.enabled_=!0;goog.ui.Container.prototype.focusable_=!0;goog.ui.Container.prototype.highlightedIndex_=-1;goog.ui.Container.prototype.openItem_=null;goog.ui.Container.prototype.mouseButtonPressed_=!1;goog.ui.Container.prototype.allowFocusableChildren_=!1;goog.ui.Container.prototype.openFollowsHighlight_=!0;
goog.ui.Container.prototype.childElementIdMap_=null;goog.ui.Container.prototype.getKeyEventTarget=function(){return this.keyEventTarget_||this.renderer_.getKeyEventTarget(this)};
goog.ui.Container.prototype.setKeyEventTarget=function(a){if(this.focusable_){var b=this.getKeyEventTarget(),c=this.isInDocument();this.keyEventTarget_=a;var d=this.getKeyEventTarget();c&&(this.keyEventTarget_=b,this.enableFocusHandling_(!1),this.keyEventTarget_=a,this.getKeyHandler().attach(d),this.enableFocusHandling_(!0))}else throw Error("Can't set key event target for container that doesn't support keyboard focus!");};
goog.ui.Container.prototype.getKeyHandler=function(){return this.keyHandler_||(this.keyHandler_=new goog.events.KeyHandler(this.getKeyEventTarget()))};goog.ui.Container.prototype.getRenderer=function(){return this.renderer_};goog.ui.Container.prototype.setRenderer=function(a){if(this.getElement())throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.renderer_=a};goog.ui.Container.prototype.createDom=function(){this.setElementInternal(this.renderer_.createDom(this))};
goog.ui.Container.prototype.getContentElement=function(){return this.renderer_.getContentElement(this.getElement())};goog.ui.Container.prototype.canDecorate=function(a){return this.renderer_.canDecorate(a)};goog.ui.Container.prototype.decorateInternal=function(a){this.setElementInternal(this.renderer_.decorate(this,a));"none"==a.style.display&&(this.visible_=!1)};
goog.ui.Container.prototype.enterDocument=function(){goog.ui.Container.superClass_.enterDocument.call(this);this.forEachChild(function(a){a.isInDocument()&&this.registerChildId_(a)},this);var a=this.getElement();this.renderer_.initializeDom(this);this.setVisible(this.visible_,!0);this.getHandler().listen(this,goog.ui.Component.EventType.ENTER,this.handleEnterItem).listen(this,goog.ui.Component.EventType.HIGHLIGHT,this.handleHighlightItem).listen(this,goog.ui.Component.EventType.UNHIGHLIGHT,this.handleUnHighlightItem).listen(this,
goog.ui.Component.EventType.OPEN,this.handleOpenItem).listen(this,goog.ui.Component.EventType.CLOSE,this.handleCloseItem).listen(a,goog.events.EventType.MOUSEDOWN,this.handleMouseDown).listen(goog.dom.getOwnerDocument(a),goog.events.EventType.MOUSEUP,this.handleDocumentMouseUp).listen(a,[goog.events.EventType.MOUSEDOWN,goog.events.EventType.MOUSEUP,goog.events.EventType.MOUSEOVER,goog.events.EventType.MOUSEOUT,goog.events.EventType.CONTEXTMENU],this.handleChildMouseEvents);this.isFocusable()&&this.enableFocusHandling_(!0)};
goog.ui.Container.prototype.enableFocusHandling_=function(a){var b=this.getHandler(),c=this.getKeyEventTarget();a?b.listen(c,goog.events.EventType.FOCUS,this.handleFocus).listen(c,goog.events.EventType.BLUR,this.handleBlur).listen(this.getKeyHandler(),goog.events.KeyHandler.EventType.KEY,this.handleKeyEvent):b.unlisten(c,goog.events.EventType.FOCUS,this.handleFocus).unlisten(c,goog.events.EventType.BLUR,this.handleBlur).unlisten(this.getKeyHandler(),goog.events.KeyHandler.EventType.KEY,this.handleKeyEvent)};
goog.ui.Container.prototype.exitDocument=function(){this.setHighlightedIndex(-1);this.openItem_&&this.openItem_.setOpen(!1);this.mouseButtonPressed_=!1;goog.ui.Container.superClass_.exitDocument.call(this)};goog.ui.Container.prototype.disposeInternal=function(){goog.ui.Container.superClass_.disposeInternal.call(this);this.keyHandler_&&(this.keyHandler_.dispose(),this.keyHandler_=null);this.renderer_=this.openItem_=this.childElementIdMap_=this.keyEventTarget_=null};
goog.ui.Container.prototype.handleEnterItem=function(a){return!0};
goog.ui.Container.prototype.handleHighlightItem=function(a){var b=this.indexOfChild(a.target);if(-1<b&&b!=this.highlightedIndex_){var c=this.getHighlighted();c&&c.setHighlighted(!1);this.highlightedIndex_=b;c=this.getHighlighted();this.isMouseButtonPressed()&&c.setActive(!0);this.openFollowsHighlight_&&this.openItem_&&c!=this.openItem_&&(c.isSupportedState(goog.ui.Component.State.OPENED)?c.setOpen(!0):this.openItem_.setOpen(!1))}b=this.getElement();goog.asserts.assert(b,"The DOM element for the container cannot be null.");
null!=a.target.getElement()&&goog.a11y.aria.setState(b,goog.a11y.aria.State.ACTIVEDESCENDANT,a.target.getElement().id)};goog.ui.Container.prototype.handleUnHighlightItem=function(a){a.target==this.getHighlighted()&&(this.highlightedIndex_=-1);a=this.getElement();goog.asserts.assert(a,"The DOM element for the container cannot be null.");goog.a11y.aria.setState(a,goog.a11y.aria.State.ACTIVEDESCENDANT,"")};
goog.ui.Container.prototype.handleOpenItem=function(a){(a=a.target)&&a!=this.openItem_&&a.getParent()==this&&(this.openItem_&&this.openItem_.setOpen(!1),this.openItem_=a)};goog.ui.Container.prototype.handleCloseItem=function(a){a.target==this.openItem_&&(this.openItem_=null)};goog.ui.Container.prototype.handleMouseDown=function(a){this.enabled_&&this.setMouseButtonPressed(!0);var b=this.getKeyEventTarget();b&&goog.dom.isFocusableTabIndex(b)?b.focus():a.preventDefault()};
goog.ui.Container.prototype.handleDocumentMouseUp=function(a){this.setMouseButtonPressed(!1)};goog.ui.Container.prototype.handleChildMouseEvents=function(a){var b=this.getOwnerControl(a.target);if(b)switch(a.type){case goog.events.EventType.MOUSEDOWN:b.handleMouseDown(a);break;case goog.events.EventType.MOUSEUP:b.handleMouseUp(a);break;case goog.events.EventType.MOUSEOVER:b.handleMouseOver(a);break;case goog.events.EventType.MOUSEOUT:b.handleMouseOut(a);break;case goog.events.EventType.CONTEXTMENU:b.handleContextMenu(a)}};
goog.ui.Container.prototype.getOwnerControl=function(a){if(this.childElementIdMap_)for(var b=this.getElement();a&&a!==b;){var c=a.id;if(c in this.childElementIdMap_)return this.childElementIdMap_[c];a=a.parentNode}return null};goog.ui.Container.prototype.handleFocus=function(a){};goog.ui.Container.prototype.handleBlur=function(a){this.setHighlightedIndex(-1);this.setMouseButtonPressed(!1);this.openItem_&&this.openItem_.setOpen(!1)};
goog.ui.Container.prototype.handleKeyEvent=function(a){return this.isEnabled()&&this.isVisible()&&(0!=this.getChildCount()||this.keyEventTarget_)&&this.handleKeyEventInternal(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
goog.ui.Container.prototype.handleKeyEventInternal=function(a){var b=this.getHighlighted();if(b&&"function"==typeof b.handleKeyEvent&&b.handleKeyEvent(a)||this.openItem_&&this.openItem_!=b&&"function"==typeof this.openItem_.handleKeyEvent&&this.openItem_.handleKeyEvent(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case goog.events.KeyCodes.ESC:if(this.isFocusable())this.getKeyEventTarget().blur();else return!1;break;case goog.events.KeyCodes.HOME:this.highlightFirst();
break;case goog.events.KeyCodes.END:this.highlightLast();break;case goog.events.KeyCodes.UP:if(this.orientation_==goog.ui.Container.Orientation.VERTICAL)this.highlightPrevious();else return!1;break;case goog.events.KeyCodes.LEFT:if(this.orientation_==goog.ui.Container.Orientation.HORIZONTAL)this.isRightToLeft()?this.highlightNext():this.highlightPrevious();else return!1;break;case goog.events.KeyCodes.DOWN:if(this.orientation_==goog.ui.Container.Orientation.VERTICAL)this.highlightNext();else return!1;
break;case goog.events.KeyCodes.RIGHT:if(this.orientation_==goog.ui.Container.Orientation.HORIZONTAL)this.isRightToLeft()?this.highlightPrevious():this.highlightNext();else return!1;break;default:return!1}return!0};goog.ui.Container.prototype.registerChildId_=function(a){var b=a.getElement(),b=b.id||(b.id=a.getId());this.childElementIdMap_||(this.childElementIdMap_={});this.childElementIdMap_[b]=a};
goog.ui.Container.prototype.addChild=function(a,b){goog.asserts.assertInstanceof(a,goog.ui.Control,"The child of a container must be a control");goog.ui.Container.superClass_.addChild.call(this,a,b)};
goog.ui.Container.prototype.addChildAt=function(a,b,c){a.setDispatchTransitionEvents(goog.ui.Component.State.HOVER,!0);a.setDispatchTransitionEvents(goog.ui.Component.State.OPENED,!0);!this.isFocusable()&&this.isFocusableChildrenAllowed()||a.setSupportedState(goog.ui.Component.State.FOCUSED,!1);a.setHandleMouseEvents(!1);goog.ui.Container.superClass_.addChildAt.call(this,a,b,c);a.isInDocument()&&this.isInDocument()&&this.registerChildId_(a);b<=this.highlightedIndex_&&this.highlightedIndex_++};
goog.ui.Container.prototype.removeChild=function(a,b){if(a=goog.isString(a)?this.getChild(a):a){var c=this.indexOfChild(a);-1!=c&&(c==this.highlightedIndex_?a.setHighlighted(!1):c<this.highlightedIndex_&&this.highlightedIndex_--);(c=a.getElement())&&c.id&&this.childElementIdMap_&&goog.object.remove(this.childElementIdMap_,c.id)}a=goog.ui.Container.superClass_.removeChild.call(this,a,b);a.setHandleMouseEvents(!0);return a};goog.ui.Container.prototype.getOrientation=function(){return this.orientation_};
goog.ui.Container.prototype.setOrientation=function(a){if(this.getElement())throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.orientation_=a};goog.ui.Container.prototype.isVisible=function(){return this.visible_};
goog.ui.Container.prototype.setVisible=function(a,b){if(b||this.visible_!=a&&this.dispatchEvent(a?goog.ui.Component.EventType.SHOW:goog.ui.Component.EventType.HIDE)){this.visible_=a;var c=this.getElement();c&&(goog.style.showElement(c,a),this.isFocusable()&&this.renderer_.enableTabIndex(this.getKeyEventTarget(),this.enabled_&&this.visible_),b||this.dispatchEvent(this.visible_?goog.ui.Container.EventType.AFTER_SHOW:goog.ui.Container.EventType.AFTER_HIDE));return!0}return!1};
goog.ui.Container.prototype.isEnabled=function(){return this.enabled_};
goog.ui.Container.prototype.setEnabled=function(a){this.enabled_!=a&&this.dispatchEvent(a?goog.ui.Component.EventType.ENABLE:goog.ui.Component.EventType.DISABLE)&&(a?(this.enabled_=!0,this.forEachChild(function(a){a.wasDisabled?delete a.wasDisabled:a.setEnabled(!0)})):(this.forEachChild(function(a){a.isEnabled()?a.setEnabled(!1):a.wasDisabled=!0}),this.enabled_=!1,this.setMouseButtonPressed(!1)),this.isFocusable()&&this.renderer_.enableTabIndex(this.getKeyEventTarget(),a&&this.visible_))};
goog.ui.Container.prototype.isFocusable=function(){return this.focusable_};goog.ui.Container.prototype.setFocusable=function(a){a!=this.focusable_&&this.isInDocument()&&this.enableFocusHandling_(a);this.focusable_=a;this.enabled_&&this.visible_&&this.renderer_.enableTabIndex(this.getKeyEventTarget(),a)};goog.ui.Container.prototype.isFocusableChildrenAllowed=function(){return this.allowFocusableChildren_};
goog.ui.Container.prototype.setFocusableChildrenAllowed=function(a){this.allowFocusableChildren_=a};goog.ui.Container.prototype.isOpenFollowsHighlight=function(){return this.openFollowsHighlight_};goog.ui.Container.prototype.setOpenFollowsHighlight=function(a){this.openFollowsHighlight_=a};goog.ui.Container.prototype.getHighlightedIndex=function(){return this.highlightedIndex_};
goog.ui.Container.prototype.setHighlightedIndex=function(a){(a=this.getChildAt(a))?a.setHighlighted(!0):-1<this.highlightedIndex_&&this.getHighlighted().setHighlighted(!1)};goog.ui.Container.prototype.setHighlighted=function(a){this.setHighlightedIndex(this.indexOfChild(a))};goog.ui.Container.prototype.getHighlighted=function(){return this.getChildAt(this.highlightedIndex_)};
goog.ui.Container.prototype.highlightFirst=function(){this.highlightHelper(function(a,b){return(a+1)%b},this.getChildCount()-1)};goog.ui.Container.prototype.highlightLast=function(){this.highlightHelper(function(a,b){a--;return 0>a?b-1:a},0)};goog.ui.Container.prototype.highlightNext=function(){this.highlightHelper(function(a,b){return(a+1)%b},this.highlightedIndex_)};goog.ui.Container.prototype.highlightPrevious=function(){this.highlightHelper(function(a,b){a--;return 0>a?b-1:a},this.highlightedIndex_)};
goog.ui.Container.prototype.highlightHelper=function(a,b){for(var c=0>b?this.indexOfChild(this.openItem_):b,d=this.getChildCount(),c=a.call(this,c,d),e=0;e<=d;){var f=this.getChildAt(c);if(f&&this.canHighlightItem(f))return this.setHighlightedIndexFromKeyEvent(c),!0;e++;c=a.call(this,c,d)}return!1};goog.ui.Container.prototype.canHighlightItem=function(a){return a.isVisible()&&a.isEnabled()&&a.isSupportedState(goog.ui.Component.State.HOVER)};
goog.ui.Container.prototype.setHighlightedIndexFromKeyEvent=function(a){this.setHighlightedIndex(a)};goog.ui.Container.prototype.getOpenItem=function(){return this.openItem_};goog.ui.Container.prototype.isMouseButtonPressed=function(){return this.mouseButtonPressed_};goog.ui.Container.prototype.setMouseButtonPressed=function(a){this.mouseButtonPressed_=a};goog.ui.MenuHeaderRenderer=function(){goog.ui.ControlRenderer.call(this)};goog.inherits(goog.ui.MenuHeaderRenderer,goog.ui.ControlRenderer);goog.addSingletonGetter(goog.ui.MenuHeaderRenderer);goog.ui.MenuHeaderRenderer.CSS_CLASS="goog-menuheader";goog.ui.MenuHeaderRenderer.prototype.getCssClass=function(){return goog.ui.MenuHeaderRenderer.CSS_CLASS};goog.ui.MenuHeader=function(a,b,c){goog.ui.Control.call(this,a,c||goog.ui.MenuHeaderRenderer.getInstance(),b);this.setSupportedState(goog.ui.Component.State.DISABLED,!1);this.setSupportedState(goog.ui.Component.State.HOVER,!1);this.setSupportedState(goog.ui.Component.State.ACTIVE,!1);this.setSupportedState(goog.ui.Component.State.FOCUSED,!1);this.setStateInternal(goog.ui.Component.State.DISABLED)};goog.inherits(goog.ui.MenuHeader,goog.ui.Control);
goog.ui.registry.setDecoratorByClassName(goog.ui.MenuHeaderRenderer.CSS_CLASS,function(){return new goog.ui.MenuHeader(null)});goog.dom.classlist={};goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST=!1;goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_=goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST||"undefined"!=typeof DOMTokenList;goog.dom.classlist.get=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a){return a.classList}:function(a){a=a.className;return goog.isString(a)&&a.match(/\S+/g)||[]};goog.dom.classlist.set=function(a,b){a.className=b};
goog.dom.classlist.contains=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a,b){goog.asserts.assert(!!a.classList);return a.classList.contains(b)}:function(a,b){return goog.array.contains(goog.dom.classlist.get(a),b)};goog.dom.classlist.add=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a,b){a.classList.add(b)}:function(a,b){goog.dom.classlist.contains(a,b)||(a.className+=0<a.className.length?" "+b:b)};
goog.dom.classlist.addAll=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a,b){goog.array.forEach(b,function(b){goog.dom.classlist.add(a,b)})}:function(a,b){var c={};goog.array.forEach(goog.dom.classlist.get(a),function(a){c[a]=!0});goog.array.forEach(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d};
goog.dom.classlist.remove=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a,b){a.classList.remove(b)}:function(a,b){goog.dom.classlist.contains(a,b)&&(a.className=goog.array.filter(goog.dom.classlist.get(a),function(a){return a!=b}).join(" "))};
goog.dom.classlist.removeAll=goog.dom.classlist.NATIVE_DOM_TOKEN_LIST_?function(a,b){goog.array.forEach(b,function(b){goog.dom.classlist.remove(a,b)})}:function(a,b){a.className=goog.array.filter(goog.dom.classlist.get(a),function(a){return!goog.array.contains(b,a)}).join(" ")};goog.dom.classlist.enable=function(a,b,c){c?goog.dom.classlist.add(a,b):goog.dom.classlist.remove(a,b)};
goog.dom.classlist.swap=function(a,b,c){return goog.dom.classlist.contains(a,b)?(goog.dom.classlist.remove(a,b),goog.dom.classlist.add(a,c),!0):!1};goog.dom.classlist.toggle=function(a,b){var c=!goog.dom.classlist.contains(a,b);goog.dom.classlist.enable(a,b,c);return c};goog.dom.classlist.addRemove=function(a,b,c){goog.dom.classlist.remove(a,b);goog.dom.classlist.add(a,c)};goog.ui.MenuItemRenderer=function(){goog.ui.ControlRenderer.call(this);this.classNameCache_=[]};goog.inherits(goog.ui.MenuItemRenderer,goog.ui.ControlRenderer);goog.addSingletonGetter(goog.ui.MenuItemRenderer);goog.ui.MenuItemRenderer.CSS_CLASS="goog-menuitem";goog.ui.MenuItemRenderer.CompositeCssClassIndex_={HOVER:0,CHECKBOX:1,CONTENT:2};
goog.ui.MenuItemRenderer.prototype.getCompositeCssClass_=function(a){var b=this.classNameCache_[a];if(!b){switch(a){case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:b=this.getStructuralCssClass()+"-highlight";break;case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:b=this.getStructuralCssClass()+"-checkbox";break;case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:b=this.getStructuralCssClass()+"-content"}this.classNameCache_[a]=b}return b};
goog.ui.MenuItemRenderer.prototype.getAriaRole=function(){return goog.a11y.aria.Role.MENU_ITEM};goog.ui.MenuItemRenderer.prototype.createDom=function(a){var b=a.getDomHelper().createDom("div",this.getClassNames(a).join(" "),this.createContent(a.getContent(),a.getDomHelper()));this.setEnableCheckBoxStructure(a,b,a.isSupportedState(goog.ui.Component.State.SELECTED)||a.isSupportedState(goog.ui.Component.State.CHECKED));this.setAriaStates(a,b);return b};
goog.ui.MenuItemRenderer.prototype.getContentElement=function(a){return a&&a.firstChild};goog.ui.MenuItemRenderer.prototype.decorate=function(a,b){this.hasContentStructure(b)||b.appendChild(this.createContent(b.childNodes,a.getDomHelper()));goog.dom.classlist.contains(b,"goog-option")&&(a.setCheckable(!0),this.setCheckable(a,b,!0));return goog.ui.MenuItemRenderer.superClass_.decorate.call(this,a,b)};
goog.ui.MenuItemRenderer.prototype.setContent=function(a,b){var c=this.getContentElement(a),d=this.hasCheckBoxStructure(a)?c.firstChild:null;goog.ui.MenuItemRenderer.superClass_.setContent.call(this,a,b);d&&!this.hasCheckBoxStructure(a)&&c.insertBefore(d,c.firstChild||null)};
goog.ui.MenuItemRenderer.prototype.hasContentStructure=function(a){a=goog.dom.getFirstElementChild(a);var b=this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);return!!a&&goog.dom.classlist.contains(a,b)};goog.ui.MenuItemRenderer.prototype.createContent=function(a,b){var c=this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);return b.createDom("div",c,a)};
goog.ui.MenuItemRenderer.prototype.setSelectable=function(a,b,c){b&&(goog.a11y.aria.setRole(b,c?goog.a11y.aria.Role.MENU_ITEM_RADIO:this.getAriaRole()),this.setEnableCheckBoxStructure(a,b,c))};goog.ui.MenuItemRenderer.prototype.setCheckable=function(a,b,c){b&&(goog.a11y.aria.setRole(b,c?goog.a11y.aria.Role.MENU_ITEM_CHECKBOX:this.getAriaRole()),this.setEnableCheckBoxStructure(a,b,c))};
goog.ui.MenuItemRenderer.prototype.hasCheckBoxStructure=function(a){if(a=this.getContentElement(a)){a=goog.dom.getFirstElementChild(a);var b=this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);return!!a&&goog.dom.classlist.contains(a,b)}return!1};
goog.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure=function(a,b,c){c!=this.hasCheckBoxStructure(b)&&(goog.dom.classlist.enable(b,"goog-option",c),b=this.getContentElement(b),c?(c=this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX),b.insertBefore(a.getDomHelper().createDom("div",c),b.firstChild||null)):b.removeChild(b.firstChild))};
goog.ui.MenuItemRenderer.prototype.getClassForState=function(a){switch(a){case goog.ui.Component.State.HOVER:return this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);case goog.ui.Component.State.CHECKED:case goog.ui.Component.State.SELECTED:return"goog-option-selected";default:return goog.ui.MenuItemRenderer.superClass_.getClassForState.call(this,a)}};
goog.ui.MenuItemRenderer.prototype.getStateFromClass=function(a){var b=this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);switch(a){case "goog-option-selected":return goog.ui.Component.State.CHECKED;case b:return goog.ui.Component.State.HOVER;default:return goog.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this,a)}};goog.ui.MenuItemRenderer.prototype.getCssClass=function(){return goog.ui.MenuItemRenderer.CSS_CLASS};goog.ui.MenuItem=function(a,b,c,d){goog.ui.Control.call(this,a,d||goog.ui.MenuItemRenderer.getInstance(),c);this.setValue(b)};goog.inherits(goog.ui.MenuItem,goog.ui.Control);goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_="goog-menuitem-mnemonic-separator";goog.ui.MenuItem.ACCELERATOR_CLASS_="goog-menuitem-accel";goog.ui.MenuItem.prototype.getValue=function(){var a=this.getModel();return null!=a?a:this.getCaption()};goog.ui.MenuItem.prototype.setValue=function(a){this.setModel(a)};
goog.ui.MenuItem.prototype.setSelectable=function(a){this.setSupportedState(goog.ui.Component.State.SELECTED,a);this.isChecked()&&!a&&this.setChecked(!1);var b=this.getElement();b&&this.getRenderer().setSelectable(this,b,a)};goog.ui.MenuItem.prototype.setCheckable=function(a){this.setSupportedState(goog.ui.Component.State.CHECKED,a);var b=this.getElement();b&&this.getRenderer().setCheckable(this,b,a)};
goog.ui.MenuItem.prototype.getCaption=function(){var a=this.getContent();if(goog.isArray(a)){var b=goog.ui.MenuItem.ACCELERATOR_CLASS_,c=goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_,a=goog.array.map(a,function(a){var e=goog.dom.classes.get(a);return goog.array.contains(e,b)||goog.array.contains(e,c)?"":goog.dom.getRawTextContent(a)}).join("");return goog.string.collapseBreakingSpaces(a)}return goog.ui.MenuItem.superClass_.getCaption.call(this)};
goog.ui.MenuItem.prototype.handleMouseUp=function(a){var b=this.getParent();if(b){var c=b.openingCoords;b.openingCoords=null;if(c&&goog.isNumber(a.clientX)&&(b=new goog.math.Coordinate(a.clientX,a.clientY),goog.math.Coordinate.equals(c,b)))return}goog.ui.MenuItem.superClass_.handleMouseUp.call(this,a)};goog.ui.MenuItem.prototype.handleKeyEventInternal=function(a){return a.keyCode==this.getMnemonic()&&this.performActionInternal(a)?!0:goog.ui.MenuItem.superClass_.handleKeyEventInternal.call(this,a)};
goog.ui.MenuItem.prototype.setMnemonic=function(a){this.mnemonicKey_=a};goog.ui.MenuItem.prototype.getMnemonic=function(){return this.mnemonicKey_};goog.ui.registry.setDecoratorByClassName(goog.ui.MenuItemRenderer.CSS_CLASS,function(){return new goog.ui.MenuItem(null)});goog.ui.MenuRenderer=function(){goog.ui.ContainerRenderer.call(this)};goog.inherits(goog.ui.MenuRenderer,goog.ui.ContainerRenderer);goog.addSingletonGetter(goog.ui.MenuRenderer);goog.ui.MenuRenderer.CSS_CLASS="goog-menu";goog.ui.MenuRenderer.prototype.getAriaRole=function(){return goog.a11y.aria.Role.MENU};goog.ui.MenuRenderer.prototype.canDecorate=function(a){return"UL"==a.tagName||goog.ui.MenuRenderer.superClass_.canDecorate.call(this,a)};
goog.ui.MenuRenderer.prototype.getDecoratorForChild=function(a){return"HR"==a.tagName?new goog.ui.Separator:goog.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this,a)};goog.ui.MenuRenderer.prototype.containsElement=function(a,b){return goog.dom.contains(a.getElement(),b)};goog.ui.MenuRenderer.prototype.getCssClass=function(){return goog.ui.MenuRenderer.CSS_CLASS};
goog.ui.MenuRenderer.prototype.initializeDom=function(a){goog.ui.MenuRenderer.superClass_.initializeDom.call(this,a);a=a.getElement();goog.asserts.assert(a,"The menu DOM element cannot be null.");goog.a11y.aria.setState(a,goog.a11y.aria.State.HASPOPUP,"true")};goog.ui.MenuSeparator=function(a){goog.ui.Separator.call(this,goog.ui.MenuSeparatorRenderer.getInstance(),a)};goog.inherits(goog.ui.MenuSeparator,goog.ui.Separator);goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS,function(){return new goog.ui.Separator});goog.ui.Menu=function(a,b){goog.ui.Container.call(this,goog.ui.Container.Orientation.VERTICAL,b||goog.ui.MenuRenderer.getInstance(),a);this.setFocusable(!1)};goog.inherits(goog.ui.Menu,goog.ui.Container);goog.ui.Menu.EventType={BEFORE_SHOW:goog.ui.Component.EventType.BEFORE_SHOW,SHOW:goog.ui.Component.EventType.SHOW,BEFORE_HIDE:goog.ui.Component.EventType.HIDE,HIDE:goog.ui.Component.EventType.HIDE};goog.ui.Menu.CSS_CLASS=goog.ui.MenuRenderer.CSS_CLASS;goog.ui.Menu.prototype.allowAutoFocus_=!0;
goog.ui.Menu.prototype.allowHighlightDisabled_=!1;goog.ui.Menu.prototype.getCssClass=function(){return this.getRenderer().getCssClass()};goog.ui.Menu.prototype.containsElement=function(a){if(this.getRenderer().containsElement(this,a))return!0;for(var b=0,c=this.getChildCount();b<c;b++){var d=this.getChildAt(b);if("function"==typeof d.containsElement&&d.containsElement(a))return!0}return!1};goog.ui.Menu.prototype.addItem=function(a){this.addChild(a,!0)};
goog.ui.Menu.prototype.addItemAt=function(a,b){this.addChildAt(a,b,!0)};goog.ui.Menu.prototype.removeItem=function(a){(a=this.removeChild(a,!0))&&a.dispose()};goog.ui.Menu.prototype.removeItemAt=function(a){(a=this.removeChildAt(a,!0))&&a.dispose()};goog.ui.Menu.prototype.getItemAt=function(a){return this.getChildAt(a)};goog.ui.Menu.prototype.getItemCount=function(){return this.getChildCount()};goog.ui.Menu.prototype.getItems=function(){var a=[];this.forEachChild(function(b){a.push(b)});return a};
goog.ui.Menu.prototype.setPosition=function(a,b){var c=this.isVisible();c||goog.style.showElement(this.getElement(),!0);goog.style.setPageOffset(this.getElement(),a,b);c||goog.style.showElement(this.getElement(),!1)};goog.ui.Menu.prototype.getPosition=function(){return this.isVisible()?goog.style.getPageOffset(this.getElement()):null};goog.ui.Menu.prototype.setAllowAutoFocus=function(a){(this.allowAutoFocus_=a)&&this.setFocusable(!0)};goog.ui.Menu.prototype.getAllowAutoFocus=function(){return this.allowAutoFocus_};
goog.ui.Menu.prototype.setAllowHighlightDisabled=function(a){this.allowHighlightDisabled_=a};goog.ui.Menu.prototype.getAllowHighlightDisabled=function(){return this.allowHighlightDisabled_};goog.ui.Menu.prototype.setVisible=function(a,b,c){(b=goog.ui.Menu.superClass_.setVisible.call(this,a,b))&&a&&this.isInDocument()&&this.allowAutoFocus_&&this.getKeyEventTarget().focus();a&&c&&goog.isNumber(c.clientX)?this.openingCoords=new goog.math.Coordinate(c.clientX,c.clientY):this.openingCoords=null;return b};
goog.ui.Menu.prototype.handleEnterItem=function(a){this.allowAutoFocus_&&this.getKeyEventTarget().focus();return goog.ui.Menu.superClass_.handleEnterItem.call(this,a)};goog.ui.Menu.prototype.highlightNextPrefix=function(a){var b=new RegExp("^"+goog.string.regExpEscape(a),"i");return this.highlightHelper(function(a,d){var e=0>a?0:a,f=!1;do{++a;a==d&&(a=0,f=!0);var g=this.getChildAt(a).getCaption();if(g&&g.match(b))return a}while(!f||a!=e);return this.getHighlightedIndex()},this.getHighlightedIndex())};
goog.ui.Menu.prototype.canHighlightItem=function(a){return(this.allowHighlightDisabled_||a.isEnabled())&&a.isVisible()&&a.isSupportedState(goog.ui.Component.State.HOVER)};goog.ui.Menu.prototype.decorateInternal=function(a){this.decorateContent(a);goog.ui.Menu.superClass_.decorateInternal.call(this,a)};
goog.ui.Menu.prototype.handleKeyEventInternal=function(a){var b=goog.ui.Menu.superClass_.handleKeyEventInternal.call(this,a);b||this.forEachChild(function(c){!b&&c.getMnemonic&&c.getMnemonic()==a.keyCode&&(this.isEnabled()&&this.setHighlighted(c),b=c.handleKeyEvent(a))},this);return b};goog.ui.Menu.prototype.setHighlightedIndex=function(a){goog.ui.Menu.superClass_.setHighlightedIndex.call(this,a);(a=this.getChildAt(a))&&goog.style.scrollIntoContainerView(a.getElement(),this.getElement())};
goog.ui.Menu.prototype.decorateContent=function(a){var b=this.getRenderer();a=this.getDomHelper().getElementsByTagNameAndClass("div",b.getCssClass()+"-content",a);for(var c=a.length,d=0;d<c;d++)b.decorateChildren(this,a[d])};goog.ui.MenuButtonRenderer=function(){goog.ui.CustomButtonRenderer.call(this)};goog.inherits(goog.ui.MenuButtonRenderer,goog.ui.CustomButtonRenderer);goog.addSingletonGetter(goog.ui.MenuButtonRenderer);goog.ui.MenuButtonRenderer.CSS_CLASS="goog-menu-button";goog.ui.MenuButtonRenderer.WRAPPER_PROP_="__goog_wrapper_div";
goog.userAgent.GECKO&&(goog.ui.MenuButtonRenderer.prototype.setContent=function(a,b){var c=goog.ui.MenuButtonRenderer.superClass_.getContentElement.call(this,a&&a.firstChild);c&&goog.dom.replaceNode(this.createCaption(b,goog.dom.getDomHelper(a)),c)});goog.ui.MenuButtonRenderer.prototype.getContentElement=function(a){a=goog.ui.MenuButtonRenderer.superClass_.getContentElement.call(this,a&&a.firstChild);goog.userAgent.GECKO&&a&&a[goog.ui.MenuButtonRenderer.WRAPPER_PROP_]&&(a=a.firstChild);return a};
goog.ui.MenuButtonRenderer.prototype.decorate=function(a,b){var c=goog.dom.getElementsByTagNameAndClass("*",goog.ui.MenuRenderer.CSS_CLASS,b)[0];if(c){goog.style.showElement(c,!1);goog.dom.appendChild(goog.dom.getOwnerDocument(c).body,c);var d=new goog.ui.Menu;d.decorate(c);a.setMenu(d)}return goog.ui.MenuButtonRenderer.superClass_.decorate.call(this,a,b)};
goog.ui.MenuButtonRenderer.prototype.createButton=function(a,b){return goog.ui.MenuButtonRenderer.superClass_.createButton.call(this,[this.createCaption(a,b),this.createDropdown(b)],b)};goog.ui.MenuButtonRenderer.prototype.createCaption=function(a,b){return goog.ui.MenuButtonRenderer.wrapCaption(a,this.getCssClass(),b)};goog.ui.MenuButtonRenderer.wrapCaption=function(a,b,c){return c.createDom("div",goog.ui.INLINE_BLOCK_CLASSNAME+" "+(b+"-caption"),a)};
goog.ui.MenuButtonRenderer.prototype.createDropdown=function(a){return a.createDom("div",goog.ui.INLINE_BLOCK_CLASSNAME+" "+(this.getCssClass()+"-dropdown"),"\u00a0")};goog.ui.MenuButtonRenderer.prototype.getCssClass=function(){return goog.ui.MenuButtonRenderer.CSS_CLASS};goog.ui.ColorMenuButtonRenderer=function(){goog.ui.MenuButtonRenderer.call(this)};goog.inherits(goog.ui.ColorMenuButtonRenderer,goog.ui.MenuButtonRenderer);goog.addSingletonGetter(goog.ui.ColorMenuButtonRenderer);goog.ui.ColorMenuButtonRenderer.CSS_CLASS="goog-color-menu-button";goog.ui.ColorMenuButtonRenderer.prototype.createCaption=function(a,b){return goog.ui.ColorMenuButtonRenderer.superClass_.createCaption.call(this,goog.ui.ColorMenuButtonRenderer.wrapCaption(a,b),b)};
goog.ui.ColorMenuButtonRenderer.wrapCaption=function(a,b){return b.createDom("div",goog.ui.ColorMenuButtonRenderer.CSS_CLASS+"-indicator",a)};goog.ui.ColorMenuButtonRenderer.prototype.setValue=function(a,b){a&&goog.ui.ColorMenuButtonRenderer.setCaptionValue(this.getContentElement(a),b)};goog.ui.ColorMenuButtonRenderer.setCaptionValue=function(a,b){if(a&&a.firstChild){var c;c=b&&goog.color.isValidColor(b)?goog.color.parse(b).hex:null;a.firstChild.style.borderBottomColor=c||(goog.userAgent.IE?"":"transparent")}};
goog.ui.ColorMenuButtonRenderer.prototype.initializeDom=function(a){this.setValue(a.getElement(),a.getValue());goog.dom.classes.add(a.getElement(),goog.ui.ColorMenuButtonRenderer.CSS_CLASS);goog.ui.ColorMenuButtonRenderer.superClass_.initializeDom.call(this,a)};goog.dom.TagWalkType={START_TAG:1,OTHER:0,END_TAG:-1};goog.dom.TagIterator=function(a,b,c,d,e){this.reversed=!!b;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.tagType||0;this.reversed&&(this.depth*=-1);this.constrained=!c};goog.inherits(goog.dom.TagIterator,goog.iter.Iterator);goog.dom.TagIterator.prototype.node=null;goog.dom.TagIterator.prototype.tagType=goog.dom.TagWalkType.OTHER;goog.dom.TagIterator.prototype.started_=!1;
goog.dom.TagIterator.prototype.setPosition=function(a,b,c){if(this.node=a)goog.isNumber(b)?this.tagType=b:this.tagType=this.node.nodeType!=goog.dom.NodeType.ELEMENT?goog.dom.TagWalkType.OTHER:this.reversed?goog.dom.TagWalkType.END_TAG:goog.dom.TagWalkType.START_TAG;goog.isNumber(c)&&(this.depth=c)};goog.dom.TagIterator.prototype.copyFrom=function(a){this.node=a.node;this.tagType=a.tagType;this.depth=a.depth;this.reversed=a.reversed;this.constrained=a.constrained};
goog.dom.TagIterator.prototype.clone=function(){return new goog.dom.TagIterator(this.node,this.reversed,!this.constrained,this.tagType,this.depth)};goog.dom.TagIterator.prototype.skipTag=function(){var a=this.reversed?goog.dom.TagWalkType.END_TAG:goog.dom.TagWalkType.START_TAG;this.tagType==a&&(this.tagType=-1*a,this.depth+=this.tagType*(this.reversed?-1:1))};
goog.dom.TagIterator.prototype.restartTag=function(){var a=this.reversed?goog.dom.TagWalkType.START_TAG:goog.dom.TagWalkType.END_TAG;this.tagType==a&&(this.tagType=-1*a,this.depth+=this.tagType*(this.reversed?-1:1))};
goog.dom.TagIterator.prototype.next=function(){var a;if(this.started_){if(!this.node||this.constrained&&0==this.depth)throw goog.iter.StopIteration;a=this.node;var b=this.reversed?goog.dom.TagWalkType.END_TAG:goog.dom.TagWalkType.START_TAG;if(this.tagType==b){var c=this.reversed?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.reversed?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.tagType*(this.reversed?
-1:1)}else this.started_=!0;a=this.node;if(!this.node)throw goog.iter.StopIteration;return a};goog.dom.TagIterator.prototype.isStarted=function(){return this.started_};goog.dom.TagIterator.prototype.isStartTag=function(){return this.tagType==goog.dom.TagWalkType.START_TAG};goog.dom.TagIterator.prototype.isEndTag=function(){return this.tagType==goog.dom.TagWalkType.END_TAG};goog.dom.TagIterator.prototype.isNonElement=function(){return this.tagType==goog.dom.TagWalkType.OTHER};
goog.dom.TagIterator.prototype.equals=function(a){return a.node==this.node&&(!this.node||a.tagType==this.tagType)};goog.dom.TagIterator.prototype.splice=function(a){var b=this.node;this.restartTag();this.reversed=!this.reversed;goog.dom.TagIterator.prototype.next.call(this);this.reversed=!this.reversed;for(var c=goog.isArrayLike(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)goog.dom.insertSiblingAfter(c[d],b);goog.dom.removeNode(b)};goog.dom.NodeIterator=function(a,b,c,d){goog.dom.TagIterator.call(this,a,b,c,null,d)};goog.inherits(goog.dom.NodeIterator,goog.dom.TagIterator);goog.dom.NodeIterator.prototype.next=function(){do goog.dom.NodeIterator.superClass_.next.call(this);while(this.isEndTag());return this.node};goog.ui.PaletteRenderer=function(){goog.ui.ControlRenderer.call(this)};goog.inherits(goog.ui.PaletteRenderer,goog.ui.ControlRenderer);goog.addSingletonGetter(goog.ui.PaletteRenderer);goog.ui.PaletteRenderer.cellId_=0;goog.ui.PaletteRenderer.CSS_CLASS="goog-palette";goog.ui.PaletteRenderer.prototype.createDom=function(a){var b=this.getClassNames(a);return a.getDomHelper().createDom("div",b?b.join(" "):null,this.createGrid(a.getContent(),a.getSize(),a.getDomHelper()))};
goog.ui.PaletteRenderer.prototype.createGrid=function(a,b,c){for(var d=[],e=0,f=0;e<b.height;e++){for(var g=[],h=0;h<b.width;h++){var k=a&&a[f++];g.push(this.createCell(k,c))}d.push(this.createRow(g,c))}return this.createTable(d,c)};goog.ui.PaletteRenderer.prototype.createTable=function(a,b){var c=b.createDom("table",this.getCssClass()+"-table",b.createDom("tbody",this.getCssClass()+"-body",a));c.cellSpacing=0;c.cellPadding=0;goog.a11y.aria.setRole(c,"grid");return c};
goog.ui.PaletteRenderer.prototype.createRow=function(a,b){var c=b.createDom("tr",this.getCssClass()+"-row",a);goog.a11y.aria.setRole(c,"row");return c};goog.ui.PaletteRenderer.prototype.createCell=function(a,b){var c=b.createDom("td",{"class":this.getCssClass()+"-cell",id:this.getCssClass()+"-cell-"+goog.ui.PaletteRenderer.cellId_++},a);goog.a11y.aria.setRole(c,"gridcell");goog.dom.getTextContent(c)||goog.a11y.aria.getLabel(c)||goog.a11y.aria.setLabel(c,this.findAriaLabelForCell_(c));return c};
goog.ui.PaletteRenderer.prototype.findAriaLabelForCell_=function(a){a=new goog.dom.NodeIterator(a);for(var b="",c;!b&&(c=goog.iter.nextOrValue(a,null));)c.nodeType==goog.dom.NodeType.ELEMENT&&(b=goog.a11y.aria.getLabel(c)||c.title);return b};goog.ui.PaletteRenderer.prototype.canDecorate=function(a){return!1};goog.ui.PaletteRenderer.prototype.decorate=function(a,b){return null};
goog.ui.PaletteRenderer.prototype.setContent=function(a,b){if(a){var c=goog.dom.getElementsByTagNameAndClass("tbody",this.getCssClass()+"-body",a)[0];if(c){var d=0;goog.array.forEach(c.rows,function(a){goog.array.forEach(a.cells,function(a){goog.dom.removeChildren(a);if(b){var c=b[d++];c&&goog.dom.appendChild(a,c)}})});if(d<b.length){for(var e=[],f=goog.dom.getDomHelper(a),g=c.rows[0].cells.length;d<b.length;){var h=b[d++];e.push(this.createCell(h,f));e.length==g&&(h=this.createRow(e,f),goog.dom.appendChild(c,
h),e.length=0)}if(0<e.length){for(;e.length<g;)e.push(this.createCell("",f));h=this.createRow(e,f);goog.dom.appendChild(c,h)}}}goog.style.setUnselectable(a,!0,goog.userAgent.GECKO)}};goog.ui.PaletteRenderer.prototype.getContainingItem=function(a,b){for(var c=a.getElement();b&&b.nodeType==goog.dom.NodeType.ELEMENT&&b!=c;){if("TD"==b.tagName&&goog.dom.classes.has(b,this.getCssClass()+"-cell"))return b.firstChild;b=b.parentNode}return null};
goog.ui.PaletteRenderer.prototype.highlightCell=function(a,b,c){b&&(b=this.getCellForItem(b),goog.dom.classes.enable(b,this.getCssClass()+"-cell-hover",c),a=a.getElement().firstChild,goog.a11y.aria.setState(a,"activedescendent",b.id))};goog.ui.PaletteRenderer.prototype.getCellForItem=function(a){return a?a.parentNode:null};goog.ui.PaletteRenderer.prototype.selectCell=function(a,b,c){b&&goog.dom.classes.enable(b.parentNode,this.getCssClass()+"-cell-selected",c)};
goog.ui.PaletteRenderer.prototype.getCssClass=function(){return goog.ui.PaletteRenderer.CSS_CLASS};goog.ui.SelectionModel=function(a){goog.events.EventTarget.call(this);this.items_=[];this.addItems(a)};goog.inherits(goog.ui.SelectionModel,goog.events.EventTarget);goog.ui.SelectionModel.prototype.selectedItem_=null;goog.ui.SelectionModel.prototype.selectionHandler_=null;goog.ui.SelectionModel.prototype.getSelectionHandler=function(){return this.selectionHandler_};goog.ui.SelectionModel.prototype.setSelectionHandler=function(a){this.selectionHandler_=a};
goog.ui.SelectionModel.prototype.getItemCount=function(){return this.items_.length};goog.ui.SelectionModel.prototype.indexOfItem=function(a){return a?goog.array.indexOf(this.items_,a):-1};goog.ui.SelectionModel.prototype.getFirst=function(){return this.items_[0]};goog.ui.SelectionModel.prototype.getLast=function(){return this.items_[this.items_.length-1]};goog.ui.SelectionModel.prototype.getItemAt=function(a){return this.items_[a]||null};
goog.ui.SelectionModel.prototype.addItems=function(a){a&&(goog.array.forEach(a,function(a){this.selectItem_(a,!1)},this),goog.array.extend(this.items_,a))};goog.ui.SelectionModel.prototype.addItem=function(a){this.addItemAt(a,this.getItemCount())};goog.ui.SelectionModel.prototype.addItemAt=function(a,b){a&&(this.selectItem_(a,!1),goog.array.insertAt(this.items_,a,b))};
goog.ui.SelectionModel.prototype.removeItem=function(a){a&&goog.array.remove(this.items_,a)&&a==this.selectedItem_&&(this.selectedItem_=null,this.dispatchEvent(goog.events.EventType.SELECT))};goog.ui.SelectionModel.prototype.removeItemAt=function(a){this.removeItem(this.getItemAt(a))};goog.ui.SelectionModel.prototype.getSelectedItem=function(){return this.selectedItem_};goog.ui.SelectionModel.prototype.getItems=function(){return goog.array.clone(this.items_)};
goog.ui.SelectionModel.prototype.setSelectedItem=function(a){a!=this.selectedItem_&&(this.selectItem_(this.selectedItem_,!1),this.selectedItem_=a,this.selectItem_(a,!0));this.dispatchEvent(goog.events.EventType.SELECT)};goog.ui.SelectionModel.prototype.getSelectedIndex=function(){return this.indexOfItem(this.selectedItem_)};goog.ui.SelectionModel.prototype.setSelectedIndex=function(a){this.setSelectedItem(this.getItemAt(a))};
goog.ui.SelectionModel.prototype.clear=function(){goog.array.clear(this.items_);this.selectedItem_=null};goog.ui.SelectionModel.prototype.disposeInternal=function(){goog.ui.SelectionModel.superClass_.disposeInternal.call(this);delete this.items_;this.selectedItem_=null};goog.ui.SelectionModel.prototype.selectItem_=function(a,b){a&&("function"==typeof this.selectionHandler_?this.selectionHandler_(a,b):"function"==typeof a.setSelected&&a.setSelected(b))};goog.ui.Palette=function(a,b,c){goog.ui.Control.call(this,a,b||goog.ui.PaletteRenderer.getInstance(),c);this.setAutoStates(goog.ui.Component.State.CHECKED|goog.ui.Component.State.SELECTED|goog.ui.Component.State.OPENED,!1);this.currentCellControl_=new goog.ui.Palette.CurrentCell_;this.currentCellControl_.setParentEventTarget(this)};goog.inherits(goog.ui.Palette,goog.ui.Control);goog.ui.Palette.EventType={AFTER_HIGHLIGHT:goog.events.getUniqueId("afterhighlight")};goog.ui.Palette.prototype.size_=null;
goog.ui.Palette.prototype.highlightedIndex_=-1;goog.ui.Palette.prototype.selectionModel_=null;goog.ui.Palette.prototype.disposeInternal=function(){goog.ui.Palette.superClass_.disposeInternal.call(this);this.selectionModel_&&(this.selectionModel_.dispose(),this.selectionModel_=null);this.size_=null;this.currentCellControl_.dispose()};
goog.ui.Palette.prototype.setContentInternal=function(a){goog.ui.Palette.superClass_.setContentInternal.call(this,a);this.adjustSize_();this.selectionModel_?(this.selectionModel_.clear(),this.selectionModel_.addItems(a)):(this.selectionModel_=new goog.ui.SelectionModel(a),this.selectionModel_.setSelectionHandler(goog.bind(this.selectItem_,this)),this.getHandler().listen(this.selectionModel_,goog.events.EventType.SELECT,this.handleSelectionChange));this.highlightedIndex_=-1};
goog.ui.Palette.prototype.getCaption=function(){return""};goog.ui.Palette.prototype.setCaption=function(a){};goog.ui.Palette.prototype.handleMouseOver=function(a){goog.ui.Palette.superClass_.handleMouseOver.call(this,a);var b=this.getRenderer().getContainingItem(this,a.target);b&&a.relatedTarget&&goog.dom.contains(b,a.relatedTarget)||b!=this.getHighlightedItem()&&this.setHighlightedItem(b)};
goog.ui.Palette.prototype.handleMouseOut=function(a){goog.ui.Palette.superClass_.handleMouseOut.call(this,a);var b=this.getRenderer().getContainingItem(this,a.target);b&&a.relatedTarget&&goog.dom.contains(b,a.relatedTarget)||b==this.getHighlightedItem()&&this.setHighlightedItem(null)};goog.ui.Palette.prototype.handleMouseDown=function(a){goog.ui.Palette.superClass_.handleMouseDown.call(this,a);this.isActive()&&(a=this.getRenderer().getContainingItem(this,a.target),a!=this.getHighlightedItem()&&this.setHighlightedItem(a))};
goog.ui.Palette.prototype.performActionInternal=function(a){var b=this.getHighlightedItem();return b?(this.setSelectedItem(b),goog.ui.Palette.superClass_.performActionInternal.call(this,a)):!1};
goog.ui.Palette.prototype.handleKeyEvent=function(a){var b=this.getContent(),b=b?b.length:0,c=this.size_.width;if(0==b||!this.isEnabled())return!1;if(a.keyCode==goog.events.KeyCodes.ENTER||a.keyCode==goog.events.KeyCodes.SPACE)return this.performActionInternal(a);if(a.keyCode==goog.events.KeyCodes.HOME)return this.setHighlightedIndex(0),!0;if(a.keyCode==goog.events.KeyCodes.END)return this.setHighlightedIndex(b-1),!0;var d=0>this.highlightedIndex_?this.getSelectedIndex():this.highlightedIndex_;switch(a.keyCode){case goog.events.KeyCodes.LEFT:-1==
d&&(d=b);if(0<d)return this.setHighlightedIndex(d-1),a.preventDefault(),!0;break;case goog.events.KeyCodes.RIGHT:if(d<b-1)return this.setHighlightedIndex(d+1),a.preventDefault(),!0;break;case goog.events.KeyCodes.UP:-1==d&&(d=b+c-1);if(d>=c)return this.setHighlightedIndex(d-c),a.preventDefault(),!0;break;case goog.events.KeyCodes.DOWN:if(-1==d&&(d=-c),d<b-c)return this.setHighlightedIndex(d+c),a.preventDefault(),!0}return!1};goog.ui.Palette.prototype.handleSelectionChange=function(a){};
goog.ui.Palette.prototype.getSize=function(){return this.size_};goog.ui.Palette.prototype.setSize=function(a,b){if(this.getElement())throw Error(goog.ui.Component.Error.ALREADY_RENDERED);this.size_=goog.isNumber(a)?new goog.math.Size(a,b):a;this.adjustSize_()};goog.ui.Palette.prototype.getHighlightedIndex=function(){return this.highlightedIndex_};goog.ui.Palette.prototype.getHighlightedItem=function(){var a=this.getContent();return a&&a[this.highlightedIndex_]};
goog.ui.Palette.prototype.getHighlightedCellElement_=function(){return this.getRenderer().getCellForItem(this.getHighlightedItem())};goog.ui.Palette.prototype.setHighlightedIndex=function(a){a!=this.highlightedIndex_&&(this.highlightIndex_(this.highlightedIndex_,!1),this.highlightedIndex_=a,this.highlightIndex_(a,!0),this.dispatchEvent(goog.ui.Palette.EventType.AFTER_HIGHLIGHT))};
goog.ui.Palette.prototype.setHighlightedItem=function(a){var b=this.getContent();this.setHighlightedIndex(b?goog.array.indexOf(b,a):-1)};goog.ui.Palette.prototype.getSelectedIndex=function(){return this.selectionModel_?this.selectionModel_.getSelectedIndex():-1};goog.ui.Palette.prototype.getSelectedItem=function(){return this.selectionModel_?this.selectionModel_.getSelectedItem():null};goog.ui.Palette.prototype.setSelectedIndex=function(a){this.selectionModel_&&this.selectionModel_.setSelectedIndex(a)};
goog.ui.Palette.prototype.setSelectedItem=function(a){this.selectionModel_&&this.selectionModel_.setSelectedItem(a)};goog.ui.Palette.prototype.highlightIndex_=function(a,b){if(this.getElement()){var c=this.getContent();if(c&&0<=a&&a<c.length){var d=this.getHighlightedCellElement_();this.currentCellControl_.getElement()!=d&&this.currentCellControl_.setElementInternal(d);this.currentCellControl_.tryHighlight(b)&&this.getRenderer().highlightCell(this,c[a],b)}}};
goog.ui.Palette.prototype.selectItem_=function(a,b){this.getElement()&&this.getRenderer().selectCell(this,a,b)};goog.ui.Palette.prototype.adjustSize_=function(){var a=this.getContent();if(a)if(this.size_&&this.size_.width){if(a=Math.ceil(a.length/this.size_.width),!goog.isNumber(this.size_.height)||this.size_.height<a)this.size_.height=a}else a=Math.ceil(Math.sqrt(a.length)),this.size_=new goog.math.Size(a,a);else this.size_=new goog.math.Size(0,0)};
goog.ui.Palette.CurrentCell_=function(){goog.ui.Control.call(this,null);this.setDispatchTransitionEvents(goog.ui.Component.State.HOVER,!0)};goog.inherits(goog.ui.Palette.CurrentCell_,goog.ui.Control);goog.ui.Palette.CurrentCell_.prototype.tryHighlight=function(a){this.setHighlighted(a);return this.isHighlighted()==a};goog.ui.ColorPalette=function(a,b,c){this.colors_=a||[];goog.ui.Palette.call(this,null,b||goog.ui.PaletteRenderer.getInstance(),c);this.setColors(this.colors_)};goog.inherits(goog.ui.ColorPalette,goog.ui.Palette);goog.ui.ColorPalette.prototype.normalizedColors_=null;goog.ui.ColorPalette.prototype.getColors=function(){return this.colors_};goog.ui.ColorPalette.prototype.setColors=function(a){this.colors_=a;this.normalizedColors_=null;this.setContent(this.createColorNodes())};
goog.ui.ColorPalette.prototype.getSelectedColor=function(){var a=this.getSelectedItem();return a?(a=goog.style.getStyle(a,"background-color"),goog.ui.ColorPalette.parseColor_(a)):null};goog.ui.ColorPalette.prototype.setSelectedColor=function(a){a=goog.ui.ColorPalette.parseColor_(a);this.normalizedColors_||(this.normalizedColors_=goog.array.map(this.colors_,function(a){return goog.ui.ColorPalette.parseColor_(a)}));this.setSelectedIndex(a?goog.array.indexOf(this.normalizedColors_,a):-1)};
goog.ui.ColorPalette.prototype.createColorNodes=function(){return goog.array.map(this.colors_,function(a){var b=this.getDomHelper().createDom("div",{"class":this.getRenderer().getCssClass()+"-colorswatch",style:"background-color:"+a});b.title="#"==a.charAt(0)?"RGB ("+goog.color.hexToRgb(a).join(", ")+")":a;return b},this)};goog.ui.ColorPalette.parseColor_=function(a){if(a)try{return goog.color.parse(a).hex}catch(b){}return null};goog.Timer=function(a,b){goog.events.EventTarget.call(this);this.interval_=a||1;this.timerObject_=b||goog.Timer.defaultTimerObject;this.boundTick_=goog.bind(this.tick_,this);this.last_=goog.now()};goog.inherits(goog.Timer,goog.events.EventTarget);goog.Timer.MAX_TIMEOUT_=2147483647;goog.Timer.prototype.enabled=!1;goog.Timer.defaultTimerObject=goog.global;goog.Timer.intervalScale=0.8;goog.Timer.prototype.timer_=null;goog.Timer.prototype.getInterval=function(){return this.interval_};
goog.Timer.prototype.setInterval=function(a){this.interval_=a;this.timer_&&this.enabled?(this.stop(),this.start()):this.timer_&&this.stop()};goog.Timer.prototype.tick_=function(){if(this.enabled){var a=goog.now()-this.last_;0<a&&a<this.interval_*goog.Timer.intervalScale?this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_-a):(this.dispatchTick(),this.enabled&&(this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_),this.last_=goog.now()))}};
goog.Timer.prototype.dispatchTick=function(){this.dispatchEvent(goog.Timer.TICK)};goog.Timer.prototype.start=function(){this.enabled=!0;this.timer_||(this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_),this.last_=goog.now())};goog.Timer.prototype.stop=function(){this.enabled=!1;this.timer_&&(this.timerObject_.clearTimeout(this.timer_),this.timer_=null)};goog.Timer.prototype.disposeInternal=function(){goog.Timer.superClass_.disposeInternal.call(this);this.stop();delete this.timerObject_};
goog.Timer.TICK="tick";goog.Timer.callOnce=function(a,b,c){if(goog.isFunction(a))c&&(a=goog.bind(a,c));else if(a&&"function"==typeof a.handleEvent)a=goog.bind(a.handleEvent,a);else throw Error("Invalid listener argument");return b>goog.Timer.MAX_TIMEOUT_?-1:goog.Timer.defaultTimerObject.setTimeout(a,b||0)};goog.Timer.clear=function(a){goog.Timer.defaultTimerObject.clearTimeout(a)};goog.style.bidi={};goog.style.bidi.getScrollLeft=function(a){var b=goog.style.isRightToLeft(a);return b&&goog.userAgent.GECKO?-a.scrollLeft:!b||goog.userAgent.IE&&goog.userAgent.isVersion("8")||"visible"==goog.style.getComputedOverflowX(a)?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft};
goog.style.bidi.getOffsetStart=function(a){var b=a.offsetLeft,c=a.offsetParent;c||"fixed"!=goog.style.getComputedPosition(a)||(c=goog.dom.getOwnerDocument(a).documentElement);if(!c)return b;if(goog.userAgent.GECKO)var d=goog.style.getBorderBox(c),b=b+d.left;else goog.userAgent.isDocumentMode(8)&&(d=goog.style.getBorderBox(c),b-=d.left);return goog.style.isRightToLeft(c)?c.clientWidth-(b+a.offsetWidth):b};
goog.style.bidi.setScrollOffset=function(a,b){b=Math.max(b,0);goog.style.isRightToLeft(a)?goog.userAgent.GECKO?a.scrollLeft=-b:goog.userAgent.IE&&goog.userAgent.isVersion("8")?a.scrollLeft=b:a.scrollLeft=a.scrollWidth-b-a.clientWidth:a.scrollLeft=b};goog.style.bidi.setPosition=function(a,b,c,d){goog.isNull(c)||(a.style.top=c+"px");d?(a.style.right=b+"px",a.style.left=""):(a.style.left=b+"px",a.style.right="")};goog.positioning={};goog.positioning.Corner={TOP_LEFT:0,TOP_RIGHT:2,BOTTOM_LEFT:1,BOTTOM_RIGHT:3,TOP_START:4,TOP_END:6,BOTTOM_START:5,BOTTOM_END:7};goog.positioning.CornerBit={BOTTOM:1,RIGHT:2,FLIP_RTL:4};goog.positioning.Overflow={IGNORE:0,ADJUST_X:1,FAIL_X:2,ADJUST_Y:4,FAIL_Y:8,RESIZE_WIDTH:16,RESIZE_HEIGHT:32,ADJUST_X_EXCEPT_OFFSCREEN:65,ADJUST_Y_EXCEPT_OFFSCREEN:132};
goog.positioning.OverflowStatus={NONE:0,ADJUSTED_X:1,ADJUSTED_Y:2,WIDTH_ADJUSTED:4,HEIGHT_ADJUSTED:8,FAILED_LEFT:16,FAILED_RIGHT:32,FAILED_TOP:64,FAILED_BOTTOM:128,FAILED_OUTSIDE_VIEWPORT:256};goog.positioning.OverflowStatus.FAILED=goog.positioning.OverflowStatus.FAILED_LEFT|goog.positioning.OverflowStatus.FAILED_RIGHT|goog.positioning.OverflowStatus.FAILED_TOP|goog.positioning.OverflowStatus.FAILED_BOTTOM|goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT;
goog.positioning.OverflowStatus.FAILED_HORIZONTAL=goog.positioning.OverflowStatus.FAILED_LEFT|goog.positioning.OverflowStatus.FAILED_RIGHT;goog.positioning.OverflowStatus.FAILED_VERTICAL=goog.positioning.OverflowStatus.FAILED_TOP|goog.positioning.OverflowStatus.FAILED_BOTTOM;
goog.positioning.positionAtAnchor=function(a,b,c,d,e,f,g,h,k){goog.asserts.assert(c);var l=goog.positioning.getOffsetParentPageOffset(c),m=goog.positioning.getVisiblePart_(a);goog.style.translateRectForAnotherFrame(m,goog.dom.getDomHelper(a),goog.dom.getDomHelper(c));a=goog.positioning.getEffectiveCorner(a,b);m=new goog.math.Coordinate(a&goog.positioning.CornerBit.RIGHT?m.left+m.width:m.left,a&goog.positioning.CornerBit.BOTTOM?m.top+m.height:m.top);m=goog.math.Coordinate.difference(m,l);e&&(m.x+=
(a&goog.positioning.CornerBit.RIGHT?-1:1)*e.x,m.y+=(a&goog.positioning.CornerBit.BOTTOM?-1:1)*e.y);var n;if(g)if(k)n=k;else if(n=goog.style.getVisibleRectForElement(c))n.top-=l.y,n.right-=l.x,n.bottom-=l.y,n.left-=l.x;return goog.positioning.positionAtCoordinate(m,c,d,f,n,g,h)};
goog.positioning.getOffsetParentPageOffset=function(a){var b;if(a=a.offsetParent){var c=a.tagName==goog.dom.TagName.HTML||a.tagName==goog.dom.TagName.BODY;c&&"static"==goog.style.getComputedPosition(a)||(b=goog.style.getPageOffset(a),c||(b=goog.math.Coordinate.difference(b,new goog.math.Coordinate(goog.style.bidi.getScrollLeft(a),a.scrollTop))))}return b||new goog.math.Coordinate};
goog.positioning.getVisiblePart_=function(a){var b=goog.style.getBounds(a);(a=goog.style.getVisibleRectForElement(a))&&b.intersection(goog.math.Rect.createFromBox(a));return b};
goog.positioning.positionAtCoordinate=function(a,b,c,d,e,f,g){a=a.clone();var h=goog.positioning.OverflowStatus.NONE;c=goog.positioning.getEffectiveCorner(b,c);var k=goog.style.getSize(b);g=g?g.clone():k.clone();if(d||c!=goog.positioning.Corner.TOP_LEFT)c&goog.positioning.CornerBit.RIGHT?a.x-=g.width+(d?d.right:0):d&&(a.x+=d.left),c&goog.positioning.CornerBit.BOTTOM?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f&&(h=e?goog.positioning.adjustForViewport_(a,g,e,f):goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT,
h&goog.positioning.OverflowStatus.FAILED))return h;goog.style.setPosition(b,a);goog.math.Size.equals(k,g)||goog.style.setBorderBoxSize(b,g);return h};
goog.positioning.adjustForViewport_=function(a,b,c,d){var e=goog.positioning.OverflowStatus.NONE,f=goog.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN,g=goog.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN;(d&f)==f&&(a.x<c.left||a.x>=c.right)&&(d&=~goog.positioning.Overflow.ADJUST_X);(d&g)==g&&(a.y<c.top||a.y>=c.bottom)&&(d&=~goog.positioning.Overflow.ADJUST_Y);a.x<c.left&&d&goog.positioning.Overflow.ADJUST_X&&(a.x=c.left,e|=goog.positioning.OverflowStatus.ADJUSTED_X);a.x<c.left&&a.x+b.width>c.right&&
d&goog.positioning.Overflow.RESIZE_WIDTH&&(b.width=Math.max(b.width-(a.x+b.width-c.right),0),e|=goog.positioning.OverflowStatus.WIDTH_ADJUSTED);a.x+b.width>c.right&&d&goog.positioning.Overflow.ADJUST_X&&(a.x=Math.max(c.right-b.width,c.left),e|=goog.positioning.OverflowStatus.ADJUSTED_X);d&goog.positioning.Overflow.FAIL_X&&(e=e|(a.x<c.left?goog.positioning.OverflowStatus.FAILED_LEFT:0)|(a.x+b.width>c.right?goog.positioning.OverflowStatus.FAILED_RIGHT:0));a.y<c.top&&d&goog.positioning.Overflow.ADJUST_Y&&
(a.y=c.top,e|=goog.positioning.OverflowStatus.ADJUSTED_Y);a.y<=c.top&&a.y+b.height<c.bottom&&d&goog.positioning.Overflow.RESIZE_HEIGHT&&(b.height=Math.max(b.height-(c.top-a.y),0),a.y=0,e|=goog.positioning.OverflowStatus.HEIGHT_ADJUSTED);a.y>=c.top&&a.y+b.height>c.bottom&&d&goog.positioning.Overflow.RESIZE_HEIGHT&&(b.height=Math.max(b.height-(a.y+b.height-c.bottom),0),e|=goog.positioning.OverflowStatus.HEIGHT_ADJUSTED);a.y+b.height>c.bottom&&d&goog.positioning.Overflow.ADJUST_Y&&(a.y=Math.max(c.bottom-
b.height,c.top),e|=goog.positioning.OverflowStatus.ADJUSTED_Y);d&goog.positioning.Overflow.FAIL_Y&&(e=e|(a.y<c.top?goog.positioning.OverflowStatus.FAILED_TOP:0)|(a.y+b.height>c.bottom?goog.positioning.OverflowStatus.FAILED_BOTTOM:0));return e};goog.positioning.getEffectiveCorner=function(a,b){return(b&goog.positioning.CornerBit.FLIP_RTL&&goog.style.isRightToLeft(a)?b^goog.positioning.CornerBit.RIGHT:b)&~goog.positioning.CornerBit.FLIP_RTL};
goog.positioning.flipCornerHorizontal=function(a){return a^goog.positioning.CornerBit.RIGHT};goog.positioning.flipCornerVertical=function(a){return a^goog.positioning.CornerBit.BOTTOM};goog.positioning.flipCorner=function(a){return a^goog.positioning.CornerBit.BOTTOM^goog.positioning.CornerBit.RIGHT};goog.positioning.AbstractPosition=function(){};goog.positioning.AbstractPosition.prototype.reposition=function(a,b,c,d){};goog.positioning.AnchoredPosition=function(a,b,c){this.element=a;this.corner=b;this.overflow_=c};goog.inherits(goog.positioning.AnchoredPosition,goog.positioning.AbstractPosition);goog.positioning.AnchoredPosition.prototype.reposition=function(a,b,c,d){goog.positioning.positionAtAnchor(this.element,this.corner,a,b,void 0,c,this.overflow_)};goog.positioning.AnchoredViewportPosition=function(a,b,c,d){goog.positioning.AnchoredPosition.call(this,a,b);this.lastResortOverflow_=c?goog.positioning.Overflow.ADJUST_X|goog.positioning.Overflow.ADJUST_Y:goog.positioning.Overflow.IGNORE;this.overflowConstraint_=d||void 0};goog.inherits(goog.positioning.AnchoredViewportPosition,goog.positioning.AnchoredPosition);goog.positioning.AnchoredViewportPosition.prototype.getLastResortOverflow=function(){return this.lastResortOverflow_};
goog.positioning.AnchoredViewportPosition.prototype.setLastResortOverflow=function(a){this.lastResortOverflow_=a};
goog.positioning.AnchoredViewportPosition.prototype.reposition=function(a,b,c,d){var e=goog.positioning.positionAtAnchor(this.element,this.corner,a,b,null,c,goog.positioning.Overflow.FAIL_X|goog.positioning.Overflow.FAIL_Y,d,this.overflowConstraint_);if(e&goog.positioning.OverflowStatus.FAILED){var f=this.adjustCorner(e,this.corner);b=this.adjustCorner(e,b);e=goog.positioning.positionAtAnchor(this.element,f,a,b,null,c,goog.positioning.Overflow.FAIL_X|goog.positioning.Overflow.FAIL_Y,d,this.overflowConstraint_);
e&goog.positioning.OverflowStatus.FAILED&&(f=this.adjustCorner(e,f),b=this.adjustCorner(e,b),goog.positioning.positionAtAnchor(this.element,f,a,b,null,c,this.getLastResortOverflow(),d,this.overflowConstraint_))}};goog.positioning.AnchoredViewportPosition.prototype.adjustCorner=function(a,b){a&goog.positioning.OverflowStatus.FAILED_HORIZONTAL&&(b=goog.positioning.flipCornerHorizontal(b));a&goog.positioning.OverflowStatus.FAILED_VERTICAL&&(b=goog.positioning.flipCornerVertical(b));return b};goog.positioning.MenuAnchoredPosition=function(a,b,c,d){goog.positioning.AnchoredViewportPosition.call(this,a,b,c||d);(c||d)&&this.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN|(d?goog.positioning.Overflow.RESIZE_HEIGHT:goog.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN))};goog.inherits(goog.positioning.MenuAnchoredPosition,goog.positioning.AnchoredViewportPosition);goog.ui.NativeButtonRenderer=function(){goog.ui.ButtonRenderer.call(this)};goog.inherits(goog.ui.NativeButtonRenderer,goog.ui.ButtonRenderer);goog.addSingletonGetter(goog.ui.NativeButtonRenderer);goog.ui.NativeButtonRenderer.prototype.getAriaRole=function(){};
goog.ui.NativeButtonRenderer.prototype.createDom=function(a){this.setUpNativeButton_(a);return a.getDomHelper().createDom("button",{"class":this.getClassNames(a).join(" "),disabled:!a.isEnabled(),title:a.getTooltip()||"",value:a.getValue()||""},a.getCaption()||"")};goog.ui.NativeButtonRenderer.prototype.canDecorate=function(a){return"BUTTON"==a.tagName||"INPUT"==a.tagName&&("button"==a.type||"submit"==a.type||"reset"==a.type)};
goog.ui.NativeButtonRenderer.prototype.decorate=function(a,b){this.setUpNativeButton_(a);b.disabled&&goog.dom.classes.add(b,this.getClassForState(goog.ui.Component.State.DISABLED));return goog.ui.NativeButtonRenderer.superClass_.decorate.call(this,a,b)};goog.ui.NativeButtonRenderer.prototype.initializeDom=function(a){a.getHandler().listen(a.getElement(),goog.events.EventType.CLICK,a.performActionInternal)};goog.ui.NativeButtonRenderer.prototype.setAllowTextSelection=goog.nullFunction;
goog.ui.NativeButtonRenderer.prototype.setRightToLeft=goog.nullFunction;goog.ui.NativeButtonRenderer.prototype.isFocusable=function(a){return a.isEnabled()};goog.ui.NativeButtonRenderer.prototype.setFocusable=goog.nullFunction;goog.ui.NativeButtonRenderer.prototype.setState=function(a,b,c){goog.ui.NativeButtonRenderer.superClass_.setState.call(this,a,b,c);(a=a.getElement())&&b==goog.ui.Component.State.DISABLED&&(a.disabled=c)};goog.ui.NativeButtonRenderer.prototype.getValue=function(a){return a.value};
goog.ui.NativeButtonRenderer.prototype.setValue=function(a,b){a&&(a.value=b)};goog.ui.NativeButtonRenderer.prototype.updateAriaState=goog.nullFunction;goog.ui.NativeButtonRenderer.prototype.setUpNativeButton_=function(a){a.setHandleMouseEvents(!1);a.setAutoStates(goog.ui.Component.State.ALL,!1);a.setSupportedState(goog.ui.Component.State.FOCUSED,!1)};goog.ui.Button=function(a,b,c){goog.ui.Control.call(this,a,b||goog.ui.NativeButtonRenderer.getInstance(),c)};goog.inherits(goog.ui.Button,goog.ui.Control);goog.ui.Button.Side=goog.ui.ButtonSide;goog.ui.Button.prototype.getValue=function(){return this.value_};goog.ui.Button.prototype.setValue=function(a){this.value_=a;this.getRenderer().setValue(this.getElement(),a)};goog.ui.Button.prototype.setValueInternal=function(a){this.value_=a};goog.ui.Button.prototype.getTooltip=function(){return this.tooltip_};
goog.ui.Button.prototype.setTooltip=function(a){this.tooltip_=a;this.getRenderer().setTooltip(this.getElement(),a)};goog.ui.Button.prototype.setTooltipInternal=function(a){this.tooltip_=a};goog.ui.Button.prototype.setCollapsed=function(a){this.getRenderer().setCollapsed(this,a)};goog.ui.Button.prototype.disposeInternal=function(){goog.ui.Button.superClass_.disposeInternal.call(this);delete this.value_;delete this.tooltip_};
goog.ui.Button.prototype.enterDocument=function(){goog.ui.Button.superClass_.enterDocument.call(this);if(this.isSupportedState(goog.ui.Component.State.FOCUSED)){var a=this.getKeyEventTarget();a&&this.getHandler().listen(a,goog.events.EventType.KEYUP,this.handleKeyEventInternal)}};
goog.ui.Button.prototype.handleKeyEventInternal=function(a){return a.keyCode==goog.events.KeyCodes.ENTER&&a.type==goog.events.KeyHandler.EventType.KEY||a.keyCode==goog.events.KeyCodes.SPACE&&a.type==goog.events.EventType.KEYUP?this.performActionInternal(a):a.keyCode==goog.events.KeyCodes.SPACE};goog.ui.registry.setDecoratorByClassName(goog.ui.ButtonRenderer.CSS_CLASS,function(){return new goog.ui.Button(null)});goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_CAMINO=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_CAMINO||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.init_=function(){goog.userAgent.product.detectedFirefox_=!1;goog.userAgent.product.detectedCamino_=!1;goog.userAgent.product.detectedIphone_=!1;goog.userAgent.product.detectedIpad_=!1;goog.userAgent.product.detectedAndroid_=!1;goog.userAgent.product.detectedChrome_=!1;goog.userAgent.product.detectedSafari_=!1;var a=goog.userAgent.getUserAgentString();a&&(-1!=a.indexOf("Firefox")?goog.userAgent.product.detectedFirefox_=!0:-1!=a.indexOf("Camino")?goog.userAgent.product.detectedCamino_=
!0:-1!=a.indexOf("iPhone")||-1!=a.indexOf("iPod")?goog.userAgent.product.detectedIphone_=!0:-1!=a.indexOf("iPad")?goog.userAgent.product.detectedIpad_=!0:-1!=a.indexOf("Android")?goog.userAgent.product.detectedAndroid_=!0:-1!=a.indexOf("Chrome")?goog.userAgent.product.detectedChrome_=!0:-1!=a.indexOf("Safari")&&(goog.userAgent.product.detectedSafari_=!0))};goog.userAgent.product.PRODUCT_KNOWN_||goog.userAgent.product.init_();goog.userAgent.product.OPERA=goog.userAgent.OPERA;
goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.userAgent.product.detectedFirefox_;goog.userAgent.product.CAMINO=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CAMINO:goog.userAgent.product.detectedCamino_;goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.detectedIphone_;
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.userAgent.product.detectedIpad_;goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.userAgent.product.detectedAndroid_;goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.userAgent.product.detectedChrome_;
goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.detectedSafari_;goog.ui.MenuButton=function(a,b,c,d){goog.ui.Button.call(this,a,c||goog.ui.MenuButtonRenderer.getInstance(),d);this.setSupportedState(goog.ui.Component.State.OPENED,!0);this.menuPosition_=new goog.positioning.MenuAnchoredPosition(null,goog.positioning.Corner.BOTTOM_START);b&&this.setMenu(b);this.menuMargin_=null;this.timer_=new goog.Timer(500);!goog.userAgent.product.IPHONE&&!goog.userAgent.product.IPAD||goog.userAgent.isVersion("533.17.9")||this.setFocusablePopupMenu(!0)};
goog.inherits(goog.ui.MenuButton,goog.ui.Button);goog.ui.MenuButton.prototype.isFocusablePopupMenu_=!1;goog.ui.MenuButton.prototype.renderMenuAsSibling_=!1;goog.ui.MenuButton.prototype.enterDocument=function(){goog.ui.MenuButton.superClass_.enterDocument.call(this);this.menu_&&this.attachMenuEventListeners_(this.menu_,!0);var a=this.getElement();goog.asserts.assert(a,"The menu button DOM element cannot be null.");goog.a11y.aria.setState(a,goog.a11y.aria.State.HASPOPUP,"true")};
goog.ui.MenuButton.prototype.exitDocument=function(){goog.ui.MenuButton.superClass_.exitDocument.call(this);if(this.menu_){this.setOpen(!1);this.menu_.exitDocument();this.attachMenuEventListeners_(this.menu_,!1);var a=this.menu_.getElement();a&&goog.dom.removeNode(a)}};goog.ui.MenuButton.prototype.disposeInternal=function(){goog.ui.MenuButton.superClass_.disposeInternal.call(this);this.menu_&&(this.menu_.dispose(),delete this.menu_);delete this.positionElement_;this.timer_.dispose()};
goog.ui.MenuButton.prototype.handleMouseDown=function(a){goog.ui.MenuButton.superClass_.handleMouseDown.call(this,a);this.isActive()&&(this.setOpen(!this.isOpen(),a),this.menu_&&this.menu_.setMouseButtonPressed(this.isOpen()))};goog.ui.MenuButton.prototype.handleMouseUp=function(a){goog.ui.MenuButton.superClass_.handleMouseUp.call(this,a);this.menu_&&!this.isActive()&&this.menu_.setMouseButtonPressed(!1)};goog.ui.MenuButton.prototype.performActionInternal=function(a){this.setActive(!1);return!0};
goog.ui.MenuButton.prototype.handleDocumentMouseDown=function(a){this.menu_&&this.menu_.isVisible()&&!this.containsElement(a.target)&&this.setOpen(!1)};goog.ui.MenuButton.prototype.containsElement=function(a){return a&&goog.dom.contains(this.getElement(),a)||this.menu_&&this.menu_.containsElement(a)||!1};
goog.ui.MenuButton.prototype.handleKeyEventInternal=function(a){if(a.keyCode==goog.events.KeyCodes.SPACE){if(a.preventDefault(),a.type!=goog.events.EventType.KEYUP)return!0}else if(a.type!=goog.events.KeyHandler.EventType.KEY)return!1;if(this.menu_&&this.menu_.isVisible()){var b=this.menu_.handleKeyEvent(a);return a.keyCode==goog.events.KeyCodes.ESC?(this.setOpen(!1),!0):b}return a.keyCode==goog.events.KeyCodes.DOWN||a.keyCode==goog.events.KeyCodes.UP||a.keyCode==goog.events.KeyCodes.SPACE||a.keyCode==
goog.events.KeyCodes.ENTER?(this.setOpen(!0),!0):!1};goog.ui.MenuButton.prototype.handleMenuAction=function(a){this.setOpen(!1)};goog.ui.MenuButton.prototype.handleMenuBlur=function(a){this.isActive()||this.setOpen(!1)};goog.ui.MenuButton.prototype.handleBlur=function(a){this.isFocusablePopupMenu()||this.setOpen(!1);goog.ui.MenuButton.superClass_.handleBlur.call(this,a)};
goog.ui.MenuButton.prototype.getMenu=function(){this.menu_||this.setMenu(new goog.ui.Menu(this.getDomHelper()));return this.menu_||null};goog.ui.MenuButton.prototype.setMenu=function(a){var b=this.menu_;a!=b&&(b&&(this.setOpen(!1),this.isInDocument()&&this.attachMenuEventListeners_(b,!1),delete this.menu_),a&&(this.menu_=a,a.setParent(this),a.setVisible(!1),a.setAllowAutoFocus(this.isFocusablePopupMenu()),this.isInDocument()&&this.attachMenuEventListeners_(a,!0)));return b};
goog.ui.MenuButton.prototype.setMenuPosition=function(a){a&&(this.menuPosition_=a,this.positionElement_=a.element)};goog.ui.MenuButton.prototype.setPositionElement=function(a){this.positionElement_=a;this.positionMenu()};goog.ui.MenuButton.prototype.setMenuMargin=function(a){this.menuMargin_=a};goog.ui.MenuButton.prototype.addItem=function(a){this.getMenu().addChild(a,!0)};goog.ui.MenuButton.prototype.addItemAt=function(a,b){this.getMenu().addChildAt(a,b,!0)};
goog.ui.MenuButton.prototype.removeItem=function(a){(a=this.getMenu().removeChild(a,!0))&&a.dispose()};goog.ui.MenuButton.prototype.removeItemAt=function(a){(a=this.getMenu().removeChildAt(a,!0))&&a.dispose()};goog.ui.MenuButton.prototype.getItemAt=function(a){return this.menu_?this.menu_.getChildAt(a):null};goog.ui.MenuButton.prototype.getItemCount=function(){return this.menu_?this.menu_.getChildCount():0};
goog.ui.MenuButton.prototype.setVisible=function(a,b){var c=goog.ui.MenuButton.superClass_.setVisible.call(this,a,b);c&&!this.isVisible()&&this.setOpen(!1);return c};goog.ui.MenuButton.prototype.setEnabled=function(a){goog.ui.MenuButton.superClass_.setEnabled.call(this,a);this.isEnabled()||this.setOpen(!1)};goog.ui.MenuButton.prototype.isAlignMenuToStart=function(){var a=this.menuPosition_.corner;return a==goog.positioning.Corner.BOTTOM_START||a==goog.positioning.Corner.TOP_START};
goog.ui.MenuButton.prototype.setAlignMenuToStart=function(a){this.menuPosition_.corner=a?goog.positioning.Corner.BOTTOM_START:goog.positioning.Corner.BOTTOM_END};goog.ui.MenuButton.prototype.setScrollOnOverflow=function(a){this.menuPosition_.setLastResortOverflow&&this.menuPosition_.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X|(a?goog.positioning.Overflow.RESIZE_HEIGHT:goog.positioning.Overflow.ADJUST_Y))};
goog.ui.MenuButton.prototype.isScrollOnOverflow=function(){return this.menuPosition_.getLastResortOverflow&&!!(this.menuPosition_.getLastResortOverflow()&goog.positioning.Overflow.RESIZE_HEIGHT)};goog.ui.MenuButton.prototype.isFocusablePopupMenu=function(){return this.isFocusablePopupMenu_};goog.ui.MenuButton.prototype.setFocusablePopupMenu=function(a){this.isFocusablePopupMenu_=a};goog.ui.MenuButton.prototype.setRenderMenuAsSibling=function(a){this.renderMenuAsSibling_=a};
goog.ui.MenuButton.prototype.showMenu=function(){this.setOpen(!0)};goog.ui.MenuButton.prototype.hideMenu=function(){this.setOpen(!1)};
goog.ui.MenuButton.prototype.setOpen=function(a,b){goog.ui.MenuButton.superClass_.setOpen.call(this,a);if(this.menu_&&this.hasState(goog.ui.Component.State.OPENED)==a){if(a)this.menu_.isInDocument()||(this.renderMenuAsSibling_?this.menu_.render(this.getElement().parentNode):this.menu_.render()),this.viewportBox_=goog.style.getVisibleRectForElement(this.getElement()),this.buttonRect_=goog.style.getBounds(this.getElement()),this.positionMenu(),this.menu_.setHighlightedIndex(-1);else{this.setActive(!1);
this.menu_.setMouseButtonPressed(!1);var c=this.getElement();c&&goog.a11y.aria.setState(c,goog.a11y.aria.State.ACTIVEDESCENDANT,"");goog.isDefAndNotNull(this.originalSize_)&&(this.originalSize_=void 0,(c=this.menu_.getElement())&&goog.style.setSize(c,"",""))}this.menu_.setVisible(a,!1,b);this.isDisposed()||this.attachPopupListeners_(a)}};goog.ui.MenuButton.prototype.invalidateMenuSize=function(){this.originalSize_=void 0};
goog.ui.MenuButton.prototype.positionMenu=function(){if(this.menu_.isInDocument()){var a=this.positionElement_||this.getElement(),b=this.menuPosition_;this.menuPosition_.element=a;a=this.menu_.getElement();this.menu_.isVisible()||(a.style.visibility="hidden",goog.style.showElement(a,!0));!this.originalSize_&&this.isScrollOnOverflow()&&(this.originalSize_=goog.style.getSize(a));var c=goog.positioning.flipCornerVertical(b.corner);b.reposition(a,c,this.menuMargin_,this.originalSize_);this.menu_.isVisible()||
(goog.style.showElement(a,!1),a.style.visibility="visible")}};goog.ui.MenuButton.prototype.onTick_=function(a){a=goog.style.getBounds(this.getElement());var b=goog.style.getVisibleRectForElement(this.getElement());goog.math.Rect.equals(this.buttonRect_,a)&&goog.math.Box.equals(this.viewportBox_,b)||(this.buttonRect_=a,this.viewportBox_=b,this.positionMenu())};
goog.ui.MenuButton.prototype.attachMenuEventListeners_=function(a,b){var c=this.getHandler(),d=b?c.listen:c.unlisten;d.call(c,a,goog.ui.Component.EventType.ACTION,this.handleMenuAction);d.call(c,a,goog.ui.Component.EventType.HIGHLIGHT,this.handleHighlightItem);d.call(c,a,goog.ui.Component.EventType.UNHIGHLIGHT,this.handleUnHighlightItem)};
goog.ui.MenuButton.prototype.handleHighlightItem=function(a){var b=this.getElement();goog.asserts.assert(b,"The menu button DOM element cannot be null.");null!=a.target.getElement()&&goog.a11y.aria.setState(b,goog.a11y.aria.State.ACTIVEDESCENDANT,a.target.getElement().id)};
goog.ui.MenuButton.prototype.handleUnHighlightItem=function(a){this.menu_.getHighlighted()||(a=this.getElement(),goog.asserts.assert(a,"The menu button DOM element cannot be null."),goog.a11y.aria.setState(a,goog.a11y.aria.State.ACTIVEDESCENDANT,""))};
goog.ui.MenuButton.prototype.attachPopupListeners_=function(a){var b=this.getHandler(),c=a?b.listen:b.unlisten;c.call(b,this.getDomHelper().getDocument(),goog.events.EventType.MOUSEDOWN,this.handleDocumentMouseDown,!0);this.isFocusablePopupMenu()&&c.call(b,this.menu_,goog.ui.Component.EventType.BLUR,this.handleMenuBlur);c.call(b,this.timer_,goog.Timer.TICK,this.onTick_);a?this.timer_.start():this.timer_.stop()};goog.ui.registry.setDecoratorByClassName(goog.ui.MenuButtonRenderer.CSS_CLASS,function(){return new goog.ui.MenuButton(null)});goog.ui.ColorMenuButton=function(a,b,c,d){goog.ui.MenuButton.call(this,a,b,c||goog.ui.ColorMenuButtonRenderer.getInstance(),d)};goog.inherits(goog.ui.ColorMenuButton,goog.ui.MenuButton);goog.ui.ColorMenuButton.PALETTES={GRAYSCALE:"#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),SOLID:"#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),PASTEL:"#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")};
goog.ui.ColorMenuButton.NO_COLOR="none";goog.ui.ColorMenuButton.newColorMenu=function(a,b){var c=new goog.ui.Menu(b);a&&goog.array.forEach(a,function(a){c.addChild(a,!0)});goog.object.forEach(goog.ui.ColorMenuButton.PALETTES,function(a){a=new goog.ui.ColorPalette(a,null,b);a.setSize(8);c.addChild(a,!0)});return c};goog.ui.ColorMenuButton.prototype.getSelectedColor=function(){return this.getValue()};goog.ui.ColorMenuButton.prototype.setSelectedColor=function(a){this.setValue(a)};
goog.ui.ColorMenuButton.prototype.setValue=function(a){for(var b=0,c;c=this.getItemAt(b);b++)"function"==typeof c.setSelectedColor&&c.setSelectedColor(a);goog.ui.ColorMenuButton.superClass_.setValue.call(this,a)};
goog.ui.ColorMenuButton.prototype.handleMenuAction=function(a){"function"==typeof a.target.getSelectedColor?this.setValue(a.target.getSelectedColor()):a.target.getValue()==goog.ui.ColorMenuButton.NO_COLOR&&this.setValue(null);goog.ui.ColorMenuButton.superClass_.handleMenuAction.call(this,a);a.stopPropagation();this.dispatchEvent(goog.ui.Component.EventType.ACTION)};
goog.ui.ColorMenuButton.prototype.setOpen=function(a,b){a&&0==this.getItemCount()&&(this.setMenu(goog.ui.ColorMenuButton.newColorMenu(null,this.getDomHelper())),this.setValue(this.getValue()));goog.ui.ColorMenuButton.superClass_.setOpen.call(this,a,b)};goog.ui.registry.setDecoratorByClassName(goog.ui.ColorMenuButtonRenderer.CSS_CLASS,function(){return new goog.ui.ColorMenuButton(null)});goog.ui.MenuBarRenderer=function(){goog.ui.ContainerRenderer.call(this)};goog.inherits(goog.ui.MenuBarRenderer,goog.ui.ContainerRenderer);goog.addSingletonGetter(goog.ui.MenuBarRenderer);goog.ui.MenuBarRenderer.CSS_CLASS="goog-menubar";goog.ui.MenuBarRenderer.prototype.getAriaRole=function(){return goog.a11y.aria.Role.MENUBAR};goog.ui.MenuBarRenderer.prototype.getCssClass=function(){return goog.ui.MenuBarRenderer.CSS_CLASS};goog.ui.MenuBarRenderer.prototype.getDefaultOrientation=function(){return goog.ui.Container.Orientation.HORIZONTAL};goog.ui.menuBar={};goog.ui.menuBar.create=function(a,b){return new goog.ui.Container(null,a?a:goog.ui.MenuBarRenderer.getInstance(),b)};goog.ui.menuBarDecorator={};goog.ui.registry.setDecoratorByClassName(goog.ui.MenuBarRenderer.CSS_CLASS,goog.ui.menuBar.create);goog.fx={};goog.fx.Dragger=function(a,b,c){goog.events.EventTarget.call(this);this.target=a;this.handle=b||a;this.limits=c||new goog.math.Rect(NaN,NaN,NaN,NaN);this.document_=goog.dom.getOwnerDocument(a);this.eventHandler_=new goog.events.EventHandler(this);goog.events.listen(this.handle,[goog.events.EventType.TOUCHSTART,goog.events.EventType.MOUSEDOWN],this.startDrag,!1,this)};goog.inherits(goog.fx.Dragger,goog.events.EventTarget);
goog.fx.Dragger.HAS_SET_CAPTURE_=goog.userAgent.IE||goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9.3");goog.fx.Dragger.EventType={EARLY_CANCEL:"earlycancel",START:"start",BEFOREDRAG:"beforedrag",DRAG:"drag",END:"end"};goog.fx.Dragger.prototype.clientX=0;goog.fx.Dragger.prototype.clientY=0;goog.fx.Dragger.prototype.screenX=0;goog.fx.Dragger.prototype.screenY=0;goog.fx.Dragger.prototype.startX=0;goog.fx.Dragger.prototype.startY=0;goog.fx.Dragger.prototype.deltaX=0;
goog.fx.Dragger.prototype.deltaY=0;goog.fx.Dragger.prototype.enabled_=!0;goog.fx.Dragger.prototype.dragging_=!1;goog.fx.Dragger.prototype.hysteresisDistanceSquared_=0;goog.fx.Dragger.prototype.mouseDownTime_=0;goog.fx.Dragger.prototype.ieDragStartCancellingOn_=!1;goog.fx.Dragger.prototype.useRightPositioningForRtl_=!1;goog.fx.Dragger.prototype.enableRightPositioningForRtl=function(a){this.useRightPositioningForRtl_=a};goog.fx.Dragger.prototype.getHandler=function(){return this.eventHandler_};
goog.fx.Dragger.prototype.setLimits=function(a){this.limits=a||new goog.math.Rect(NaN,NaN,NaN,NaN)};goog.fx.Dragger.prototype.setHysteresis=function(a){this.hysteresisDistanceSquared_=Math.pow(a,2)};goog.fx.Dragger.prototype.getHysteresis=function(){return Math.sqrt(this.hysteresisDistanceSquared_)};goog.fx.Dragger.prototype.setScrollTarget=function(a){this.scrollTarget_=a};goog.fx.Dragger.prototype.setCancelIeDragStart=function(a){this.ieDragStartCancellingOn_=a};
goog.fx.Dragger.prototype.getEnabled=function(){return this.enabled_};goog.fx.Dragger.prototype.setEnabled=function(a){this.enabled_=a};goog.fx.Dragger.prototype.disposeInternal=function(){goog.fx.Dragger.superClass_.disposeInternal.call(this);goog.events.unlisten(this.handle,[goog.events.EventType.TOUCHSTART,goog.events.EventType.MOUSEDOWN],this.startDrag,!1,this);this.cleanUpAfterDragging_();this.eventHandler_=this.handle=this.target=null};
goog.fx.Dragger.prototype.isRightToLeft_=function(){goog.isDef(this.rightToLeft_)||(this.rightToLeft_=goog.style.isRightToLeft(this.target));return this.rightToLeft_};
goog.fx.Dragger.prototype.startDrag=function(a){var b=a.type==goog.events.EventType.MOUSEDOWN;if(!this.enabled_||this.dragging_||b&&!a.isMouseActionButton())this.dispatchEvent(goog.fx.Dragger.EventType.EARLY_CANCEL);else{this.maybeReinitTouchEvent_(a);if(0==this.hysteresisDistanceSquared_)if(this.fireDragStart_(a))this.dragging_=!0,a.preventDefault();else return;else a.preventDefault();this.setupDragHandlers();this.clientX=this.startX=a.clientX;this.clientY=this.startY=a.clientY;this.screenX=a.screenX;
this.screenY=a.screenY;this.deltaX=this.useRightPositioningForRtl_?goog.style.bidi.getOffsetStart(this.target):this.target.offsetLeft;this.deltaY=this.target.offsetTop;this.pageScroll=goog.dom.getDomHelper(this.document_).getDocumentScroll();this.mouseDownTime_=goog.now()}};
goog.fx.Dragger.prototype.setupDragHandlers=function(){var a=this.document_,b=a.documentElement,c=!goog.fx.Dragger.HAS_SET_CAPTURE_;this.eventHandler_.listen(a,[goog.events.EventType.TOUCHMOVE,goog.events.EventType.MOUSEMOVE],this.handleMove_,c);this.eventHandler_.listen(a,[goog.events.EventType.TOUCHEND,goog.events.EventType.MOUSEUP],this.endDrag,c);goog.fx.Dragger.HAS_SET_CAPTURE_?(b.setCapture(!1),this.eventHandler_.listen(b,goog.events.EventType.LOSECAPTURE,this.endDrag)):this.eventHandler_.listen(goog.dom.getWindow(a),
goog.events.EventType.BLUR,this.endDrag);goog.userAgent.IE&&this.ieDragStartCancellingOn_&&this.eventHandler_.listen(a,goog.events.EventType.DRAGSTART,goog.events.Event.preventDefault);this.scrollTarget_&&this.eventHandler_.listen(this.scrollTarget_,goog.events.EventType.SCROLL,this.onScroll_,c)};goog.fx.Dragger.prototype.fireDragStart_=function(a){return this.dispatchEvent(new goog.fx.DragEvent(goog.fx.Dragger.EventType.START,this,a.clientX,a.clientY,a))};
goog.fx.Dragger.prototype.cleanUpAfterDragging_=function(){this.eventHandler_.removeAll();goog.fx.Dragger.HAS_SET_CAPTURE_&&this.document_.releaseCapture()};
goog.fx.Dragger.prototype.endDrag=function(a,b){this.cleanUpAfterDragging_();if(this.dragging_){this.maybeReinitTouchEvent_(a);this.dragging_=!1;var c=this.limitX(this.deltaX),d=this.limitY(this.deltaY);this.dispatchEvent(new goog.fx.DragEvent(goog.fx.Dragger.EventType.END,this,a.clientX,a.clientY,a,c,d,b||a.type==goog.events.EventType.TOUCHCANCEL))}else this.dispatchEvent(goog.fx.Dragger.EventType.EARLY_CANCEL);a.type!=goog.events.EventType.TOUCHEND&&a.type!=goog.events.EventType.TOUCHCANCEL||a.preventDefault()};
goog.fx.Dragger.prototype.endDragCancel=function(a){this.endDrag(a,!0)};goog.fx.Dragger.prototype.maybeReinitTouchEvent_=function(a){var b=a.type;b==goog.events.EventType.TOUCHSTART||b==goog.events.EventType.TOUCHMOVE?a.init(a.getBrowserEvent().targetTouches[0],a.currentTarget):b!=goog.events.EventType.TOUCHEND&&b!=goog.events.EventType.TOUCHCANCEL||a.init(a.getBrowserEvent().changedTouches[0],a.currentTarget)};
goog.fx.Dragger.prototype.handleMove_=function(a){if(this.enabled_){this.maybeReinitTouchEvent_(a);var b=(this.useRightPositioningForRtl_&&this.isRightToLeft_()?-1:1)*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.dragging_){var d=this.startX-this.clientX,e=this.startY-this.clientY;if(d*d+e*e>this.hysteresisDistanceSquared_)if(this.fireDragStart_(a))this.dragging_=!0;else{this.isDisposed()||this.endDrag(a);
return}}c=this.calculatePosition_(b,c);b=c.x;c=c.y;this.dragging_&&this.dispatchEvent(new goog.fx.DragEvent(goog.fx.Dragger.EventType.BEFOREDRAG,this,a.clientX,a.clientY,a,b,c))&&(this.doDrag(a,b,c,!1),a.preventDefault())}};
goog.fx.Dragger.prototype.calculatePosition_=function(a,b){var c=goog.dom.getDomHelper(this.document_).getDocumentScroll();a+=c.x-this.pageScroll.x;b+=c.y-this.pageScroll.y;this.pageScroll=c;this.deltaX+=a;this.deltaY+=b;var c=this.limitX(this.deltaX),d=this.limitY(this.deltaY);return new goog.math.Coordinate(c,d)};goog.fx.Dragger.prototype.onScroll_=function(a){var b=this.calculatePosition_(0,0);a.clientX=this.clientX;a.clientY=this.clientY;this.doDrag(a,b.x,b.y,!0)};
goog.fx.Dragger.prototype.doDrag=function(a,b,c,d){this.defaultAction(b,c);this.dispatchEvent(new goog.fx.DragEvent(goog.fx.Dragger.EventType.DRAG,this,a.clientX,a.clientY,a,b,c))};goog.fx.Dragger.prototype.limitX=function(a){var b=this.limits,c=isNaN(b.left)?null:b.left,b=isNaN(b.width)?0:b.width;return Math.min(null!=c?c+b:Infinity,Math.max(null!=c?c:-Infinity,a))};
goog.fx.Dragger.prototype.limitY=function(a){var b=this.limits,c=isNaN(b.top)?null:b.top,b=isNaN(b.height)?0:b.height;return Math.min(null!=c?c+b:Infinity,Math.max(null!=c?c:-Infinity,a))};goog.fx.Dragger.prototype.defaultAction=function(a,b){this.useRightPositioningForRtl_&&this.isRightToLeft_()?this.target.style.right=a+"px":this.target.style.left=a+"px";this.target.style.top=b+"px"};goog.fx.Dragger.prototype.isDragging=function(){return this.dragging_};
goog.fx.DragEvent=function(a,b,c,d,e,f,g,h){goog.events.Event.call(this,a);this.clientX=c;this.clientY=d;this.browserEvent=e;this.left=goog.isDef(f)?f:b.deltaX;this.top=goog.isDef(g)?g:b.deltaY;this.dragger=b;this.dragCanceled=!!h};goog.inherits(goog.fx.DragEvent,goog.events.Event);goog.dom.iframe={};goog.dom.iframe.BLANK_SOURCE='javascript:""';goog.dom.iframe.STYLES_="border:0;vertical-align:bottom;";goog.dom.iframe.createBlank=function(a,b){return a.createDom("iframe",{frameborder:0,style:goog.dom.iframe.STYLES_+(b||""),src:goog.dom.iframe.BLANK_SOURCE})};goog.dom.iframe.writeContent=function(a,b){var c=goog.dom.getFrameContentDocument(a);c.open();c.write(b);c.close()};
goog.dom.iframe.createWithContent=function(a,b,c,d,e){var f=goog.dom.getDomHelper(a),g=[];e||g.push("<!DOCTYPE html>");g.push("<html><head>",b,"</head><body>",c,"</body></html>");b=goog.dom.iframe.createBlank(f,d);a.appendChild(b);goog.dom.iframe.writeContent(b,g.join(""));return b};goog.events.FocusHandler=function(a){goog.events.EventTarget.call(this);this.element_=a;a=goog.userAgent.IE?"focusout":"blur";this.listenKeyIn_=goog.events.listen(this.element_,goog.userAgent.IE?"focusin":"focus",this,!goog.userAgent.IE);this.listenKeyOut_=goog.events.listen(this.element_,a,this,!goog.userAgent.IE)};goog.inherits(goog.events.FocusHandler,goog.events.EventTarget);goog.events.FocusHandler.EventType={FOCUSIN:"focusin",FOCUSOUT:"focusout"};
goog.events.FocusHandler.prototype.handleEvent=function(a){var b=a.getBrowserEvent(),b=new goog.events.BrowserEvent(b);b.type="focusin"==a.type||"focus"==a.type?goog.events.FocusHandler.EventType.FOCUSIN:goog.events.FocusHandler.EventType.FOCUSOUT;this.dispatchEvent(b)};goog.events.FocusHandler.prototype.disposeInternal=function(){goog.events.FocusHandler.superClass_.disposeInternal.call(this);goog.events.unlistenByKey(this.listenKeyIn_);goog.events.unlistenByKey(this.listenKeyOut_);delete this.element_};goog.fx.Transition=function(){};goog.fx.Transition.EventType={PLAY:"play",BEGIN:"begin",RESUME:"resume",END:"end",STOP:"stop",FINISH:"finish",PAUSE:"pause"};goog.ui.PopupBase=function(a,b){goog.events.EventTarget.call(this);this.handler_=new goog.events.EventHandler(this);this.setElement(a||null);b&&this.setType(b)};goog.inherits(goog.ui.PopupBase,goog.events.EventTarget);goog.ui.PopupBase.Type={TOGGLE_DISPLAY:"toggle_display",MOVE_OFFSCREEN:"move_offscreen"};goog.ui.PopupBase.prototype.element_=null;goog.ui.PopupBase.prototype.autoHide_=!0;goog.ui.PopupBase.prototype.autoHideRegion_=null;goog.ui.PopupBase.prototype.isVisible_=!1;
goog.ui.PopupBase.prototype.shouldHideAsync_=!1;goog.ui.PopupBase.prototype.lastShowTime_=-1;goog.ui.PopupBase.prototype.lastHideTime_=-1;goog.ui.PopupBase.prototype.hideOnEscape_=!1;goog.ui.PopupBase.prototype.enableCrossIframeDismissal_=!0;goog.ui.PopupBase.prototype.type_=goog.ui.PopupBase.Type.TOGGLE_DISPLAY;goog.ui.PopupBase.EventType={BEFORE_SHOW:"beforeshow",SHOW:"show",BEFORE_HIDE:"beforehide",HIDE:"hide"};goog.ui.PopupBase.DEBOUNCE_DELAY_MS=150;goog.ui.PopupBase.prototype.getType=function(){return this.type_};
goog.ui.PopupBase.prototype.setType=function(a){this.type_=a};goog.ui.PopupBase.prototype.shouldHideAsync=function(){return this.shouldHideAsync_};goog.ui.PopupBase.prototype.setShouldHideAsync=function(a){this.shouldHideAsync_=a};goog.ui.PopupBase.prototype.getElement=function(){return this.element_};goog.ui.PopupBase.prototype.setElement=function(a){this.ensureNotVisible_();this.element_=a};goog.ui.PopupBase.prototype.getAutoHide=function(){return this.autoHide_};
goog.ui.PopupBase.prototype.setAutoHide=function(a){this.ensureNotVisible_();this.autoHide_=a};goog.ui.PopupBase.prototype.getHideOnEscape=function(){return this.hideOnEscape_};goog.ui.PopupBase.prototype.setHideOnEscape=function(a){this.ensureNotVisible_();this.hideOnEscape_=a};goog.ui.PopupBase.prototype.getEnableCrossIframeDismissal=function(){return this.enableCrossIframeDismissal_};goog.ui.PopupBase.prototype.setEnableCrossIframeDismissal=function(a){this.enableCrossIframeDismissal_=a};
goog.ui.PopupBase.prototype.getAutoHideRegion=function(){return this.autoHideRegion_};goog.ui.PopupBase.prototype.setAutoHideRegion=function(a){this.autoHideRegion_=a};goog.ui.PopupBase.prototype.setTransition=function(a,b){this.showTransition_=a;this.hideTransition_=b};goog.ui.PopupBase.prototype.getLastShowTime=function(){return this.lastShowTime_};goog.ui.PopupBase.prototype.getLastHideTime=function(){return this.lastHideTime_};
goog.ui.PopupBase.prototype.ensureNotVisible_=function(){if(this.isVisible_)throw Error("Can not change this state of the popup while showing.");};goog.ui.PopupBase.prototype.isVisible=function(){return this.isVisible_};goog.ui.PopupBase.prototype.isOrWasRecentlyVisible=function(){return this.isVisible_||goog.now()-this.lastHideTime_<goog.ui.PopupBase.DEBOUNCE_DELAY_MS};
goog.ui.PopupBase.prototype.setVisible=function(a){this.showTransition_&&this.showTransition_.stop();this.hideTransition_&&this.hideTransition_.stop();a?this.show_():this.hide_()};goog.ui.PopupBase.prototype.reposition=goog.nullFunction;
goog.ui.PopupBase.prototype.show_=function(){if(!this.isVisible_&&this.onBeforeShow()){if(!this.element_)throw Error("Caller must call setElement before trying to show the popup");this.reposition();var a=goog.dom.getOwnerDocument(this.element_);this.hideOnEscape_&&this.handler_.listen(a,goog.events.EventType.KEYDOWN,this.onDocumentKeyDown_,!0);if(this.autoHide_)if(this.handler_.listen(a,goog.events.EventType.MOUSEDOWN,this.onDocumentMouseDown_,!0),goog.userAgent.IE){var b;try{b=a.activeElement}catch(c){}for(;b&&
"IFRAME"==b.nodeName;){try{var d=goog.dom.getFrameContentDocument(b)}catch(e){break}a=d;b=a.activeElement}this.handler_.listen(a,goog.events.EventType.MOUSEDOWN,this.onDocumentMouseDown_,!0);this.handler_.listen(a,goog.events.EventType.DEACTIVATE,this.onDocumentBlur_)}else this.handler_.listen(a,goog.events.EventType.BLUR,this.onDocumentBlur_);this.type_==goog.ui.PopupBase.Type.TOGGLE_DISPLAY?this.showPopupElement():this.type_==goog.ui.PopupBase.Type.MOVE_OFFSCREEN&&this.reposition();this.isVisible_=
!0;if(this.showTransition_)goog.events.listenOnce(this.showTransition_,goog.fx.Transition.EventType.END,this.onShow_,!1,this),this.showTransition_.play();else this.onShow_()}};
goog.ui.PopupBase.prototype.hide_=function(a){if(!this.isVisible_||!this.onBeforeHide_(a))return!1;this.handler_&&this.handler_.removeAll();this.isVisible_=!1;this.lastHideTime_=goog.now();this.hideTransition_?(goog.events.listenOnce(this.hideTransition_,goog.fx.Transition.EventType.END,goog.partial(this.continueHidingPopup_,a),!1,this),this.hideTransition_.play()):this.continueHidingPopup_(a);return!0};
goog.ui.PopupBase.prototype.continueHidingPopup_=function(a){this.type_==goog.ui.PopupBase.Type.TOGGLE_DISPLAY?this.shouldHideAsync_?goog.Timer.callOnce(this.hidePopupElement_,0,this):this.hidePopupElement_():this.type_==goog.ui.PopupBase.Type.MOVE_OFFSCREEN&&this.moveOffscreen_();this.onHide_(a)};goog.ui.PopupBase.prototype.showPopupElement=function(){this.element_.style.visibility="visible";goog.style.showElement(this.element_,!0)};
goog.ui.PopupBase.prototype.hidePopupElement_=function(){this.element_.style.visibility="hidden";goog.style.showElement(this.element_,!1)};goog.ui.PopupBase.prototype.moveOffscreen_=function(){this.element_.style.top="-10000px"};goog.ui.PopupBase.prototype.onBeforeShow=function(){return this.dispatchEvent(goog.ui.PopupBase.EventType.BEFORE_SHOW)};goog.ui.PopupBase.prototype.onShow_=function(){this.lastShowTime_=goog.now();this.lastHideTime_=-1;this.dispatchEvent(goog.ui.PopupBase.EventType.SHOW)};
goog.ui.PopupBase.prototype.onBeforeHide_=function(a){return this.dispatchEvent({type:goog.ui.PopupBase.EventType.BEFORE_HIDE,target:a})};goog.ui.PopupBase.prototype.onHide_=function(a){this.dispatchEvent({type:goog.ui.PopupBase.EventType.HIDE,target:a})};goog.ui.PopupBase.prototype.onDocumentMouseDown_=function(a){a=a.target;goog.dom.contains(this.element_,a)||this.autoHideRegion_&&!goog.dom.contains(this.autoHideRegion_,a)||this.shouldDebounce_()||this.hide_(a)};
goog.ui.PopupBase.prototype.onDocumentKeyDown_=function(a){a.keyCode==goog.events.KeyCodes.ESC&&this.hide_(a.target)&&(a.preventDefault(),a.stopPropagation())};goog.ui.PopupBase.prototype.onDocumentBlur_=function(a){if(this.enableCrossIframeDismissal_){var b=goog.dom.getOwnerDocument(this.element_);if(goog.userAgent.IE||goog.userAgent.OPERA){if(a=b.activeElement,!a||goog.dom.contains(this.element_,a)||"BODY"==a.tagName)return}else if(a.target!=b)return;this.shouldDebounce_()||this.hide_()}};
goog.ui.PopupBase.prototype.shouldDebounce_=function(){return goog.now()-this.lastShowTime_<goog.ui.PopupBase.DEBOUNCE_DELAY_MS};goog.ui.PopupBase.prototype.disposeInternal=function(){goog.ui.PopupBase.superClass_.disposeInternal.call(this);this.handler_.dispose();goog.dispose(this.showTransition_);goog.dispose(this.hideTransition_);delete this.element_;delete this.handler_};goog.ui.ModalPopup=function(a,b){goog.ui.Component.call(this,b);this.useIframeMask_=!!a};goog.inherits(goog.ui.ModalPopup,goog.ui.Component);goog.ui.ModalPopup.prototype.focusHandler_=null;goog.ui.ModalPopup.prototype.visible_=!1;goog.ui.ModalPopup.prototype.bgEl_=null;goog.ui.ModalPopup.prototype.bgIframeEl_=null;goog.ui.ModalPopup.prototype.tabCatcherElement_=null;goog.ui.ModalPopup.prototype.backwardTabWrapInProgress_=!1;goog.ui.ModalPopup.prototype.getCssClass=function(){return"goog-modalpopup"};
goog.ui.ModalPopup.prototype.getBackgroundIframe=function(){return this.bgIframeEl_};goog.ui.ModalPopup.prototype.getBackgroundElement=function(){return this.bgEl_};goog.ui.ModalPopup.prototype.createDom=function(){goog.ui.ModalPopup.superClass_.createDom.call(this);var a=this.getElement();goog.dom.classes.add(a,this.getCssClass());goog.dom.setFocusableTabIndex(a,!0);goog.style.showElement(a,!1);this.manageBackgroundDom_();this.createTabCatcher_()};
goog.ui.ModalPopup.prototype.manageBackgroundDom_=function(){this.useIframeMask_&&!this.bgIframeEl_&&(this.bgIframeEl_=goog.dom.iframe.createBlank(this.getDomHelper()),this.bgIframeEl_.className=this.getCssClass()+"-bg",goog.style.showElement(this.bgIframeEl_,!1),goog.style.setOpacity(this.bgIframeEl_,0));this.bgEl_||(this.bgEl_=this.getDomHelper().createDom("div",this.getCssClass()+"-bg"),goog.style.showElement(this.bgEl_,!1))};
goog.ui.ModalPopup.prototype.createTabCatcher_=function(){this.tabCatcherElement_||(this.tabCatcherElement_=this.getDomHelper().createElement("span"),goog.style.showElement(this.tabCatcherElement_,!1),goog.dom.setFocusableTabIndex(this.tabCatcherElement_,!0),this.tabCatcherElement_.style.position="absolute")};
goog.ui.ModalPopup.prototype.setupBackwardTabWrap=function(){this.backwardTabWrapInProgress_=!0;try{this.tabCatcherElement_.focus()}catch(a){}goog.Timer.callOnce(this.resetBackwardTabWrap_,0,this)};goog.ui.ModalPopup.prototype.resetBackwardTabWrap_=function(){this.backwardTabWrapInProgress_=!1};
goog.ui.ModalPopup.prototype.renderBackground_=function(){goog.asserts.assert(!!this.bgEl_,"Background element must not be null.");this.bgIframeEl_&&goog.dom.insertSiblingBefore(this.bgIframeEl_,this.getElement());goog.dom.insertSiblingBefore(this.bgEl_,this.getElement())};goog.ui.ModalPopup.prototype.canDecorate=function(a){return!!a&&a.tagName==goog.dom.TagName.DIV};
goog.ui.ModalPopup.prototype.decorateInternal=function(a){goog.ui.ModalPopup.superClass_.decorateInternal.call(this,a);goog.dom.classes.add(this.getElement(),this.getCssClass());this.manageBackgroundDom_();this.createTabCatcher_();goog.style.showElement(this.getElement(),!1)};
goog.ui.ModalPopup.prototype.enterDocument=function(){this.renderBackground_();goog.ui.ModalPopup.superClass_.enterDocument.call(this);goog.dom.insertSiblingAfter(this.tabCatcherElement_,this.getElement());this.focusHandler_=new goog.events.FocusHandler(this.getDomHelper().getDocument());this.getHandler().listen(this.focusHandler_,goog.events.FocusHandler.EventType.FOCUSIN,this.onFocus_)};
goog.ui.ModalPopup.prototype.exitDocument=function(){this.isVisible()&&this.setVisible(!1);goog.dispose(this.focusHandler_);goog.ui.ModalPopup.superClass_.exitDocument.call(this);goog.dom.removeNode(this.bgIframeEl_);goog.dom.removeNode(this.bgEl_);goog.dom.removeNode(this.tabCatcherElement_)};
goog.ui.ModalPopup.prototype.setVisible=function(a){goog.asserts.assert(this.isInDocument(),"ModalPopup must be rendered first.");a!=this.visible_&&(this.popupShowTransition_&&this.popupShowTransition_.stop(),this.bgShowTransition_&&this.bgShowTransition_.stop(),this.popupHideTransition_&&this.popupHideTransition_.stop(),this.bgHideTransition_&&this.bgHideTransition_.stop(),a?this.show_():this.hide_())};
goog.ui.ModalPopup.prototype.setTransition=function(a,b,c,d){this.popupShowTransition_=a;this.popupHideTransition_=b;this.bgShowTransition_=c;this.bgHideTransition_=d};
goog.ui.ModalPopup.prototype.show_=function(){if(this.dispatchEvent(goog.ui.PopupBase.EventType.BEFORE_SHOW))if(this.resizeBackground_(),this.reposition(),this.getHandler().listen(this.getDomHelper().getWindow(),goog.events.EventType.RESIZE,this.resizeBackground_),this.showPopupElement_(!0),this.focus(),this.visible_=!0,this.popupShowTransition_&&this.bgShowTransition_)goog.events.listenOnce(this.popupShowTransition_,goog.fx.Transition.EventType.END,this.onShow,!1,this),this.bgShowTransition_.play(),
this.popupShowTransition_.play();else this.onShow()};
goog.ui.ModalPopup.prototype.hide_=function(){if(this.dispatchEvent(goog.ui.PopupBase.EventType.BEFORE_HIDE))if(this.getHandler().unlisten(this.getDomHelper().getWindow(),goog.events.EventType.RESIZE,this.resizeBackground_),this.visible_=!1,this.popupHideTransition_&&this.bgHideTransition_)goog.events.listenOnce(this.popupHideTransition_,goog.fx.Transition.EventType.END,this.onHide,!1,this),this.bgHideTransition_.play(),this.popupHideTransition_.play();else this.onHide()};
goog.ui.ModalPopup.prototype.showPopupElement_=function(a){this.bgIframeEl_&&goog.style.showElement(this.bgIframeEl_,a);this.bgEl_&&goog.style.showElement(this.bgEl_,a);goog.style.showElement(this.getElement(),a);goog.style.showElement(this.tabCatcherElement_,a)};goog.ui.ModalPopup.prototype.onShow=function(){this.dispatchEvent(goog.ui.PopupBase.EventType.SHOW)};goog.ui.ModalPopup.prototype.onHide=function(){this.showPopupElement_(!1);this.dispatchEvent(goog.ui.PopupBase.EventType.HIDE)};
goog.ui.ModalPopup.prototype.isVisible=function(){return this.visible_};goog.ui.ModalPopup.prototype.focus=function(){this.focusElement_()};
goog.ui.ModalPopup.prototype.resizeBackground_=function(){this.bgIframeEl_&&goog.style.showElement(this.bgIframeEl_,!1);this.bgEl_&&goog.style.showElement(this.bgEl_,!1);var a=this.getDomHelper().getDocument(),b=goog.dom.getWindow(a)||window,c=goog.dom.getViewportSize(b),b=Math.max(c.width,Math.max(a.body.scrollWidth,a.documentElement.scrollWidth)),a=Math.max(c.height,Math.max(a.body.scrollHeight,a.documentElement.scrollHeight));this.bgIframeEl_&&(goog.style.showElement(this.bgIframeEl_,!0),goog.style.setSize(this.bgIframeEl_,
b,a));this.bgEl_&&(goog.style.showElement(this.bgEl_,!0),goog.style.setSize(this.bgEl_,b,a))};
goog.ui.ModalPopup.prototype.reposition=function(){var a=this.getDomHelper().getDocument(),b=goog.dom.getWindow(a)||window;if("fixed"==goog.style.getComputedPosition(this.getElement()))var c=a=0;else c=this.getDomHelper().getDocumentScroll(),a=c.x,c=c.y;var d=goog.style.getSize(this.getElement()),b=goog.dom.getViewportSize(b),a=Math.max(a+b.width/2-d.width/2,0),c=Math.max(c+b.height/2-d.height/2,0);goog.style.setPosition(this.getElement(),a,c);goog.style.setPosition(this.tabCatcherElement_,a,c)};
goog.ui.ModalPopup.prototype.onFocus_=function(a){this.backwardTabWrapInProgress_?this.resetBackwardTabWrap_():a.target==this.tabCatcherElement_&&goog.Timer.callOnce(this.focusElement_,0,this)};goog.ui.ModalPopup.prototype.focusElement_=function(){try{goog.userAgent.IE&&this.getDomHelper().getDocument().body.focus(),this.getElement().focus()}catch(a){}};
goog.ui.ModalPopup.prototype.disposeInternal=function(){goog.dispose(this.popupShowTransition_);this.popupShowTransition_=null;goog.dispose(this.popupHideTransition_);this.popupHideTransition_=null;goog.dispose(this.bgShowTransition_);this.bgShowTransition_=null;goog.dispose(this.bgHideTransition_);this.bgHideTransition_=null;goog.ui.ModalPopup.superClass_.disposeInternal.call(this)};goog.ui.Dialog=function(a,b,c){goog.ui.ModalPopup.call(this,b,c);this.class_=a||"modal-dialog";this.buttons_=goog.ui.Dialog.ButtonSet.createOkCancel()};goog.inherits(goog.ui.Dialog,goog.ui.ModalPopup);goog.ui.Dialog.prototype.escapeToCancel_=!0;goog.ui.Dialog.prototype.hasTitleCloseButton_=!0;goog.ui.Dialog.prototype.modal_=!0;goog.ui.Dialog.prototype.draggable_=!0;goog.ui.Dialog.prototype.backgroundElementOpacity_=0.5;goog.ui.Dialog.prototype.title_="";goog.ui.Dialog.prototype.content_="";
goog.ui.Dialog.prototype.dragger_=null;goog.ui.Dialog.prototype.disposeOnHide_=!1;goog.ui.Dialog.prototype.titleEl_=null;goog.ui.Dialog.prototype.titleTextEl_=null;goog.ui.Dialog.prototype.titleId_=null;goog.ui.Dialog.prototype.titleCloseEl_=null;goog.ui.Dialog.prototype.contentEl_=null;goog.ui.Dialog.prototype.buttonEl_=null;goog.ui.Dialog.prototype.preferredAriaRole_=goog.a11y.aria.Role.DIALOG;goog.ui.Dialog.prototype.getCssClass=function(){return this.class_};
goog.ui.Dialog.prototype.setTitle=function(a){this.title_=a;this.titleTextEl_&&goog.dom.setTextContent(this.titleTextEl_,a)};goog.ui.Dialog.prototype.getTitle=function(){return this.title_};goog.ui.Dialog.prototype.setContent=function(a){this.content_=a;this.contentEl_&&(this.contentEl_.innerHTML=a)};goog.ui.Dialog.prototype.getContent=function(){return this.content_};goog.ui.Dialog.prototype.getPreferredAriaRole=function(){return this.preferredAriaRole_};
goog.ui.Dialog.prototype.setPreferredAriaRole=function(a){this.preferredAriaRole_=a};goog.ui.Dialog.prototype.renderIfNoDom_=function(){this.getElement()||this.render()};goog.ui.Dialog.prototype.getContentElement=function(){this.renderIfNoDom_();return this.contentEl_};goog.ui.Dialog.prototype.getTitleElement=function(){this.renderIfNoDom_();return this.titleEl_};goog.ui.Dialog.prototype.getTitleTextElement=function(){this.renderIfNoDom_();return this.titleTextEl_};
goog.ui.Dialog.prototype.getTitleCloseElement=function(){this.renderIfNoDom_();return this.titleCloseEl_};goog.ui.Dialog.prototype.getButtonElement=function(){this.renderIfNoDom_();return this.buttonEl_};goog.ui.Dialog.prototype.getDialogElement=function(){this.renderIfNoDom_();return this.getElement()};goog.ui.Dialog.prototype.getBackgroundElement=function(){this.renderIfNoDom_();return goog.ui.Dialog.superClass_.getBackgroundElement.call(this)};
goog.ui.Dialog.prototype.getBackgroundElementOpacity=function(){return this.backgroundElementOpacity_};goog.ui.Dialog.prototype.setBackgroundElementOpacity=function(a){this.backgroundElementOpacity_=a;this.getElement()&&(a=this.getBackgroundElement())&&goog.style.setOpacity(a,this.backgroundElementOpacity_)};goog.ui.Dialog.prototype.setModal=function(a){a!=this.modal_&&this.setModalInternal_(a)};
goog.ui.Dialog.prototype.setModalInternal_=function(a){this.modal_=a;if(this.isInDocument()){var b=this.getDomHelper(),c=this.getBackgroundElement(),d=this.getBackgroundIframe();a?(d&&b.insertSiblingBefore(d,this.getElement()),b.insertSiblingBefore(c,this.getElement())):(b.removeNode(d),b.removeNode(c))}};goog.ui.Dialog.prototype.getModal=function(){return this.modal_};goog.ui.Dialog.prototype.getClass=function(){return this.getCssClass()};
goog.ui.Dialog.prototype.setDraggable=function(a){this.draggable_=a;this.setDraggingEnabled_(a&&this.isInDocument())};goog.ui.Dialog.prototype.createDragger=function(){return new goog.fx.Dragger(this.getElement(),this.titleEl_)};goog.ui.Dialog.prototype.getDraggable=function(){return this.draggable_};
goog.ui.Dialog.prototype.setDraggingEnabled_=function(a){this.getElement()&&goog.dom.classes.enable(this.titleEl_,this.class_+"-title-draggable",a);a&&!this.dragger_?(this.dragger_=this.createDragger(),goog.dom.classes.add(this.titleEl_,this.class_+"-title-draggable"),goog.events.listen(this.dragger_,goog.fx.Dragger.EventType.START,this.setDraggerLimits_,!1,this)):!a&&this.dragger_&&(this.dragger_.dispose(),this.dragger_=null)};
goog.ui.Dialog.prototype.createDom=function(){goog.ui.Dialog.superClass_.createDom.call(this);var a=this.getElement();goog.asserts.assert(a,"getElement() returns null");var b=this.getDomHelper();this.titleEl_=b.createDom("div",{className:this.class_+"-title",id:this.getId()},this.titleTextEl_=b.createDom("span",this.class_+"-title-text",this.title_),this.titleCloseEl_=b.createDom("span",this.class_+"-title-close"));goog.dom.append(a,this.titleEl_,this.contentEl_=b.createDom("div",this.class_+"-content"),
this.buttonEl_=b.createDom("div",this.class_+"-buttons"));this.titleId_=this.titleEl_.id;goog.a11y.aria.setRole(a,this.getPreferredAriaRole());goog.a11y.aria.setState(a,goog.a11y.aria.State.LABELLEDBY,this.titleId_||"");this.content_&&(this.contentEl_.innerHTML=this.content_);goog.style.showElement(this.titleCloseEl_,this.hasTitleCloseButton_);this.buttons_&&this.buttons_.attachToElement(this.buttonEl_);goog.style.showElement(this.buttonEl_,!!this.buttons_);this.setBackgroundElementOpacity(this.backgroundElementOpacity_)};
goog.ui.Dialog.prototype.decorateInternal=function(a){goog.ui.Dialog.superClass_.decorateInternal.call(this,a);a=this.getElement();goog.asserts.assert(a,"The DOM element for dialog cannot be null.");var b=this.class_+"-content";(this.contentEl_=goog.dom.getElementsByTagNameAndClass(null,b,a)[0])?this.content_=this.contentEl_.innerHTML:(this.contentEl_=this.getDomHelper().createDom("div",b),this.content_&&(this.contentEl_.innerHTML=this.content_),a.appendChild(this.contentEl_));var b=this.class_+"-title",
c=this.class_+"-title-text",d=this.class_+"-title-close";(this.titleEl_=goog.dom.getElementsByTagNameAndClass(null,b,a)[0])?(this.titleTextEl_=goog.dom.getElementsByTagNameAndClass(null,c,this.titleEl_)[0],this.titleCloseEl_=goog.dom.getElementsByTagNameAndClass(null,d,this.titleEl_)[0],this.titleEl_.id||(this.titleEl_.id=this.getId())):(this.titleEl_=this.getDomHelper().createDom("div",{className:b,id:this.getId()}),a.insertBefore(this.titleEl_,this.contentEl_));this.titleId_=this.titleEl_.id;this.titleTextEl_?
this.title_=goog.dom.getTextContent(this.titleTextEl_):(this.titleTextEl_=this.getDomHelper().createDom("span",c,this.title_),this.titleEl_.appendChild(this.titleTextEl_));goog.a11y.aria.setState(a,goog.a11y.aria.State.LABELLEDBY,this.titleId_||"");this.titleCloseEl_||(this.titleCloseEl_=this.getDomHelper().createDom("span",d),this.titleEl_.appendChild(this.titleCloseEl_));goog.style.showElement(this.titleCloseEl_,this.hasTitleCloseButton_);b=this.class_+"-buttons";(this.buttonEl_=goog.dom.getElementsByTagNameAndClass(null,
b,a)[0])?(this.buttons_=new goog.ui.Dialog.ButtonSet(this.getDomHelper()),this.buttons_.decorate(this.buttonEl_)):(this.buttonEl_=this.getDomHelper().createDom("div",b),a.appendChild(this.buttonEl_),this.buttons_&&this.buttons_.attachToElement(this.buttonEl_),goog.style.showElement(this.buttonEl_,!!this.buttons_));this.setBackgroundElementOpacity(this.backgroundElementOpacity_)};
goog.ui.Dialog.prototype.enterDocument=function(){goog.ui.Dialog.superClass_.enterDocument.call(this);this.getHandler().listen(this.getElement(),goog.events.EventType.KEYDOWN,this.onKey_).listen(this.getElement(),goog.events.EventType.KEYPRESS,this.onKey_);this.getHandler().listen(this.buttonEl_,goog.events.EventType.CLICK,this.onButtonClick_);this.setDraggingEnabled_(this.draggable_);this.getHandler().listen(this.titleCloseEl_,goog.events.EventType.CLICK,this.onTitleCloseClick_);var a=this.getElement();
goog.asserts.assert(a,"The DOM element for dialog cannot be null");goog.a11y.aria.setRole(a,this.getPreferredAriaRole());""!==this.titleTextEl_.id&&goog.a11y.aria.setState(a,goog.a11y.aria.State.LABELLEDBY,this.titleTextEl_.id);this.modal_||this.setModalInternal_(!1)};goog.ui.Dialog.prototype.exitDocument=function(){this.isVisible()&&this.setVisible(!1);this.setDraggingEnabled_(!1);goog.ui.Dialog.superClass_.exitDocument.call(this)};
goog.ui.Dialog.prototype.setVisible=function(a){a!=this.isVisible()&&(this.isInDocument()||this.render(),goog.ui.Dialog.superClass_.setVisible.call(this,a))};goog.ui.Dialog.prototype.onShow=function(){goog.ui.Dialog.superClass_.onShow.call(this);this.dispatchEvent(goog.ui.Dialog.EventType.AFTER_SHOW)};goog.ui.Dialog.prototype.onHide=function(){goog.ui.Dialog.superClass_.onHide.call(this);this.dispatchEvent(goog.ui.Dialog.EventType.AFTER_HIDE);this.disposeOnHide_&&this.dispose()};
goog.ui.Dialog.prototype.focus=function(){goog.ui.Dialog.superClass_.focus.call(this);if(this.getButtonSet()){var a=this.getButtonSet().getDefault();if(a)for(var b=this.getDomHelper().getDocument(),c=this.buttonEl_.getElementsByTagName("button"),d=0,e;e=c[d];d++)if(e.name==a&&!e.disabled){try{if(goog.userAgent.WEBKIT||goog.userAgent.OPERA){var f=b.createElement("input");f.style.cssText="position:fixed;width:0;height:0;left:0;top:0;";this.getElement().appendChild(f);f.focus();this.getElement().removeChild(f)}e.focus()}catch(g){}break}}};
goog.ui.Dialog.prototype.setDraggerLimits_=function(a){var b=this.getDomHelper().getDocument();a=goog.dom.getWindow(b)||window;a=goog.dom.getViewportSize(a);var c=Math.max(b.body.scrollWidth,a.width),b=Math.max(b.body.scrollHeight,a.height),d=goog.style.getSize(this.getElement());"fixed"==goog.style.getComputedPosition(this.getElement())?this.dragger_.setLimits(new goog.math.Rect(0,0,Math.max(0,a.width-d.width),Math.max(0,a.height-d.height))):this.dragger_.setLimits(new goog.math.Rect(0,0,c-d.width,
b-d.height))};goog.ui.Dialog.prototype.onTitleCloseClick_=function(a){if(this.hasTitleCloseButton_){var b=this.getButtonSet();(a=b&&b.getCancel())?(b=b.get(a),this.dispatchEvent(new goog.ui.Dialog.Event(a,b))&&this.setVisible(!1)):this.setVisible(!1)}};goog.ui.Dialog.prototype.getHasTitleCloseButton=function(){return this.hasTitleCloseButton_};goog.ui.Dialog.prototype.setHasTitleCloseButton=function(a){this.hasTitleCloseButton_=a;this.titleCloseEl_&&goog.style.showElement(this.titleCloseEl_,this.hasTitleCloseButton_)};
goog.ui.Dialog.prototype.isEscapeToCancel=function(){return this.escapeToCancel_};goog.ui.Dialog.prototype.setEscapeToCancel=function(a){this.escapeToCancel_=a};goog.ui.Dialog.prototype.setDisposeOnHide=function(a){this.disposeOnHide_=a};goog.ui.Dialog.prototype.getDisposeOnHide=function(){return this.disposeOnHide_};goog.ui.Dialog.prototype.disposeInternal=function(){this.buttonEl_=this.titleCloseEl_=null;goog.ui.Dialog.superClass_.disposeInternal.call(this)};
goog.ui.Dialog.prototype.setButtonSet=function(a){this.buttons_=a;this.buttonEl_&&(this.buttons_?this.buttons_.attachToElement(this.buttonEl_):this.buttonEl_.innerHTML="",goog.style.showElement(this.buttonEl_,!!this.buttons_))};goog.ui.Dialog.prototype.getButtonSet=function(){return this.buttons_};goog.ui.Dialog.prototype.onButtonClick_=function(a){if((a=this.findParentButton_(a.target))&&!a.disabled){a=a.name;var b=this.getButtonSet().get(a);this.dispatchEvent(new goog.ui.Dialog.Event(a,b))&&this.setVisible(!1)}};
goog.ui.Dialog.prototype.findParentButton_=function(a){for(;null!=a&&a!=this.buttonEl_;){if("BUTTON"==a.tagName)return a;a=a.parentNode}return null};
goog.ui.Dialog.prototype.onKey_=function(a){var b=!1,c=!1,d=this.getButtonSet(),e=a.target;if(a.type==goog.events.EventType.KEYDOWN)if(this.escapeToCancel_&&a.keyCode==goog.events.KeyCodes.ESC){var f=d&&d.getCancel(),e="SELECT"==e.tagName&&!e.disabled;f&&!e?(c=!0,b=d.get(f),b=this.dispatchEvent(new goog.ui.Dialog.Event(f,b))):e||(b=!0)}else a.keyCode==goog.events.KeyCodes.TAB&&a.shiftKey&&e==this.getElement()&&this.setupBackwardTabWrap();else if(a.keyCode==goog.events.KeyCodes.ENTER){if("BUTTON"==
e.tagName)f=e.name;else if(d){var g=d.getDefault(),h=g&&d.getButton(g),e=("TEXTAREA"==e.tagName||"SELECT"==e.tagName||"A"==e.tagName)&&!e.disabled;!h||h.disabled||e||(f=g)}f&&d&&(c=!0,b=this.dispatchEvent(new goog.ui.Dialog.Event(f,String(d.get(f)))))}if(b||c)a.stopPropagation(),a.preventDefault();b&&this.setVisible(!1)};goog.ui.Dialog.Event=function(a,b){this.type=goog.ui.Dialog.EventType.SELECT;this.key=a;this.caption=b};goog.inherits(goog.ui.Dialog.Event,goog.events.Event);
goog.ui.Dialog.SELECT_EVENT="dialogselect";goog.ui.Dialog.EventType={SELECT:"dialogselect",AFTER_HIDE:"afterhide",AFTER_SHOW:"aftershow"};goog.ui.Dialog.ButtonSet=function(a){this.dom_=a||goog.dom.getDomHelper();goog.structs.Map.call(this)};goog.inherits(goog.ui.Dialog.ButtonSet,goog.structs.Map);goog.ui.Dialog.ButtonSet.prototype.class_="goog-buttonset";goog.ui.Dialog.ButtonSet.prototype.defaultButton_=null;goog.ui.Dialog.ButtonSet.prototype.element_=null;
goog.ui.Dialog.ButtonSet.prototype.cancelButton_=null;goog.ui.Dialog.ButtonSet.prototype.set=function(a,b,c,d){goog.structs.Map.prototype.set.call(this,a,b);c&&(this.defaultButton_=a);d&&(this.cancelButton_=a);return this};goog.ui.Dialog.ButtonSet.prototype.addButton=function(a,b,c){return this.set(a.key,a.caption,b,c)};goog.ui.Dialog.ButtonSet.prototype.attachToElement=function(a){this.element_=a;this.render()};
goog.ui.Dialog.ButtonSet.prototype.render=function(){if(this.element_){this.element_.innerHTML="";var a=goog.dom.getDomHelper(this.element_);goog.structs.forEach(this,function(b,c){var d=a.createDom("button",{name:c},b);c==this.defaultButton_&&(d.className=this.class_+"-default");this.element_.appendChild(d)},this)}};
goog.ui.Dialog.ButtonSet.prototype.decorate=function(a){if(a&&a.nodeType==goog.dom.NodeType.ELEMENT){this.element_=a;a=this.element_.getElementsByTagName("button");for(var b=0,c,d,e;c=a[b];b++)if(d=c.name||c.id,e=goog.dom.getTextContent(c)||c.value,d){var f=0==b;this.set(d,e,f,c.name==goog.ui.Dialog.DefaultButtonKeys.CANCEL);f&&goog.dom.classes.add(c,this.class_+"-default")}}};goog.ui.Dialog.ButtonSet.prototype.getElement=function(){return this.element_};
goog.ui.Dialog.ButtonSet.prototype.getDomHelper=function(){return this.dom_};goog.ui.Dialog.ButtonSet.prototype.setDefault=function(a){this.defaultButton_=a};goog.ui.Dialog.ButtonSet.prototype.getDefault=function(){return this.defaultButton_};goog.ui.Dialog.ButtonSet.prototype.setCancel=function(a){this.cancelButton_=a};goog.ui.Dialog.ButtonSet.prototype.getCancel=function(){return this.cancelButton_};
goog.ui.Dialog.ButtonSet.prototype.getButton=function(a){for(var b=this.getAllButtons(),c=0,d;d=b[c];c++)if(d.name==a||d.id==a)return d;return null};goog.ui.Dialog.ButtonSet.prototype.getAllButtons=function(){return this.element_.getElementsByTagName(goog.dom.TagName.BUTTON)};goog.ui.Dialog.ButtonSet.prototype.setButtonEnabled=function(a,b){var c=this.getButton(a);c&&(c.disabled=!b)};
goog.ui.Dialog.ButtonSet.prototype.setAllButtonsEnabled=function(a){for(var b=this.getAllButtons(),c=0,d;d=b[c];c++)d.disabled=!a};goog.ui.Dialog.DefaultButtonKeys={OK:"ok",CANCEL:"cancel",YES:"yes",NO:"no",SAVE:"save",CONTINUE:"continue"};goog.ui.Dialog.MSG_DIALOG_OK_=goog.getMsg("OK");goog.ui.Dialog.MSG_DIALOG_CANCEL_=goog.getMsg("Cancel");goog.ui.Dialog.MSG_DIALOG_YES_=goog.getMsg("Yes");goog.ui.Dialog.MSG_DIALOG_NO_=goog.getMsg("No");goog.ui.Dialog.MSG_DIALOG_SAVE_=goog.getMsg("Save");
goog.ui.Dialog.MSG_DIALOG_CONTINUE_=goog.getMsg("Continue");goog.ui.Dialog.DefaultButtonCaptions={OK:goog.ui.Dialog.MSG_DIALOG_OK_,CANCEL:goog.ui.Dialog.MSG_DIALOG_CANCEL_,YES:goog.ui.Dialog.MSG_DIALOG_YES_,NO:goog.ui.Dialog.MSG_DIALOG_NO_,SAVE:goog.ui.Dialog.MSG_DIALOG_SAVE_,CONTINUE:goog.ui.Dialog.MSG_DIALOG_CONTINUE_};
goog.ui.Dialog.ButtonSet.DefaultButtons={OK:{key:goog.ui.Dialog.DefaultButtonKeys.OK,caption:goog.ui.Dialog.DefaultButtonCaptions.OK},CANCEL:{key:goog.ui.Dialog.DefaultButtonKeys.CANCEL,caption:goog.ui.Dialog.DefaultButtonCaptions.CANCEL},YES:{key:goog.ui.Dialog.DefaultButtonKeys.YES,caption:goog.ui.Dialog.DefaultButtonCaptions.YES},NO:{key:goog.ui.Dialog.DefaultButtonKeys.NO,caption:goog.ui.Dialog.DefaultButtonCaptions.NO},SAVE:{key:goog.ui.Dialog.DefaultButtonKeys.SAVE,caption:goog.ui.Dialog.DefaultButtonCaptions.SAVE},
CONTINUE:{key:goog.ui.Dialog.DefaultButtonKeys.CONTINUE,caption:goog.ui.Dialog.DefaultButtonCaptions.CONTINUE}};goog.ui.Dialog.ButtonSet.createOk=function(){return(new goog.ui.Dialog.ButtonSet).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK,!0,!0)};goog.ui.Dialog.ButtonSet.createOkCancel=function(){return(new goog.ui.Dialog.ButtonSet).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK,!0).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL,!1,!0)};
goog.ui.Dialog.ButtonSet.createYesNo=function(){return(new goog.ui.Dialog.ButtonSet).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.YES,!0).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.NO,!1,!0)};goog.ui.Dialog.ButtonSet.createYesNoCancel=function(){return(new goog.ui.Dialog.ButtonSet).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.YES).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.NO,!0).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL,!1,!0)};
goog.ui.Dialog.ButtonSet.createContinueSaveCancel=function(){return(new goog.ui.Dialog.ButtonSet).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CONTINUE).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.SAVE).addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL,!0,!0)};
(function(){"undefined"!=typeof document&&(goog.ui.Dialog.ButtonSet.OK=goog.ui.Dialog.ButtonSet.createOk(),goog.ui.Dialog.ButtonSet.OK_CANCEL=goog.ui.Dialog.ButtonSet.createOkCancel(),goog.ui.Dialog.ButtonSet.YES_NO=goog.ui.Dialog.ButtonSet.createYesNo(),goog.ui.Dialog.ButtonSet.YES_NO_CANCEL=goog.ui.Dialog.ButtonSet.createYesNoCancel(),goog.ui.Dialog.ButtonSet.CONTINUE_SAVE_CANCEL=goog.ui.Dialog.ButtonSet.createContinueSaveCancel())})();
