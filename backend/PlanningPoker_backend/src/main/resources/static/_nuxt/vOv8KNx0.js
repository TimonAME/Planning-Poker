import{s as A}from"./BP84EklR.js";import{O as D}from"./D0aQrWcx.js";import{s as H}from"./CLhswoY6.js";import{am as $,ao as B,ap as C,aq as o,ar as z,as as M,i as I,t as c,v as y,x as f,ac as a,au as b,$ as E,z as T,A as S,a4 as U,aw as R,B as K,y as O,L as w,S as L,T as W,U as q,av as Z}from"./qmWXUeWf.js";import x from"./CtraF8nf.js";import{s as G}from"./BEMagg6x.js";import"./CPclQocN.js";import"./BZdWUCkF.js";import"./Cq6DmmBj.js";import"./rRBGv1ij.js";import"./DhVUmTat.js";import"./DQ-dd6Bd.js";import"./DSqxrs6j.js";var J={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Q={root:function(t){var n=t.instance,r=t.props;return["p-treeselect p-component p-inputwrapper",{"p-treeselect-chip":r.display==="chip","p-disabled":r.disabled,"p-invalid":r.invalid,"p-focus":n.focused,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled","p-inputwrapper-filled":!n.emptyValue,"p-inputwrapper-focus":n.focused||n.overlayVisible}]},labelContainer:"p-treeselect-label-container",label:function(t){var n=t.instance,r=t.props;return["p-treeselect-label",{"p-placeholder":n.label===r.placeholder,"p-treeselect-label-empty":!r.placeholder&&n.emptyValue}]},token:"p-treeselect-token",tokenLabel:"p-treeselect-token-label",trigger:"p-treeselect-trigger",triggerIcon:"p-treeselect-trigger-icon",panel:function(t){t.props;var n=t.instance;return["p-treeselect-panel p-component",{"p-ripple-disabled":n.$primevue.config.ripple===!1}]},wrapper:"p-treeselect-items-wrapper",emptyMessage:"p-treeselect-empty-message"},X=$.extend({name:"treeselect",classes:Q,inlineStyles:J}),Y={name:"BaseTreeSelect",extends:G,props:{modelValue:null,options:Array,scrollHeight:{type:String,default:"400px"},placeholder:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:null},selectionMode:{type:String,default:"single"},appendTo:{type:[String,Object],default:"body"},emptyMessage:{type:String,default:null},display:{type:String,default:"comma"},metaKeySelection:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _(e,t,n){return t=ee(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){var t=te(e,"string");return v(t)=="symbol"?t:String(t)}function te(e,t){if(v(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(v(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function m(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=N(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(d){throw d},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,p=!1,u;return{s:function(){n=n.call(e)},n:function(){var d=n.next();return i=d.done,d},e:function(d){p=!0,u=d},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(p)throw u}}}}function ne(e){return le(e)||ie(e)||N(e)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e=="string")return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}}function ie(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function le(e){if(Array.isArray(e))return V(e)}function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var se={name:"TreeSelect",extends:Y,inheritAttrs:!1,emits:["update:modelValue","before-show","before-hide","change","show","hide","node-select","node-unselect","node-expand","node-collapse","focus","blur"],data:function(){return{id:this.$attrs.id,focused:!1,overlayVisible:!1,expandedKeys:{}}},watch:{"$attrs.id":{immediate:!0,handler:function(t){this.id=t||B()}},modelValue:{handler:function(){this.selfChange||this.updateTreeState(),this.selfChange=!1},immediate:!0},options:function(){this.updateTreeState()}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,selfChange:!1,selfClick:!1,beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(C.clear(this.overlay),this.overlay=null)},mounted:function(){this.updateTreeState()},methods:{show:function(){this.$emit("before-show"),this.overlayVisible=!0},hide:function(){this.$emit("before-hide"),this.overlayVisible=!1,this.$refs.focusInput.focus()},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClick:function(t){this.disabled||!this.disabled&&(!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide():this.show(),o.focus(this.$refs.focusInput))},onSelectionChange:function(t){this.selfChange=!0,this.$emit("update:modelValue",t),this.$emit("change",t)},onNodeSelect:function(t){this.$emit("node-select",t),this.selectionMode==="single"&&this.hide()},onNodeUnselect:function(t){this.$emit("node-unselect",t)},onNodeToggle:function(t){this.expandedKeys=t},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?o.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;o.focus(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?o.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;o.focus(n)},onKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"Space":case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break}},onArrowDownKey:function(t){var n=this;this.overlayVisible||(this.show(),this.$nextTick(function(){var r=o.find(n.$refs.tree.$el,'[data-pc-section="treeitem"]'),s=ne(r).find(function(i){return i.getAttribute("tabindex")==="0"});o.focus(s)}),t.preventDefault())},onEnterKey:function(t){this.overlayVisible?this.hide():this.onArrowDownKey(t),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&(this.hide(),t.preventDefault())},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||this.overlayVisible&&this.hasFocusableElements()&&(o.focus(this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault())},hasFocusableElements:function(){return o.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},onOverlayEnter:function(t){C.set("overlay",t,this.$primevue.config.zIndex.overlay),o.addStyles(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.focus()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.scrollValueInView(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){C.clear(t)},focus:function(){var t=o.getFocusableElements(this.overlay);t&&t.length>0&&t[0].focus()},alignOverlay:function(){this.appendTo==="self"?o.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=o.getOuterWidth(this.$el)+"px",o.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&!t.selfClick&&t.isOutsideClicked(n)&&t.hide(),t.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new z(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!o.isTouchDevice()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},overlayRef:function(t){this.overlay=t},onOverlayClick:function(t){D.emit("overlay-click",{originalEvent:t,target:this.$el}),this.selfClick=!0},onOverlayKeydown:function(t){t.code==="Escape"&&this.hide()},findSelectedNodes:function(t,n,r){if(t){if(this.isSelected(t,n)&&(r.push(t),delete n[t.key]),Object.keys(n).length&&t.children){var s=m(t.children),i;try{for(s.s();!(i=s.n()).done;){var p=i.value;this.findSelectedNodes(p,n,r)}}catch(h){s.e(h)}finally{s.f()}}}else{var u=m(this.options),l;try{for(u.s();!(l=u.n()).done;){var d=l.value;this.findSelectedNodes(d,n,r)}}catch(h){u.e(h)}finally{u.f()}}},isSelected:function(t,n){return this.selectionMode==="checkbox"?n[t.key]&&n[t.key].checked:n[t.key]},updateTreeState:function(){var t=j({},this.modelValue);this.expandedKeys={},t&&this.options&&this.updateTreeBranchState(null,null,t)},updateTreeBranchState:function(t,n,r){if(t){if(this.isSelected(t,r)&&(this.expandPath(n),delete r[t.key]),Object.keys(r).length&&t.children){var s=m(t.children),i;try{for(s.s();!(i=s.n()).done;){var p=i.value;n.push(t.key),this.updateTreeBranchState(p,n,r)}}catch(h){s.e(h)}finally{s.f()}}}else{var u=m(this.options),l;try{for(u.s();!(l=u.n()).done;){var d=l.value;this.updateTreeBranchState(d,[],r)}}catch(h){u.e(h)}finally{u.f()}}},expandPath:function(t){if(t.length>0){var n=m(t),r;try{for(n.s();!(r=n.n()).done;){var s=r.value;this.expandedKeys[s]=!0}}catch(i){n.e(i)}finally{n.f()}}},scrollValueInView:function(){if(this.overlay){var t=o.findSingle(this.overlay,'[data-p-highlight="true"]');t&&t.scrollIntoView({block:"nearest",inline:"start"})}}},computed:{selectedNodes:function(){var t=[];if(this.modelValue&&this.options){var n=j({},this.modelValue);this.findSelectedNodes(null,n,t)}return t},label:function(){var t=this.selectedNodes;return t.length?t.map(function(n){return n.label}).join(", "):this.placeholder},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},emptyValue:function(){return!this.modelValue||Object.keys(this.modelValue).length===0},emptyOptions:function(){return!this.options||this.options.length===0},listId:function(){return this.id+"_list"}},components:{TSTree:x,Portal:H,ChevronDownIcon:A},directives:{ripple:M}};function g(e){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oe(e,t,n){return t=ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=ue(e,"string");return g(t)=="symbol"?t:String(t)}function ue(e,t){if(g(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(g(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var de=["id","disabled","tabindex","aria-labelledby","aria-label","aria-expanded","aria-controls"],ce=["aria-expanded"];function fe(e,t,n,r,s,i){var p=I("TSTree"),u=I("Portal");return c(),y("div",a({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[9]||(t[9]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptmi("root")),[f("div",a({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[f("input",a({ref:"focusInput",id:e.inputId,type:"text",role:"combobox",class:e.inputClass,style:e.inputStyle,readonly:"",disabled:e.disabled,tabindex:e.disabled?-1:e.tabindex,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":i.listId,onFocus:t[0]||(t[0]=function(l){return i.onFocus(l)}),onBlur:t[1]||(t[1]=function(l){return i.onBlur(l)}),onKeydown:t[2]||(t[2]=function(l){return i.onKeyDown(l)})},k(k({},e.inputProps),e.ptm("hiddenInput"))),null,16,de)],16),f("div",a({class:e.cx("labelContainer")},e.ptm("labelContainer")),[f("div",a({class:e.cx("label")},e.ptm("label")),[b(e.$slots,"value",{value:i.selectedNodes,placeholder:e.placeholder},function(){return[e.display==="comma"?(c(),y(L,{key:0},[K(O(i.label||"empty"),1)],64)):e.display==="chip"?(c(),y(L,{key:1},[(c(!0),y(L,null,W(i.selectedNodes,function(l){return c(),y("div",a({key:l.key,class:e.cx("token")},e.ptm("token")),[f("span",a({class:e.cx("tokenLabel")},e.ptm("tokenLabel")),O(l.label),17)],16)}),128)),i.emptyValue?(c(),y(L,{key:0},[K(O(e.placeholder||"empty"),1)],64)):w("",!0)],64)):w("",!0)]})],16)],16),f("div",a({class:e.cx("trigger"),role:"button","aria-haspopup":"tree","aria-expanded":s.overlayVisible},e.ptm("trigger")),[b(e.$slots,"triggericon",{class:E(e.cx("triggerIcon"))},function(){return[(c(),q(Z("ChevronDownIcon"),a({class:e.cx("triggerIcon")},e.ptm("triggerIcon")),null,16,["class"]))]})],16,ce),T(u,{appendTo:e.appendTo},{default:S(function(){return[T(U,a({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:S(function(){return[s.overlayVisible?(c(),y("div",a({key:0,ref:i.overlayRef,onClick:t[7]||(t[7]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:[e.cx("panel"),e.panelClass],onKeydown:t[8]||(t[8]=function(){return i.onOverlayKeydown&&i.onOverlayKeydown.apply(i,arguments)})},k(k({},e.panelProps),e.ptm("panel"))),[f("span",a({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),b(e.$slots,"header",{value:e.modelValue,options:e.options}),f("div",a({class:e.cx("wrapper"),style:{"max-height":e.scrollHeight}},e.ptm("wrapper")),[T(p,{ref:"tree",id:i.listId,value:e.options,selectionMode:e.selectionMode,"onUpdate:selectionKeys":i.onSelectionChange,selectionKeys:e.modelValue,expandedKeys:s.expandedKeys,"onUpdate:expandedKeys":i.onNodeToggle,metaKeySelection:e.metaKeySelection,onNodeExpand:t[4]||(t[4]=function(l){return e.$emit("node-expand",l)}),onNodeCollapse:t[5]||(t[5]=function(l){return e.$emit("node-collapse",l)}),onNodeSelect:i.onNodeSelect,onNodeUnselect:i.onNodeUnselect,level:0,unstyled:e.unstyled,pt:e.ptm("tree")},R({_:2},[e.$slots.itemtogglericon?{name:"togglericon",fn:S(function(l){return[b(e.$slots,"itemtogglericon",{node:l.node,expanded:l.expanded,class:E(l.class)})]}),key:"0"}:void 0,e.$slots.itemcheckboxicon?{name:"checkboxicon",fn:S(function(l){return[b(e.$slots,"itemcheckboxicon",{checked:l.checked,partialChecked:l.partialChecked,class:E(l.class)})]}),key:"1"}:void 0]),1032,["id","value","selectionMode","onUpdate:selectionKeys","selectionKeys","expandedKeys","onUpdate:expandedKeys","metaKeySelection","onNodeSelect","onNodeUnselect","unstyled","pt"]),i.emptyOptions?(c(),y("div",a({key:0,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[b(e.$slots,"empty",{},function(){return[K(O(i.emptyMessageText),1)]})],16)):w("",!0)],16),b(e.$slots,"footer",{value:e.modelValue,options:e.options}),f("span",a({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[6]||(t[6]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}se.render=fe;export{se as default};
