package com.example.messagingstompwebsocket.Message;

import com.example.messagingstompwebsocket.User;

public class LobbyCreationRequest extends BasicMessage {


    String lobbyHash;

    public String getLobbyName() {
        return lobbyName;
    }

    public void setLobbyName(String lobbyName) {
        this.lobbyName = lobbyName;
    }

    String lobbyName;

    public String getLobbyDescription() {
        return lobbyDescription;
    }

    public void setLobbyDescription(String lobbyDescription) {
        this.lobbyDescription = lobbyDescription;
    }

    String lobbyDescription;

    public String getLobbyHash() {
        return lobbyHash;
    }

    public void setLobbyHash(String lobbyHash) {
        this.lobbyHash = lobbyHash;
    }


    @Override
    public String toString() {
        return "LobbyCreationRequest{" +
                "userHash='" + userHash + '\'' +
                ", lobbyHash='" + lobbyHash + '\'' +
                '}';
    }
}
