import{ae as r}from"./CuqcAmAg.js";import"https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js";import{u as n}from"./OIidnPhA.js";const c=r("userstory",{state:()=>({userStories:[]}),actions:{addUserStory(o){this.userStories.push(o)},deleteUserStory(o){this.userStories.splice(o,1)},editUserStory(o,e){this.userStories.splice(o,1,e)},moveUserStory(o,e){const[t]=this.userStories.splice(o,1);this.userStories.splice(e,0,t)},searchUserStory(o){return this.userStories.filter(e=>e.title.toLowerCase().includes(o))}},persist:!0}),S=r("stompClient",{state:()=>({stompClient:null}),actions:{activateStompClient(o){this.stompClient=new StompJs.Client({brokerURL:"ws://localhost:8080/ws-endpoint"}),console.log("activatestompclient"),this.stompClient.onConnect=e=>{console.log("Connected:",e),this.stompClient.subscribe(`/topic/lobby/${o}`,t=>{console.log("Nachricht bekommen:------------------------------------------------");let s=JSON.parse(t.body);switch(console.log(t),console.log(s.type),s.type){case"lobbyJoinBroadCast":console.log("someone joined"),console.log(s),n().addUser(s.user.userName,"not ready",!1);break;case"userStoryBroadcast":console.log("Userstory erstellt"),console.log(s);const i=c(),l={title:s.userStory.title,description:s.userStory.description,voted:!1,size:null};i.addUserStory(l);break;case"readyUpBroadcast":console.log(s);break}})},this.stompClient.onStompError=e=>{console.error("Broker reported error:",e.headers.message),console.error("Additional details:",e.body)},this.stompClient.onWebSocketError=e=>{console.error("WebSocket error:",e)},this.stompClient.onDisconnect=e=>{console.log("Disconnected:",e)},this.stompClient.activate()},publishMessage(o,e){console.log("Trying to publish"),console.log(this.stompClient),this.stompClient.publish({destination:o,body:e})}},persist:!0});export{S as a,c as u};
