import{am as o,t as l,v as t,au as i,ac as n,y as p,U as u,$ as m,av as d,L as c}from"./qmWXUeWf.js";import{s as v}from"./BEMagg6x.js";var y={root:function(e){var r=e.props;return["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},g=o.extend({name:"avatar",classes:y}),b={name:"BaseAvatar",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:g,provide:function(){return{$parentInstance:this}}},f={name:"Avatar",extends:b,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},S=["aria-labelledby","aria-label"],$=["src","alt"];function h(a,e,r,k,E,s){return l(),t("div",n({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptmi("root")),[i(a.$slots,"default",{},function(){return[a.label?(l(),t("span",n({key:0,class:a.cx("label")},a.ptm("label")),p(a.label),17)):a.$slots.icon?(l(),u(d(a.$slots.icon),{key:1,class:m(a.cx("icon"))},null,8,["class"])):a.icon?(l(),t("span",n({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):a.image?(l(),t("img",n({key:3,src:a.image,alt:a.ariaLabel,onError:e[0]||(e[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},a.ptm("image")),null,16,$)):c("",!0)]})],16,S)}f.render=h;export{f as default};
