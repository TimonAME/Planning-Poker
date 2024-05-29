package com.example.messagingstompwebsocket.Message.RequestMessage;

public abstract class BasicRequestMessage {
    String userHash;

    public String getUserHash() {
        return userHash;
    }

    public void setUserHash(String userHash) {
        this.userHash = userHash;
    }

}
