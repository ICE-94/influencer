import{N as _}from"./NodeService-b2abee12.js";import{r as t,o as f,b as r,c as b,d as y,f as l,g as o,h as T,i as h}from"./index-65a4ed44.js";const N={class:"grid"},x={class:"col-12"},V={class:"card"},K={class:"col-12"},g={class:"card"},B={__name:"Tree",setup(k){const d=t(null),c=t(null),u=t(null),i=t(null),v=new _;return f(()=>{v.getTreeNodes().then(s=>d.value=s),v.getTreeTableNodes().then(s=>u.value=s)}),(s,e)=>{const m=r("Tree",!0),n=r("Column"),p=r("TreeTable");return b(),y("div",N,[l("div",x,[l("div",V,[e[2]||(e[2]=l("h5",null,"Tree",-1)),o(m,{value:d.value,selectionMode:"checkbox",selectionKeys:c.value,"onUpdate:selectionKeys":e[0]||(e[0]=a=>c.value=a)},null,8,["value","selectionKeys"])])]),l("div",K,[l("div",g,[e[4]||(e[4]=l("h5",null,"TreeTable",-1)),o(p,{value:u.value,selectionMode:"checkbox",selectionKeys:i.value,"onUpdate:selectionKeys":e[1]||(e[1]=a=>i.value=a)},{header:T(()=>e[3]||(e[3]=[h(" FileSystem ")])),default:T(()=>[o(n,{field:"name",header:"Name",expander:!0}),o(n,{field:"size",header:"Size"}),o(n,{field:"type",header:"Type"})]),_:1},8,["value","selectionKeys"])])])])}}};export{B as default};
