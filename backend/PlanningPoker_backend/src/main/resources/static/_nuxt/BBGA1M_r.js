import{am as n,an as r,t as o,v as p,au as i,ac as l,B as d,y as g}from"./BGZEYQna.js";import{s as c}from"./y_AjQs92.js";var u={root:function(a){var e=a.props,s=a.instance;return["p-badge p-component",{"p-badge-no-gutter":r.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":r.isEmpty(e.value)&&!s.$slots.default,"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warning":e.severity==="warning","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},v=n.extend({name:"badge",classes:u}),y={name:"BaseBadge",extends:c,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:v,provide:function(){return{$parentInstance:this}}},m={name:"Badge",extends:y,inheritAttrs:!1};function b(t,a,e,s,f,$){return o(),p("span",l({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default",{},function(){return[d(g(t.value),1)]})],16)}m.render=b;export{m as default};
