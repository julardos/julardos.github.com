(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a3d24":"b5e3664a","chunk-2d213754":"32e7d4e7","chunk-3b691d88":"f44f7aa2","chunk-e85f79f6":"56e40c36"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3b691d88":1,"chunk-e85f79f6":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0a3d24":"31d6cfe0","chunk-2d213754":"31d6cfe0","chunk-3b691d88":"572b7a25","chunk-e85f79f6":"8ece1bff"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],p.parentNode.removeChild(p),n(r)},p.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),i=n.n(a);i.a},"2ae8":function(t,e,n){},"537b":function(t,e,n){t.exports=n.p+"img/about_me_img.3d008a73.webp"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("SideBar"),n("v-content",[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"","clipped-right":"",color:"white",light:"",flat:""}},[t.window.width>1024?n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.expand=!t.expand}}}):n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.window.width>=768,expression:"window.width >= 768"}],attrs:{to:"/",text:"",color:"cyan darken-2"}},[t._v("Dashboard")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.window.width>=768,expression:"window.width >= 768"}],attrs:{to:"/testimonial",text:"",color:"cyan darken-2",disabled:""}},[t._v("Testimonial")]),n("v-btn",{staticClass:"white--text",attrs:{color:"cyan darken-2"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Contact Me")])],1),n("v-navigation-drawer",{staticStyle:{"z-index":"50"},attrs:{"expand-on-hover":t.expand,"mini-variant":t.expand,color:"cyan darken-2",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"cyan--text text--darken-2",staticStyle:{cursor:"default"}},[t._v("Yeah you find Me!!")]),n("v-list-item-subtitle",{staticClass:"cyan--text text--darken-2",staticStyle:{cursor:"default"}},[t._v("NOT ME! SEE ABOVE ME")])],1)],1),t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("My Contact")]),n("v-card-text",[n("span",{staticClass:"font-weight-bold"},[t._v("Email : ")]),t._v(" julardosatriawan@gmail.com "),n("br"),n("span",{staticClass:"font-weight-bold"},[t._v("Phone : ")]),t._v(" +62 812 9207 7721 ")])],1)],1)],1)},s=[],c={data:function(){return{expand:!1,drawer:!1,dialog:!1,window:{width:0,height:0},items:[{icon:"person",title:"About Me",link:"/"},{icon:"work",title:"Experiences",link:"experiences"},{icon:"list_alt",title:"Projects",link:"projects"},{icon:"build",title:"Skills",link:"skills"}]}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.window.width>1390?this.drawer=!0:this.expand=!0}}},l=c,d=n("2877"),u=n("6544"),p=n.n(u),v=n("40dc"),f=n("5bc1"),h=n("8336"),m=n("b0af"),w=n("99d9"),b=n("169a"),g=n("132d"),y=n("8860"),k=n("da13"),_=n("5d23"),x=n("34c3"),C=n("f774"),V=n("2fa4"),S=Object(d["a"])(l,r,s,!1,null,null,null),I=S.exports;p()(S,{VAppBar:v["a"],VAppBarNavIcon:f["a"],VBtn:h["a"],VCard:m["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:b["a"],VIcon:g["a"],VList:y["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemIcon:x["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:C["a"],VSpacer:V["a"]});var E={name:"App",components:{SideBar:I},data:function(){return{expand:!1}}},j=E,O=(n("034f"),n("7496")),N=n("a75b"),P=Object(d["a"])(j,i,o,!1,null,null,null),T=P.exports;p()(P,{VApp:O["a"],VContent:N["a"]});n("d3b7");var B=n("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home"},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6",md:"12"}},[a("v-img",{attrs:{src:n("537b"),"aspect-ratio":"1","max-height":"80%",contain:""}})],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"6",md:"12"}},[a("div",{staticClass:"v-overlay--absolute typography"},[a("h4",[t._v("Hi, my name")]),a("h1",{staticClass:"display-4 font-weight-bold h-name"},[t._v("Julardo "),a("br"),t._v(" "),a("span",{staticClass:"ml-12"},[t._v("Satriawan")])])]),a("div",{staticClass:"pa-5"},[a("p",{staticClass:"font-weight-light blue-grey--text"},[t._v(" ~ Introduction")]),a("h2",{staticClass:"display-1 font-weight-light"},[t._v(" I am a "),a("span",{staticClass:"yellow"},[t._v("Developer,")]),t._v(" "),a("br"),a("span",{staticClass:"yellow"},[t._v("Interest")]),t._v(" to learn something new ")]),a("v-row",{},[a("v-btn",{staticClass:"mt-5 format_underline",attrs:{text:"",color:"cyan darken-2"},on:{click:function(e){t.dialog=!0}}},[a("v-icon",{staticClass:"mr-2",attrs:{size:"10pt"}},[t._v("far fa-envelope-open")]),t._v("My Story")],1),a("v-btn",{staticClass:"mt-5 format_underline",attrs:{text:"",rounded:"",color:"primary",href:t.cv,target:"_blank"}},[a("v-icon",{staticClass:"mr-2",attrs:{size:"10pt"}},[t._v("fas fa-arrow-alt-circle-down")]),t._v("Download my CV")],1)],1)],1)]),a("BottomNav")],1),a("v-dialog",{attrs:{"max-width":"360"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("My Story")]),a("v-card-text",[t._v(" "+t._s(t.desc)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" close ")])],1)],1)],1)],1)},A=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{absolute:"",color:"cyan darken-2",shift:""}},t._l(t.sosmeds,(function(e){return n("v-btn",{key:e.key,on:{click:function(n){return t.sosmed_link(e.link)}}},[n("span",[t._v(t._s(e.name))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},z=[],D={data:function(){return{sosmeds:[{name:"linkedIn",icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/julardo-satriawan/"},{name:"instagram",icon:"fab fa-instagram",link:"https://www.instagram.com/julardos/"}]}},methods:{sosmed_link:function(t){console.log("sad"),window.open(t,"_blank")}}},H=D,R=n("b81c"),$=Object(d["a"])(H,L,z,!1,null,null,null),J=$.exports;p()($,{VBottomNavigation:R["a"],VBtn:h["a"],VIcon:g["a"]});var q={name:"Home",data:function(){return{dialog:!1,cv:"https://1drv.ms/b/s!AsQ8qxxvHcRjgdRrdEWYK9UTpLSmBw?e=DkMhii",desc:"Hello, I am Jul. I am a hard worker, I want to learn a lot as I can. I am so addicted to coding and IT. Summary of me, I am a student at PENS and a freelance web developer. I have a lot of experiences using laravel and vuejs, one of them is my participation in developing the SNMPN & SBMPN website which is a website for a help highschool student to apply to the vocational university. I also study about SEO and Cloud computing. Now, I interest in data science, so I joined the data science club on my campus."}},components:{BottomNav:J}},K=q,U=(n("5df7"),n("62ad")),W=n("a523"),Y=n("adda"),F=n("0fd9"),Q=Object(d["a"])(K,M,A,!1,null,"aa4f7612",null),G=Q.exports;p()(Q,{VBtn:h["a"],VCard:m["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:W["a"],VDialog:b["a"],VIcon:g["a"],VImg:Y["a"],VRow:F["a"],VSpacer:V["a"]}),a["a"].use(B["a"]);var X=[{path:"/",name:"Home",component:G},{path:"/hobbies",name:"Hobbies",component:function(){return n.e("chunk-2d0a3d24").then(n.bind(null,"048b"))}},{path:"/experiences",name:"Experiences",component:function(){return n.e("chunk-3b691d88").then(n.bind(null,"2643"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-e85f79f6").then(n.bind(null,"acca"))}},{path:"/skills",name:"skills",component:function(){return n.e("chunk-2d213754").then(n.bind(null,"ad83"))}}],Z=new B["a"]({mode:"history",base:"/",routes:X}),tt=Z,et=(n("d1e78"),n("f309"));a["a"].use(et["a"]);var nt=new et["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,new a["a"]({router:tt,vuetify:nt,render:function(t){return t(T)}}).$mount("#app")},"5df7":function(t,e,n){"use strict";var a=n("2ae8"),i=n.n(a);i.a},"8a23":function(t,e,n){}});
//# sourceMappingURL=app.11d6db69.js.map