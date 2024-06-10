package com.example.messagingstompwebsocket.Message.Broadcast;

public class LobbyJoinBroadcast extends BasicBroadcast {
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    String userName;
    String publicUserHash;

    public LobbyJoinBroadcast(String userName, String publicUserHash) {
        this.userName = userName;
        this.publicUserHash = publicUserHash;
        setType("lobbyJoinBroadcast");
    }

}
