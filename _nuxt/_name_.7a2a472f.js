import{_ as $}from"./nuxt-link.ad82c915.js";import{_ as L}from"./ArticleList.7425d5bb.js";import{G as V,w as m,i as F,r as a,c as l,a as o,o as n,b as c,e as h,f as d,u as _,F as f,a0 as i,h as w,t as y}from"./entry.525a8aa9.js";import{u as Q}from"./config.a69a2bd4.js";import{q as x}from"./query.51e58328.js";import"./utils.74805401.js";import"./preview.b80419e5.js";const S=i("h3",{class:"my-2"},"Other Authors",-1),z={class:"text-capitalize"},M={__name:"[name]",async setup(D){let t,s;const{params:{name:u}}=V(),A=([t,s]=m(()=>x().only(["author"]).where({draft:{$not:!0}}).where({published:!0}).find()),t=await t,s(),t).map(r=>r.author).filter(r=>!!r),v=[...new Set(A)].sort(),k=([t,s]=m(()=>x("article").where({author:u}).where({draft:{$not:!0}}).where({published:!0}).sort({date:-1}).find()),t=await t,s(),t),B=Q();return F({title:`Author - ${u} - ${B.short_title}`}),(r,H)=>{const C=$,b=a("v-chip"),p=a("v-sheet"),g=L,q=a("v-row"),N=a("v-container");return n(),l(N,null,{default:o(()=>[c(p,{class:"my-4"},{default:o(()=>[S,(n(!0),h(f,null,d(_(v),e=>(n(),l(b,{key:e.id,class:"ml-2"},{default:o(()=>[c(C,{to:"/author/"+e,class:"text-decoration-none"},{default:o(()=>[w(y(e),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),c(p,null,{default:o(()=>[i("h2",null,[w(" Articles authored by:  "),i("span",z,y(_(u)),1)]),c(q,null,{default:o(()=>[(n(!0),h(f,null,d(_(k),e=>(n(),l(g,{key:e.id,article:e},null,8,["article"]))),128))]),_:1})]),_:1})]),_:1})}}};export{M as default};
