import v from"./CZmNIciy.js";import{an as b,aJ as h,i as P,au as g,M as O,t as i,v as c,ac as a,aA as w,av as p,U as u,A as B,aw as S,L as j}from"./fS0xXYgW.js";import{s as I}from"./CeU_A6V8.js";import{s as $}from"./y1JpTqfm.js";import"./BN-QKOMx.js";import"./Dpslya4h.js";import"./CJEYV_Vk.js";var C={root:function(t){var n=t.props;return["p-inplace p-component",{"p-inplace-closable":n.closable}]},display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},D=b.extend({name:"inplace",classes:C}),k={name:"BaseInplace",extends:$,props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closeIcon:{type:String,default:void 0},displayProps:{type:null,default:null},closeButtonProps:{type:null,default:null}},style:D,provide:function(){return{$parentInstance:this}}},A={name:"Inplace",extends:k,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.$emit("open",t),this.d_active=!0,this.$emit("update:active",!0))},close:function(t){var n=this;this.$emit("close",t),this.d_active=!1,this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{IPButton:v,TimesIcon:I},directives:{focustrap:h}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(r){T(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T(e,t,n){return t=E(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=K(e,"string");return s(t)=="symbol"?t:String(t)}function K(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L=["tabindex"];function N(e,t,n,r,l,o){var m=P("IPButton"),y=g("focustrap");return O((i(),c("div",a({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[l.d_active?(i(),c("div",a({key:1,class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content"),e.closable?(i(),u(m,a({key:0,"aria-label":o.closeAriaLabel,onClick:o.close,unstyled:e.unstyled,pt:e.ptm("closeButton")},e.closeButtonProps),{icon:B(function(){return[p(e.$slots,"closeicon",{},function(){return[(i(),u(S(e.closeIcon?"span":"TimesIcon"),a({class:e.closeIcon},e.ptm("closeButton").icon,{"data-pc-section":"closebuttonicon"}),null,16,["class"]))]})]}),_:3},16,["aria-label","onClick","unstyled","pt"])):j("",!0)],16)):(i(),c("div",a({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return o.open&&o.open.apply(o,arguments)}),onKeydown:t[1]||(t[1]=w(function(){return o.open&&o.open.apply(o,arguments)},["enter"]))},d(d({},e.displayProps),e.ptm("display"))),[p(e.$slots,"display")],16,L))],16)),[[y]])}A.render=N;export{A as default};
