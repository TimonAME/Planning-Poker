import{s as r}from"./BSTxLcxK.js";import"./BuXVwhvL.js";var e={},u={name:"BaseColumnGroup",extends:r,props:{type:{type:String,default:null}},style:e,provide:function(){return{$parentInstance:this}}},i={name:"ColumnGroup",extends:u,inheritAttrs:!1,inject:["$columnGroups"],mounted:function(){var n;(n=this.$columnGroups)===null||n===void 0||n.add(this.$)},unmounted:function(){var n;(n=this.$columnGroups)===null||n===void 0||n.delete(this.$)},render:function(){return null}};export{i as default};
