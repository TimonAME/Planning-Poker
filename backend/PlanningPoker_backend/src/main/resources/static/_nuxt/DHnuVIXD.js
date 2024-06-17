import{aB as d,am as u,t as m,v as p,ax as f,ab as t,y as a,L as v,x as s,S as y,T,M as h,a2 as g}from"./DAtY_sdv.js";import{s as k}from"./D3c5Vp4s.js";var l=d(),w={root:"p-terminal p-component",content:"p-terminal-content",prompt:"p-terminal-prompt",command:"p-terminal-command",response:"p-terminal-response",container:"p-terminal-prompt-container",commandText:"p-terminal-input"},x=u.extend({name:"terminal",classes:w}),S={name:"BaseTerminal",extends:k,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:x,provide:function(){return{$parentInstance:this}}},B={name:"Terminal",extends:S,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){l.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){l.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.key==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function C(e,n,L,M,i,o){return m(),p("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return o.onClick&&o.onClick.apply(o,arguments)})},e.ptmi("root")),[e.welcomeMessage?(m(),p("div",f(t({key:0},e.ptm("welcomeMessage"))),a(e.welcomeMessage),17)):v("",!0),s("div",t({class:e.cx("content")},e.ptm("content")),[(m(!0),p(y,null,T(i.commands,function(r,c){return m(),p("div",t({key:r.text+c.toString()},e.ptm("commands")),[s("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),s("span",t({class:e.cx("command")},e.ptm("command")),a(r.text),17),s("div",t({class:e.cx("response"),"aria-live":"polite"},e.ptm("response")),a(r.response),17)],16)}),128))],16),s("div",t({class:e.cx("container")},e.ptm("container")),[s("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),h(s("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(r){return i.commandText=r}),type:"text",class:e.cx("commandText"),autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},e.ptm("commandText")),null,16),[[g,i.commandText]])],16)],16)}B.render=C;export{B as default};
