import{s as c}from"./DDlkbYlA.js";import{s as p,a as l}from"./BHL8d5Py.js";import{s as m}from"./hGHZsXlp.js";import{s as u}from"./DUoDD4g8.js";import{an as f,t as i,v as d,av as o,x as v,ac as t,U as $,aw as g,B as y}from"./BDkr8gQC.js";import"./CCRXOekO.js";var h={root:function(s){var n=s.props,r=s.instance;return["p-inline-message p-component p-inline-message-"+n.severity,{"p-inline-message-icon-only":!r.$slots.default}]},icon:function(s){var n=s.props;return["p-inline-message-icon",n.icon]},text:"p-inline-message-text"},B=f.extend({name:"inlinemessage",classes:h}),x={name:"BaseInlineMessage",extends:u,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:x,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:p,success:c,warn:l,error:m}[this.severity]}}};function k(e,s,n,r,C,a){return i(),d("div",t({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[o(e.$slots,"icon",{},function(){return[(i(),$(g(e.icon?"span":a.iconComponent),t({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),v("span",t({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[y(" ")]})],16)],16)}S.render=k;export{S as default};
