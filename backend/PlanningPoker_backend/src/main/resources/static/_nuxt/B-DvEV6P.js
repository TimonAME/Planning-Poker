import{s as i}from"./_sMeHqCN.js";import{t as s,v as l,av as d,L as a,ac as c}from"./CwE4lPKX.js";var u={},f={name:"DeferredContent",extends:i,inheritAttrs:!1,emits:["load"],style:u,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,o=n.clientHeight;return o>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function m(e,t,n,o,r,h){return s(),l("div",c({ref:"container"},e.ptmi("root")),[r.loaded?d(e.$slots,"default",{key:0}):a("",!0)],16)}f.render=m;export{f as default};
