import{u as f}from"./asyncData.5986b5a5.js";import{p as v,_ as g,m as d,v as l,x as h,y as _,q as y,s as r}from"./entry.b848334e.js";import{q as w,h as p,e as C,j as P}from"./query.095cc726.js";import{_ as $}from"./nuxt-link.a2aedf03.js";import{w as c,s as N,u as j}from"./utils.1d18b882.js";import{u as T}from"./preview.da402ef2.js";const x=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.e724652e.js"),["./client-db.e724652e.js","./entry.b848334e.js","./entry.a33de2d2.css","./query.095cc726.js","./utils.1d18b882.js","./preview.da402ef2.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{R as default};