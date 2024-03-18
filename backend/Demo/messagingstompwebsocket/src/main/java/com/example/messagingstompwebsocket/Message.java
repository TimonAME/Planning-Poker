package com.example.messagingstompwebsocket;

public class Message {

    private String messageContent;

    public Message() {
    }

    public Message(String name) {
        this.messageContent = name;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String name) {
        this.messageContent = name;
    }
}