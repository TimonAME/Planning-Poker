import{a as v,u as S,r as x,m as H,c as w,_ as T}from"./CI6GeavK.js";import{a1 as C,o as L,r as $,v as u,M as p,z as M,x as s,Q as N,$ as U,O as m,a2 as j,P as O,S as y,T as A,t as h,y as D,ad as P}from"./jPKGAdQc.js";import{u as V}from"./CLgzji5i.js";import{a as k}from"./Cavg5mq3.js";import"https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js";const B={id:"my_modal_7",class:"modal"},z={class:"modal-box"},R=s("h3",{class:"font-bold text-lg mb-1"},"Username",-1),q={class:"form-control w-full"},E={class:"error-msg text-sm ml-1 mt-1 text-red-600"},F=s("div",{class:"flex justify-end"},[s("button",{type:"submit",class:"btn btn-primary mt-2"}," Submit ")],-1),X={__name:"username-input",setup(J){const d=C();L(()=>{my_modal_7.showModal()});const a=$(""),_={username:{required:x,minLength:H(1),maxLength:w(20)}},n=v(_,{username:a}),f=S(),o=V();function b(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=t.length;let l=0;for(;l<32;)e+=t.charAt(Math.floor(Math.random()*i)),l+=1;return e}const r=b(),c=b(),g=()=>{if(n.value.$touch(),!n.value.$error)if(o.setUserDetails(a.value,r,c),console.log(r),console.log("Public: "+c),o.name===""){const e=o.lobbyHash;console.log(e),fetch("http://localhost:8080/lobby",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:{userHash:r,publicUserHash:c,userName:a.value,lobbyHash:e}}).then(t=>t.json()).then(t=>{console.log(t),console.log("joined"),d.push("/prelobby/"+e)})}else console.log("hallllo"),fetch("http://localhost:8080/create",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({lobbyHash:o.lobbyHash,userHash:o.userHash,lobbyDescription:o.description,lobbyName:o.name,lobbyCardType:o.votingSystemName})}).then(e=>e.json()).then(e=>{console.log(e),console.log("createLobby called"),k().activateStompClient(o.lobbyHash),d.push("/prelobby"),f.addUser(a.value,"not ready",!0),my_modal_7.close()})};return(e,t)=>{const i=T;return h(),u(y,null,[p(M(i,null,null,512),[[P,!1]]),s("dialog",B,[s("div",z,[R,s("form",{onSubmit:N(g,["prevent"])},[s("label",q,[s("div",{class:U({error:m(n).username.$errors.length})},[p(s("input",{type:"text",placeholder:"Type here",class:"input input-bordered w-full","onUpdate:modelValue":t[0]||(t[0]=l=>O(a)?a.value=l:null)},null,512),[[j,m(a)]]),(h(!0),u(y,null,A(m(n).username.$errors,l=>(h(),u("div",{class:"input-errors",key:l.$uid},[s("div",E,D(l.$message),1)]))),128))],2)]),F],32)])])],64)}}};export{X as default};
