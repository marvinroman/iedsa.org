import{_ as b}from"./nuxt-link.12ec48a1.js";import{k as B,Z as N,r as a,o as l,c as d,a as t,b as e,h as o,t as s,a0 as r,e as w,F as D,f as V}from"./entry.482e174f.js";const C={props:{statement:{type:Object,default:null}},setup(){return{date:N()}}},F={class:"text--primary"},L={class:"content"};function W(i,j,n,m,z,E){const u=a("v-card-title"),c=b,v=a("v-icon"),p=a("v-slide-group-item"),f=a("v-slide-group"),x=a("v-card-text"),h=a("v-spacer"),g=a("v-card-actions"),k=a("v-card"),y=a("v-col");return l(),d(y,{class:"statements"},{default:t(()=>[e(k,{class:"elevation-6 fill-height",tile:""},{default:t(()=>[e(c,{to:n.statement._path,class:"text-decoration-none"},{default:t(()=>[e(u,{class:"ma-1 pa-0 ml-3"},{default:t(()=>[o(s(n.statement.title),1)]),_:1})]),_:1},8,["to"]),e(x,null,{default:t(()=>[r("div",F,[e(f,{"show-arrows":""},{default:t(()=>[(l(!0),w(D,null,V(n.statement.tags,_=>(l(),d(p,{key:_.id},{default:t(()=>[e(c,{to:"/tag/"+_,class:"text-decoration-none"},{default:t(()=>[e(v,{class:"ml-2",color:"secondary",small:""},{default:t(()=>[o(" mdi-tag ")]),_:1}),o(" "+s(_),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),r("div",null,s(m.date.format(n.statement.date,"normalDateWithWeekday")),1),r("div",L,s(n.statement.excerpt),1)])]),_:1}),e(g,null,{default:t(()=>[e(h),e(c,{to:n.statement._path,class:"v-btn text-info v-btn--density-default v-btn--size-default v-btn--variant-text"},{default:t(()=>[o(" Read More ")]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})}const R=B(C,[["render",W]]);export{R as _};
