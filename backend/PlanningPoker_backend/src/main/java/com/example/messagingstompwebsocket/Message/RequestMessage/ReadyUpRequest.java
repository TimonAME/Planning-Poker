package com.example.messagingstompwebsocket.Message.RequestMessage;

public class ReadyUpRequest extends BasicRequestMessage {
    String value;

    public void setValue(String value) {
        this.value = value;
    }

    public String getValue() {
        return this.value;
    }
}
