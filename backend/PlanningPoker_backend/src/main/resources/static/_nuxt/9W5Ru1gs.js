import{an as m,ao as u,t as p,v as c,S as v,T as d,ac as a,x as i,av as l,L as g}from"./DBhBodbj.js";import{s as f}from"./BNIRa2uq.js";var y={root:function(s){var n=s.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},T=m.extend({name:"timeline",classes:y}),h={name:"BaseTimeline",extends:f,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:T,provide:function(){return{$parentInstance:this}}},k={name:"Timeline",extends:h,inheritAttrs:!1,methods:{getKey:function(s,n){return this.dataKey?u.resolveFieldData(s,this.dataKey):n},getPTOptions:function(s,n){return this.ptm(s,{context:{index:n,count:this.value.length}})}}};function O(e,s,n,P,K,r){return p(),c("div",a({class:e.cx("root")},e.ptmi("root")),[(p(!0),c(v,null,d(e.value,function(o,t){return p(),c("div",a({key:r.getKey(o,t),class:e.cx("event")},r.getPTOptions("event",t)),[i("div",a({class:e.cx("opposite",{index:t})},r.getPTOptions("opposite",t)),[l(e.$slots,"opposite",{item:o,index:t})],16),i("div",a({class:e.cx("separator")},r.getPTOptions("separator",t)),[l(e.$slots,"marker",{item:o,index:t},function(){return[i("div",a({class:e.cx("marker")},r.getPTOptions("marker",t)),null,16)]}),t!==e.value.length-1?l(e.$slots,"connector",{key:0,item:o,index:t},function(){return[i("div",a({class:e.cx("connector")},r.getPTOptions("connector",t)),null,16)]}):g("",!0)],16),i("div",a({class:e.cx("content")},r.getPTOptions("content",t)),[l(e.$slots,"content",{item:o,index:t})],16)],16)}),128))],16)}k.render=O;export{k as default};
