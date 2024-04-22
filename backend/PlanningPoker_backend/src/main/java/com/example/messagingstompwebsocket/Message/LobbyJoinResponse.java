package com.example.messagingstompwebsocket.Message;

public class LobbyJoinResponse {
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    boolean success;

    public LobbyJoinResponse(boolean success) {
        this.success = success;
    }

}
