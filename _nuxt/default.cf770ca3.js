import{_ as M}from"./nuxt-link.6704ae9b.js";import{k as S,r as l,a6 as U,o,e as m,b as n,a as e,a5 as P,F as h,f as w,c,a1 as V,h as f,t as p,a0 as C,Z as v,a7 as T,a8 as Z,a9 as j,aa as q,ab as G,l as J}from"./entry.2a73aa34.js";import{u as K}from"./config.461025da.js";const O={props:{title:{type:String,default:""},menu:{type:Array,default:null}},data:()=>({drawer:!1,rail:!1}),computed:{rail_icon(){return this.rail?"mdi-chevron-right":"mdi-chevron-left"}}},A=r=>(Z("data-v-8f38c53b"),r=r(),j(),r),Q=A(()=>v("span",{class:"v-btn__overlay"},null,-1)),R=A(()=>v("span",{class:"v-btn__underlay"},null,-1)),W={class:"v-btn__content","data-no-activator":""},X=A(()=>v("span",{class:"v-btn__overlay"},null,-1)),ee=A(()=>v("span",{class:"v-btn__overlay"},null,-1)),te={class:"v-btn__content","data-no-activator":""};function ne(r,i,_,y,$,g){const d=l("v-btn"),s=l("v-list-item"),k=l("v-divider"),u=M,x=l("v-list-group"),b=l("v-list-item-title"),z=l("v-list"),B=l("v-navigation-drawer"),D=l("v-app-bar-nav-icon"),N=l("v-img"),F=l("v-toolbar-title"),I=l("v-spacer"),L=l("v-menu"),E=l("v-toolbar-items"),H=l("v-app-bar"),Y=U("ripple");return o(),m("div",null,[n(B,{modelValue:r.drawer,"onUpdate:modelValue":i[1]||(i[1]=t=>r.drawer=t),"disable-route-watcher":"","disable-resize-watcher":"",rail:r.rail,temporary:"",class:"d-flex d-md-none",onClick:i[2]||(i[2]=t=>r.rail=!1)},{default:e(()=>[n(z,null,{default:e(()=>[n(s,{title:_.title,nav:""},{append:e(()=>[n(d,{variant:"text",icon:g.rail_icon,onClick:i[0]||(i[0]=P(t=>r.rail=!r.rail,["stop"]))},null,8,["icon"])]),_:1},8,["title"]),n(k),(o(!0),m(h,null,w(_.menu,t=>(o(),m(h,{key:t.name},[t.items?(o(),c(x,{key:0,value:t.name},{activator:e(({props:a})=>[n(s,V(a,{"prepend-icon":t.icon,title:t.name}),null,16,["prepend-icon","title"])]),default:e(()=>[(o(!0),m(h,null,w(t.items,a=>(o(),m(h,{key:a.name},[a.path?(o(),c(s,{key:0,"prepend-icon":a.icon},{default:e(()=>[n(u,{to:a.path,class:"text-decoration-none text-grey-darken-2"},{default:e(()=>[f(p(a.name),1)]),_:2},1032,["to"])]),_:2},1032,["prepend-icon"])):a.href?(o(),c(s,{key:1,href:a.href,"prepend-icon":a.icon,title:a.name},null,8,["href","prepend-icon","title"])):C("",!0)],64))),128))]),_:2},1032,["value"])):t.path?(o(),c(s,{key:1,"prepend-icon":t.icon},{default:e(()=>[n(b,null,{default:e(()=>[n(u,{to:t.path,class:"text-decoration-none text-grey-darken-2"},{default:e(()=>[f(p(t.name),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["prepend-icon"])):t.href?(o(),c(s,{key:2,"prepend-icon":t.icon,href:t.href,title:t.name,target:"_blank",rel:"noopener noreferrer"},null,8,["prepend-icon","href","title"])):C("",!0)],64))),128))]),_:1})]),_:1},8,["modelValue","rail"]),n(H,null,{default:e(()=>[n(D,{class:"d-flex d-md-none",onClick:i[3]||(i[3]=t=>r.drawer=!r.drawer)}),n(N,{src:"/images/iedsa_logo.svg",height:"48",width:"48",class:"ml-2",inline:""}),n(F,null,{default:e(()=>[n(u,{"data-v-a54da7ff":"",class:"v-btn v-theme--light v-btn--density-default v-btn--size-large v-btn--variant-text gradient-border",to:"/"},{default:e(()=>[Q,R,v("span",W,p(_.title),1)]),_:1}),T(n(d,{text:"",href:"/",class:"ml-2 gradient-border",size:"large"},null,512),[[Y,{class:"text-primary"}]])]),_:1}),n(I),n(E,{class:"d-none d-md-flex"},{default:e(()=>[(o(!0),m(h,null,w(_.menu,t=>(o(),m(h,{key:t.name},[t.items?(o(),c(L,{key:0,"open-on-hover":""},{activator:e(({props:a})=>[n(d,V(a,{"append-icon":"mdi-chevron-down"}),{default:e(()=>[f(p(t.name),1)]),_:2},1040)]),default:e(()=>[n(z,null,{default:e(()=>[(o(!0),m(h,null,w(t.items,a=>(o(),c(s,{key:a.name,"prepend-icon":a.icon,to:a.path},{default:e(()=>[n(b,null,{default:e(()=>[n(u,{to:a.path,class:"text-decoration-none text-grey-darken-2"},{default:e(()=>[f(p(a.name),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["prepend-icon","to"]))),128))]),_:2},1024)]),_:2},1024)):t.path?(o(),c(u,{key:1,to:t.path,class:"v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text",style:{height:"inherit"}},{default:e(()=>[X,ee,v("span",te,p(t.name),1)]),_:2},1032,["to"])):t.href?(o(),c(d,{key:2,href:t.href,target:"_blank",rel:"noopener noreferrer"},{default:e(()=>[f(p(t.name),1)]),_:2},1032,["href"])):C("",!0)],64))),128))]),_:1})]),_:1})])}const oe=S(O,[["render",ne],["__scopeId","data-v-8f38c53b"]]),le={data(){return{scrollTimeout:0,yScrolled:0}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollTimeout||(this.scrollTimeout=setTimeout(()=>{this.yScrolled=window.scrollY,clearTimeout(this.scrollTimeout),this.scrollTimeout=0},100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}};function re(r,i,_,y,$,g){const d=l("v-icon"),s=l("v-btn");return T((o(),c(s,{icon:"",size:"x-large",class:"back-to-top",color:"primary",onClick:g.toTop},{default:e(()=>[n(d,{size:"x-large"},{default:e(()=>[f("mdi-chevron-up")]),_:1})]),_:1},8,["onClick"])),[[q,$.yScrolled>800]])}const ae=S(le,[["render",re]]),ie={props:{title:{type:String,default:""},socials:{type:Array,default:null}}},se={class:"d-block w-100 text-center"},ce={class:"d-block w-100 text-center py-1"};function _e(r,i,_,y,$,g){const d=l("v-icon"),s=l("v-btn"),k=l("v-divider"),u=l("v-footer"),x=U("ripple");return o(),c(u,{app:"",elevation:"2",class:"d-block"},{default:e(()=>[v("div",se,[(o(!0),m(h,null,w(_.socials,(b,z)=>T((o(),c(s,{key:z,href:b.link,class:"mx-4 gradient-border",target:"_blank",rel:"noopener noreferrer",flat:"",icon:"",text:""},{default:e(()=>[n(d,{size:"24px"},{default:e(()=>[f(p(b.icon),1)]),_:2},1024)]),_:2},1032,["href"])),[[x,{class:"text-primary"}]])),128))]),n(k),v("div",ce,[n(d,null,{default:e(()=>[f("mdi-copy-left")]),_:1}),f(" "+p(new Date().getFullYear())+" — ",1),v("strong",null,p(_.title),1)])]),_:1})}const de=S(ie,[["render",_e]]),pe={setup(){const r=K(),{lgAndUp:i,xlAndUp:_}=G();return{config:r,lgAndUp:i,xlAndUp:_}},data:()=>({title:null}),watch:{lgAndUp(){this.resize()},xlAndUp(){this.resize()}},mounted(){this.resize()},methods:{resize(){this.title=this.config.short_title,this.xlAndUp?this.title=this.config.long_title:this.lgAndUp&&(this.title=this.config.medium_title)}}};function ue(r,i,_,y,$,g){const d=oe,s=ae,k=l("v-main"),u=de,x=l("v-app"),b=U("resize");return T((o(),c(x,{id:"inspire"},{default:e(()=>[n(d,{title:r.title,menu:y.config.menu},null,8,["title","menu"]),n(k,{app:""},{default:e(()=>[J(r.$slots,"default"),n(s)]),_:3}),n(u,{title:r.title,socials:y.config.socials},null,8,["title","socials"])]),_:3})),[[b,g.resize]])}const he=S(pe,[["render",ue]]);export{he as default};