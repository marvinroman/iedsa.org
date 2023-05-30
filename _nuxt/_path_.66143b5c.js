import{_ as F}from"./nuxt-link.6704ae9b.js";import L from"./ContentRenderer.a601bcd3.js";import{k as R,$ as S,G as W,w as g,r as n,c as i,a as t,o as s,b as e,Z as d,u as a,h as _,t as r,e as h,f as $,F as A}from"./entry.2a73aa34.js";import{q as k}from"./query.f6844ab2.js";import{u as E}from"./head.74d5707e.js";import"./ContentRendererMarkdown.8ab2dc47.js";import"./index.a6ef77ff.js";import"./preview.34282ca4.js";import"./utils.6a92b426.js";const G={class:"v-window__controls"},H={key:1},I={key:3},O={class:"tags-container my-4"},T={class:"px-xs-5 my-1"},Z={__name:"[path]",async setup(j){let o,l;const w=S(),{path:x}=W(),c=([o,l]=g(()=>k("statement").where({_path:x}).findOne()),o=await o,l(),o);E(c);const[v,m]=([o,l]=g(()=>k("statement").only(["_path","title"]).sort({date:1}).findSurround(x)),o=await o,l(),o);return(J,K)=>{const y=n("v-tooltip"),p=n("v-icon"),u=F,b=n("v-container"),C=n("v-card-title"),z=n("v-chip"),B=n("v-card-text"),D=n("v-card"),N=n("v-divider"),V=L,q=n("v-sheet");return s(),i(b,{class:"mt-0 pt-0 mx-auto"},{default:t(()=>[e(b,{class:"v-window__container mt-2"},{default:t(()=>[d("div",G,[a(v)?(s(),i(u,{key:0,to:a(v)._path,class:"prev-btn v-btn v-btn--flat v-btn--icon v-theme--light v-btn--density-default v-btn--size-x-larg v-btn--variant-elevated mx-4 gradient-border"},{default:t(()=>[e(y,{activator:"parent",location:"end"},{default:t(()=>[_(r(a(v).title),1)]),_:1}),e(p,{size:"x-large"},{default:t(()=>[_("mdi-chevron-left")]),_:1})]),_:1},8,["to"])):(s(),h("div",H)),a(m)?(s(),i(u,{key:2,to:a(m)._path,class:"next-btn v-btn v-btn--flat v-btn--icon v-theme--light v-btn--density-default v-btn--size-x-larg v-btn--variant-elevated mx-4 gradient-border"},{default:t(()=>[e(y,{activator:"parent",location:"start"},{default:t(()=>[_(r(a(m).title),1)]),_:1}),e(p,{size:"x-large"},{default:t(()=>[_("mdi-chevron-right")]),_:1})]),_:1},8,["to"])):(s(),h("div",I))])]),_:1}),e(D,{class:"ma-0 pa-0",flat:""},{default:t(()=>[e(C,{class:"mt-4"},{default:t(()=>[d("h1",null,r(a(c).title),1)]),_:1}),e(B,null,{default:t(()=>[d("div",O,[(s(!0),h(A,null,$(a(c).tags,f=>(s(),i(z,{key:f.id,outlined:"",class:"mr-2"},{default:t(()=>[e(u,{to:"/tag/"+f,class:"text-decoration-none"},{default:t(()=>[e(p,{class:"ml-2",color:"secondary",small:""},{default:t(()=>[_(" mdi-tag ")]),_:1}),_(" "+r(f),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),d("div",T," Date: "+r(a(w).format(a(c).date,"fullDateWithWeekday")),1)]),_:1})]),_:1}),e(N),e(q,{class:"pa-8 bg-grey-lighten-5"},{default:t(()=>[e(V,{value:a(c)},null,8,["value"])]),_:1})]),_:1})}}},nt=R(Z,[["__scopeId","data-v-156c47da"]]);export{nt as default};