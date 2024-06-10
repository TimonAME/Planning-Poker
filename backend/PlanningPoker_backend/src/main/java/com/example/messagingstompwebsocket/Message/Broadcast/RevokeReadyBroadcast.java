package com.example.messagingstompwebsocket.Message.Broadcast;

public class RevokeReadyBroadcast extends BasicBroadcast {
    String publicUserHash;

    public RevokeReadyBroadcast(String publicUserHash) {
        this.publicUserHash = publicUserHash;
        setType("revokeReadyBroadcast");
    }

}
