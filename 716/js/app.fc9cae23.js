(function(t){function e(e){for(var n,c,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1112:function(t,e,a){"use strict";(function(t){a.d(e,"a",(function(){return f}));var n=a("5530"),r=a("2b0e"),o=a("bc3a"),c=a.n(o),s=a("a18c"),i=a("4360"),u=a("31bd"),l=a("d1b3"),d=a("985d");r["a"].component("icon",d["a"]),r["a"].prototype.$http=c.a,t.$=t.jQuery=a("1157"),Object(u["sync"])(i["a"],s["a"]);var f=new r["a"](Object(n["a"])({store:i["a"],router:s["a"]},l["a"]))}).call(this,a("c8ba"))},"1f9e":function(t,e,a){"use strict";var n=a("b398"),r=a.n(n);r.a},4360:function(t,e,a){"use strict";var n=a("ade3"),r=a("2b0e"),o=a("2f62");r["a"].use(o["a"]);var c="MAIN_SET_COUNTER",s={counter:1},i=Object(n["a"])({},c,(function(t,e){t.counter=e.counter})),u={setCounter:function(t,e){var a=t.commit;a(c,e)}};e["a"]=new o["a"].Store({state:s,mutations:i,actions:u})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("fe55"),a("3980"),a("9746");var n=a("1112");n["a"].$mount("#app")},"985d":function(t,e,a){"use strict";var n=a("ecee"),r=a("ad3d");a.d(e,"a",(function(){return r["a"]}));var o=a("c074"),c=a("f2d1");n["c"].add(o["a"],o["c"],o["b"],o["d"],o["e"],o["f"],o["g"],c["a"],c["b"],c["c"])},a18c:function(t,e,a){"use strict";var n=a("2b0e"),r=a("8c4f"),o=a("b0f9"),c=[{name:"home",path:"/",component:o["a"],display:"Home",icon:"home"},{name:"fetch-data",path:"/fetch-data",component:o["a"],display:"Data",icon:"list"}];n["a"].use(r["a"]);var s=new r["a"]({base:"/subdirectory/",mode:"history",routes:c});e["a"]=s},b0f9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-sm table-bordered nowrap",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Business")]),a("th",[t._v("Address")]),a("th",[t._v("Contact")]),a("th",[t._v("Website")])])])])}],o=a("ede5"),c=o["a"],s=(a("1f9e"),a("2877")),i=Object(s["a"])(c,n,r,!1,null,null,null);e["a"]=i.exports},b398:function(t,e,a){},d1b3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t._m(0),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("fetch-data")],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-dark text-white"},[a("h1",[t._v("Local Color Code")]),a("h2",[t._v("Local minority owned businesses and other relevant social commentary")])]),a("div",{staticClass:"card-body"},[a("h4",[t._v("716 Black Businesses")]),a("h5",[t._v("Buffalo, Niagara Falls, and the surrounding area")])])])}],o=a("b0f9"),c={components:{"fetch-data":o["a"]},data:function(){return{}}},s=c,i=a("2877"),u=Object(i["a"])(s,n,r,!1,null,null,null);e["a"]=u.exports},ede5:function(t,e,a){"use strict";(function(t){a("caad"),a("a15b"),a("2532"),a("4989"),a("7b52"),a("8360"),a("9bb9");e["a"]={components:{},data:function(){return{}},mounted:function(){var e=this;t(e.$el).DataTable({ajax:{url:"https://raw.githubusercontent.com/sksallaj82/local-color-code.github.io/master/content/DataSvc/data/devBob.json",type:"GET",dataSrc:function(t){return t}},fixedHeader:!0,language:{search:"_INPUT_",searchPlaceholder:"Search..."},lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],pageLength:25,columns:[{data:"Name"},{data:"Business"},{data:"Address"},{data:"Contact",render:function(t,e,a){return t&&0!==t.length?t.includes("@")?"<a href='mailto:"+t+"'>"+t+"</a>":"<a href='tel:"+t+"'>"+t+"</a>":""}},{data:"Website",render:function(t,e,a){var n=[];return a.Website&&0!==a.Website.length&&n.push("<a href='"+a.Website+"'>Website</a>"),a.FB&&0!==a.Website.FB&&(a.FB.includes("facebook")&&n.push("<a href='"+a.FB+"'>Facebook</a>"),a.FB.includes("instagram")&&n.push("<a href='"+a.FB+"'>Instagram</a>")),0!==n.length?n.join(" - "):""}}],filter:!0,paginate:!0,responsive:!0,ordering:!0})}}}).call(this,a("1157"))},fe55:function(t,e,a){}});