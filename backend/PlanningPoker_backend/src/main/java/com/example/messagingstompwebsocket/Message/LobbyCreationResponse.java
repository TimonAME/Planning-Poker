package com.example.messagingstompwebsocket.Message;


import com.example.messagingstompwebsocket.lobby.Lobby;

public class LobbyCreationResponse {
    Lobby lobby;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    boolean success;


    public LobbyCreationResponse(Lobby lobby, boolean success) {
        this.lobby = lobby;
        this.success = success;
    }
}
