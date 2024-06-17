import{s as W,_ as se,a as ie}from"./C2wq6D-4.js";import{_ as le,i as ue,t as w,U,A as $,B as L,r as M,H as ce,o as j,v as E,S as D,T as he,x as c,$ as T,y as X,a3 as fe,L as F,a4 as q,d as Q,g as H,a5 as ee,z as A,O as N,M as de,a2 as ve,P as me}from"./0UAU7Jqz.js";import{u as pe,a as ge}from"./B2qw3buu.js";import"./BXQB_4-j.js";import"./DVSSvIU1.js";import"https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js";const _e={};function we(u,h){const l=ue("router-link");return w(),U(l,{class:"btn btn-primary md:w-1/5 sm:w-3/5 w-4/5",to:"/game"},{default:$(()=>[L(" Start Game ")]),_:1})}const Ce=le(_e,[["render",we]]),Me={class:"md:w-1/2 sm:w-2/3 w-full mx-2 mt-8 flex flex-wrap justify-center items-center"},Ee=["onMouseover","onMouseleave"],Re={__name:"UserDisplay",setup(u){const h=pe(),l=M(h.userList);ce(()=>h.userList,e=>{l.value=e});const a=M(null);function f(e,t){t?a.value=e:a.value=null}function d(e){if(e===""||typeof e!="string")return"";let t="";return e=e.split(" "),e.length===1?(t+=e[0][0].toUpperCase(),t):(t+=e[0][0].toUpperCase()+e[1][0].toUpperCase(),t)}let n=null;return j(()=>{n=W(()=>{l.value.length>0&&(clearInterval(n),n=W(()=>{l.value.length<7&&h.addUser("User "+(l.value.length+1),"not ready",!1)},500))},200)}),(e,t)=>(w(),E("div",Me,[l.value.length?(w(),U(fe,{key:0,name:"list"},{default:$(()=>[(w(!0),E(D,null,he(l.value,(r,o)=>(w(),E("div",{key:o,class:"avatar placeholder m-1"},[c("div",{class:"relative bg-neutral text-neutral-content rounded-full w-24",onMouseover:s=>f(o,!0),onMouseleave:s=>f(o,!1)},[c("span",{class:T(["absolute p-6 text-md opacity-0 transition-opacity",{"opacity-100":a.value===o}])},X(r.name),3),c("span",{class:T(["absolute p-6 text-3xl transition-opacity",{"opacity-0":a.value===o}])},X(d(r.name)),3)],40,Ee)]))),128))]),_:1})):F("",!0)]))}},be={key:0,role:"alert",class:"alert alert-success linkSuccess alertPopup z-50 fixed top-2"},Ae=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ye=c("span",null,"Link successfully copied!",-1),Ne=[Ae,ye],Pe={__name:"SuccessAlert",props:{success:Boolean},setup(u){const h=u;return(l,a)=>(w(),U(q,{name:"fade"},{default:$(()=>[h.success?(w(),E("div",be,Ne)):F("",!0)]),_:1}))}},Se={key:0,role:"alert",class:"alert alert-error linkSuccess alertPopup z-50 fixed top-2"},ke=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ze=c("span",null,"Failed to copy link!",-1),Ie=[ke,ze],He={__name:"FailureAlert",props:{failed:Boolean},setup(u){const h=u;return(l,a)=>(w(),U(q,{name:"fade"},{default:$(()=>[h.failed?(w(),E("div",Se,Ie)):F("",!0)]),_:1}))}};/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var O=function(){return O=Object.assign||function(h){for(var l,a=1,f=arguments.length;a<f;a++){l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(h[d]=l[d])}return h},O.apply(this,arguments)};var S;(function(u){var h=function(){function n(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var s=[],i=0;i<this.size;i++)s.push(!1);for(var i=0;i<this.size;i++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();var v=this.addEccAndInterleave(r);if(this.drawCodewords(v),o==-1)for(var m=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var _=this.getPenaltyScore();_<m&&(o=i,m=_),this.applyMask(i)}f(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,t){var r=u.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=u.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,o,s,i){if(r===void 0&&(r=1),o===void 0&&(o=40),s===void 0&&(s=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");var v,m;for(v=r;;v++){var _=n.getNumDataCodewords(v,t)*8,C=d.getTotalBits(e,v);if(C<=_){m=C;break}if(v>=o)throw new RangeError("Data too long")}for(var g=0,R=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];g<R.length;g++){var b=R[g];i&&m<=n.getNumDataCodewords(v,b)*8&&(t=b)}for(var p=[],y=0,k=e;y<k.length;y++){var P=k[y];l(P.mode.modeBits,4,p),l(P.numChars,P.mode.numCharCountBits(v),p);for(var I=0,V=P.getData();I<V.length;I++){var oe=V[I];p.push(oe)}}f(p.length==m);var x=n.getNumDataCodewords(v,t)*8;f(p.length<=x),l(0,Math.min(4,x-p.length),p),l(0,(8-p.length%8)%8,p),f(p.length%8==0);for(var Y=236;p.length<x;Y^=253)l(Y,8,p);for(var B=[];B.length*8<p.length;)B.push(0);return p.forEach(function(ae,K){return B[K>>>3]|=ae<<7-(K&7)}),new n(v,t,B,s)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var o=0;o<r;o++)e==0&&o==0||e==0&&o==r-1||e==r-1&&o==0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,o=0;o<10;o++)r=r<<1^(r>>>9)*1335;var s=(t<<10|r)^21522;f(s>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,a(s,o));this.setFunctionModule(8,7,a(s,6)),this.setFunctionModule(8,8,a(s,7)),this.setFunctionModule(7,8,a(s,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,a(s,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,a(s,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,a(s,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;f(r>>>18==0);for(var t=0;t<18;t++){var o=a(r,t),s=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(s,i,o),this.setFunctionModule(i,s,o)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var o=-4;o<=4;o++){var s=Math.max(Math.abs(o),Math.abs(r)),i=e+o,v=t+r;0<=i&&i<this.size&&0<=v&&v<this.size&&this.setFunctionModule(i,v,s!=2&&s!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],s=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),v=o-i%o,m=Math.floor(i/o),_=[],C=n.reedSolomonComputeDivisor(s),g=0,R=0;g<o;g++){var b=e.slice(R,R+m-s+(g<v?0:1));R+=b.length;var p=n.reedSolomonComputeRemainder(b,C);g<v&&b.push(0),_.push(b.concat(p))}for(var y=[],k=function(P){_.forEach(function(I,V){(P!=m-s||V>=v)&&y.push(I[P])})},g=0;g<_[0].length;g++)k(g);return f(y.length==i),y},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var o=0;o<this.size;o++)for(var s=0;s<2;s++){var i=r-s,v=(r+1&2)==0,m=v?this.size-1-o:o;!this.isFunction[m][i]&&t<e.length*8&&(this.modules[m][i]=a(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var o=void 0;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,s=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,s),r||(e+=this.finderPenaltyCountPatterns(s)*n.PENALTY_N3),r=this.modules[t][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,s)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,v=0,s=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(v++,v==5?e+=n.PENALTY_N1:v>5&&e++):(this.finderPenaltyAddHistory(v,s),r||(e+=this.finderPenaltyCountPatterns(s)*n.PENALTY_N3),r=this.modules[t][i],v=1);e+=this.finderPenaltyTerminateAndCount(r,v,s)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var m=this.modules[t][i];m==this.modules[t][i+1]&&m==this.modules[t+1][i]&&m==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var _=0,C=0,g=this.modules;C<g.length;C++){var R=g[C];_=R.reduce(function(y,k){return y+(k?1:0)},_)}var b=this.size*this.size,p=Math.ceil(Math.abs(_*20-b*10)/b)-1;return f(0<=p&&p<=9),e+=p*n.PENALTY_N4,f(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,r=0;r<e;r++){for(var s=0;s<t.length;s++)t[s]=n.reedSolomonMultiply(t[s],o),s+1<t.length&&(t[s]^=t[s+1]);o=n.reedSolomonMultiply(o,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(m){return 0}),o=function(m){var _=m^r.shift();r.push(0),t.forEach(function(C,g){return r[g]^=n.reedSolomonMultiply(C,_)})},s=0,i=e;s<i.length;s++){var v=i[s];o(v)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return f(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();u.QrCode=h;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function a(n,e){return(n>>>e&1)!=0}function f(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var s=o[r];l(s,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var o=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+o),10),o*3+1,t),r+=o}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(o,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,o=0,s=e;o<s.length;o++){var i=s[o],v=i.mode.numCharCountBits(t);if(i.numChars>=1<<v)return 1/0;r+=4+v+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();u.QrSegment=d})(S||(S={}));(function(u){(function(h){var l=function(){function a(f,d){this.ordinal=f,this.formatBits=d}return a.LOW=new a(0,1),a.MEDIUM=new a(1,0),a.QUARTILE=new a(2,3),a.HIGH=new a(3,2),a}();h.Ecc=l})(u.QrCode||(u.QrCode={}))})(S||(S={}));(function(u){(function(h){var l=function(){function a(f,d){this.modeBits=f,this.numBitsCharCount=d}return a.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},a.NUMERIC=new a(1,[10,12,14]),a.ALPHANUMERIC=new a(2,[9,11,13]),a.BYTE=new a(4,[8,16,16]),a.KANJI=new a(8,[8,10,12]),a.ECI=new a(7,[0,0,0]),a}();h.Mode=l})(u.QrSegment||(u.QrSegment={}))})(S||(S={}));var z=S,te="H",Z={L:z.QrCode.Ecc.LOW,M:z.QrCode.Ecc.MEDIUM,Q:z.QrCode.Ecc.QUARTILE,H:z.QrCode.Ecc.HIGH},Ve=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function re(u){return u in Z}function ne(u,h){h===void 0&&(h=0);var l=[];return u.forEach(function(a,f){var d=null;a.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+h," ").concat(f+h,"h").concat(e-d,"v1H").concat(d+h,"z")),d=null;return}if(e===a.length-1){if(!n)return;d===null?l.push("M".concat(e+h,",").concat(f+h," h1v1H").concat(e+h,"z")):l.push("M".concat(d+h,",").concat(f+h," h").concat(e+1-d,"v1H").concat(d+h,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var G={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:te,validator:function(u){return re(u)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Be=O(O({},G),{renderAs:{type:String,required:!1,default:"canvas",validator:function(u){return["canvas","svg"].indexOf(u)>-1}}}),Le=Q({name:"QRCodeSvg",props:G,setup:function(u){var h=M(0),l=M(""),a=function(){var f=u.value,d=u.level,n=u.margin,e=z.QrCode.encodeText(f,Z[d]).getModules();h.value=e.length+n*2,l.value=ne(e,n)};return a(),ee(a),function(){return H("svg",{width:u.size,height:u.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h.value," ").concat(h.value)},[H("path",{fill:u.background,d:"M0,0 h".concat(h.value,"v").concat(h.value,"H0z")}),H("path",{fill:u.foreground,d:l.value})])}}}),Te=Q({name:"QRCodeCanvas",props:G,setup:function(u){var h=M(null),l=function(){var a=u.value,f=u.level,d=u.size,n=u.margin,e=u.background,t=u.foreground,r=h.value;if(r){var o=r.getContext("2d");if(o){var s=z.QrCode.encodeText(a,Z[f]).getModules(),i=s.length+n*2,v=window.devicePixelRatio||1,m=d/i*v;r.height=r.width=d*v,o.scale(m,m),o.fillStyle=e,o.fillRect(0,0,i,i),o.fillStyle=t,Ve?o.fill(new Path2D(ne(s,n))):s.forEach(function(_,C){_.forEach(function(g,R){g&&o.fillRect(R+n,C+n,1,1)})})}}};return j(l),ee(l),function(){return H("canvas",{ref:h,style:{width:"".concat(u.size,"px"),height:"".concat(u.size,"px")}})}}}),J=Q({name:"Qrcode",render:function(){var u=this.$props,h=u.renderAs,l=u.value,a=u.size,f=u.margin,d=u.level,n=u.background,e=u.foreground,t=a>>>0,r=f>>>0,o=re(d)?d:te;return H(h==="svg"?Le:Te,{value:l,size:t,margin:r,level:o,background:n,foreground:e})},props:Be});const Oe={class:"flex justify-center mt-3"},Ue={width:"24",height:"24",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.61 122.88","fill-rule":"evenodd",style:{fill:"currentColor","margin-left":"-0.5em"}},$e=c("title",null,"qr-code-scan",-1),xe=c("path",{class:"cls-1",d:"M26.68,26.77H51.91V51.89H26.68V26.77ZM35.67,0H23.07A22.72,22.72,0,0,0,14.3,1.75a23.13,23.13,0,0,0-7.49,5l0,0a23.16,23.16,0,0,0-5,7.49A22.77,22.77,0,0,0,0,23.07V38.64H10.23V23.07a12.9,12.9,0,0,1,1-4.9A12.71,12.71,0,0,1,14,14l0,0a12.83,12.83,0,0,1,9.07-3.75h12.6V0ZM99.54,0H91.31V10.23h8.23a12.94,12.94,0,0,1,4.9,1A13.16,13.16,0,0,1,108.61,14l.35.36h0a13.07,13.07,0,0,1,2.45,3.82,12.67,12.67,0,0,1,1,4.89V38.64h10.23V23.07a22.95,22.95,0,0,0-6.42-15.93h0l-.37-.37a23.16,23.16,0,0,0-7.49-5A22.77,22.77,0,0,0,99.54,0Zm23.07,99.81V82.52H112.38V99.81a12.67,12.67,0,0,1-1,4.89,13.08,13.08,0,0,1-2.8,4.17,12.8,12.8,0,0,1-9.06,3.78H91.31v10.23h8.23a23,23,0,0,0,16.29-6.78,23.34,23.34,0,0,0,5-7.49,23,23,0,0,0,1.75-8.8ZM23.07,122.88h12.6V112.65H23.07A12.8,12.8,0,0,1,14,108.87l-.26-.24a12.83,12.83,0,0,1-2.61-4.08,12.7,12.7,0,0,1-.91-4.74V82.52H0V99.81a22.64,22.64,0,0,0,1.67,8.57,22.86,22.86,0,0,0,4.79,7.38l.31.35a23.2,23.2,0,0,0,7.5,5,22.84,22.84,0,0,0,8.8,1.75Zm66.52-33.1H96v6.33H89.59V89.78Zm-12.36,0h6.44v6H70.8V83.47H77V77.22h6.34V64.76H89.8v6.12h6.12v6.33H89.8v6.33H77.23v6.23ZM58.14,77.12h6.23V70.79h-6V64.46h6V58.13H58.24v6.33H51.8V58.13h6.33V39.33h6.43V58.12h6.23v6.33h6.13V58.12h6.43v6.33H77.23v6.33H70.8V83.24H64.57V95.81H58.14V77.12Zm31.35-19h6.43v6.33H89.49V58.12Zm-50.24,0h6.43v6.33H39.25V58.12Zm-12.57,0h6.43v6.33H26.68V58.12ZM58.14,26.77h6.43V33.1H58.14V26.77ZM26.58,70.88H51.8V96H26.58V70.88ZM32.71,77h13V89.91h-13V77Zm38-50.22H95.92V51.89H70.7V26.77Zm6.13,6.1h13V45.79h-13V32.87Zm-44,0h13V45.79h-13V32.87Z"},null,-1),De=[$e,xe],Fe=c("button",{class:"btn mt-2 -mb-3",onclick:"my_modal_2.showModal()"},[c("svg",{fill:"#000000",height:"24",width:"24",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",class:"fill-current"},[c("g",null,[c("g",null,[c("path",{d:"M0,0v512h512V0H0z M477.867,477.867H34.133V34.133h443.733V477.867z"})])]),c("g",null,[c("g",null,[c("polygon",{points:`126.533,102.4 199.111,102.4 199.111,68.267 68.267,68.267 68.267,199.111 102.4,199.111 102.4,126.538\r
			198.422,222.558 222.556,198.423 		`})])]),c("g",null,[c("g",null,[c("polygon",{points:`222.557,313.581 198.422,289.445 102.4,385.467 102.4,312.889 68.267,312.889 68.267,443.733 199.111,443.733\r
			199.111,409.6 126.538,409.6 		`})])]),c("g",null,[c("g",null,[c("polygon",{points:`409.6,312.889 409.6,385.467 313.578,289.444 289.444,313.578 385.462,409.6 312.889,409.6 312.889,443.733\r
			443.733,443.733 443.733,312.889 		`})])]),c("g",null,[c("g",null,[c("polygon",{points:`312.889,68.267 312.889,102.4 385.467,102.4 289.444,198.423 313.578,222.558 409.6,126.538 409.6,199.111\r
			443.733,199.111 443.733,68.267 		`})])])])],-1),Qe={id:"my_modal_2",class:"modal"},Ze={class:"modal-box w-fit max-w-5xl"},Ge=c("form",{method:"dialog",class:"modal-backdrop"},[c("button",null,"close")],-1),Ye={__name:"QRCode",props:{link:String},setup(u){const h=u;let l=M(!1);const a=M();function f(){l.value=!l.value,a.value=h.link}return(d,n)=>(w(),E(D,null,[c("div",Oe,[c("button",{class:"btn w-1/3",onClick:f},[(w(),E("svg",Ue,De)),L(" QR-Code ")])]),c("div",{class:T(["flex justify-center",{hidden:!N(l)}])},[A(J,{value:N(a),level:"M","render-as":"svg",class:"fill-current mt-3",background:"#0000",foreground:"fill-current",size:150},null,8,["value"])],2),c("div",{class:T(["flex justify-center",{hidden:!N(l)}])},[Fe,c("dialog",Qe,[c("div",Ze,[A(J,{value:N(a),level:"M","render-as":"svg",class:"fill-current mt-3",background:"#0000",foreground:"fill-current",size:600},null,8,["value"])]),Ge])],2)],64))}},Ke={class:"svg-icon",style:{width:"2em",height:"2em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},We=c("path",{d:"M445.343744 525.346816c-96.13312-47.366144-133.09952-149.192704-108.351488-236.546048 24.864768-87.762944 102.639616-145.75616 194.801664-145.401856 86.628352 0.333824 164.511744 60.598272 188.198912 146.04288 24.3712 87.912448-12.814336 189.353984-109.631488 236.466176 5.20192 1.683456 9.558016 3.196928 13.973504 4.5056 36.612096 10.868736 70.158336 27.89376 101.011456 50.300928 8.415232 6.111232 6.981632 16.175104 4.777984 19.83488-1.867776 3.100672-11.169792 7.90528-20.043776 1.411072-46.485504-34.013184-98.535424-54.110208-155.746304-58.79808-166.172672-13.615104-300.937216 98.162688-333.135872 244.979712-1.386496 6.311936-2.189312 12.752896-3.6352 19.048448-1.970176 8.574976-8.32512 13.268992-16.441344 11.892736-5.834752-0.989184-9.46176-5.6832-9.07264-15.777792 25.847808-139.669504 106.928128-230.600704 241.50016-274.550784 1.611776-0.526336 3.29728-0.825344 4.931584-1.294336 1.927168-0.555008 3.84-1.1776 6.862848-2.113536z m82.825216-9.220096c87.943168 3.52256 173.04576-72.853504 172.818432-172.355584-0.221184-96.72704-76.38016-174.153728-172.378112-174.239744-96.088064-0.086016-172.398592 77.13792-172.83072 173.799424-0.446464 99.612672 84.600832 176.115712 172.3904 172.795904zM767.96928 720.86528c0 28.52864 0.004096 55.47008-0.002048 82.409472-0.002048 13.092864-6.965248 15.839232-12.519424 15.828992-4.984832 0-11.988992-2.699264-11.99104-15.372288-0.008192-27.22816-0.002048-54.458368-0.002048-82.868224h-47.540224c-11.784192 0-23.56224-0.219136-35.340288 0.155648-3.422208 0.108544-7.186432-0.27648-9.975808-2.433024-2.254848-1.742848-3.81952-4.38272-4.624384-7.092224-0.32768-1.107968-0.653312-2.4064-0.653312-3.569664 0-4.347904 3.733504-9.515008 7.763968-10.903552 2.6624-0.915456 5.423104-0.804864 8.194048-0.794624l8.742912 0.026624c5.844992 0.016384 11.689984 0.028672 17.534976 0.04096a22901.66784 22901.66784 0 0 0 55.90016 0.057344v-10.180608c0-23.887872-0.018432-47.775744 0.008192-71.663616 0.012288-11.010048 7.258112-16.044032 12.675072-15.560704 6.549504-0.006144 12.15488 5.824512 11.997184 14.8992-0.464896 26.94144-0.165888 53.895168-0.165888 82.501632h10.02496c24.911872 0 49.829888 0.280576 74.733568-0.14336 7.944192 0.114688 12.62592 7.921664 12.62592 12.169216 0 5.031936-5.193728 12.648448-12.529664 12.589056-24.225792-0.305152-48.457728-0.1024-72.687616-0.100352-3.678208 0.004096-7.354368 0.004096-12.169216 0.004096z",fill:""},null,-1),Xe=[We],Je={id:"my_modal_4",class:"modal"},je={class:"modal-box"},qe=c("form",{method:"dialog"},[c("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1),et=c("h3",{class:"font-bold text-lg"},"Invite players",-1),tt={class:"flex flex-row justify-between"},rt={method:"dialog"},nt={width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",style:{fill:"currentColor","margin-left":"-0.33em"}},ot=c("path",{d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"},null,-1),at=[ot],st=c("form",{method:"dialog",class:"modal-backdrop"},[c("button",null,"close")],-1),it={__name:"InvitePlayers",setup(u){const h=ge(),l=M(null);let a=M("/lobby/"+h.lobbyHash),f=M(!1),d=M(!1);const n=async()=>{try{await navigator.clipboard.writeText(a.value),f.value=!0,setTimeout(()=>{f.value=!1},2e3)}catch{d.value=!0,setTimeout(()=>{d.value=!1},2e3)}},e=()=>{l.value&&l.value.select()};return(t,r)=>(w(),E(D,null,[A(Pe,{success:N(f)},null,8,["success"]),A(He,{failed:N(d)},null,8,["failed"]),c("button",{class:"btn",onclick:"my_modal_4.showModal()",onClick:e},[(w(),E("svg",Ke,Xe)),L(" Invite players ")]),c("dialog",Je,[c("div",je,[qe,et,c("div",tt,[de(c("input",{class:"input input-bordered w-full max-w-xs mt-3","onUpdate:modelValue":r[0]||(r[0]=o=>me(a)?a.value=o:a=o),readonly:"",ref_key:"linkInput",ref:l},null,512),[[ve,N(a)]]),c("form",rt,[c("button",{class:"btn mt-3 ml-5",onClick:n},[(w(),E("svg",nt,at)),L(" Copy link ")])])]),A(Ye,{link:N(a)},null,8,["link"])]),st])],64))}},lt={class:"absolute inset-0 -z-10 h-full w-full"},ut={class:"flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"},ct={class:"relative flex flex-col justify-center items-center mt-24 sm:mt-5"},ht={class:"relative z-10 flex flex-col justify-center items-center mt-5"},_t={__name:"index",setup(u){return(h,l)=>(w(),E("div",lt,[c("div",ut,[A(se,{class:"z-40"}),A(ie,{class:"sm:z-50 z:30"}),c("div",ct,[A(it),A(Re)]),c("div",ht,[A(Ce)])])]))}};export{_t as default};
