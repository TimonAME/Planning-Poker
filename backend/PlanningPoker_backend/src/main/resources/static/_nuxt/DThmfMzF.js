import{s as y}from"./Q98BFtOw.js";import{s as h}from"./rdo9t8YM.js";import{an as v,ap as P,at as w,au as O,t as i,v as c,x as d,av as s,$ as S,ac as a,M as g,L as u,z as B,A as D,ad as j,a5 as E,y as K,U as C,ay as I,az as L,aw as k}from"./Cx9mJK2m.js";import{s as A}from"./CcUQG4tQ.js";import"./DYW2wPeu.js";var N={root:function(t){var o=t.props;return["p-panel p-component",{"p-panel-toggleable":o.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},z=v.extend({name:"panel",classes:N}),M={name:"BasePanel",extends:A,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:z,provide:function(){return{$parentInstance:this}}},V={name:"Panel",extends:M,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":{immediate:!0,handler:function(t){this.id=t||P()}},collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:h,MinusIcon:y},directives:{ripple:w}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?f(Object(o),!0).forEach(function(r){$(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function $(e,t,o){return t=R(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function R(e){var t=T(e,"string");return p(t)=="symbol"?t:String(t)}function T(e,t){if(p(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var U=["id"],q=["id","aria-label","aria-controls","aria-expanded"],F=["id","aria-labelledby"];function G(e,t,o,r,n,l){var b=O("ripple");return i(),c("div",a({class:e.cx("root")},e.ptmi("root")),[d("div",a({class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header",{id:n.id+"_header",class:S(e.cx("title"))},function(){return[e.header?(i(),c("span",a({key:0,id:n.id+"_header",class:e.cx("title")},e.ptm("title")),K(e.header),17,U)):u("",!0)]}),d("div",a({class:e.cx("icons")},e.ptm("icons")),[s(e.$slots,"icons"),e.toggleable?g((i(),c("button",a({key:0,id:n.id+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":l.buttonAriaLabel,"aria-controls":n.id+"_content","aria-expanded":!n.d_collapsed,onClick:t[0]||(t[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},m(m({},e.toggleButtonProps),e.ptm("toggler"))),[s(e.$slots,"togglericon",{collapsed:n.d_collapsed},function(){return[(i(),C(k(n.d_collapsed?"PlusIcon":"MinusIcon"),I(L(e.ptm("togglericon"))),null,16))]})],16,q)),[[b]]):u("",!0)],16)],16),B(E,a({name:"p-toggleable-content"},e.ptm("transition")),{default:D(function(){return[g(d("div",a({id:n.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":n.id+"_header"},e.ptm("toggleablecontent")),[d("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(i(),c("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):u("",!0)],16,F),[[j,!n.d_collapsed]])]}),_:3},16)],16)}V.render=G;export{V as default};
