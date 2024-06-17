import{s as S}from"./SMDtkHM_.js";import{an as F,ap as V,ao as d,aq as x,ar as m,ac as l,at as D,i as y,au as T,t as u,U as v,A as k,v as I,S as L,T as O,x as K,M as z,aw as P,$ as C,L as g,y as R,a5 as E,z as M}from"./BOBx4NUh.js";import{s as w}from"./Dyyn1_1Z.js";import{s as N}from"./DdiDaWvm.js";import"./B4qm9AKs.js";var B={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-ripple-disabled":t.$primevue.config.ripple===!1}]},menu:"p-contextmenu-root-list",menuitem:function(e){var t=e.instance,a=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator"},_=F.extend({name:"contextmenu",classes:B}),G={name:"BaseContextMenu",extends:w,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:_,provide:function(){return{$parentInstance:this}}},A={name:"ContextMenuSub",hostName:"ContextMenu",extends:w,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?d.getItemValue(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return d.isNotEmpty(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},onEnter:function(){m.nestedPosition(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:l({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("action",e,t)),icon:l({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions("icon",e,t)),label:l({class:this.cx("label")},this.getPTOptions("label",e,t)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:N},directives:{ripple:D}},U=["tabindex"],H=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],Z=["onClick","onMouseenter","onMousemove"],j=["href","target"],W=["id"],X=["id"];function Y(i,e,t,a,r,n){var o=y("AngleRightIcon"),h=y("ContextMenuSub",!0),b=T("ripple");return u(),v(E,l({name:"p-contextmenusub",onEnter:n.onEnter},i.ptm("menu.transition")),{default:k(function(){return[t.root||t.visible?(u(),I("ul",l({key:0,ref:"container",tabindex:t.tabindex},i.ptm("menu")),[(u(!0),I(L,null,O(t.items,function(s,c){return u(),I(L,{key:n.getItemKey(s)},[n.isItemVisible(s)&&!n.getItemProp(s,"separator")?(u(),I("li",l({key:0,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[i.cx("menuitem",{processedItem:s}),n.getItemProp(s,"class")],role:"menuitem","aria-label":n.getItemLabel(s),"aria-disabled":n.isItemDisabled(s)||void 0,"aria-expanded":n.isItemGroup(s)?n.isItemActive(s):void 0,"aria-haspopup":n.isItemGroup(s)&&!n.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(c)},n.getPTOptions("menuitem",s,c),{"data-p-highlight":n.isItemActive(s),"data-p-focused":n.isItemFocused(s),"data-p-disabled":n.isItemDisabled(s)}),[K("div",l({class:i.cx("content"),onClick:function(p){return n.onItemClick(p,s)},onMouseenter:function(p){return n.onItemMouseEnter(p,s)},onMousemove:function(p){return n.onItemMouseMove(p,s)}},n.getPTOptions("content",s,c)),[t.templates.item?(u(),v(P(t.templates.item),{key:1,item:s.item,hasSubmenu:n.getItemProp(s,"items"),label:n.getItemLabel(s),props:n.getMenuItemProps(s,c)},null,8,["item","hasSubmenu","label","props"])):z((u(),I("a",l({key:0,href:n.getItemProp(s,"url"),class:i.cx("action"),target:n.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions("action",s,c)),[t.templates.itemicon?(u(),v(P(t.templates.itemicon),{key:0,item:s.item,class:C(i.cx("icon"))},null,8,["item","class"])):n.getItemProp(s,"icon")?(u(),I("span",l({key:1,class:[i.cx("icon"),n.getItemProp(s,"icon")]},n.getPTOptions("icon",s,c)),null,16)):g("",!0),K("span",l({id:n.getItemLabelId(s),class:i.cx("label")},n.getPTOptions("label",s,c)),R(n.getItemLabel(s)),17,W),n.getItemProp(s,"items")?(u(),I(L,{key:2},[t.templates.submenuicon?(u(),v(P(t.templates.submenuicon),{key:0,active:n.isItemActive(s),class:C(i.cx("submenuIcon"))},null,8,["active","class"])):(u(),v(o,l({key:1,class:i.cx("submenuIcon")},n.getPTOptions("submenuicon",s,c)),null,16,["class"]))],64)):g("",!0)],16,j)),[[b]])],16,Z),n.isItemVisible(s)&&n.isItemGroup(s)?(u(),v(h,l({key:0,id:n.getItemId(s)+"_list",role:"menu",class:i.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:n.isItemActive(s)&&n.isItemGroup(s),pt:i.pt,unstyled:i.unstyled,onItemClick:e[0]||(e[0]=function(f){return i.$emit("item-click",f)}),onItemMouseenter:e[1]||(e[1]=function(f){return i.$emit("item-mouseenter",f)}),onItemMousemove:e[2]||(e[2]=function(f){return i.$emit("item-mousemove",f)}),"aria-labelledby":n.getItemLabelId(s)},i.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):g("",!0)],16,H)):g("",!0),n.isItemVisible(s)&&n.getItemProp(s,"separator")?(u(),I("li",l({key:1,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[i.cx("separator"),n.getItemProp(s,"class")],role:"separator"},i.ptm("separator")),null,16,X)):g("",!0)],64)}),128))],16,U)):g("",!0)]}),_:1},16,["onEnter"])}A.render=Y;var q={name:"ContextMenu",extends:G,inheritAttrs:!1,emits:["focus","blur","show","hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1}},watch:{"$attrs.id":{immediate:!0,handler:function(e){this.id=e||V()}},activeItemPath:function(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&x.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?d.getItemValue(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&d.isNotEmpty(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},m.focus(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!d.isEmpty(t)){var r=t.index,n=t.key,o=t.level,h=t.parentKey,b=t.items,s=d.isNotEmpty(b),c=this.activeItemPath.filter(function(f){return f.parentKey!==h&&f.parentKey!==n});s&&(c.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:r,level:o,parentKey:h},this.activeItemPath=c,a&&m.focus(this.list)}},onItemClick:function(e){var t=e.processedItem,a=this.isProccessedItemGroup(t),r=this.isSelected(t);if(r){var n=t.index,o=t.key,h=t.level,b=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(s){return o!==s.key&&o.startsWith(s.key)}),this.focusedItemInfo={index:n,level:h,parentKey:b},m.focus(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(o){return o.key===a.parentKey}),n=d.isEmpty(a.parent);n||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=m.findSingle(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=t&&m.findSingle(t,'a[data-pc-section="action"]');a?a.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(r);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){m.addStyles(e,{position:"absolute"}),this.position(),this.autoZIndex&&x.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),m.focus(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&x.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:m.getHiddenElementOuterWidth(this.container),r=this.container.offsetParent?this.container.offsetHeight:m.getHiddenElementOuterHeight(this.container),n=m.getViewport();e+a-document.body.scrollLeft>n.width&&(e-=a),t+r-document.body.scrollTop>n.height&&(t-=r),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),r=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;a&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!m.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return d.findLastIndex(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?d.findLastIndex(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var r=-1,n=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return a.isItemMatched(o)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return a.isItemMatched(o)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(o){return a.isItemMatched(o)}),r!==-1&&(n=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemIdx,a=m.findSingle(this.list,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=[];return e&&e.forEach(function(h,b){var s=(n!==""?n+"_":"")+b,c={item:h,index:b,level:a,key:s,parent:r,parentKey:n};c.items=t.createProcessedItems(h.items,a+1,c,s),o.push(c)}),o},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:A,Portal:S}};function J(i,e,t,a,r,n){var o=y("ContextMenuSub"),h=y("Portal");return u(),v(h,{appendTo:i.appendTo},{default:k(function(){return[M(E,l({name:"p-contextmenu",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},i.ptm("transition")),{default:k(function(){return[r.visible?(u(),I("div",l({key:0,ref:n.containerRef,class:i.cx("root")},i.ptmi("root")),[M(o,{ref:n.listRef,id:r.id+"_list",class:C(i.cx("menu")),role:"menubar",root:!0,tabindex:i.tabindex,"aria-orientation":"vertical","aria-activedescendant":r.focused?n.focusedItemIdx:void 0,menuId:r.id,focusedItemId:r.focused?n.focusedItemIdx:void 0,items:n.processedItems,templates:i.$slots,activeItemPath:r.activeItemPath,"aria-labelledby":i.ariaLabelledby,"aria-label":i.ariaLabel,level:0,visible:r.submenuVisible,pt:i.pt,unstyled:i.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter,onItemMousemove:n.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):g("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}q.render=J;export{q as default};
