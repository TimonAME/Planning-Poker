import{s as c}from"./BUEmsIKQ.js";import{s as p,a as l}from"./DKD8TaC1.js";import{s as m}from"./Ds5Bwyhj.js";import{s as u}from"./yfq_Q9fo.js";import{am as f,t as i,v as d,au as o,x as v,ac as n,U as $,av as g,B as y}from"./krjWSAyq.js";import"./bCzycb70.js";var h={root:function(s){var t=s.props,r=s.instance;return["p-inline-message p-component p-inline-message-"+t.severity,{"p-inline-message-icon-only":!r.$slots.default}]},icon:function(s){var t=s.props;return["p-inline-message-icon",t.icon]},text:"p-inline-message-text"},B=f.extend({name:"inlinemessage",classes:h}),x={name:"BaseInlineMessage",extends:u,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:x,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:p,success:c,warn:l,error:m}[this.severity]}}};function k(e,s,t,r,C,a){return i(),d("div",n({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[o(e.$slots,"icon",{},function(){return[(i(),$(g(e.icon?"span":a.iconComponent),n({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),v("span",n({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[y(" ")]})],16)],16)}S.render=k;export{S as default};
