import{s as l}from"./C--KP3xu.js";import{an as r,t as s,v as p,ac as u}from"./CQTv2PZw.js";var o={root:function(t){var i=t.instance,n=t.props;return["p-inputtext p-component",{"p-filled":i.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":i.$primevue.config.inputStyle==="filled"}]}},d=r.extend({name:"inputtext",classes:o}),m={name:"BaseInputText",extends:l,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},f={name:"InputText",extends:m,inheritAttrs:!1,emits:["update:modelValue"],methods:{getPTOptions:function(t){var i=t==="root"?this.ptmi:this.ptm;return i(t,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},v=["value","aria-invalid"];function c(e,t,i,n,g,a){return s(),p("input",u({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.getPTOptions("root")),null,16,v)}f.render=c;export{f as default};
