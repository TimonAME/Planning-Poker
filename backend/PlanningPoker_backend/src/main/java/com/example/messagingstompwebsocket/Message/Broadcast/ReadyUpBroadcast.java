package com.example.messagingstompwebsocket.Message.Broadcast;


public class ReadyUpBroadcast extends BasicBroadcast {

    String publicUserHash;

    public ReadyUpBroadcast(String publicUserHash) {
        this.publicUserHash = publicUserHash;
        setType("readyUpBroadcast");
    }
}
