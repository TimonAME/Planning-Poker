import A from"./bEfObyhL.js";import{s as R}from"./BZ08n1Ob.js";import{s as V}from"./wIIrXjj9.js";import{s as j}from"./BP47Urqm.js";import{t as r,v as c,ac as o,x as h,an as H,ar as U,at as K,i as g,T as E,y as F,z as L,$ as C,A as I,U as m,aw as b,S as w,au as Z,av as v,L as y,B as M,M as z,aA as T}from"./CoGpfI4O.js";import G from"./Cvoh810z.js";import Y from"./DI-qNO-2.js";import{s as W}from"./UgSyvIKg.js";import q from"./DiK2LUZF.js";import"./2mGh7u8v.js";import"./MxvP_Lno.js";import"./DGVKzUS4.js";import"./Dt4QfDA4.js";var N={name:"UploadIcon",extends:j},X=h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1),J=[X];function Q(e,t,i,n,a,l){return r(),c("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),J,16)}N.render=Q;var $={root:function(t){var i=t.props;return["p-fileupload p-fileupload-".concat(i.mode," p-component")]},buttonbar:"p-fileupload-buttonbar",chooseButton:function(t){var i=t.instance,n=t.props;return["p-button p-component p-fileupload-choose",{"p-fileupload-choose-selected":n.mode==="basic"&&i.hasFiles,"p-disabled":n.disabled,"p-focus":i.focused}]},chooseIcon:"p-button-icon p-button-icon-left",chooseButtonLabel:"p-button-label",content:"p-fileupload-content",empty:"p-fileupload-empty",uploadIcon:"p-button-icon p-button-icon-left",label:"p-button-label",file:"p-fileupload-file",thumbnail:"p-fileupload-file-thumbnail",details:"p-fileupload-file-details",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",badge:"p-fileupload-file-badge",actions:"p-fileupload-file-actions",removeButton:"p-fileupload-file-remove"},x=H.extend({name:"fileupload",classes:$}),_={name:"BaseFileUpload",extends:W,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null},style:x,provide:function(){return{$parentInstance:this}}},P={name:"FileContent",hostName:"FileUpload",extends:W,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warning"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var i,n=1024,a=3,l=((i=this.$primevue.config.locale)===null||i===void 0?void 0:i.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(l[0]);var u=Math.floor(Math.log(t)/Math.log(n)),s=parseFloat((t/Math.pow(n,u)).toFixed(a));return"".concat(s," ").concat(l[u])}},components:{FileUploadButton:A,FileUploadBadge:q,TimesIcon:V}},ee=["alt","src","width"];function te(e,t,i,n,a,l){var u=g("FileUploadBadge"),s=g("TimesIcon"),f=g("FileUploadButton");return r(!0),c(w,null,E(i.files,function(d,B){return r(),c("div",o({key:d.name+d.type+d.size,class:e.cx("file")},e.ptm("file")),[h("img",o({role:"presentation",class:e.cx("thumbnail"),alt:d.name,src:d.objectURL,width:i.previewWidth},e.ptm("thumbnail")),null,16,ee),h("div",o({class:e.cx("details")},e.ptm("details")),[h("div",o({class:e.cx("fileName")},e.ptm("fileName")),F(d.name),17),h("span",o({class:e.cx("fileSize")},e.ptm("fileSize")),F(l.formatSize(d.size)),17),L(u,{value:i.badgeValue,class:C(e.cx("badge")),severity:i.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("badge")},null,8,["value","class","severity","unstyled","pt"])],16),h("div",o({class:e.cx("actions")},e.ptm("actions")),[L(f,{onClick:function(ue){return e.$emit("remove",B)},text:"",rounded:"",severity:"danger",class:C(e.cx("removeButton")),unstyled:e.unstyled,pt:e.ptm("removeButton")},{icon:I(function(p){return[i.templates.fileremoveicon?(r(),m(b(i.templates.fileremoveicon),{key:0,class:C(p.class),file:d,index:B},null,8,["class","file","index"])):(r(),m(s,o({key:1,class:p.class,"aria-hidden":"true"},e.ptm("removeButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}P.render=te;function k(e){return ne(e)||ie(e)||O(e)||le()}function le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ne(e){if(Array.isArray(e))return D(e)}function S(e,t){var i=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=O(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(d){throw d},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,u=!1,s;return{s:function(){i=i.call(e)},n:function(){var d=i.next();return l=d.done,d},e:function(d){u=!0,s=d},f:function(){try{!l&&i.return!=null&&i.return()}finally{if(u)throw s}}}}function O(e,t){if(e){if(typeof e=="string")return D(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return D(e,t)}}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var ae={name:"FileUpload",extends:_,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];var i=t.dataTransfer?t.dataTransfer.files:t.target.files,n=S(i),a;try{for(n.s();!(a=n.n()).done;){var l=a.value;this.isFileSelected(l)||this.validate(l)&&(this.isImage(l)&&(l.objectURL=window.URL.createObjectURL(l)),this.files.push(l))}}catch(u){n.e(u)}finally{n.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},upload:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var i=new XMLHttpRequest,n=new FormData;this.$emit("before-upload",{xhr:i,formData:n});var a=S(this.files),l;try{for(a.s();!(l=a.n()).done;){var u=l.value;n.append(this.name,u,u.name)}}catch(s){a.e(s)}finally{a.f()}i.upload.addEventListener("progress",function(s){s.lengthComputable&&(t.progress=Math.round(s.loaded*100/s.total)),t.$emit("progress",{originalEvent:s,progress:t.progress})}),i.onreadystatechange=function(){if(i.readyState===4){var s;t.progress=0,i.status>=200&&i.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:i,files:t.files})):t.$emit("error",{xhr:i,files:t.files}),(s=t.uploadedFiles).push.apply(s,k(t.files)),t.clear()}},i.open("POST",this.url,!0),this.$emit("before-send",{xhr:i,formData:n}),i.withCredentials=this.withCredentials,i.send(n)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var i=S(this.files),n;try{for(i.s();!(n=i.n()).done;){var a=n.value;if(a.name+a.type+a.size===t.name+t.type+t.size)return!0}}catch(l){i.e(l)}finally{i.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var i=this.accept.split(",").map(function(s){return s.trim()}),n=S(i),a;try{for(n.s();!(a=n.n()).done;){var l=a.value,u=this.isWildcard(l)?this.getTypeClass(t.type)===this.getTypeClass(l):t.type==l||this.getFileExtension(t).toLowerCase()===l.toLowerCase();if(u)return!0}}catch(s){n.e(s)}finally{n.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&U.addClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&U.removeClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&U.removeClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var i=t.dataTransfer?t.dataTransfer.files:t.target.files,n=this.multiple||i&&i.length===1;n&&this.onFileSelect(t)}},onBasicUploaderClick:function(t){this.hasFiles?this.upload():t.button===0&&this.$refs.fileInput.click()},remove:function(t){this.clearInputElement();var i=this.files.splice(t,1)[0];this.files=k(this.files),this.$emit("remove",{file:i,files:this.files})},removeUploadedFile:function(t){var i=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=k(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:i,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var i,n=1024,a=3,l=((i=this.$primevue.config.locale)===null||i===void 0?void 0:i.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(l[0]);var u=Math.floor(Math.log(t)/Math.log(n)),s=parseFloat((t/Math.pow(n,u)).toFixed(a));return"".concat(s," ").concat(l[u])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("chooseButton"),this.class]},basicChooseButtonLabel:function(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(function(t){return t.name}).join(", "):this.chooseButtonLabel},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{FileUploadButton:A,FileUploadProgressBar:Y,FileUploadMessage:G,FileContent:P,PlusIcon:R,UploadIcon:N,TimesIcon:V},directives:{ripple:K}},se=["multiple","accept","disabled"],oe=["accept","disabled","multiple"];function re(e,t,i,n,a,l){var u=g("FileUploadButton"),s=g("FileUploadProgressBar"),f=g("FileContent"),d=g("FileUploadMessage"),B=Z("ripple");return l.isAdvanced?(r(),c("div",o({key:0,class:e.cx("root")},e.ptmi("root")),[h("input",o({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),multiple:e.multiple,accept:e.accept,disabled:l.chooseDisabled},e.ptm("input")),null,16,se),h("div",o({class:e.cx("buttonbar")},e.ptm("buttonbar")),[v(e.$slots,"header",{files:a.files,uploadedFiles:a.uploadedFiles,chooseCallback:l.choose,uploadCallback:l.upload,clearCallback:l.clear},function(){return[z((r(),c("span",o({class:l.chooseButtonClass,style:e.style,onClick:t[1]||(t[1]=function(){return l.choose&&l.choose.apply(l,arguments)}),onKeydown:t[2]||(t[2]=T(function(){return l.choose&&l.choose.apply(l,arguments)},["enter"])),onFocus:t[3]||(t[3]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:t[4]||(t[4]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),tabindex:"0"},e.ptm("chooseButton")),[v(e.$slots,"chooseicon",{class:C(e.cx("chooseIcon"))},function(){return[(r(),m(b(e.chooseIcon?"span":"PlusIcon"),o({class:[e.cx("chooseIcon"),e.chooseIcon],"aria-hidden":"true"},e.ptm("chooseIcon")),null,16,["class"]))]}),h("span",o({class:e.cx("chooseButtonLabel")},e.ptm("chooseButtonLabel")),F(l.chooseButtonLabel),17)],16)),[[B]]),e.showUploadButton?(r(),m(u,{key:0,label:l.uploadButtonLabel,onClick:l.upload,disabled:l.uploadDisabled,unstyled:e.unstyled,pt:e.ptm("uploadButton")},{icon:I(function(p){return[v(e.$slots,"uploadicon",{},function(){return[(r(),m(b(e.uploadIcon?"span":"UploadIcon"),o({class:[p.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("uploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},8,["label","onClick","disabled","unstyled","pt"])):y("",!0),e.showCancelButton?(r(),m(u,{key:1,label:l.cancelButtonLabel,onClick:l.clear,disabled:l.cancelDisabled,unstyled:e.unstyled,pt:e.ptm("cancelButton")},{icon:I(function(p){return[v(e.$slots,"cancelicon",{},function(){return[(r(),m(b(e.cancelIcon?"span":"TimesIcon"),o({class:[p.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("cancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},8,["label","onClick","disabled","unstyled","pt"])):y("",!0)]})],16),h("div",o({ref:"content",class:e.cx("content"),onDragenter:t[5]||(t[5]=function(){return l.onDragEnter&&l.onDragEnter.apply(l,arguments)}),onDragover:t[6]||(t[6]=function(){return l.onDragOver&&l.onDragOver.apply(l,arguments)}),onDragleave:t[7]||(t[7]=function(){return l.onDragLeave&&l.onDragLeave.apply(l,arguments)}),onDrop:t[8]||(t[8]=function(){return l.onDrop&&l.onDrop.apply(l,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[v(e.$slots,"content",{files:a.files,uploadedFiles:a.uploadedFiles,removeUploadedFileCallback:l.removeUploadedFile,removeFileCallback:l.remove,progress:a.progress,messages:a.messages},function(){return[l.hasFiles?(r(),c(w,{key:0},[L(s,{value:a.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("progressbar")},null,8,["value","unstyled","pt"]),L(f,{files:a.files,onRemove:l.remove,badgeValue:l.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],64)):y("",!0),(r(!0),c(w,null,E(a.messages,function(p){return r(),m(d,{key:p,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("message")},{default:I(function(){return[M(F(p),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),L(f,{files:a.uploadedFiles,onRemove:l.removeUploadedFile,badgeValue:l.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])]}),e.$slots.empty&&!l.hasFiles&&!l.hasUploadedFiles?(r(),c("div",o({key:0,class:e.cx("empty")},e.ptm("empty")),[v(e.$slots,"empty")],16)):y("",!0)],16)],16)):l.isBasic?(r(),c("div",o({key:1,class:e.cx("root")},e.ptmi("root")),[(r(!0),c(w,null,E(a.messages,function(p){return r(),m(d,{key:p,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("messages")},{default:I(function(){return[M(F(p),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),z((r(),c("span",o({class:l.chooseButtonClass,style:e.style,onMouseup:t[12]||(t[12]=function(){return l.onBasicUploaderClick&&l.onBasicUploaderClick.apply(l,arguments)}),onKeydown:t[13]||(t[13]=T(function(){return l.choose&&l.choose.apply(l,arguments)},["enter"])),onFocus:t[14]||(t[14]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:t[15]||(t[15]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),tabindex:"0"},e.ptm("chooseButton")),[!l.hasFiles||e.auto?v(e.$slots,"uploadicon",{key:0,class:C(e.cx("uploadIcon"))},function(){return[(r(),m(b(e.uploadIcon?"span":"UploadIcon"),o({class:[e.cx("uploadIcon"),e.uploadIcon],"aria-hidden":"true"},e.ptm("uploadIcon")),null,16,["class"]))]}):v(e.$slots,"chooseicon",{key:1,class:C(e.cx("chooseIcon"))},function(){return[(r(),m(b(e.chooseIcon?"span":"PlusIcon"),o({class:[e.cx("chooseIcon"),e.chooseIcon],"aria-hidden":"true"},e.ptm("chooseIcon")),null,16,["class"]))]}),h("span",o({class:e.cx("label")},e.ptm("label")),F(l.basicChooseButtonLabel),17),l.hasFiles?y("",!0):(r(),c("input",o({key:2,ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[9]||(t[9]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),onFocus:t[10]||(t[10]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:t[11]||(t[11]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)})},e.ptm("input")),null,16,oe))],16)),[[B]])],16)):y("",!0)}ae.render=re;export{ae as default};
