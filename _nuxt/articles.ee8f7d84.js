import{_ as v}from"./ArticleList.370d9f60.js";import{k as x,w as s,i as $,r as c,c as n,a as i,o as r,b as g,e as _,f as l,u,F as p}from"./entry.11869520.js";import{u as k}from"./config.55594ac9.js";import{q as m}from"./query.3d3187d5.js";import"./nuxt-link.f67e5224.js";import"./utils.9b4f4cc2.js";import"./preview.7441e597.js";const A={__name:"articles",async setup(C){let t,o;const d=k(),f=([t,o]=s(()=>m("article").where({priority:{$gt:0}}).where({draft:{$not:!0}}).sort({priority:-1,$numeric:!0}).sort({date:-1}).find()),t=await t,o(),t),w=([t,o]=s(()=>m("article").where({priority:{$not:{$gt:0}}}).where({draft:{$not:!0}}).sort({date:-1}).find()),t=await t,o(),t);return $({title:`Articles - ${d.short_title}`}),(b,B)=>{const a=v,y=c("v-row"),h=c("v-container");return r(),n(h,null,{default:i(()=>[g(y,null,{default:i(()=>[(r(!0),_(p,null,l(u(f),e=>(r(),n(a,{key:e.id,article:e},null,8,["article"]))),128)),(r(!0),_(p,null,l(u(w),e=>(r(),n(a,{key:e.id,article:e},null,8,["article"]))),128))]),_:1})]),_:1})}}},V=x(A,[["__scopeId","data-v-c5b381a5"]]);export{V as default};