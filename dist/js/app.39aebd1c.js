(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-30d86caa":"e002d67d","chunk-325a5a2e":"8a47f8c7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-30d86caa":1,"chunk-325a5a2e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-30d86caa":"0b508551","chunk-325a5a2e":"80b6a9f6"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16cb":function(e,t,n){},3085:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b"),a=n("b1e0"),u=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),s=[],i=n("2877"),c={},l=Object(i["a"])(c,u,s,!1,null,null,null),p=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("section",{staticClass:"shadow"},[n("bma-header"),n("div",{staticClass:"text-center"},[n("h2",[e._v("Welcome to BMA Quiz Game")]),n("p",{staticClass:"lead"},[e._v("Please read the "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.instructions",modifiers:{instructions:!0}}],attrs:{href:""},on:{click:function(e){e.preventDefault()}}},[e._v("instuctions")]),e._v(" carefully before getting started.")])]),n("b-modal",{attrs:{id:"instructions","hide-footer":"",size:"sm"}},[[n("div",{staticClass:"text-center"},[n("h5",[n("u",[e._v("Instructions")])]),n("ol",{staticClass:"text-left"},[n("li",[e._v(" Select your country and input your phone number to get started. ")]),n("li",[e._v(" Choose the correct answer from the list of options for each question to earn points. ")]),n("li",[e._v(" You have 2 minutes (120 seconds) to answer each question. ")]),n("li",[e._v(" Each question has 5 points. ")]),n("li",[e._v(" If no answer is selected before the time elapses, it is game over. ")])])])]],2),n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.startTest(t)}}},[n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],staticClass:"form-control",class:{required:""!==e.countryReq},attrs:{id:"country"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v("Select Country")]),e._l(e.countries,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(e._s(t))])}))],2),""!==e.countryReq?n("small",[e._v(e._s(e.countryReq))]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",class:{required:""!==e.phoneReq},attrs:{type:"tel",placeholder:"Phone Number eg. +23481654..."},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),""!==e.phoneReq?n("small",[e._v(e._s(e.phoneReq))]):e._e()]),e._m(0)])],1)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-primary py-2 w-100",attrs:{type:"submit"}},[e._v("Start Test")])])}],m=n("66c6"),v={components:{bmaHeader:m["a"]},name:"Home",data:function(){return{country:"",countryReq:"",phoneNumber:"",phoneReq:"",countries:["Algeria","Cameroon","Dr. Congo","Egypt","Ethiopia","Gambia","Ghana","Liberia","Namibia","Nigeria","Senegal","South-Africa","Tanzania","Venezuela"]}},methods:{validatePhoneNumber:function(e){var t={country:this.country,phone:e},n=/^[+][0-9]{3}[0-9]{1,5}[0-9]{4,6}/;""!==e?n.test(e)?(this.phoneReq="",this.$router.push({name:"Test",params:{user:t}})):this.phoneReq="Incorrect phone number pattern":this.phoneReq="Please provide phone number"},startTest:function(){""!==this.country?this.validatePhoneNumber(this.phoneNumber):this.countryReq="Please select your country"}},watch:{country:function(e){this.countryReq=""===e?"Please select your country":""}}},b=v,y=(n("600a"),Object(i["a"])(b,f,h,!1,null,"0357c149",null)),g=y.exports;r["default"].use(d["a"]);var _=[{path:"/",name:"Home",component:g},{path:"/test/:user",name:"Test",component:function(){return n.e("chunk-325a5a2e").then(n.bind(null,"78c1"))}},{path:"/result/:user?:summary",name:"Result",component:function(){return n.e("chunk-30d86caa").then(n.bind(null,"eeac"))}}],w=new d["a"]({mode:"history",base:"/",routes:_}),C=w;r["default"].use(o["a"]),r["default"].use(a["a"]),r["default"].config.productionTip=!1,new r["default"]({router:C,render:function(e){return e(p)}}).$mount("#app")},"59d0":function(e,t,n){e.exports=n.p+"img/logo.271e53b7.jpeg"},"600a":function(e,t,n){"use strict";n("16cb")},"66c6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("59d0"),alt:"BMA logo"}})])],1)])},o=[],a=(n("984c"),n("2877")),u={},s=Object(a["a"])(u,r,o,!1,null,"080c96e0",null);t["a"]=s.exports},"984c":function(e,t,n){"use strict";n("3085")}});
//# sourceMappingURL=app.39aebd1c.js.map