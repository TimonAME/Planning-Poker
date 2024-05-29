package com.example.messagingstompwebsocket.Message.Broadcast;

import com.example.messagingstompwebsocket.Message.Broadcast.BasicBroadcast;

public class ReadyUpBroadcast extends BasicBroadcast {

    public ReadyUpBroadcast(){
        setType("readyUpBroadcast");
    }
}
