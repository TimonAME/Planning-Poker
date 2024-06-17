import{O as M}from"./Bt3uDQ_P.js";import{s as T}from"./B7B_cAIa.js";import{am as V,ao as F,an as h,ap as P,aq as c,ar as O,ab as d,as as D,i as y,at as z,t as l,U as p,A as x,v as I,S as L,T as R,x as K,M as N,av as k,$ as B,L as g,y as G,a6 as H,a4 as w,z as E,au as S}from"./0UAU7Jqz.js";import{s as C}from"./3QP0p4gU.js";import{s as U}from"./BnT7DidP.js";import"./BNr9G_rt.js";var W={submenu:function(e){var i=e.instance,s=e.processedItem;return{display:i.isItemActive(s)?"block":"none"}}},Z={root:function(e){var i=e.instance,s=e.props;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":s.popup,"p-ripple-disabled":i.$primevue.config.ripple===!1}]},start:"p-tieredmenu-start",menu:"p-tieredmenu-root-list",menuitem:function(e){var i=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",text:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-tieredmenu-end"},j=V.extend({name:"tieredmenu",classes:Z,inlineStyles:W}),_={name:"BaseTieredMenu",extends:C,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:j,provide:function(){return{$parentInstance:this}}},A={name:"TieredMenuSub",hostName:"TieredMenu",extends:C,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,s){return e&&e.item?h.getItemValue(e.item[i],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,i,s){return this.ptm(s,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return h.isNotEmpty(e.items)},onEnter:function(){c.nestedPosition(this.container,this.level)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},onItemMouseMove:function(e,i){this.$emit("item-mousemove",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(s){return i.isItemVisible(s)&&i.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:d({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:d({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:d({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:d({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:U},directives:{ripple:D}},q=["tabindex"],J=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],Q=["onClick","onMouseenter","onMousemove"],X=["href","target"],Y=["id"],$=["id"];function ee(t,e,i,s,a,n){var u=y("AngleRightIcon"),f=y("TieredMenuSub",!0),v=z("ripple");return l(),p(w,d({name:"p-tieredmenu",onEnter:n.onEnter},t.ptm("menu.transition")),{default:x(function(){return[i.level===0||i.visible?(l(),I("ul",d({key:0,ref:n.containerRef,class:i.level===0?t.cx("menu"):t.cx("submenu"),tabindex:i.tabindex},i.level===0?t.ptm("menu"):t.ptm("submenu")),[(l(!0),I(L,null,R(i.items,function(r,o){return l(),I(L,{key:n.getItemKey(r)},[n.isItemVisible(r)&&!n.getItemProp(r,"separator")?(l(),I("li",d({key:0,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),n.getItemProp(r,"class")],role:"menuitem","aria-label":n.getItemLabel(r),"aria-disabled":n.isItemDisabled(r)||void 0,"aria-expanded":n.isItemGroup(r)?n.isItemActive(r):void 0,"aria-haspopup":n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(o)},n.getPTOptions(r,o,"menuitem"),{"data-p-highlight":n.isItemActive(r),"data-p-focused":n.isItemFocused(r),"data-p-disabled":n.isItemDisabled(r)}),[K("div",d({class:t.cx("content"),onClick:function(b){return n.onItemClick(b,r)},onMouseenter:function(b){return n.onItemMouseEnter(b,r)},onMousemove:function(b){return n.onItemMouseMove(b,r)}},n.getPTOptions(r,o,"content")),[i.templates.item?(l(),p(k(i.templates.item),{key:1,item:r.item,hasSubmenu:n.getItemProp(r,"items"),label:n.getItemLabel(r),props:n.getMenuItemProps(r,o)},null,8,["item","hasSubmenu","label","props"])):N((l(),I("a",d({key:0,href:n.getItemProp(r,"url"),class:t.cx("action"),target:n.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions(r,o,"action")),[i.templates.itemicon?(l(),p(k(i.templates.itemicon),{key:0,item:r.item,class:B(t.cx("icon"))},null,8,["item","class"])):n.getItemProp(r,"icon")?(l(),I("span",d({key:1,class:[t.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions(r,o,"icon")),null,16)):g("",!0),K("span",d({id:n.getItemLabelId(r),class:t.cx("label")},n.getPTOptions(r,o,"label")),G(n.getItemLabel(r)),17,Y),n.getItemProp(r,"items")?(l(),I(L,{key:2},[i.templates.submenuicon?(l(),p(k(i.templates.submenuicon),d({key:0,class:t.cx("submenuIcon"),active:n.isItemActive(r)},n.getPTOptions(r,o,"submenuIcon")),null,16,["class","active"])):(l(),p(u,d({key:1,class:t.cx("submenuIcon")},n.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):g("",!0)],16,X)),[[v]])],16,Q),n.isItemVisible(r)&&n.isItemGroup(r)?(l(),p(f,{key:0,id:n.getItemId(r)+"_list",style:H(t.sx("submenu",!0,{processedItem:r})),"aria-labelledby":n.getItemLabelId(r),role:"menu",menuId:i.menuId,focusedItemId:i.focusedItemId,items:r.items,templates:i.templates,activeItemPath:i.activeItemPath,level:i.level+1,visible:n.isItemActive(r)&&n.isItemGroup(r),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(m){return t.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return t.$emit("item-mouseenter",m)}),onItemMousemove:e[2]||(e[2]=function(m){return t.$emit("item-mousemove",m)})},null,8,["id","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):g("",!0)],16,J)):g("",!0),n.isItemVisible(r)&&n.getItemProp(r,"separator")?(l(),I("li",d({key:1,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("separator"),n.getItemProp(r,"class")],role:"separator"},t.ptm("separator")),null,16,$)):g("",!0)],64)}),128))],16,q)):g("",!0)]}),_:1},16,["onEnter"])}A.render=ee;var te={name:"TieredMenu",extends:_,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1}},watch:{"$attrs.id":{immediate:!0,handler:function(e){this.id=e||F()}},activeItemPath:function(e){this.popup||(h.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&P.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,i){return e?h.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return h.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&h.isNotEmpty(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,i){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),i&&c.focus(this.menubar)},hide:function(e,i){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&c.focus(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&h.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,s=e.isFocus;if(!h.isEmpty(i)){var a=i.index,n=i.key,u=i.level,f=i.parentKey,v=i.items,r=h.isNotEmpty(v),o=this.activeItemPath.filter(function(m){return m.parentKey!==f&&m.parentKey!==n});r&&(o.push(i),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:u,parentKey:f},this.activeItemPath=o,r&&(this.dirty=!0),s&&c.focus(this.menubar)}},onOverlayClick:function(e){M.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var i=e.originalEvent,s=e.processedItem,a=this.isProccessedItemGroup(s),n=h.isEmpty(s.parent),u=this.isSelected(s);if(u){var f=s.index,v=s.key,r=s.level,o=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(b){return v!==b.key&&v.startsWith(b.key)}),this.focusedItemInfo={index:f,level:r,parentKey:o},this.dirty=!n,c.focus(this.menubar)}else if(a)this.onItemChange(e);else{var m=n?s:this.activeItemPath.find(function(b){return b.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,m?m.index:-1),c.focus(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(u){return u.key===s.parentKey}),n=h.isEmpty(s.parent);n||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);s&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=c.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=i&&c.findSingle(i,'[data-pc-section="action"]');if(s?s.click():i&&i.click(),!this.popup){var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var i=this.focusedItemInfo;this.hide(e,!1),!this.popup&&(this.focusedItemInfo={index:Number(i.parentKey.split("_")[0]),level:0,parentKey:""})}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},onEnter:function(e){this.autoZIndex&&P.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),c.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),c.focus(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&P.clear(e)},alignOverlay:function(){c.absolutePosition(this.container,this.target);var e=c.getOuterWidth(this.target);e>c.getOuterWidth(this.container)&&(this.container.style.minWidth=c.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),a=e.popup?!(e.target&&(e.target===i.target||e.target.contains(i.target))):!0;s&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new O(this.target,function(i){e.hide(i,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){c.isTouchDevice()||e.hide(i,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return h.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var i=this,s=e>0?h.findLastIndex(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=c.findSingle(this.menubar,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(f,v){var r=(n!==""?n+"_":"")+v,o={item:f,index:v,level:s,key:r,parent:a,parentKey:n};o.items=i.createProcessedItems(f.items,s+1,o,r),u.push(o)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(h.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:A,Portal:T}},ie=["id"];function ne(t,e,i,s,a,n){var u=y("TieredMenuSub"),f=y("Portal");return l(),p(f,{appendTo:t.appendTo,disabled:!t.popup},{default:x(function(){return[E(w,d({name:"p-connected-overlay",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},t.ptm("transition")),{default:x(function(){return[a.visible?(l(),I("div",d({key:0,ref:n.containerRef,id:a.id,class:t.cx("root"),onClick:e[0]||(e[0]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},t.ptmi("root")),[t.$slots.start?(l(),I("div",d({key:0,class:t.cx("start")},t.ptm("start")),[S(t.$slots,"start")],16)):g("",!0),E(u,{ref:n.menubarRef,id:a.id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,templates:t.$slots,activeItemPath:a.activeItemPath,level:0,visible:a.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter,onItemMousemove:n.onItemMouseMove},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(l(),I("div",d({key:1,class:t.cx("end")},t.ptm("end")),[S(t.$slots,"end")],16)):g("",!0)],16,ie)):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}te.render=ne;export{te as default};
