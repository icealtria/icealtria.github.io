import{l as H,t as W,x as X}from"./client.CnLl0fOL.js";import"./preload-helper.CLcXU_4U.js";var x,v,g,C,F=0,J=[],u=H,T=u.__b,j=u.__r,q=u.diffed,P=u.__c,z=u.unmount,B=u.__;function Y(t,i){u.__h&&u.__h(v,t,F||i),F=0;var o=v.__H||(v.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function V(t,i){var o=Y(x++,7);return ti(o.__H,i)&&(o.__=t(),o.__H=i,o.__h=t),o.__}function Z(){for(var t;t=J.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(m),t.__H.__h.forEach(E),t.__H.__h=[]}catch(i){t.__H.__h=[],u.__e(i,t.__v)}}u.__b=function(t){v=null,T&&T(t)},u.__=function(t,i){t&&i.__k&&i.__k.__m&&(t.__m=i.__k.__m),B&&B(t,i)},u.__r=function(t){j&&j(t),x=0;var i=(v=t.__c).__H;i&&(g===v?(i.__h=[],v.__h=[],i.__.forEach(function(o){o.__N&&(o.__=o.__N),o.i=o.__N=void 0})):(i.__h.forEach(m),i.__h.forEach(E),i.__h=[],x=0)),g=v},u.diffed=function(t){q&&q(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(J.push(i)!==1&&C===u.requestAnimationFrame||((C=u.requestAnimationFrame)||ii)(Z)),i.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.i=void 0})),g=v=null},u.__c=function(t,i){i.some(function(o){try{o.__h.forEach(m),o.__h=o.__h.filter(function(n){return!n.__||E(n)})}catch(n){i.some(function(e){e.__h&&(e.__h=[])}),i=[],u.__e(n,o.__v)}}),P&&P(t,i)},u.unmount=function(t){z&&z(t);var i,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{m(n)}catch(e){i=e}}),o.__H=void 0,i&&u.__e(i,o.__v))};var G=typeof requestAnimationFrame=="function";function ii(t){var i,o=function(){clearTimeout(n),G&&cancelAnimationFrame(i),setTimeout(t)},n=setTimeout(o,100);G&&(i=requestAnimationFrame(o))}function m(t){var i=v,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),v=i}function E(t){var i=v;t.__c=t.__(),v=i}function ti(t,i){return!t||t.length!==i.length||i.some(function(o,n){return o!==t[n]})}var oi=Symbol.for("preact-signals");function N(){if(c>1)c--;else{for(var t,i=!1;l!==void 0;){var o=l;for(l=void 0,U++;o!==void 0;){var n=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&K(o))try{o.c()}catch(e){i||(t=e,i=!0)}o=n}}if(U=0,c--,i)throw t}}var f=void 0,l=void 0,c=0,U=0,S=0;function D(t){if(f!==void 0){var i=t.n;if(i===void 0||i.t!==f)return i={i:0,S:t,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:i},f.s!==void 0&&(f.s.n=i),f.s=i,t.n=i,32&f.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=f.s,i.n=void 0,f.s.n=i,f.s=i),i}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=oi;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var i=t.e,o=t.x;i!==void 0&&(i.x=o,t.e=void 0),o!==void 0&&(o.e=i,t.x=void 0),t===this.t&&(this.t=o)}};s.prototype.subscribe=function(t){var i=this;return A(function(){var o=i.value,n=f;f=void 0;try{t(o)}finally{f=n}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){var t=f;f=void 0;try{return this.value}finally{f=t}};Object.defineProperty(s.prototype,"value",{get:function(){var t=D(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(U>100)throw new Error("Cycle detected");this.v=t,this.i++,S++,c++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{N()}}}});function I(t){return new s(t)}function K(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function L(t){for(var i=t.s;i!==void 0;i=i.n){var o=i.S.n;if(o!==void 0&&(i.r=o),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function M(t){for(var i=t.s,o=void 0;i!==void 0;){var n=i.p;i.i===-1?(i.S.U(i),n!==void 0&&(n.n=i.n),i.n!==void 0&&(i.n.p=n)):o=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=n}t.s=o}function d(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=S-1,this.f=4}(d.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===S))return!0;if(this.g=S,this.f|=1,this.i>0&&!K(this))return this.f&=-2,!0;var t=f;try{L(this),f=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return f=t,M(this),this.f&=-2,!0};d.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}s.prototype.S.call(this,t)};d.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};d.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(d.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=D(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ni(t){return new d(t)}function Q(t){var i=t.u;if(t.u=void 0,typeof i=="function"){c++;var o=f;f=void 0;try{i()}catch(n){throw t.f&=-2,t.f|=8,k(t),n}finally{f=o,N()}}}function k(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,Q(t)}function ri(t){if(f!==this)throw new Error("Out-of-order effect");M(this),f=t,this.f&=-2,8&this.f&&k(this),N()}function y(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}y.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};y.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Q(this),L(this),c++;var t=f;return f=this,ri.bind(this,t)};y.prototype.N=function(){2&this.f||(this.f|=2,this.o=l,l=this)};y.prototype.d=function(){this.f|=8,1&this.f||k(this)};function A(t){var i=new y(t);try{i.c()}catch(o){throw i.d(),o}return i.d.bind(i)}var w;function p(t,i){H[t]=i.bind(null,H[t]||function(){})}function b(t){w&&w(),w=t&&t.S()}function R(t){var i=this,o=t.data,n=ei(o);n.value=o;var e=V(function(){for(var r=i.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return i.__$u.c=function(){var _,h=i.__$u.S(),a=e.value;h(),W(a)||((_=i.base)==null?void 0:_.nodeType)!==3?(i.__$f|=1,i.setState({})):i.base.data=a},ni(function(){var _=n.value.value;return _===0?0:_===!0?"":_||""})},[]);return e.value}R.displayName="_st";Object.defineProperties(s.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:R},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});p("__b",function(t,i){if(typeof i.type=="string"){var o,n=i.props;for(var e in n)if(e!=="children"){var r=n[e];r instanceof s&&(o||(i.__np=o={}),o[e]=r,n[e]=r.peek())}}t(i)});p("__r",function(t,i){b();var o,n=i.__c;n&&(n.__$f&=-2,(o=n.__$u)===void 0&&(n.__$u=o=function(e){var r;return A(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),b(o),t(i)});p("__e",function(t,i,o,n){b(),t(i,o,n)});p("diffed",function(t,i){b();var o;if(typeof i.type=="string"&&(o=i.__e)){var n=i.__np,e=i.props;if(n){var r=o.U;if(r)for(var _ in r){var h=r[_];h!==void 0&&!(_ in n)&&(h.d(),r[_]=void 0)}else o.U=r={};for(var a in n){var $=r[a],O=n[a];$===void 0?($=fi(o,a,O,e),r[a]=$):$.o(O,e)}}}t(i)});function fi(t,i,o,n){var e=i in t&&t.ownerSVGElement===void 0,r=I(o);return{o:function(_,h){r.value=_,n=h},d:A(function(){var _=r.value.value;n[i]!==_&&(n[i]=_,e?t[i]=_:_?t.setAttribute(i,_):t.removeAttribute(i))})}}p("unmount",function(t,i){if(typeof i.type=="string"){var o=i.__e;if(o){var n=o.U;if(n){o.U=void 0;for(var e in n){var r=n[e];r&&r.d()}}}}else{var _=i.__c;if(_){var h=_.__$u;h&&(_.__$u=void 0,h.d())}}t(i)});p("__h",function(t,i,o,n){(n<3||n===9)&&(i.__$f|=2),t(i,o,n)});X.prototype.shouldComponentUpdate=function(t,i){var o=this.__$u;if(!(o&&o.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in i)return!0;for(var e in t)if(e!=="__source"&&t[e]!==this.props[e])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};function ei(t){return V(function(){return I(t)},[])}export{s as Signal,ni as computed,A as effect,I as signal,ei as useSignal};