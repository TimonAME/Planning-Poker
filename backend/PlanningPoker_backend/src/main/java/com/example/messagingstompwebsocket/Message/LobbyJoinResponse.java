package com.example.messagingstompwebsocket.Message;

import com.example.messagingstompwebsocket.Assets.Lobby;

public class LobbyJoinResponse {
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    boolean success;

    public LobbyJoinResponse(boolean success, Lobby lobby) {
        this.success = success;
    }

}
