import{s as g}from"./DcKP6m-z.js";import{s as y}from"./BMPnnUSo.js";import{an as B,ac as a,t as s,v as r,U as c,$ as I,aw as h,L as m,y as O,i as b,x as w,S as f,T as P,av as S,z as v}from"./BpL7i3Pp.js";import"./rGjuc3JR.js";var U={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(n){var t=n.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},N=B.extend({name:"breadcrumb",classes:U}),M={name:"BaseBreadcrumb",extends:y,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:N,provide:function(){return{$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:y,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,l=n.url,o=typeof window<"u"?window.location.pathname:"";return t===o||l===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(l){return n.onClick(l)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},R=["href","target","aria-current"];function V(e,n,t,l,o,i){return i.visible()?(s(),r("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",i.ptmOptions)),[t.templates.item?(s(),c(h(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(s(),r("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":i.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptm("action",i.ptmOptions)),[t.templates&&t.templates.itemicon?(s(),c(h(t.templates.itemicon),{key:0,item:t.item,class:I(e.cx("icon",i.ptmOptions))},null,8,["item","class"])):t.item.icon?(s(),r("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",i.ptmOptions)),null,16)):m("",!0),t.item.label?(s(),r("span",a({key:2,class:e.cx("label")},e.ptm("label",i.ptmOptions)),O(i.label()),17)):m("",!0)],16,R))],16)):m("",!0)}k.render=V;var z={name:"Breadcrumb",extends:M,inheritAttrs:!1,components:{BreadcrumbItem:k,ChevronRightIcon:g}};function A(e,n,t,l,o,i){var p=b("BreadcrumbItem"),C=b("ChevronRightIcon");return s(),r("nav",a({class:e.cx("root")},e.ptmi("root")),[w("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(s(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):m("",!0),(s(!0),r(f,null,P(e.model,function(d,u){return s(),r(f,{key:d.label+"_"+u},[e.home||u!==0?(s(),r("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[S(e.$slots,"separator",{},function(){return[v(C,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):m("",!0),v(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}z.render=A;export{z as default};
