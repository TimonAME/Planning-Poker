package com.example.messagingstompwebsocket.Message.Broadcast;

public class EndVoteBroadcast extends BasicBroadcast {
    String[] votes;

    public EndVoteBroadcast(String[] votes) {
        setType("endVoteBroadcast");
        this.votes = votes;
    }

    public String[] getVotes() {
        return votes;
    }
}
