import s from"./ContentSlot.f671e08f.js";import{m as o,q as m,x as p,z as u}from"./entry.b848334e.js";import"./utils.1d18b882.js";import"./preview.da402ef2.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};