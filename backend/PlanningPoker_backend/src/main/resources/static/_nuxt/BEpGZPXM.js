import{s as r}from"./BNIRa2uq.js";import{an as a,t as i,v as l,av as o,ac as p}from"./DBhBodbj.js";var u={root:function(t){var n=t.instance;return["p-splitter-panel",{"p-splitter-panel-nested":n.isNested}]}},d=a.extend({name:"splitterpanel",classes:u}),c={name:"BaseSplitterPanel",extends:r,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:d,provide:function(){return{$parentInstance:this}}},f={name:"SplitterPanel",extends:c,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var t=this;return this.$slots.default().some(function(n){return t.nestedState=n.type.name==="Splitter"?!0:null,t.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function m(e,t,n,v,S,s){return i(),l("div",p({ref:"container",class:e.cx("root")},e.ptmi("root",s.getPTOptions)),[o(e.$slots,"default")],16)}f.render=m;export{f as default};
