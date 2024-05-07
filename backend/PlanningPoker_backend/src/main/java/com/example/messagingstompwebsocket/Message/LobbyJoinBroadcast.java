package com.example.messagingstompwebsocket.Message;

public class LobbyJoinBroadcast extends BasicBroadcast {
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    String userName;

    public LobbyJoinBroadcast(String userName) {
        this.userName = userName;
        setType("lobbyJoinBroadcast");
    }

}
