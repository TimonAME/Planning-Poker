import{ar as r,av as t,t as d,U as s,a8 as l,L as i}from"./BvuzWu0p.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,c,n,f,a,o){return o.inline?t(e.$slots,"default",{key:0}):a.mounted?(d(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
