package com.example.messagingstompwebsocket;

import java.util.ArrayList;

public class Lobby {

    public static ArrayList<User> joinedUsers;

    public static ArrayList<User> getJoinedUsers() {
        return joinedUsers;
    }

    public static void setJoinedUsers(ArrayList<User> joinedUsers) {
        Lobby.joinedUsers = joinedUsers;
    }


}
