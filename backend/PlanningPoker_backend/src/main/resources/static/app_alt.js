const userHash = createHash();
let userState = "empty";
let lobbyHash = "";
const stompClient = new StompJs.Client({
    brokerURL: "ws://localhost:8080/ws-endpoint",
});

function createHash() {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

stompClient.onConnect = (frame) => {
console.log("ölkasdjfklj")
    stompClient.subscribe("/topic/lobby/" + lobbyHash, (message) => {
        //console.log("case: create: " + JSON.parse(message.body).messageContent)
        console.log(message.body);
        showMessage(JSON.parse(message.body));
    });
    document.getElementById("lobbyIdDisplay").innerText = lobbyHash;

};

stompClient.onWebSocketError = (error) => {
    console.error("Error with websocket", error);
};

stompClient.onStompError = (frame) => {
    console.error("Broker reported error: " + frame.headers["message"]);
    console.error("Additional details: " + frame.body);
};

async function createLobby() {
    lobbyHash = createHash();

    fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            lobbyHash: lobbyHash,
            userHash: userHash,
            lobbyName: document.getElementById("lobbyName").value,
            lobbyDescription: document.getElementById("lobbyDescription").value
        }),
    }).then((response) => response.json())
        .then((response) => {
            console.log(response);
            console.log("createLobby called");
            stompClient.activate();
        });

}

function joinLobby() {
    lobbyHash = document.getElementById("lobbyID").value;
    fetch("http://localhost:8080/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            lobbyHash: lobbyHash,
            userHash: userHash
        }),
    }).then((response) => response.json())
        .then((response) => {
            console.log(response);
            console.log("joinLobby called");
            stompClient.activate();
        });

    stompClient.activate();
    console.log("Join lobby");
}

function showMessage(message) {
    $("#greetings").append(
        message.username + " wrote: " + message.messageContent + "<br>"
    );
}

function sendMessage() {
    const messageObject = {
        destination: "/app/lobby/message/" + lobbyHash,
        body: JSON.stringify({
            messageContent: document.getElementById("message").value,
            username: userHash,
        }),
    };
    //console.log("lobby url: " + '/topic/lobby/' + lobbyHash)
    stompClient.publish(messageObject);
}
