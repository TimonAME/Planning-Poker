package com.example.messagingstompwebsocket.Message;

public class LobbyCreationRequest extends BasicMessage {

    String lobbyName;
    String lobbyDescription;
    String lobbyHash;

    String lobbyCardType;


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

    public String getLobbyCardType() { return lobbyCardType; }

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

    @Override
    public String toString() {
        return "LobbyCreationRequest{" +
                "userHash='" + userHash + '\'' +
                ", lobbyHash='" + lobbyHash + '\'' +
                '}';
    }
}
