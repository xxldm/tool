var Se=Object.defineProperty;var J=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var V=(e,t,o)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Z=(e,t)=>{for(var o in t||(t={}))Oe.call(t,o)&&V(e,o,t[o]);if(J)for(var o of J(t))Ce.call(t,o)&&V(e,o,t[o]);return e};var E=(e,t,o)=>(V(e,typeof t!="symbol"?t+"":t,o),o);import{d as Y,l as Ee,c as Re,a as Be,b as y,o as Ae,r as D,E as xe,e as p,f as m,g as i,w as l,h,i as X,u as s,j as k,v as L,k as w,F as x,T as $e,n as Ie,m as C,p as P,q as ee,s as v,t as b,x as De,y as j,z as te,A as oe,B as ne,C as Pe,D as S,G as Me,H as Ne,I as ae,J as Ue,K as Ve,L as G,M as je,N as qe,O as He,P as Ye,Q as Je,R as Ze,S as Ge,U as We,V as Ke,W as Qe,X as Xe,Y as et}from"./vendor.56d8b752.js";const tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};tt();const re=Y("elementSettings",{state:()=>({locale:{}})}),se=typeof navigator=="object"&&navigator.userAgent.indexOf("Electron")>=0;let R={get:()=>{},set:()=>{}},q={setFocusable:()=>{},setAlwaysOnTop:()=>{}},$={checkUpdate:()=>{},setOpenAtLogin:()=>{},quit:()=>{}};if(se){const{ipcRenderer:e}=require("electron");R.get=(t,o)=>e.sendSync("electronStoreGet",[t,o]),R.set=(t,o)=>{console.log(t,o),e.send("electronStoreSet",[t,o])},q.setFocusable=t=>e.send("setFocusable",t),q.setAlwaysOnTop=t=>e.send("setAlwaysOnTop",t),$.checkUpdate=()=>e.sendSync("checkUpdate"),$.setOpenAtLogin=t=>e.send("openAtLogin",t),$.quit=()=>e.send("quit",!0)}else R.get=(e,t)=>{let o=window.localStorage.getItem(e);if(o!=null){let a=JSON.parse(o);switch(a.type){case"boolean":return a.val==="true";case"number":return Number(a.val);case"object":return JSON.parse(a.val);case"string":return a.val;default:throw new Error("\u4E0D\u652F\u6301\u7684\u7C7B\u578B\uFF01\u5E94\u8BE5\u4E3Aboolean\u3001number\u3001object\u3001string")}}return t},R.set=(e,t)=>{if(t===void 0)return;let o;switch(typeof t){case"boolean":o={val:String(t),type:"boolean"};break;case"number":o={val:String(t),type:"number"};break;case"object":o={val:JSON.stringify(t),type:"object"};break;case"string":o={val:String(t),type:"string"};break;default:throw new Error("\u4E0D\u652F\u6301\u7684\u7C7B\u578B\uFF01\u5E94\u8BE5\u4E3Aboolean\u3001number\u3001object\u3001string")}window.localStorage.setItem(e,JSON.stringify(o))};const f=R,W=q,le=$,ot="modulepreload",K={},nt="./",z=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${nt}${a}`,a in K)return;K[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":ot,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",g)})})).then(()=>t())};var ie={appName:e=>{const{normalize:t}=e;return t(["\u5DE5\u5177\u7BB1"])},add:e=>{const{normalize:t}=e;return t(["\u6DFB\u52A0"])},del:e=>{const{normalize:t}=e;return t(["\u5220\u9664"])},yes:e=>{const{normalize:t}=e;return t(["\u662F"])},no:e=>{const{normalize:t}=e;return t(["\u5426"])},title:e=>{const{normalize:t}=e;return t(["\u6807\u9898"])},submit:e=>{const{normalize:t}=e;return t(["\u63D0\u4EA4"])},confirm:e=>{const{normalize:t}=e;return t(["\u786E\u5B9A"])},cancel:e=>{const{normalize:t}=e;return t(["\u53D6\u6D88"])},operating:e=>{const{normalize:t}=e;return t(["\u64CD\u4F5C"])},closeApp:e=>{const{normalize:t}=e;return t(["\u5173\u95ED\u5E94\u7528"])},date:{unit:{second:e=>{const{normalize:t}=e;return t(["\u79D2"])},minute:e=>{const{normalize:t}=e;return t(["\u5206\u949F"])},hour:e=>{const{normalize:t}=e;return t(["\u5C0F\u65F6"])},day:e=>{const{normalize:t}=e;return t(["\u5929"])},month:e=>{const{normalize:t}=e;return t(["\u4E2A\u6708"])},year:e=>{const{normalize:t}=e;return t(["\u5E74"])}}},error:{noSubmit:e=>{const{normalize:t}=e;return t(["\u8BE5\u7EC4\u4EF6\u4E0D\u5B58\u5728\u63D0\u4EA4\u65B9\u6CD5\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01"])},unknown:e=>{const{normalize:t}=e;return t(["\u672A\u77E5\u9519\u8BEF"])}},warning:{noSaveByExit:e=>{const{normalize:t}=e;return t(["\u73B0\u5728\u9000\u51FA\u4E0D\u4F1A\u4FDD\u5B58\u5F53\u524D\u586B\u5199\u7684\u5185\u5BB9\uFF0C\u786E\u5B9A\u8981\u9000\u51FA\uFF1F"])}},menu:{goMain:e=>{const{normalize:t}=e;return t(["\u56DE\u9996\u9875"])},main:e=>{const{normalize:t}=e;return t(["\u9996\u9875"])},login:e=>{const{normalize:t}=e;return t(["\u767B\u5F55"])},settings:e=>{const{normalize:t}=e;return t(["\u8BBE\u7F6E"])},notFound:e=>{const{normalize:t}=e;return t(["**\u5730\u56FE\uFF0C\u6301\u7EED\u4E3A\u60A8\u5BFC\u822A~"])},test:e=>{const{normalize:t}=e;return t(["\u6D4B\u8BD5"])},bot:{botName:e=>{const{normalize:t}=e;return t(["\u673A\u5668\u4EBA"])},botList:e=>{const{normalize:t,linked:o}=e;return t([o("menu.bot.botName"),"\u5217\u8868"])},botList2:e=>{const{normalize:t,linked:o}=e;return t([o("menu.bot.botName"),"\u5217\u88682"])}},calendar:{calendarName:e=>{const{normalize:t}=e;return t(["\u65E5\u5386"])}},user:{userName:e=>{const{normalize:t}=e;return t(["\u7528\u6237"])},userList:e=>{const{normalize:t,linked:o}=e;return t([o("menu.user.userName"),"\u5217\u8868"])}}},header:{signOut:e=>{const{normalize:t}=e;return t(["\u9000\u51FA\u767B\u5F55"])},settings:e=>{const{normalize:t}=e;return t(["\u8BBE\u7F6E"])},closeApp:e=>{const{normalize:t}=e;return t(["\u5173\u95ED\u5E94\u7528"])}},settings:{changeLocale:e=>{const{normalize:t}=e;return t(["\u5207\u6362\u6210\u529F\uFF0C\u90E8\u5206\u6587\u5B57\u3001\u529F\u80FD\u9700\u8981\u91CD\u542F\u540E\u751F\u6548\uFF01"])},openAtLoginLabel:e=>{const{normalize:t}=e;return t(["\u5F00\u673A\u542F\u52A8"])},system:e=>{const{normalize:t}=e;return t(["\u7CFB\u7EDF\u8BBE\u7F6E"])},shortcut:e=>{const{normalize:t}=e;return t(["\u53F3\u4E0A\u89D2\u5FEB\u6377\u6309\u94AE\u663E\u793A\u8BBE\u7F6E"])},showDarkButton:e=>{const{normalize:t}=e;return t(["\u6697\u9ED1\u6A21\u5F0F"])},showLocaleButton:e=>{const{normalize:t}=e;return t(["\u8BED\u8A00"])},showTopButton:e=>{const{normalize:t}=e;return t(["\u7F6E\u9876"])},showFocusLockButton:e=>{const{normalize:t}=e;return t(["\u7126\u70B9\u9501"])},showAppLockButton:e=>{const{normalize:t}=e;return t(["\u5E94\u7528\u9501"])},focusLockTooltip:e=>{const{normalize:t,interpolate:o,named:a}=e;return t(["\u8BE5\u5E94\u7528\u5728\u7CFB\u7EDF\u4E2D\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u7126\u70B9\uFF08",o(a("yn")),"\uFF09"])},alwaysOnTopTooltip:e=>{const{normalize:t,interpolate:o,named:a}=e;return t(["\u662F\u5426\u7F6E\u9876\uFF08",o(a("yn")),"\uFF09"])},showEditButton:e=>{const{normalize:t}=e;return t(["\u7F16\u8F91\u6A21\u5F0F\u6309\u94AE"])}},main:{view:{date:e=>{const{normalize:t}=e;return t(["\u65E5\u671F"])},empty:e=>{const{normalize:t}=e;return t(["\u7A7A"])},chronograph:e=>{const{normalize:t}=e;return t(["\u8BA1\u65F6\u5668"])},countdown:{horizontal:e=>{const{normalize:t}=e;return t(["\u5012\u8BA1\u65F6\uFF08\u6C34\u5E73\uFF09"])},vertical:e=>{const{normalize:t}=e;return t(["\u5012\u8BA1\u65F6\uFF08\u5782\u76F4\uFF09"])}}},addViewComponent:e=>{const{normalize:t}=e;return t(["\u6DFB\u52A0\u7EC4\u4EF6"])},order:e=>{const{normalize:t}=e;return t(["\u987A\u5E8F"])},colnum:e=>{const{normalize:t}=e;return t(["\u5217\u6570"])},colSpan:e=>{const{normalize:t}=e;return t(["\u5217\u6570"])},rowSpan:e=>{const{normalize:t}=e;return t(["\u884C\u6570"])},center:e=>{const{normalize:t}=e;return t(["\u5C45\u4E2D"])},noBorder:e=>{const{normalize:t}=e;return t(["\u65E0\u6846"])},rowHeight:e=>{const{normalize:t}=e;return t(["\u884C\u9AD8"])}},forms:{chronograph:e=>{const{normalize:t}=e;return t(["\u8BA1\u65F6\u5668\u7BA1\u7406"])},countdown:e=>{const{normalize:t}=e;return t(["\u5012\u8BA1\u65F6\u7BA1\u7406"])}},chronograph:{content:e=>{const{normalize:t}=e;return t(["\u6587\u672C"])},diff:e=>{const{normalize:t}=e;return t(["\u65F6\u95F4\u5DEE\u503C"])},startTime:e=>{const{normalize:t}=e;return t(["\u5F00\u59CB\u65F6\u95F4"])},refresh:e=>{const{normalize:t}=e;return t(["\u5FEB\u901F\u91CD\u7F6E"])}}},at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),B=Z({},Ee),rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});function st(e){switch(e){case"./module-locales/en.ts":return z(()=>import("./en.d5e6e844.js"),["assets/en.d5e6e844.js","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]);case"./module-locales/zh-cn.ts":return z(()=>Promise.resolve().then(function(){return rt}),void 0);default:return new Promise(function(t,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function lt(e){switch(e){case"../locales/en.yml":return z(()=>import("./en.e0bb57e2.js"),[]);case"../locales/zh-cn.yml":return z(()=>Promise.resolve().then(function(){return at}),void 0);default:return new Promise(function(t,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const M=Re({legacy:!1,locale:B.name,messages:{[B.name]:Object.assign({},{el:B.el},ie)},fallbackLocale:B.name});async function it(e){return Promise.all([lt(`../locales/${e}.yml`),st(`./module-locales/${e}.ts`)]).then(([t,o])=>{re().locale=o.default,M.global.setLocaleMessage(e,t.default)})}function pe(e){return it(e).then(()=>{var t;Be.defaults.headers.common["Accept-Language"]=e,(t=document.querySelector("html"))==null||t.setAttribute("lang",e),M.global.locale.value=e})}const Q=M.global.t,T=Y("setting",{state:()=>({electron:!0,server:f.get("server"),edit:!1,appLock:!1,openAtLogin:f.get("openAtLogin",!1),locale:f.get("locale","zh-cn"),dark:f.get("dark",!1),focusable:f.get("focusable",!0),alwaysOnTop:f.get("alwaysOnTop",!1),showShortcutButtons:f.get("showShortcutButtons",{dark:!1,locale:!0,focusLock:!0,top:!0,appLock:!0,edit:!0})}),getters:{isElectron:e=>e.electron,isServer:e=>e.server!==void 0,isEdit:e=>e.edit,isAppLock:e=>e.appLock,isOpenAtLogin:e=>e.openAtLogin,isDark:e=>e.dark,isFocusable:e=>e.focusable,isAlwaysOnTop:e=>e.alwaysOnTop},actions:{setOpenAtLogin(e){this.openAtLogin=e,le.setOpenAtLogin(e)},setDark(e){this.dark=e,f.set("dark",e)},setFocusable(e){this.focusable=e,f.set("focusable",e),W.setFocusable(e)},setAlwaysOnTop(e){this.alwaysOnTop=e,f.set("alwaysOnTop",e),W.setAlwaysOnTop(e)},setShowShortcutButtons(e,t){this.showShortcutButtons[e]=t,f.set("showShortcutButtons",this.showShortcutButtons)},setLocal(e){pe(e).then(()=>{this.locale=e,f.set("locale",e)})}}}),pt={style:{"z-index":"8000"},class:"absolute inset-0 bg-gray-600 bg-opacity-30"},ct=y({setup(e){Ae(()=>{se&&console.log(le.checkUpdate())});const t=re(),o=T();return(a,r)=>{const c=D("router-view"),u=xe;return p(),m(x,null,[i(u,{locale:s(t).locale},{default:l(()=>[i(c,null,{default:l(({Component:d})=>[(p(),h(X(d)))]),_:1})]),_:1},8,["locale"]),k(w("div",pt,null,512),[[L,s(o).isAppLock]])],64)}}});var ce=(e,t)=>{const o=e.__vccOpts||e;for(const[a,r]of t)o[a]=r;return o};const ut={};function mt(e,t){const o=D("router-view");return p(),h(o,null,{default:l(({Component:a,route:r})=>[i($e,{"enter-active-class":r.meta.animationClass.animationInClass,"leave-active-class":r.meta.animationClass.animationOutClass,mode:"out-in"},{default:l(()=>[(p(),h(X(a)))]),_:2},1032,["enter-active-class","leave-active-class"])]),_:1})}var _t=ce(ut,[["render",mt]]);const dt={key:0,"i-mdi-lock-open-variant-outline":""},gt={key:1,"i-mdi-lock-outline":""},ht=y({setup(e){const t=T();return(o,a)=>{const r=C;return p(),m("div",null,[i(r,{class:"relative",style:Ie({"z-index":s(t).isAppLock?"9999":"auto"}),circle:"",onClick:a[0]||(a[0]=c=>s(t).appLock=!s(t).isAppLock)},{default:l(()=>[s(t).isAppLock?(p(),m("div",dt)):(p(),m("div",gt))]),_:1},8,["style"])])}}}),ft={key:0,"i-ri-pushpin-fill":""},vt={key:1,"i-ri-pushpin-line":""},wt=y({setup(e){const{t}=P(),o=T(),a=()=>o.setAlwaysOnTop(!o.isAlwaysOnTop);return(r,c)=>{const u=C,d=ee;return p(),m("div",null,[i(d,{placement:"bottom"},{content:l(()=>[v(b(s(t)("settings.alwaysOnTopTooltip",{yn:s(o).isAlwaysOnTop?s(t)("yes"):s(t)("no")})),1)]),default:l(()=>[i(u,{class:De(r.btnClass),circle:"",onClick:a},{default:l(()=>[s(o).isAlwaysOnTop?(p(),m("div",ft)):(p(),m("div",vt))]),_:1},8,["class"])]),_:1})])}}}),zt=y({setup(e){const{t}=P(),o=T(),a=o.isFocusable,r=j(()=>a?"el-icon-warning":"el-icon-warning-outline"),c=()=>o.setFocusable(!a);return(u,d)=>{const g=C,_=ee;return p(),m("div",null,[i(_,{placement:"bottom"},{content:l(()=>[v(b(s(t)("settings.focusLockTooltip",{yn:s(a)?s(t)("yes"):s(t)("no")})),1)]),default:l(()=>[i(g,{icon:s(r),circle:"",onClick:c},null,8,["icon"])]),_:1})])}}}),yt=w("div",{"i-ri-translate":""},null,-1),bt=v(" \u4E2D\u6587 "),Tt=v(" English (by Google Translate) "),kt=y({setup(e){const t=T(),o=r=>{t.setLocal(r)},a=r=>t.locale===r;return(r,c)=>{const u=C,d=te,g=oe,_=ne;return p(),m("div",null,[i(_,{onCommand:o},{dropdown:l(()=>[i(g,null,{default:l(()=>[i(d,{disabled:a("zh-cn"),command:"zh-cn"},{default:l(()=>[bt]),_:1},8,["disabled"]),i(d,{disabled:a("en"),command:"en"},{default:l(()=>[Tt]),_:1},8,["disabled"])]),_:1})]),default:l(()=>[i(u,{circle:""},{default:l(()=>[yt]),_:1})]),_:1})])}}}),Lt={key:0,"i-ep-sunny":""},Ft={key:1,"i-ep-moon":""},St=y({setup(e){const t=T(),o=()=>t.setDark(!t.isDark);return(a,r)=>{const c=C;return p(),m("div",null,[i(c,{circle:"",onClick:o},{default:l(()=>[s(t).isDark?(p(),m("div",Lt)):(p(),m("div",Ft))]),_:1})])}}}),Ot=w("div",{"i-mdi-square-edit-outline":""},null,-1),Ct=y({setup(e){const t=T(),o=()=>t.edit=!0;return(a,r)=>{const c=C;return p(),m("div",null,[i(c,{circle:"",onClick:o},{default:l(()=>[Ot]),_:1})])}}}),Et=y({props:{routes:null},setup(e){const t=e,{t:o}=P(),a=r=>r===void 0?0:r.length;return(r,c)=>{const u=D("my-menu-item",!0),d=Me,g=Ne;return p(!0),m(x,null,Pe(t.routes,_=>(p(),m(x,{key:_.name},[_.meta===void 0||!_.meta.hidden?(p(),m(x,{key:0},[a(_.children)>1?(p(),h(d,{key:0,index:_.path},{title:l(()=>[v(b(s(o)(`menu.${_.name}`)),1)]),default:l(()=>[i(u,{routes:_.children},null,8,["routes"])]),_:2},1032,["index"])):a(_.children)===1?(p(),h(g,{key:1,index:_.children[0].path},{default:l(()=>[v(b(s(o)(`menu.${_.children[0].name}`)),1)]),_:2},1032,["index"])):(p(),h(g,{key:2,index:_.path},{default:l(()=>[v(b(s(o)(`menu.${_.name}`)),1)]),_:2},1032,["index"]))],64)):S("",!0)],64))),128)}}}),ue=Y("user",{state:()=>({routes:[]})}),Rt=y({setup(e){const t=ue(),o=ae(),a=j(()=>t.routes),r=j(()=>o.path);return(c,u)=>{const d=Et,g=Ue;return p(),h(g,{mode:"horizontal",router:"","default-active":s(r)},{default:l(()=>[i(d,{routes:s(a)},null,8,["routes"])]),_:1},8,["default-active"])}}}),Bt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},At=w("path",{fill:"currentColor",d:"M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2z"},null,-1),xt=[At];function $t(e,t){return p(),m("svg",Bt,xt)}var It={name:"gridicons-user",render:$t};const Dt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Pt=w("path",{fill:"currentColor",d:"M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z"},null,-1),Mt=[Pt];function Nt(e,t){return p(),m("svg",Dt,Mt)}var Ut={name:"mdi-logout",render:Nt};const Vt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},jt=w("g",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"4"},[w("path",{d:"M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.029a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.304a6.003 6.003 0 0 0-11.432 0Z"}),w("path",{d:"M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"})],-1),qt=[jt];function Ht(e,t){return p(),m("svg",Vt,qt)}var Yt={name:"icon-park-outline-setting-two",render:Ht};const Jt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 8 8"},Zt=w("path",{fill:"currentColor",d:"M3 0v4h1V0H3zM1.72 1.44l-.38.31C.53 2.39 0 3.39 0 4.5C0 6.43 1.57 8 3.5 8S7 6.43 7 4.5c0-1.11-.53-2.11-1.34-2.75l-.38-.31l-.63.78l.38.31C5.61 2.99 6 3.7 6 4.5C6 5.89 4.89 7 3.5 7S1 5.89 1 4.5c0-.8.36-1.51.94-1.97l.41-.31l-.63-.78z"},null,-1),Gt=[Zt];function Wt(e,t){return p(),m("svg",Jt,Gt)}var Kt={name:"oi-power-standby",render:Wt};const Qt={class:"top-0"},Xt={class:"flex space-x-2"},eo=y({setup(e){const t=T(),o=Ve(),a=ae(),{t:r}=P(),c=()=>{},u=()=>{o.push("/settings")},d=()=>{},g=G("\u540D\u5B57"),_=G(""),F=t.showShortcutButtons,N=t.isElectron,U=t.isServer;return(_o,go)=>{const ge=Rt,he=Ct,fe=St,ve=kt,we=zt,ze=wt,ye=ht,be=D("FlatUiYinyang"),Te=qe,ke=je,A=te,Le=oe,Fe=ne;return p(),m("div",Qt,[w("div",Xt,[i(ge,{class:"flex-grow"}),k(i(he,{class:"flex-none m-auto"},null,512),[[L,s(a).meta.showEditButton&&s(F).edit]]),k(i(fe,{class:"flex-none m-auto"},null,512),[[L,s(F).dark]]),k(i(ve,{class:"flex-none m-auto"},null,512),[[L,s(F).locale]]),s(N)?k((p(),h(we,{key:0,class:"flex-none m-auto"},null,512)),[[L,s(F).focus]]):S("",!0),s(N)?k((p(),h(ze,{key:1,class:"flex-none m-auto"},null,512)),[[L,s(F).top]]):S("",!0),k(i(ye,{class:"flex-none m-auto"},null,512),[[L,s(F).appLock]]),i(Fe,{class:"flex-none m-auto"},{dropdown:l(()=>[i(Le,null,{default:l(()=>[s(U)?(p(),h(A,{key:0,icon:s(It)},{default:l(()=>[v(b(g.value),1)]),_:1},8,["icon"])):S("",!0),i(A,{icon:s(Yt),divided:s(U),onClick:u},{default:l(()=>[v(b(s(r)("header.settings")),1)]),_:1},8,["icon","divided"]),s(U)?(p(),h(A,{key:1,icon:s(Ut),onClick:c},{default:l(()=>[v(b(s(r)("header.signOut")),1)]),_:1},8,["icon"])):S("",!0),s(N)?(p(),h(A,{key:2,divided:"",icon:s(Kt),onClick:d},{default:l(()=>[v(b(s(r)("header.closeApp")),1)]),_:1},8,["icon"])):S("",!0)]),_:1})]),default:l(()=>[i(ke,{src:_.value,fit:"contain"},{default:l(()=>[i(Te,{size:40},{default:l(()=>[i(be)]),_:1})]),_:1},8,["src"])]),_:1})])])}}}),to={};function oo(e,t){const o=eo,a=He,r=_t,c=Ye,u=Je,d=Ze,g=Ge;return p(),h(g,null,{default:l(()=>[i(a,null,{default:l(()=>[i(o)]),_:1}),i(u,null,{default:l(()=>[i(c,null,{default:l(()=>[i(r)]),_:1})]),_:1}),i(d,{target:".el-scrollbar__wrap"})]),_:1})}var I=ce(to,[["render",oo]]),no=[{path:"/bot",name:"bot.botName",component:I,children:[{path:"/bot",component:()=>z(()=>import("./Main.36714d2b.js"),["assets/Main.36714d2b.js","assets/Main.c9521906.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),name:"bot.botList",meta:{rules:[1]}},{path:"/bot2",component:()=>z(()=>import("./Main.36714d2b.js"),["assets/Main.36714d2b.js","assets/Main.c9521906.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),name:"bot.botList2",meta:{rules:[1,2,3,5,7]}}]}],ao=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no}),ro=[{path:"/calendar",name:"calendar",component:I,children:[{path:"/calendar",icon:"el-icon-date",component:()=>z(()=>import("./Main.36714d2b.js"),["assets/Main.36714d2b.js","assets/Main.c9521906.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),name:"calendar.calendarName",meta:{rules:[3,5,7]}}]}],so=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});class n{constructor(t,o){E(this,"_animationInClass");E(this,"_animationOutClass");E(this,"otherInClass","");E(this,"otherOutClass","");this._animationInClass=t,this._animationOutClass=o}get animationInClass(){return this.otherInClass+" "+this._animationInClass}get animationOutClass(){return this.otherOutClass+" "+this._animationOutClass}}const me=[new n("pt-page-moveFromRight","pt-page-moveToLeft"),new n("pt-page-moveFromLeft","pt-page-moveToRight"),new n("pt-page-moveFromBottom","pt-page-moveToTop"),new n("pt-page-moveFromTop","pt-page-moveToBottom"),new n("pt-page-moveFromRight pt-page-ontop","pt-page-fade"),new n("pt-page-moveFromLeft pt-page-ontop","pt-page-fade"),new n("pt-page-moveFromBottom pt-page-ontop","pt-page-fade"),new n("pt-page-moveFromTop pt-page-ontop","pt-page-fade"),new n("pt-page-moveFromRightFade","pt-page-moveToLeftFade"),new n("pt-page-moveFromLeftFade","pt-page-moveToRightFade"),new n("pt-page-moveFromBottomFade","pt-page-moveToTopFade"),new n("pt-page-moveFromTopFade","pt-page-moveToBottomFade"),new n("pt-page-moveFromRight","pt-page-moveToLeftEasing pt-page-ontop"),new n("pt-page-moveFromLeft","pt-page-moveToRightEasing pt-page-ontop"),new n("pt-page-moveFromBottom","pt-page-moveToTopEasing pt-page-ontop"),new n("pt-page-moveFromTop","pt-page-moveToBottomEasing pt-page-ontop"),new n("pt-page-moveFromRight pt-page-ontop","pt-page-scaleDown"),new n("pt-page-moveFromLeft pt-page-ontop","pt-page-scaleDown"),new n("pt-page-moveFromBottom pt-page-ontop","pt-page-scaleDown"),new n("pt-page-moveFromTop pt-page-ontop","pt-page-scaleDown"),new n("pt-page-scaleUpDown pt-page-delay300","pt-page-scaleDown"),new n("pt-page-scaleUp pt-page-delay300","pt-page-scaleDownUp"),new n("pt-page-scaleUp","pt-page-moveToLeft pt-page-ontop"),new n("pt-page-scaleUp","pt-page-moveToRight pt-page-ontop"),new n("pt-page-scaleUp","pt-page-moveToTop pt-page-ontop"),new n("pt-page-scaleUp","pt-page-moveToBottom pt-page-ontop"),new n("pt-page-scaleUpCenter pt-page-delay400","pt-page-scaleDownCenter"),new n("pt-page-moveFromRight pt-page-delay200 pt-page-ontop","pt-page-rotateRightSideFirst"),new n("pt-page-moveFromLeft pt-page-delay200 pt-page-ontop","pt-page-rotateLeftSideFirst"),new n("pt-page-moveFromTop pt-page-delay200 pt-page-ontop","pt-page-rotateTopSideFirst"),new n("pt-page-moveFromBottom pt-page-delay200 pt-page-ontop","pt-page-rotateBottomSideFirst"),new n("pt-page-flipInLeft pt-page-delay500","pt-page-flipOutRight"),new n("pt-page-flipInRight pt-page-delay500","pt-page-flipOutLeft"),new n("pt-page-flipInBottom pt-page-delay500","pt-page-flipOutTop"),new n("pt-page-flipInTop pt-page-delay500","pt-page-flipOutBottom"),new n("pt-page-scaleUp","pt-page-rotateFall pt-page-ontop"),new n("pt-page-rotateInNewspaper pt-page-delay500","pt-page-rotateOutNewspaper"),new n("pt-page-moveFromRight","pt-page-rotatePushLeft"),new n("pt-page-moveFromLeft","pt-page-rotatePushRight"),new n("pt-page-moveFromBottom","pt-page-rotatePushTop"),new n("pt-page-moveFromTop","pt-page-rotatePushBottom"),new n("pt-page-rotatePullRight pt-page-delay180","pt-page-rotatePushLeft"),new n("pt-page-rotatePullLeft pt-page-delay180","pt-page-rotatePushRight"),new n("pt-page-rotatePullBottom pt-page-delay180","pt-page-rotatePushTop"),new n("pt-page-rotatePullTop pt-page-delay180","pt-page-rotatePushBottom"),new n("pt-page-moveFromRightFade","pt-page-rotateFoldLeft"),new n("pt-page-moveFromLeftFade","pt-page-rotateFoldRight"),new n("pt-page-moveFromBottomFade","pt-page-rotateFoldTop"),new n("pt-page-moveFromTopFade","pt-page-rotateFoldBottom"),new n("pt-page-rotateUnfoldLeft","pt-page-moveToRightFade"),new n("pt-page-rotateUnfoldRight","pt-page-moveToLeftFade"),new n("pt-page-rotateUnfoldTop","pt-page-moveToBottomFade"),new n("pt-page-rotateUnfoldBottom","pt-page-moveToTopFade"),new n("pt-page-rotateRoomLeftIn","pt-page-rotateRoomLeftOut pt-page-ontop"),new n("pt-page-rotateRoomRightIn","pt-page-rotateRoomRightOut pt-page-ontop"),new n("pt-page-rotateRoomTopIn","pt-page-rotateRoomTopOut pt-page-ontop"),new n("pt-page-rotateRoomBottomIn","pt-page-rotateRoomBottomOut pt-page-ontop"),new n("pt-page-rotateCubeLeftIn","pt-page-rotateCubeLeftOut pt-page-ontop"),new n("pt-page-rotateCubeRightIn","pt-page-rotateCubeRightOut pt-page-ontop"),new n("pt-page-rotateCubeTopIn","pt-page-rotateCubeTopOut pt-page-ontop"),new n("pt-page-rotateCubeBottomIn","pt-page-rotateCubeBottomOut pt-page-ontop"),new n("pt-page-rotateCarouselLeftIn","pt-page-rotateCarouselLeftOut pt-page-ontop"),new n("pt-page-rotateCarouselRightIn","pt-page-rotateCarouselRightOut pt-page-ontop"),new n("pt-page-rotateCarouselTopIn","pt-page-rotateCarouselTopOut pt-page-ontop"),new n("pt-page-rotateCarouselBottomIn","pt-page-rotateCarouselBottomOut pt-page-ontop"),new n("pt-page-rotateSidesIn pt-page-delay200","pt-page-rotateSidesOut"),new n("pt-page-rotateSlideIn","pt-page-rotateSlideOut")];function lo(e,t,o){const a=me[e];return a.otherInClass=t,a.otherOutClass=o,a}function io(e,t){return lo(We(me.length),e,t)}const po={"./modules/bot.ts":ao,"./modules/calendar.ts":so},co=Object.values(po).map(e=>e.default).flat(),_e=[{path:"/404",component:()=>z(()=>import("./404.40c711cc.js"),["assets/404.40c711cc.js","assets/404.126f6de4.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),name:"notFound",meta:{hidden:!0}},{path:"/",component:I,name:"/",children:[{path:"/",name:"main",component:()=>z(()=>import("./Main.36714d2b.js"),["assets/Main.36714d2b.js","assets/Main.c9521906.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),meta:{showEditButton:!0}}]},{path:"/settings",name:"settings",component:I,children:[{path:"/settings",component:()=>z(()=>import("./Settings.116caa95.js"),["assets/Settings.116caa95.js","assets/Settings.5c87885a.css","assets/vendor.56d8b752.js","assets/vendor.62f24f8f.css"]),name:"settings"}],meta:{hidden:!0}},{path:"/:pathMatch(.*)*",name:"other",redirect:"/404",meta:{hidden:!0}}],O=Ke({history:Qe(),routes:_e});O.beforeEach(e=>{uo(String(e.name)),e.meta.animationClass=io("","absolute-important")});function uo(e){document.title=`${Q("menu."+e)} - ${Q("appName")}`}const de=(e,t)=>e.filter(o=>{if(o.children&&o.children.length>0){const a=de(o.children,t);return a.length>0?(o.children=a,o):void 0}else{if(o.meta===void 0)return;if(o.meta.isPubilc)return o;if(o.meta.rules===void 0)return;if(o.meta.rules.filter(r=>t.includes(r)).length>0)return o;O.hasRoute(o.name)&&O.removeRoute(o.name);return}}),mo=e=>{const t=ue();t.routes=_e;for(const o of de(co,e))o&&(t.routes.splice(2,0,o),O.addRoute(o))};const H=Xe(ct);H.use(M).use(et());pe(T().locale).then(()=>{H.use(O),O.isReady().then(()=>{mo([1]),H.mount("#app")})});export{T as u};
