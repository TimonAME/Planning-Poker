package com.example.messagingstompwebsocket.Message.Broadcast;

import com.example.messagingstompwebsocket.Message.Broadcast.BasicBroadcast;

public class ReadyUpBroadcast extends BasicBroadcast {

    String publicUserHash;

    public ReadyUpBroadcast(String publicUserHash) {
        this.publicUserHash = publicUserHash;
        setType("readyUpBroadcast");
    }
}
