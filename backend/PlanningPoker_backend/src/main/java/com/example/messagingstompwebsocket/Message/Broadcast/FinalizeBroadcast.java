package com.example.messagingstompwebsocket.Message.Broadcast;

public class FinalizeBroadcast extends BasicBroadcast {
    String vote;

    public FinalizeBroadcast(String vote) {
        setType("finalizeBroadcast");
        this.vote = vote;
    }
}
