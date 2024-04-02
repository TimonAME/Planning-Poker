package com.example.messagingstompwebsocket;

public class LobbyJoinRequest {
    String userHash;
    String lobbyHash;

    public String getUserHash() {
        return userHash;
    }

    public void setUserHash(String userHash) {
        this.userHash = userHash;
    }

    public String getLobbyHash() {
        return lobbyHash;
    }

    public void setLobbyHash(String lobbyHash) {
        this.lobbyHash = lobbyHash;
    }
}