function T(){}function B(t){return t()}function C(){return Object.create(null)}function $(t){t.forEach(B)}function I(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function q(t){return Object.keys(t).length===0}let b=!1;function z(){b=!0}function F(){b=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:R(1,r,g=>e[n[g]].claim_order,c))-1;i[s]=n[u]+1;const a=u+1;n[a]=s,r=Math.max(a,r)}const o=[],l=[];let f=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);f>=s;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);o.reverse(),l.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<l.length;s++){for(;c<o.length&&l[s].claim_order>=o[c].claim_order;)c++;const u=c<o.length?o[c]:null;t.insertBefore(l[s],u)}}function V(t,e){if(b){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function J(t,e,n){b&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function dt(){return L(" ")}function _t(){return L("")}function ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Q(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Q(t,e,n)}function yt(t){return t.dataset.svelteH}function X(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function k(t,e,n,i,r=!1){D(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const s=n(f);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const s=n(f);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,e,n,i){return k(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const f=r.attributes[l];n[f.name]||o.push(f.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function $t(t,e,n){return Y(t,e,n,O)}function Z(t,e){return k(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function gt(t){return Z(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function xt(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new E(e);D(t);const r=t.splice(n,i-n+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);if(o.length===0)return new E(e);for(const l of o)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(e,o)}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function bt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class tt{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=O(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class E extends tt{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],e)}}let y;function p(t){y=t}function et(){if(!y)throw new Error("Function called outside component initialization");return y}function Et(t){et().$$.on_mount.push(t)}const h=[],P=[];let m=[];const v=[],nt=Promise.resolve();let A=!1;function it(){A||(A=!0,nt.then(G))}function S(t){m.push(t)}function Nt(t){v.push(t)}const N=new Set;let _=0;function G(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),rt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;v.length;)v.pop()();A=!1,N.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function st(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const x=new Set;let d;function Tt(){d={r:0,c:[],p:d}}function vt(){d.r||$(d.c),d=d.p}function lt(t,e){t&&t.i&&(x.delete(t),t.i(e))}function At(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function St(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Lt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ct(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),S(()=>{const o=t.$$.on_mount.map(B).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...o):$(o),t.$$.on_mount=[]}),r.forEach(S)}function ot(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Mt(t,e,n,i,r,o,l=null,f=[-1]){const s=y;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:C(),dirty:f,skip_bound:!1,root:e.target||s.$$.root};l&&l(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(a,g,...H)=>{const M=H.length?H[0]:g;return c.ctx&&r(c.ctx[a],c.ctx[a]=M)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](M),u&&ft(t,a)),g}):[],c.update(),u=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){z();const a=X(e.target);c.fragment&&c.fragment.l(a),a.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&lt(t.$$.fragment),ct(t,e.target,e.anchor),F(),G()}p(s)}class Ct{$$=void 0;$$set=void 0;$destroy(){ot(this,1),this.$destroy=T}$on(e,n){if(!I(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(at);export{yt as A,bt as B,ct as C,mt as D,Nt as E,ot as F,xt as G,E as H,pt as I,Ct as S,dt as a,X as b,$t as c,gt as d,O as e,Z as f,w as g,Q as h,Mt as i,J as j,V as k,ht as l,wt as m,T as n,_t as o,At as p,vt as q,lt as r,ut as s,L as t,Et as u,Tt as v,P as w,St as x,Lt as y,Ht as z};
