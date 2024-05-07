package com.example.messagingstompwebsocket.Message;

public abstract class BasicBroadcast {
    public String type = null;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
