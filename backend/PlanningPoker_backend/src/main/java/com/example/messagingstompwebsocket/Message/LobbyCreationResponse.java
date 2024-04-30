package com.example.messagingstompwebsocket.Message;


import com.example.messagingstompwebsocket.Assets.Lobby;

public class LobbyCreationResponse {

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    boolean success;
    String lobbyName = "";
    String lobbyDescription = "";


    public LobbyCreationResponse(boolean success, Lobby lobby) {
        this.success = success;

    }
}
