package com.example.messagingstompwebsocket.Message.RequestMessage;

public class LobbyJoinRequest extends BasicRequestMessage {

    String lobbyHash;
    String userName;
    String publicUserHash;

    public String getPublicUserHash() {
        return publicUserHash;
    }

    public void setPublicUserHash(String publicUserHash) {
        this.publicUserHash = publicUserHash;
    }

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