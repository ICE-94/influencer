import{r as o,x as V,m as y,k as b,b as s,c as i,d as m,f as l,g as d,F as c,p as w,t as f}from"./index-65a4ed44.js";const v={class:"grid"},g={class:"col-12"},B={class:"card"},S={class:"search-wrap grid pt-0 pb-3"},k={class:"left"},A={class:"flex align-items-center mt-3"},N={class:"flex align-items-center mt-3"},C={class:"right mt-3"},F={class:"table-wrap"},I={class:"table"},L={data(){return{dropdownValues:o([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue:o(null),dropdownValues2:o([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue2:o(null),router:V(),checkboxValue:o([]),ratingValue:o(4)}},components:{},computed:{...y(["FAQ"])},created(){},mounted(){this.ACTION_FAQ_LIST({mode:"faq"})},methods:{...b(["ACTION_FAQ_LIST","ACTION_FAQ_USE"]),onClickUseYn(a,e){const t={mode:"isUse",use_yn:a==="Y"?"N":"Y",idx:e};this.ACTION_FAQ_USE(t)},onClickLocation(){location.href="/shop/faq/add"}}},T=Object.assign(L,{__name:"history",setup(a){return o(!1),(e,t)=>{const r=s("Calendar"),p=s("Dropdown"),u=s("Button");return i(),m("div",v,[l("div",g,[l("div",B,[t[16]||(t[16]=l("h4",null,"Settlement history",-1)),l("div",S,[l("div",k,[l("div",A,[t[3]||(t[3]=l("label",{class:"label mr-3"},"Period Search",-1)),d(r,{showIcon:!0,yearNavigator:!0,showButtonBar:!0,modelValue:e.calendarValue,"onUpdate:modelValue":t[0]||(t[0]=n=>e.calendarValue=n),dateFormat:"yy/mm/dd",placeholder:"yyyy/mm/dd"},null,8,["modelValue"]),t[4]||(t[4]=l("span",{class:"between ml-2 mr-2"},"~",-1)),d(r,{showIcon:!0,yearNavigator:!0,showButtonBar:!0,modelValue:e.calendarValue,"onUpdate:modelValue":t[1]||(t[1]=n=>e.calendarValue=n),dateFormat:"yy/mm/dd",placeholder:"yyyy/mm/dd"},null,8,["modelValue"])]),l("div",N,[t[5]||(t[5]=l("label",{class:"label mr-3"},"State Search",-1)),d(p,{modelValue:e.dropdownValue,"onUpdate:modelValue":t[2]||(t[2]=n=>e.dropdownValue=n),options:e.dropdownValues,optionLabel:"name",placeholder:"Select"},null,8,["modelValue","options"])])]),l("div",C,[d(u,{label:"Search",class:"mr-2"}),d(u,{label:"Reset",severity:"secondary"})])]),t[17]||(t[17]=l("div",{class:"table-top"},[l("div",{class:"left"})],-1)),l("div",F,[l("table",I,[t[13]||(t[13]=l("tr",null,[l("th",null,"No"),l("th",null,"application amount"),l("th",null,"application date"),l("th",null,"name"),l("th",null,"bank"),l("th",null,"account"),l("th",null,"state"),l("th",null,"note")],-1)),(i(),m(c,null,w(3,n=>l("tr",{key:n},[l("td",null,f(n),1),t[6]||(t[6]=l("td",null,"10.00$",-1)),t[7]||(t[7]=l("td",null,"2024-01-01",-1)),t[8]||(t[8]=l("td",null,"Lee",-1)),t[9]||(t[9]=l("td",null,"KB bank",-1)),t[10]||(t[10]=l("td",null,"1234-5678-9000000",-1)),t[11]||(t[11]=l("td",null,"waiting",-1)),t[12]||(t[12]=l("td",null,null,-1))])),64)),t[14]||(t[14]=l("tr",null,[l("td",null,"4"),l("td",null,"10.00$"),l("td",null,"2024-01-01"),l("td",null,"Lee"),l("td",null,"KB bank"),l("td",null,"1234-5678-9000000"),l("td",{class:"text-green-500"},"completed"),l("td")],-1)),t[15]||(t[15]=l("tr",null,[l("td",null,"5"),l("td",null,"10.00$"),l("td",null,"2024-01-01"),l("td",null,"Lee"),l("td",null,"KB bank"),l("td",null,"1234-5678-9000001"),l("td",{class:"text-red-500"},"failed"),l("td",null,"incorrect account")],-1))])])])])])}}});export{T as default};
