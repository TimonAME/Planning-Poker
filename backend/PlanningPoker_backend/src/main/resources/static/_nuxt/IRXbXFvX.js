import{s as k}from"./C7OTffTv.js";import{an as w,ap as O,t as c,v as m,x as p,S as C,T as S,ac as u,av as b,$ as g,y as V,U as B,aw as x}from"./jPKGAdQc.js";import{s as A}from"./D_EhF2m3.js";import"./_8bgkmka.js";var P={root:function(t){var n=t.instance,r=t.props;return["p-chips p-component p-inputwrapper",{"p-disabled":r.disabled,"p-invalid":r.invalid,"p-focus":n.focused,"p-inputwrapper-filled":r.modelValue&&r.modelValue.length||n.inputValue&&n.inputValue.length,"p-inputwrapper-focus":n.focused}]},container:function(t){var n=t.props,r=t.instance;return["p-inputtext p-chips-multiple-container",{"p-variant-filled":n.variant?n.variant==="filled":r.$primevue.config.inputStyle==="filled"}]},token:function(t){var n=t.state,r=t.index;return["p-chips-token",{"p-focus":n.focusedIndex===r}]},label:"p-chips-token-label",removeTokenIcon:"p-chips-token-icon",inputToken:"p-chips-input-token"},K=w.extend({name:"chips",classes:P}),T={name:"BaseChips",extends:A,props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:[String,Object],default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},removeTokenIcon:{type:String,default:void 0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:K,provide:function(){return{$parentInstance:this}}};function f(e){return L(e)||F(e)||j(e)||D()}function D(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,t){if(e){if(typeof e=="string")return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}}function F(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L(e){if(Array.isArray(e))return h(e)}function h(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E={name:"Chips",extends:T,inheritAttrs:!1,emits:["update:modelValue","add","remove","focus","blur"],data:function(){return{id:this.$attrs.id,inputValue:null,focused:!1,focusedIndex:null}},watch:{"$attrs.id":{immediate:!0,handler:function(t){this.id=t||O()}}},methods:{onWrapperClick:function(){this.$refs.input.focus()},onInput:function(t){this.inputValue=t.target.value,this.focusedIndex=null},onFocus:function(t){this.focused=!0,this.focusedIndex=null,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.addItem(t,t.target.value,!1),this.$emit("blur",t)},onKeyDown:function(t){var n=t.target.value;switch(t.code){case"Backspace":n.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex!==null?this.removeItem(t,this.focusedIndex):this.removeItem(t,this.modelValue.length-1));break;case"Enter":case"NumpadEnter":n&&n.trim().length&&!this.maxedOut&&this.addItem(t,n,!0);break;case"ArrowLeft":n.length===0&&this.modelValue&&this.modelValue.length>0&&this.$refs.container.focus();break;case"ArrowRight":t.stopPropagation();break;default:this.separator&&(this.separator===t.key||t.key.match(this.separator))&&this.addItem(t,n,!0);break}},onPaste:function(t){var n=this;if(this.separator){var r=this.separator.replace("\\n",`
`).replace("\\r","\r").replace("\\t","	"),i=(t.clipboardData||window.clipboardData).getData("Text");if(i){var o=this.modelValue||[],a=i.split(r);a=a.filter(function(l){return n.allowDuplicate||o.indexOf(l)===-1}),o=[].concat(f(o),f(a)),this.updateModel(t,o,!0)}}},onContainerFocus:function(){this.focused=!0},onContainerBlur:function(){this.focusedIndex=-1,this.focused=!1},onContainerKeyDown:function(t){switch(t.code){case"ArrowLeft":this.onArrowLeftKeyOn(t);break;case"ArrowRight":this.onArrowRightKeyOn(t);break;case"Backspace":this.onBackspaceKeyOn(t);break}},onArrowLeftKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex=this.focusedIndex===null?this.modelValue.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))},onArrowRightKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex===this.modelValue.length-1?(this.focusedIndex=null,this.$refs.input.focus()):this.focusedIndex++)},onBackspaceKeyOn:function(t){this.focusedIndex!==null&&this.removeItem(t,this.focusedIndex)},updateModel:function(t,n,r){var i=this;this.$emit("update:modelValue",n),this.$emit("add",{originalEvent:t,value:n}),this.$refs.input.value="",this.inputValue="",setTimeout(function(){i.maxedOut&&(i.focused=!1)},0),r&&t.preventDefault()},addItem:function(t,n,r){if(n&&n.trim().length){var i=this.modelValue?f(this.modelValue):[];(this.allowDuplicate||i.indexOf(n)===-1)&&(i.push(n),this.updateModel(t,i,r))}},removeItem:function(t,n){if(!this.disabled){var r=f(this.modelValue),i=r.splice(n,1);this.focusedIndex=null,this.$refs.input.focus(),this.$emit("update:modelValue",r),this.$emit("remove",{originalEvent:t,value:i})}}},computed:{maxedOut:function(){return this.max&&this.modelValue&&this.max===this.modelValue.length},focusedOptionId:function(){return this.focusedIndex!==null?"".concat(this.id,"_chips_item_").concat(this.focusedIndex):null}},components:{TimesCircleIcon:k}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M(e,t,n){return t=R(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,"string");return d(t)=="symbol"?t:String(t)}function z(e,t){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N=["aria-labelledby","aria-label","aria-activedescendant"],W=["id","aria-label","aria-setsize","aria-posinset","data-p-focused"],U=["id","disabled","placeholder","aria-invalid"];function $(e,t,n,r,i,o){return c(),m("div",u({class:e.cx("root")},e.ptmi("root")),[p("ul",u({ref:"container",class:e.cx("container"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-activedescendant":i.focused?o.focusedOptionId:void 0,onClick:t[5]||(t[5]=function(a){return o.onWrapperClick()}),onFocus:t[6]||(t[6]=function(){return o.onContainerFocus&&o.onContainerFocus.apply(o,arguments)}),onBlur:t[7]||(t[7]=function(){return o.onContainerBlur&&o.onContainerBlur.apply(o,arguments)}),onKeydown:t[8]||(t[8]=function(){return o.onContainerKeyDown&&o.onContainerKeyDown.apply(o,arguments)})},e.ptm("container")),[(c(!0),m(C,null,S(e.modelValue,function(a,l){return c(),m("li",u({key:"".concat(l,"_").concat(a),id:i.id+"_chips_item_"+l,role:"option",class:e.cx("token",{index:l}),"aria-label":a,"aria-selected":!0,"aria-setsize":e.modelValue.length,"aria-posinset":l+1},e.ptm("token"),{"data-p-focused":i.focusedIndex===l}),[b(e.$slots,"chip",{class:g(e.cx("label")),value:a},function(){return[p("span",u({class:e.cx("label")},e.ptm("label")),V(a),17)]}),b(e.$slots,"removetokenicon",{class:g(e.cx("removeTokenIcon")),index:l,onClick:function(s){return o.removeItem(s,l)},removeCallback:function(s){return o.removeItem(s,l)}},function(){return[(c(),B(x(e.removeTokenIcon?"span":"TimesCircleIcon"),u({class:[e.cx("removeTokenIcon"),e.removeTokenIcon],onClick:function(s){return o.removeItem(s,l)},"aria-hidden":"true"},e.ptm("removeTokenIcon")),null,16,["class","onClick"]))]})],16,W)}),128)),p("li",u({class:e.cx("inputToken"),role:"option"},e.ptm("inputToken")),[p("input",u({ref:"input",id:e.inputId,type:"text",class:e.inputClass,style:e.inputStyle,disabled:e.disabled||o.maxedOut,placeholder:e.placeholder,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(a){return o.onFocus(a)}),onBlur:t[1]||(t[1]=function(a){return o.onBlur(a)}),onInput:t[2]||(t[2]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onKeydown:t[3]||(t[3]=function(a){return o.onKeyDown(a)}),onPaste:t[4]||(t[4]=function(a){return o.onPaste(a)})},I(I({},e.inputProps),e.ptm("input"))),null,16,U)],16)],16,N)],16)}E.render=$;export{E as default};
