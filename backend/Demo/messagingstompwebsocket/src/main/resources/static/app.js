const userHash = createHash();
let userState = "empty";
let lobbyHash = "";
const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/gs-guide-websocket'
});

function createHash() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

stompClient.onConnect = (frame) => {

    switch (userState) {
        case "join":
            lobbyHash = document.getElementById("lobbyID").value;
            stompClient.publish({
                destination: "/app/join",
                body: JSON.stringify({
                    'lobbyHash': lobbyHash,
                    'userHash': userHash
                })
            });

            stompClient.subscribe('/topic/lobby/' + lobbyHash, (message) => {
                console.log(JSON.parse(message.body))
            });
            break;
        case "create":
            lobbyHash = createHash();
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/lobby/' + lobbyHash, (message) => {
                console.log(JSON.parse(message.body))
            });
            stompClient.publish({
                destination: "/app/create",
                body: JSON.stringify({
                    'lobbyHash': lobbyHash,
                    'adminHash': userHash
                })
            });
            break;
    }

};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function createLobby() {
    userState = "create";
    console.log("createLobby called")
    stompClient.activate();
    // event.preventDefault()
}

function joinLobby() {
    userState = "join";
    stompClient.activate();
    console.log("Join lobby");

}


function sendMessage() {
    console.log("lobby url: " + '/topic/lobby/' + lobbyHash)
    stompClient.publish({
        destination: "/app/lobby/message/" + lobbyHash,
        body: JSON.stringify({
            'messageContent': document.getElementById("message").value,
            'username': userHash
        })
    });
}