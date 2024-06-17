import{s as k}from"./DS73nqPb.js";import{an as x,ap as S,ao as A,ar as d,ab as l,at as w,aF as D,au as h,t as u,v as c,x as b,S as K,T as P,M as y,U as I,$ as T,aw as g,i as C,z as E}from"./CvagovfX.js";var F={root:function(e){var n=e.instance,a=e.props;return["p-dock p-component","p-dock-".concat(a.position),{"p-dock-mobile":n.queryMatches}]},container:"p-dock-list-container",menu:"p-dock-list",menuitem:function(e){var n=e.instance,a=e.processedItem,r=e.index,i=e.id;return["p-dock-item",{"p-focus":n.isItemActive(i),"p-disabled":n.disabled(a),"p-dock-item-second-prev":n.currentIndex-2===r,"p-dock-item-prev":n.currentIndex-1===r,"p-dock-item-current":n.currentIndex===r,"p-dock-item-next":n.currentIndex+1===r,"p-dock-item-second-next":n.currentIndex+2===r}]},content:"p-menuitem-content",action:"p-dock-link",icon:"p-dock-icon"},B=x.extend({name:"dock",classes:F}),N={name:"BaseDock",extends:k,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:B,provide:function(){return{$parentInstance:this}}};function v(t){return j(t)||H(t)||q(t)||U()}function U(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(t,e){if(t){if(typeof t=="string")return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}}function H(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function j(t){if(Array.isArray(t))return p(t)}function p(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var L={name:"DockSub",hostName:"Dock",extends:k,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{id:this.menuId,currentIndex:-3,focused:!1,focusedOptionIndex:-1}},watch:{menuId:{immediate:!0,handler:function(e){this.id=e||S()}}},methods:{getItemId:function(e){return"".concat(this.id,"_").concat(e)},getItemProp:function(e,n){return e&&e.item?A.getItemValue(e.item[n]):void 0},getPTOptions:function(e,n,a){return this.ptm(e,{context:{index:a,item:n,active:this.isItemActive(this.getItemId(a))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[data-pc-section="menuitem"]')))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,n){if(this.isSameMenuItem(e)){var a=this.getItemProp(n,"command");a&&a({originalEvent:e,item:n.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onSpaceKey(e),e.preventDefault();break}}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(d.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var e=d.findSingle(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=e&&d.findSingle(e,'[data-pc-section="action"]');n?n.click():e&&e.click()},findNextOptionIndex:function(e){var n=d.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),a=v(n).findIndex(function(r){return r.id===e});return a>-1?a+1:0},findPrevOptionIndex:function(e){var n=d.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),a=v(n).findIndex(function(r){return r.id===e});return a>-1?a-1:0},changeFocusedOptionIndex:function(e){var n=d.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),a=e>=n.length?n.length-1:e<0?0:e;this.focusedOptionIndex=n[a].getAttribute("id")},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},getMenuItemProps:function(e,n){return{action:l({tabindex:-1,"aria-hidden":!0,class:this.cx("action")},this.getPTOptions("action",e,n)),icon:l({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon",e,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},directives:{ripple:w,tooltip:D}},z=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],V=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],R=["href","target"];function W(t,e,n,a,r,i){var m=h("ripple"),O=h("tooltip");return u(),c("div",l({class:t.cx("container")},t.ptm("container")),[b("ul",l({ref:"list",id:r.id,class:t.cx("menu"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":r.focused?i.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:e[3]||(e[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},t.ptm("menu")),[(u(!0),c(K,null,P(n.model,function(o,s){return u(),c("li",l({key:s,id:i.getItemId(s),class:t.cx("menuitem",{processedItem:o,index:s,id:i.getItemId(s)}),role:"menuitem","aria-label":o.label,"aria-disabled":i.disabled(o),onClick:function(f){return i.onItemClick(f,o)},onMouseenter:function(f){return i.onItemMouseEnter(s)}},i.getPTOptions("menuitem",o,s),{"data-p-focused":i.isItemActive(i.getItemId(s)),"data-p-disabled":i.disabled(o)||!1}),[b("div",l({class:t.cx("content")},i.getPTOptions("content",o,s)),[n.templates.item?(u(),I(g(n.templates.item),{key:1,item:o,index:s,label:o.label,props:i.getMenuItemProps(o,s)},null,8,["item","index","label","props"])):y((u(),c("a",l({key:0,href:o.url,class:t.cx("action"),target:o.target,tabindex:"-1","aria-hidden":"true"},i.getPTOptions("action",o,s)),[n.templates.icon?(u(),I(g(n.templates.icon),{key:1,item:o,class:T(t.cx("icon"))},null,8,["item","class"])):y((u(),c("span",l({key:0,class:[t.cx("icon"),o.icon]},i.getPTOptions("icon",o,s)),null,16)),[[m]])],16,R)),[[O,{value:o.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,V)}),128))],16,z)],16)}L.render=W;var G={name:"Dock",extends:N,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:L}};function J(t,e,n,a,r,i){var m=C("DockSub");return u(),c("div",l({class:i.containerClass,style:t.style},t.ptmi("root")),[E(m,{model:t.model,templates:t.$slots,tooltipOptions:t.tooltipOptions,position:t.position,menuId:t.menuId,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,tabindex:t.tabindex,pt:t.pt,unstyled:t.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}G.render=J;export{G as default};
