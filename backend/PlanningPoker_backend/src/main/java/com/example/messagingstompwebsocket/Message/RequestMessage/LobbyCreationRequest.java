package com.example.messagingstompwebsocket.Message.RequestMessage;

public class LobbyCreationRequest extends BasicRequestMessage {

    String lobbyName;
    String lobbyDescription;
    String lobbyHash;

    String lobbyCardType;

    String publicUserHash;

    String userName;

    public String getLobbyName() {
        return lobbyName;
    }

    public void setLobbyName(String lobbyName) {
        this.lobbyName = lobbyName;
    }

    public String getLobbyDescription() {
        return lobbyDescription;
    }

    public void setLobbyDescription(String lobbyDescription) {
        this.lobbyDescription = lobbyDescription;
    }

    public String getLobbyCardType() {
        return lobbyCardType;
    }

    public void setLobbyCardType(String lobbyCardType) {
        this.lobbyCardType = lobbyCardType;
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

    public String getPublicUserHash() {
        return publicUserHash;
    }

    public void setPublicUserHash(String publicUserHash) {
        this.publicUserHash = publicUserHash;
    }

    @Override
    public String toString() {
        return "LobbyCreationRequest{" +
                "userHash='" + userHash + '\'' +
                ", lobbyHash='" + lobbyHash + '\'' +
                '}';
    }
}
