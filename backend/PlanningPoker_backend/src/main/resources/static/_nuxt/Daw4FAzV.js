import{s as v}from"./CccVgyeM.js";import{s as h}from"./NlsClcJ8.js";import{an as P,ap as w,at as O,au as S,t as d,v as c,x as a,av as p,L as u,M as g,ac as l,z as B,A as D,ad as j,a5 as E,y as f,U as K,aw as I}from"./DzKQFaRo.js";import{s as L}from"./D5mscDPV.js";import"./CnPwaDf-.js";var A={root:function(t){var o=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":o.toggleable}]},legend:"p-fieldset-legend",legendtitle:"p-fieldset-legend-text",togglericon:"p-fieldset-toggler",toggleablecontent:"p-toggleable-content",content:"p-fieldset-content"},C=P.extend({name:"fieldset",classes:A}),N={name:"BaseFieldset",extends:L,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:C,provide:function(){return{$parentInstance:this}}},k={name:"Fieldset",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":{immediate:!0,handler:function(t){this.id=t||w()}},collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:O},components:{PlusIcon:h,MinusIcon:v}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?m(Object(o),!0).forEach(function(n){F(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function F(e,t,o){return t=M(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function M(e){var t=V(e,"string");return s(t)=="symbol"?t:String(t)}function V(e,t){if(s(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(s(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T=["id"],U=["id","aria-controls","aria-expanded","aria-label"],_=["id","aria-labelledby"];function q(e,t,o,n,r,i){var y=S("ripple");return d(),c("fieldset",l({class:e.cx("root")},e.ptmi("root")),[a("legend",l({class:e.cx("legend")},e.ptm("legend")),[e.toggleable?u("",!0):p(e.$slots,"legend",{key:0},function(){return[a("span",l({id:r.id+"_header",class:e.cx("legendtitle")},e.ptm("legendtitle")),f(e.legend),17,T)]}),e.toggleable?g((d(),c("a",l({key:1,id:r.id+"_header",tabindex:"0",role:"button","aria-controls":r.id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},b(b({},e.toggleButtonProps),e.ptm("toggler"))),[p(e.$slots,"togglericon",{collapsed:r.d_collapsed},function(){return[(d(),K(I(r.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("togglericon")},e.ptm("togglericon")),null,16,["class"]))]}),p(e.$slots,"legend",{},function(){return[a("span",l({class:e.cx("legendtitle")},e.ptm("legendtitle")),f(e.legend),17)]})],16,U)),[[y]]):u("",!0)],16),B(E,l({name:"p-toggleable-content"},e.ptm("transition")),{default:D(function(){return[g(a("div",l({id:r.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":r.id+"_header"},e.ptm("toggleablecontent")),[a("div",l({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,_),[[j,!r.d_collapsed]])]}),_:3},16)],16)}k.render=q;export{k as default};
