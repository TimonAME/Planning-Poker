import L from"./2lBcw0dN.js";import{s as T}from"./hw5szobS.js";import{am as x,ao as N,aq as a,as as B,aE as j,i as M,at as P,t as u,v as p,x as A,au as E,ac as f,S as w,T as U,M as R,L as k,U as O,av as C,z as F,A as V,$ as H}from"./BAEj5l7a.js";import{s as q}from"./BNdfZtbS.js";import"./IUzAJOq4.js";import"./DEgZzsQs.js";import"./DvjMzbC_.js";function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function S(t,e,i){return e=W(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function W(t){var e=z(t,"string");return h(e)=="symbol"?e:String(e)}function z(t,e){if(h(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var G={root:function(e){var i=e.props;return{alignItems:(i.direction==="up"||i.direction==="down")&&"center",justifyContent:(i.direction==="left"||i.direction==="right")&&"center",flexDirection:i.direction==="up"?"column-reverse":i.direction==="down"?"column":i.direction==="left"?"row-reverse":i.direction==="right"?"row":null}},menu:function(e){var i=e.props;return{flexDirection:i.direction==="up"?"column-reverse":i.direction==="down"?"column":i.direction==="left"?"row-reverse":i.direction==="right"?"row":null}}},J={root:function(e){var i=e.instance,n=e.props;return["p-speeddial p-component p-speeddial-".concat(n.type),S(S(S({},"p-speeddial-direction-".concat(n.direction),n.type!=="circle"),"p-speeddial-opened",i.d_visible),"p-disabled",n.disabled)]},button:function(e){var i=e.props;return["p-speeddial-button p-button-rounded",{"p-speeddial-rotate":i.rotateAnimation&&!i.hideIcon}]},menu:"p-speeddial-list",menuitem:function(e){var i=e.instance,n=e.id;return["p-speeddial-item",{"p-focus":i.isItemActive(n)}]},action:function(e){var i=e.item;return["p-speeddial-action",{"p-disabled":i.disabled}]},actionIcon:"p-speeddial-action-icon",mask:function(e){var i=e.instance;return["p-speeddial-mask",{"p-speeddial-mask-visible":i.d_visible}]}},Q=x.extend({name:"speeddial",classes:J,inlineStyles:G}),X={name:"BaseSpeedDial",extends:q,props:{model:null,visible:{type:Boolean,default:!1},direction:{type:String,default:"up"},transitionDelay:{type:Number,default:30},type:{type:String,default:"linear"},radius:{type:Number,default:0},mask:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hideOnClickOutside:{type:Boolean,default:!0},buttonClass:null,maskStyle:null,maskClass:null,showIcon:{type:String,default:void 0},hideIcon:{type:String,default:void 0},rotateAnimation:{type:Boolean,default:!0},tooltipOptions:null,style:null,class:null,ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$parentInstance:this}}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function K(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,n)}return i}function Y(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?K(Object(i),!0).forEach(function(n){Z(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Z(t,e,i){return e=_(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _(t){var e=$(t,"string");return b(e)=="symbol"?e:String(e)}function $(t,e){if(b(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(b(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I(t){return ne(t)||ie(t)||te(t)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(t,e){if(t){if(typeof t=="string")return D(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return D(t,e)}}function ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ne(t){if(Array.isArray(t))return D(t)}function D(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var re={name:"SpeedDial",extends:X,inheritAttrs:!1,emits:["click","show","hide","focus","blur"],documentClickListener:null,container:null,list:null,data:function(){return{id:this.$attrs.id,d_visible:this.visible,isItemClicked:!1,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":{immediate:!0,handler:function(e){this.id=e||N()}},visible:function(e){this.d_visible=e}},mounted:function(){if(this.type!=="linear"){var e=a.findSingle(this.container,'[data-pc-name="button"]'),i=a.findSingle(this.list,'[data-pc-section="menuitem"]');if(e&&i){var n=Math.abs(e.offsetWidth-i.offsetWidth),o=Math.abs(e.offsetHeight-i.offsetHeight);this.list.style.setProperty("--item-diff-x","".concat(n/2,"px")),this.list.style.setProperty("--item-diff-y","".concat(o/2,"px"))}}this.hideOnClickOutside&&this.bindDocumentClickListener()},beforeUnmount:function(){this.unbindDocumentClickListener()},methods:{getPTOptions:function(e,i){return this.ptm(i,{context:{active:this.isItemActive(e),hidden:!this.d_visible}})},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onItemClick:function(e,i){i.command&&i.command({originalEvent:e,item:i}),this.hide(),this.isItemClicked=!0,e.preventDefault()},onClick:function(e){this.d_visible?this.hide():this.show(),this.isItemClicked=!0,this.$emit("click",e)},show:function(){this.d_visible=!0,this.$emit("show")},hide:function(){this.d_visible=!1,this.$emit("hide")},calculateTransitionDelay:function(e){var i=this.model.length,n=this.d_visible;return(n?e:i-e-1)*this.transitionDelay},onTogglerKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey();break}},onKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break}},onTogglerArrowUp:function(e){this.focused=!0,a.focus(this.list),this.show(),this.navigatePrevItem(e),e.preventDefault()},onTogglerArrowDown:function(e){this.focused=!0,a.focus(this.list),this.show(),this.navigateNextItem(e),e.preventDefault()},onEnterKey:function(e){var i=this,n=a.find(this.container,'[data-pc-section="menuitem"]'),o=I(n).findIndex(function(l){return l.id===i.focusedOptionIndex});this.onItemClick(e,this.model[o]),this.onBlur(e);var r=a.findSingle(this.container,"button");r&&a.focus(r)},onEscapeKey:function(){this.hide();var e=a.findSingle(this.container,"button");e&&a.focus(e)},onArrowUp:function(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)},onArrowDown:function(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)},onArrowLeft:function(e){var i=["left","up-right","down-left"],n=["right","up-left","down-right"];i.includes(this.direction)?this.navigateNextItem(e):n.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)},onArrowRight:function(e){var i=["left","up-right","down-left"],n=["right","up-left","down-right"];i.includes(this.direction)?this.navigatePrevItem(e):n.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)},onEndKey:function(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigatePrevItem(e)},onHomeKey:function(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigateNextItem(e)},navigateNextItem:function(e){var i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()},navigatePrevItem:function(e){var i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()},changeFocusedOptionIndex:function(e){var i=a.find(this.container,'[data-pc-section="menuitem"]'),n=I(i).filter(function(o){return!a.hasClass(a.findSingle(o,"a"),"p-disabled")});n[e]&&(this.focusedOptionIndex=n[e].getAttribute("id"))},findPrevOptionIndex:function(e){var i=a.find(this.container,'[data-pc-section="menuitem"]'),n=I(i).filter(function(l){return!a.hasClass(a.findSingle(l,"a"),"p-disabled")}),o=e===-1?n[n.length-1].id:e,r=n.findIndex(function(l){return l.getAttribute("id")===o});return r=e===-1?n.length-1:r-1,r},findNextOptionIndex:function(e){var i=a.find(this.container,'[data-pc-section="menuitem"]'),n=I(i).filter(function(l){return!a.hasClass(a.findSingle(l,"a"),"p-disabled")}),o=e===-1?n[0].id:e,r=n.findIndex(function(l){return l.getAttribute("id")===o});return r=e===-1?0:r+1,r},calculatePointStyle:function(e){var i=this.type;if(i!=="linear"){var n=this.model.length,o=this.radius||n*20;if(i==="circle"){var r=2*Math.PI/n;return{left:"calc(".concat(o*Math.cos(r*e),"px + var(--item-diff-x, 0px))"),top:"calc(".concat(o*Math.sin(r*e),"px + var(--item-diff-y, 0px))")}}else if(i==="semi-circle"){var l=this.direction,v=Math.PI/(n-1),m="calc(".concat(o*Math.cos(v*e),"px + var(--item-diff-x, 0px))"),s="calc(".concat(o*Math.sin(v*e),"px + var(--item-diff-y, 0px))");if(l==="up")return{left:m,bottom:s};if(l==="down")return{left:m,top:s};if(l==="left")return{right:s,top:m};if(l==="right")return{left:s,top:m}}else if(i==="quarter-circle"){var c=this.direction,y=Math.PI/(2*(n-1)),d="calc(".concat(o*Math.cos(y*e),"px + var(--item-diff-x, 0px))"),g="calc(".concat(o*Math.sin(y*e),"px + var(--item-diff-y, 0px))");if(c==="up-left")return{right:d,bottom:g};if(c==="up-right")return{left:d,bottom:g};if(c==="down-left")return{right:g,top:d};if(c==="down-right")return{left:g,top:d}}}return{}},getItemStyle:function(e){var i=this.calculateTransitionDelay(e),n=this.calculatePointStyle(e);return Y({transitionDelay:"".concat(i,"ms")},n)},bindDocumentClickListener:function(){var e=this;this.documentClickListener||(this.documentClickListener=function(i){e.d_visible&&e.isOutsideClicked(i)&&e.hide(),e.isItemClicked=!1},document.addEventListener("click",this.documentClickListener))},unbindDocumentClickListener:function(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)},isOutsideClicked:function(e){return this.container&&!(this.container.isSameNode(e.target)||this.container.contains(e.target)||this.isItemClicked)},isItemVisible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},isItemActive:function(e){return e===this.focusedOptionId},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{containerClass:function(){return[this.cx("root"),this.class]},focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{SDButton:L,PlusIcon:T},directives:{ripple:B,tooltip:j}},oe=["id","aria-activedescendant"],se=["id","aria-controls"],ae=["href","target","onClick","aria-label"];function le(t,e,i,n,o,r){var l=M("SDButton"),v=P("ripple"),m=P("tooltip");return u(),p(w,null,[A("div",f({ref:r.containerRef,class:r.containerClass,style:[t.style,t.sx("root")]},t.ptmi("root")),[E(t.$slots,"button",{onClick:r.onClick,toggleCallback:r.onClick},function(){return[F(l,{type:"button",class:H([t.cx("button"),t.buttonClass]),onClick:e[0]||(e[0]=function(s){return r.onClick(s)}),disabled:t.disabled,onKeydown:r.onTogglerKeydown,"aria-expanded":o.d_visible,"aria-haspopup":!0,"aria-controls":o.id+"_list","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,pt:t.ptm("button"),unstyled:t.unstyled},{icon:V(function(){return[E(t.$slots,"icon",{visible:o.d_visible},function(){return[o.d_visible&&t.hideIcon?(u(),O(C(t.hideIcon?"span":"PlusIcon"),f({key:0,class:[t.hideIcon,t.cx("buttonIcon")]},t.ptm("button").icon,{"data-pc-section":"icon"}),null,16,["class"])):(u(),O(C(t.showIcon?"span":"PlusIcon"),f({key:1,class:o.d_visible&&t.hideIcon?t.hideIcon:t.showIcon},t.ptm("button").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},8,["class","disabled","onKeydown","aria-expanded","aria-controls","aria-label","aria-labelledby","pt","unstyled"])]}),A("ul",f({ref:r.listRef,id:o.id+"_list",class:t.cx("menu"),style:t.sx("menu"),role:"menu","aria-activedescendant":o.focused?r.focusedOptionId:void 0,tabindex:"-1",onFocus:e[1]||(e[1]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[2]||(e[2]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},t.ptm("menu")),[(u(!0),p(w,null,U(t.model,function(s,c){return u(),p(w,{key:c},[r.isItemVisible(s)?(u(),p("li",f({key:0,id:"".concat(o.id,"_").concat(c),"aria-controls":"".concat(o.id,"_item"),class:t.cx("menuitem",{id:"".concat(o.id,"_").concat(c)}),style:r.getItemStyle(c),role:"menuitem"},r.getPTOptions("".concat(o.id,"_").concat(c),"menuitem")),[t.$slots.item?(u(),O(C(t.$slots.item),{key:1,item:s,onClick:function(d){return r.onItemClick(d,s)}},null,8,["item","onClick"])):R((u(),p("a",f({key:0,tabindex:-1,href:s.url||"#",role:"menuitem",class:t.cx("action",{item:s}),target:s.target,onClick:function(d){return r.onItemClick(d,s)},"aria-label":s.label},r.getPTOptions("".concat(o.id,"_").concat(c),"action")),[s.icon?(u(),p("span",f({key:0,class:[t.cx("actionIcon"),s.icon]},r.getPTOptions("".concat(o.id,"_").concat(c),"actionIcon")),null,16)):k("",!0)],16,ae)),[[v],[m,{value:s.label,disabled:!t.tooltipOptions},t.tooltipOptions]])],16,se)):k("",!0)],64)}),128))],16,oe)],16),t.mask?(u(),p("div",f({key:0,class:[t.cx("mask"),t.maskClass],style:t.maskStyle},t.ptm("mask")),null,16)):k("",!0)],64)}re.render=le;export{re as default};
