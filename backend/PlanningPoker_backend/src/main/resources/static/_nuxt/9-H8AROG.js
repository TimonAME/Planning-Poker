import{aq as d,au as t,t as r,U as s,a7 as l,L as i}from"./DAtY_sdv.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=d.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,c,n,f,a,o){return o.inline?t(e.$slots,"default",{key:0}):a.mounted?(r(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
