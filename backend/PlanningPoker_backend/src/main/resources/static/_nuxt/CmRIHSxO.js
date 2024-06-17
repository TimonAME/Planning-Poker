import{am as b,aq as m,ac as l,t as c,v as u,x as d,S as f,T as I,y as v,U as g,av as y,L as T}from"./BAEj5l7a.js";import{s as S}from"./BNdfZtbS.js";var k={root:function(e){var t=e.props;return["p-steps p-component",{"p-readonly":t.readonly}]},menu:"p-steps-list",menuitem:function(e){var t=e.instance,r=e.item,o=e.index;return["p-steps-item",{"p-highlight p-steps-current":t.isActive(o),"p-disabled":t.isItemDisabled(r,o)}]},action:"p-menuitem-link",step:"p-steps-number",label:"p-steps-title"},P=b.extend({name:"steps",classes:k}),D={name:"BaseSteps",extends:S,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:P,provide:function(){return{$parentInstance:this}}},F={name:"Steps",extends:D,inheritAttrs:!1,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e&&(e.tabIndex="0")},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r,active:this.isActive(r),disabled:this.isItemDisabled(t,r)}})},onItemClick:function(e,t,r){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeStep&&(this.d_activeStep=r,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:r})},onItemKeydown:function(e,t){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"NumpadEnter":case"Space":{this.onItemClick(e,t),e.preventDefault();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem:function(){var e=m.findSingle(this.$refs.list,'[data-pc-section="menuitem"]');return e?e.children[0]:null},findLastItem:function(){var e=m.find(this.$refs.list,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,t){return this.disabled(e)||this.readonly&&!this.isActive(t)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,t){var r=this;return{action:l({class:this.cx("action"),onClick:function(i){return r.onItemClick(i,e)},onKeyDown:function(i){return r.onItemKeydown(i,e)}},this.getPTOptions("action",e,t)),step:l({class:this.cx("step")},this.getPTOptions("step",e,t)),label:l({class:this.cx("label")},this.getPTOptions("label",e,t))}}}},w=["id"],C=["aria-current","onClick","onKeydown","data-p-highlight","data-p-disabled"];function A(n,e,t,r,o,i){return c(),u("nav",l({id:n.id,class:n.cx("root")},n.ptmi("root")),[d("ol",l({ref:"list",class:n.cx("menu")},n.ptm("menu")),[(c(!0),u(f,null,I(n.model,function(s,a){return c(),u(f,{key:i.label(s)+"_"+a.toString()},[i.visible(s)?(c(),u("li",l({key:0,class:[n.cx("menuitem",{item:s,index:a}),s.class],style:s.style,"aria-current":i.isActive(a)?"step":void 0,onClick:function(p){return i.onItemClick(p,s,a)},onKeydown:function(p){return i.onItemKeydown(p,s,a)}},i.getPTOptions("menuitem",s,a),{"data-p-highlight":i.isActive(a),"data-p-disabled":i.isItemDisabled(s,a)}),[n.$slots.item?(c(),g(y(n.$slots.item),{key:1,item:s,index:a,active:a===o.d_activeStep,label:i.label(s),props:i.getMenuItemProps(s,a)},null,8,["item","index","active","label","props"])):(c(),u("span",l({key:0,class:n.cx("action")},i.getPTOptions("action",s,a)),[d("span",l({class:n.cx("step")},i.getPTOptions("step",s,a)),v(a+1),17),d("span",l({class:n.cx("label")},i.getPTOptions("label",s,a)),v(i.label(s)),17)],16))],16,C)):T("",!0)],64)}),128))],16)],16,w)}F.render=A;export{F as default};
