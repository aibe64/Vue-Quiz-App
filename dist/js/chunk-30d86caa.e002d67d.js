(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30d86caa"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,s="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,u,o,l){var f=r+t.length,v=u.length,p=i;return void 0!==o&&(o=n(o),p=c),s.call(l,p,(function(n,s){var c;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":c=o[s.slice(1,-1)];break;default:var i=+s;if(0===i)return n;if(i>v){var l=a(i/10);return 0===l?n:l<=v?void 0===u[l-1]?s.charAt(1):u[l-1]+s.charAt(1):n}c=u[i-1]}return void 0===c?"":c}))}},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var s=r.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),s=r("50c4"),c=r("a691"),i=r("1d80"),u=r("8aa5"),o=r("0cb2"),l=r("14c3"),f=Math.max,v=Math.min,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var d=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,m=d?"$":"$0";return[function(r,n){var a=i(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!d&&h||"string"===typeof n&&-1===n.indexOf(m)){var i=r(e,t,this,n);if(i.done)return i.value}var x=a(t),g=String(this),_="function"===typeof n;_||(n=String(n));var E=x.global;if(E){var y=x.unicode;x.lastIndex=0}var b=[];while(1){var R=l(x,g);if(null===R)break;if(b.push(R),!E)break;var S=String(R[0]);""===S&&(x.lastIndex=u(g,s(x.lastIndex),y))}for(var $="",T=0,C=0;C<b.length;C++){R=b[C];for(var I=String(R[0]),w=f(v(c(R.index),g.length),0),P=[],A=1;A<R.length;A++)P.push(p(R[A]));var k=R.groups;if(_){var U=[I].concat(P,w,g);void 0!==k&&U.push(k);var N=String(n.apply(void 0,U))}else N=o(I,g,w,P,k,n);w>=T&&($+=g.slice(T,w)+N,T=w+I.length)}return $+g.slice(T)}]}))},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),s=r("5692"),c=RegExp.prototype.exec,i=s("native-string-replace",String.prototype.replace),u=c,o=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],v=o||f||l;v&&(u=function(t){var e,r,a,s,u=this,v=l&&u.sticky,p=n.call(u),d=u.source,h=0,m=t;return v&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(d="(?: "+d+")",m=" "+m,h++),r=new RegExp("^(?:"+d+")",p)),f&&(r=new RegExp("^"+d+"$(?!\\s)",p)),o&&(e=u.lastIndex),a=c.call(v?r:u,m),v?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=u.lastIndex,u.lastIndex+=a[0].length):u.lastIndex=0:o&&a&&(u.lastIndex=u.global?a.index+a[0].length:e),f&&a&&a.length>1&&i.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=u},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},aae7:function(t,e,r){},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),s=r("b622"),c=r("9263"),i=r("9112"),u=s("species"),o=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=s("replace"),v=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var d=s(t),h=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),m=h&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!h||!m||"replace"===t&&(!o||!l||v)||"split"===t&&!p){var x=/./[d],g=r(d,""[t],(function(t,e,r,n,a){return e.exec===c?h&&!a?{done:!0,value:x.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),_=g[0],E=g[1];n(String.prototype,t,_),n(RegExp.prototype,d,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&i(RegExp.prototype[d],"sham",!0)}},eeac:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"summary"},[r("section",{staticClass:"shadow"},[r("bma-header"),t._m(0),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"summary-table table"},[r("thead",[t._m(1),r("tr",[r("th",[t._v("Country")]),r("td",[t._v(t._s(t.summary.user.country))])]),r("tr",[r("th",[t._v("Phone Number")]),r("td",[t._v(t._s(t.summary.user.phone))])])]),r("tbody",[r("tr",[r("th",[t._v("Total Questions")]),r("td",[t._v(t._s(t.summary.summary.question_length))])]),r("tr",[r("th",[t._v("Correct Answesr")]),r("td",[t._v(t._s(t.summary.summary.is_correct))])]),r("tr",[r("th",[t._v("Incorrect Answers")]),r("td",[t._v(t._s(t.summary.summary.is_wrong))])]),r("tr",[r("th",[t._v("Total Points")]),r("td",[t._v(t._s(t.summary.summary.points))])])])])]),r("div",{staticClass:"reset"},[r("button",{staticClass:"btn btn-success mt-3 py-3",on:{click:t.retakeTest}},[t._v("Retake Test")])])],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"success-msg text-center"},[r("h2",{staticClass:"text-capitalize"},[t._v("Thanks for your participation")]),r("p",{staticClass:"lead"},[t._v("Below is a summary of your test")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",{attrs:{colspan:"2"}},[t._v("Test Summary")])])}],s=(r("5319"),r("ac1f"),r("66c6")),c={components:{bmaHeader:s["a"]},data:function(){return{summary:null}},methods:{fetchSummary:function(){this.summary=this.$route.params},retakeTest:function(){this.$router.replace({name:"Home",path:"/"})}},beforeMount:function(){!this.$route.params.user.country&&this.$router.push("/"),this.fetchSummary()}},i=c,u=(r("f93f"),r("2877")),o=Object(u["a"])(i,n,a,!1,null,"93f0f030",null);e["default"]=o.exports},f93f:function(t,e,r){"use strict";r("aae7")}}]);
//# sourceMappingURL=chunk-30d86caa.e002d67d.js.map