(function(e){function t(t){for(var n,u,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-a3b3f726":"db785ca8"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0734":function(e){e.exports=JSON.parse('[{"base":"BTC","quote":"USDT","resource":"instruments:231:trades","symbol":"BTCUSDT","currencyPairId":231},{"base":"ETH","quote":"USDT","resource":"instruments:165:trades","symbol":"ETHUSDT","currencyPairId":165},{"base":"BCH","quote":"USDT","resource":"instruments:48:trades","symbol":"BCHUSDT","currencyPairId":48},{"base":"LTC","quote":"USDT","resource":"instruments:66:trades","symbol":"LTCUSDT","currencyPairId":66},{"base":"ZEC","quote":"USDT","resource":"instruments:45:trades","symbol":"ZECUSDT","currencyPairId":45},{"base":"DASH","quote":"USDT","resource":"instruments:17:trades","symbol":"DASHUSDT","currencyPairId":17},{"base":"COMP","quote":"USDT","resource":"instruments:176412:trades","symbol":"COMPUSDT","currencyPairId":176412},{"base":"NEO","quote":"USDT","resource":"instruments:157:trades","symbol":"NEOUSDT","currencyPairId":157}]')},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("LayoutPage")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout-container"},[r("header",{staticClass:"page-header bg-primary"},["infoview"===e.currentPage?r("button",{staticClass:"back-btn",on:{click:function(t){return e.$router.push({path:"/"})}}},[r("i",{staticClass:"fa fa-angle-left fa-2x"})]):e._e(),r("span",{staticClass:"page-title"},[e._v("CRYPTO WATCH DASHBOARD")])]),r("div",{staticClass:"page-container"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("keep-alive",{attrs:{include:"dashboard"}},[r("router-view")],1)],1)],1)])},c=[],s=(r("b0c0"),{name:"LayoutPage",data:function(){return{currentPage:"dashboard"}},watch:{$route:{deep:!0,handler:function(e){this.currentPage=e.name}}}}),i=s,l=r("2877"),f=Object(l["a"])(i,u,c,!1,null,null,null),d=f.exports,p={name:"App",components:{LayoutPage:d}},b=p,m=(r("034f"),Object(l["a"])(b,a,o,!1,null,null,null)),y=m.exports,h=(r("d3b7"),r("8c4f"));n["default"].use(h["a"]);var v=new h["a"]({base:"/",mode:"history",routes:[{path:"/",name:"dashboard",meta:{title:"Dashboard"},component:function(){return r.e("chunk-a3b3f726").then(r.bind(null,"7277"))}}]});v.beforeEach((function(e,t,r){document.title=e.meta.title,r()}));var g=v,T=r("c0d6"),S=r("5f5b"),P=r("b1e0");r("d5a0"),r("a89b");n["default"].use(S["a"]),n["default"].use(P["a"]),n["default"].config.productionTip=!1,new n["default"]({router:g,store:T["a"],render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,r){},a89b:function(e,t,r){},c0d6:function(e,t,r){"use strict";r("7db0"),r("c740"),r("a434");var n=r("2b0e"),a=r("2f62"),o=r("0734");n["default"].use(a["a"]),t["a"]=new a["a"].Store({strict:!0,state:{currencies:o,tickers:{},chartData:[]},getters:{getSymbolById:function(e){return function(t){return e.currencies.find((function(e){return e.symbol===t}))}},getTickerById:function(e){return function(t){return e.tickers[t]}}},mutations:{UPDATE_TICKER:function(e,t){var r=e.tickers[t.symbol];t.pchg=r?t.price>r.price?1:-1:1,n["default"].set(e.tickers,t.symbol,t)},ADD_COIN_PAIR:function(e,t){e.tickers[t.symbol]||(e.currencies.push(t),localStorage.setItem("vue-crypto-currencies-new",JSON.stringify(e.currencies))),n["default"].set(e.tickers,t.symbol,{pchg:1})},REMOVE_COIN_PAIR:function(e,t){n["default"].delete(e.tickers,t),e.currencies.splice(e.currencies.findIndex((function(e){return e.symbol===t})),1),localStorage.setItem("vue-crypto-currencies-new",JSON.stringify(e.currencies))}}})},d5a0:function(e,t,r){}});
//# sourceMappingURL=app.2e223a2f.js.map