import{s as p}from"./MxvP_Lno.js";import{an as h,ao as o,i as f,t as s,v as b,x as d,ac as r,av as m,$ as y,U as v,L as g}from"./CoGpfI4O.js";import{s as k}from"./UgSyvIKg.js";import"./BP47Urqm.js";var C={root:function(a){var t=a.instance,l=a.props;return["p-checkbox p-component",{"p-highlight":t.checked,"p-disabled":l.disabled,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":t.$primevue.config.inputStyle==="filled"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},S=h.extend({name:"checkbox",classes:C}),B={name:"BaseCheckbox",extends:k,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}};function A(e){return x(e)||O(e)||I(e)||V()}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,a){if(e){if(typeof e=="string")return i(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,a)}}function O(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function x(e){if(Array.isArray(e))return i(e)}function i(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}var T={name:"Checkbox",extends:B,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){var t=a==="root"?this.ptmi:this.ptm;return t(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){var t=this;if(!this.disabled&&!this.readonly){var l;this.binary?l=this.checked?this.falseValue:this.trueValue:this.checked?l=this.modelValue.filter(function(u){return!o.equals(u,t.value)}):l=this.modelValue?[].concat(A(this.modelValue),[this.value]):[this.value],this.$emit("update:modelValue",l),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{checked:function(){return this.binary?this.modelValue===this.trueValue:o.contains(this.value,this.modelValue)}},components:{CheckIcon:p}},P=["data-p-highlight","data-p-disabled"],j=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid"];function q(e,a,t,l,u,n){var c=f("CheckIcon");return s(),b("div",r({class:e.cx("root")},n.getPTOptions("root"),{"data-p-highlight":n.checked,"data-p-disabled":e.disabled}),[d("input",r({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:e.name,checked:n.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:a[1]||(a[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:a[2]||(a[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,j),d("div",r({class:e.cx("box")},n.getPTOptions("box")),[m(e.$slots,"icon",{checked:n.checked,class:y(e.cx("icon"))},function(){return[n.checked?(s(),v(c,r({key:0,class:e.cx("icon")},n.getPTOptions("icon")),null,16,["class"])):g("",!0)]})],16)],16,P)}T.render=q;export{T as default};
