package com.example.messagingstompwebsocket.Message.Broadcast;

public class FinalizeBroadcast extends BasicBroadcast {
    String finalVote;
    String userStoryHash;

    public FinalizeBroadcast(String vote, String userStoryHash) {
        setType("finalizeBroadcast");
        this.finalVote = vote;
        this.userStoryHash = userStoryHash;
    }
}
