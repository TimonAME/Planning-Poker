package com.example.messagingstompwebsocket.Message;

public abstract class BasicMessage {
    String userHash;
    String messageType;

    public String getUserHash() {
        return userHash;
    }

    public void setUserHash(String userHash) {
        this.userHash = userHash;
    }

    public String getMessageType() {
        return messageType;
    }

    public void setMessageType(String messageType) {
        this.messageType = messageType;
    }
}
