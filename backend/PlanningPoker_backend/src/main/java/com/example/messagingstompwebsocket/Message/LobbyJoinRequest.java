package com.example.messagingstompwebsocket.Message;

public class LobbyJoinRequest extends BasicMessage{

    String lobbyHash;

    public String getLobbyHash() {
        return lobbyHash;
    }

    public void setLobbyHash(String lobbyHash) {
        this.lobbyHash = lobbyHash;
    }
}