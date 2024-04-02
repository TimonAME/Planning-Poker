package com.example.messagingstompwebsocket;

import java.util.ArrayList;

public class Lobby {

    public String adminHash;
    public String lobbyHash;

    public ArrayList<String> userHashes = new ArrayList<>();

    public Lobby(String adminHash, String lobbyHash) {
        this.adminHash = adminHash;
        this.lobbyHash = lobbyHash;
    }


    public String getLobbyHash() {
        return lobbyHash;
    }

    public void setLobbyHash(String lobbyHash) {
        this.lobbyHash = lobbyHash;
    }

    public String getAdminHash() {
        return adminHash;
    }

    public void setAdminHash(String adminHash) {
        this.adminHash = adminHash;
    }

    @Override
    public String toString() {
        return "Lobby{" +
                "lobbyHash='" + lobbyHash + '\'' +
                '}';
    }
}
