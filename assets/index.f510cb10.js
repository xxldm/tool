import{d as i,r as m,o as d,c as p,a as t,t as _,F as f,p as h,b as g,e as l,f as v,g as y}from"./vendor.c4722c00.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};b();var k="./assets/logo.03d6d6da.png";var V=(r,s)=>{const c=r.__vccOpts||r;for(const[n,e]of s)c[n]=e;return c};const a=r=>(h("data-v-413ce8d2"),r=r(),g(),r),S=a(()=>t("p",null,[l(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),x=a(()=>t("p",null,[l("See "),t("code",null,"README.md"),l(" for more information.")],-1)),E=a(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),I=a(()=>t("p",null,[l(" Edit "),t("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),N=i({props:{msg:null},setup(r){const s=m(0);return(c,n)=>(d(),p(f,null,[t("h1",null,_(r.msg),1),S,x,E,t("button",{type:"button",onClick:n[0]||(n[0]=e=>s.value++)},"count is: "+_(s.value),1),I],64))}});var A=V(N,[["__scopeId","data-v-413ce8d2"]]);const D=t("img",{alt:"Vue logo",src:k},null,-1),L=i({setup(r){return(s,c)=>(d(),p(f,null,[D,v(A,{msg:"Test Github Action"})],64))}});y(L).mount("#app");
