package com.example.messagingstompwebsocket.Message;

public class Message extends BasicMessage {

    private String messageContent;

    public Message() {
    }

    public Message(String message) {
        this.messageContent = message;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String name) {
        this.messageContent = name;
    }
}