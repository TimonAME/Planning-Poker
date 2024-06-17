import{am as z,aq as a,an as f,t as p,v as c,S as g,T as S,U as y,av as E,ac as d,x as P,L}from"./DyTvGOzB.js";import{s as b}from"./C9ChWDw6.js";var T={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandler:"p-splitter-gutter-handle"},x={root:function(e){var n=e.props;return[{display:"flex","flex-wrap":"nowrap"},n.layout==="vertical"?{"flex-direction":"column"}:""]}},M=z.extend({name:"splitter",classes:T,inlineStyles:x}),w={name:"BaseSplitter",extends:b,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:M,provide:function(){return{$parentInstance:this}}};function v(t){return G(t)||R(t)||I(t)||A()}function A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(t,e){if(t){if(typeof t=="string")return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}}function R(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G(t){if(Array.isArray(t))return m(t)}function m(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var U={name:"Splitter",extends:w,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var s=v(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"}),r=[];this.panels.map(function(i,o){var u=i.props&&i.props.size?i.props.size:null,h=u||100/e.panels.length;r[o]=h,s[o].style.flexBasis="calc("+h+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=r,this.prevSize=parseFloat(r[0]).toFixed(4)}}},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},onResizeStart:function(e,n,s){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?a.getWidth(this.$el):a.getHeight(this.$el),s||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,s?(this.prevPanelSize=this.horizontal?a.getOuterWidth(this.prevPanelElement,!0):a.getOuterHeight(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?a.getOuterWidth(this.nextPanelElement,!0):a.getOuterHeight(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?a.getOuterWidth(this.prevPanelElement,!0):a.getOuterHeight(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?a.getOuterWidth(this.nextPanelElement,!0):a.getOuterHeight(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,s){var r,i,o;s?this.horizontal?(i=100*(this.prevPanelSize+n)/this.size,o=100*(this.nextPanelSize-n)/this.size):(i=100*(this.prevPanelSize-n)/this.size,o=100*(this.nextPanelSize+n)/this.size):(this.horizontal?r=e.pageX*100/this.size-this.startPos*100/this.size:r=e.pageY*100/this.size-this.startPos*100/this.size,i=this.prevPanelSize+r,o=this.nextPanelSize-r),this.validateResize(i,o)&&(this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=o,this.prevSize=parseFloat(i).toFixed(4)),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,s){this.onResizeStart(e,n,!0),this.onResize(e,s,!0)},setTimer:function(e,n,s){var r=this;this.timer||(this.timer=setInterval(function(){r.repeat(e,n,s)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){if(e>100||e<0||n>100||n<0)return!1;var s=f.getVNodeProp(this.panels[this.prevPanelIndex],"minSize");if(this.panels[this.prevPanelIndex].props&&s&&s>e)return!1;var r=f.getVNodeProp(this.panels[this.prevPanelIndex+1],"minSize");return!(this.panels[this.prevPanelIndex+1].props&&r&&r>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){f.isArray(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),s=n.getItem(this.stateKey);if(s){this.panelSizes=JSON.parse(s);var r=v(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"});return r.forEach(function(i,o){i.style.flexBasis="calc("+e.panelSizes[o]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(s){e.isSplitterPanel(s)?n.push(s):s.children instanceof Array&&s.children.forEach(function(r){e.isSplitterPanel(r)&&n.push(r)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}}}},O=["onMousedown","onTouchstart","onTouchmove","onTouchend"],D=["aria-orientation","aria-valuenow","onKeydown"];function K(t,e,n,s,r,i){return p(),c("div",d({class:t.cx("root"),style:t.sx("root"),"data-p-resizing":!1},t.ptmi("root",i.getPTOptions)),[(p(!0),c(g,null,S(i.panels,function(o,u){return p(),c(g,{key:u},[(p(),y(E(o),{tabindex:"-1"})),u!==i.panels.length-1?(p(),c("div",d({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(l){return i.onGutterMouseDown(l,u)},onTouchstart:function(l){return i.onGutterTouchStart(l,u)},onTouchmove:function(l){return i.onGutterTouchMove(l,u)},onTouchend:function(l){return i.onGutterTouchEnd(l,u)},"data-p-gutter-resizing":!1},t.ptm("gutter")),[P("div",d({class:t.cx("gutterHandler"),tabindex:"0",style:[i.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":r.prevSize,onKeyup:e[0]||(e[0]=function(){return i.onGutterKeyUp&&i.onGutterKeyUp.apply(i,arguments)}),onKeydown:function(l){return i.onGutterKeyDown(l,u)}},t.ptm("gutterHandler")),null,16,D)],16,O)):L("",!0)],64)}),128))],16)}U.render=K;export{U as default};
