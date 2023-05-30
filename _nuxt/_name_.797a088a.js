import{_ as b}from"./nuxt-link.f67e5224.js";import{_ as V}from"./ArticleList.370d9f60.js";import{_ as z}from"./StatementList.ee958b19.js";import{G as F,w as p,i as Q,r as c,c as u,a as n,o as s,b as a,e as d,f,u as _,F as h,a0 as i,h as g,t as w}from"./entry.11869520.js";import{u as D}from"./config.55594ac9.js";import{q as v}from"./query.3d3187d5.js";import"./utils.9b4f4cc2.js";import"./preview.7441e597.js";const E=i("h3",{class:"my-2"},"Other Tags",-1),G={class:"mb-4"},H={class:"text-capitalize"},O={class:"mb-4"},R={class:"text-capitalize"},et={__name:"[name]",async setup(j){let t,o;const{params:{name:r}}=F(),x=([t,o]=p(()=>v().only(["tags"]).find()),t=await t,o(),t).map(l=>l.tags).filter(l=>!!l),k=[...new Set(x)].sort().pop(),T=([t,o]=p(()=>v("article").where({tags:{$contains:r}}).where({draft:{$not:!0}}).sort({date:-1}).find()),t=await t,o(),t),$=([t,o]=p(()=>v("statement").where({tags:{$contains:r}}).where({draft:{$not:!0}}).sort({date:-1}).find()),t=await t,o(),t),B=D();return Q({title:`Tag - ${r} - ${B.short_title}`}),(l,K)=>{const C=b,q=c("v-chip"),m=c("v-sheet"),A=V,y=c("v-row"),L=c("v-divider"),N=z,S=c("v-container");return s(),u(S,null,{default:n(()=>[a(m,{class:"my-4"},{default:n(()=>[E,(s(!0),d(h,null,f(_(k),e=>(s(),u(q,{key:e.id,class:"ml-2"},{default:n(()=>[a(C,{to:"/tag/"+e,class:"text-decoration-none"},{default:n(()=>[g(w(e),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),a(m,null,{default:n(()=>[i("h2",G,[g(" Articles tagged with:  "),i("span",H,w(_(r)),1)]),a(y,null,{default:n(()=>[(s(!0),d(h,null,f(_(T),e=>(s(),u(A,{key:e.id,article:e},null,8,["article"]))),128))]),_:1})]),_:1}),a(L,{class:"my-6"}),a(m,null,{default:n(()=>[i("h2",O,[g(" Statements tagged with:  "),i("span",R,w(_(r)),1)]),a(y,null,{default:n(()=>[(s(!0),d(h,null,f(_($),e=>(s(),u(N,{key:e.id,statement:e},null,8,["statement"]))),128))]),_:1})]),_:1})]),_:1})}}};export{et as default};
