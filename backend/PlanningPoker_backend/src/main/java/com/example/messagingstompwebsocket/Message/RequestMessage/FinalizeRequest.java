package com.example.messagingstompwebsocket.Message.RequestMessage;

public class FinalizeRequest extends BasicRequestMessage{
    String vote;

    public void setVote(String vote) {
        this.vote = vote;
    }
    public String getVote() {
        return vote;
    }
}
