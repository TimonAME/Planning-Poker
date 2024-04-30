package com.example.messagingstompwebsocket.Message;

public class LobbyJoinRequest extends BasicMessage {

    String lobbyHash;


    String userName;

    public String getLobbyHash() {
        return lobbyHash;
    }

    public void setLobbyHash(String lobbyHash) {
        this.lobbyHash = lobbyHash;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}