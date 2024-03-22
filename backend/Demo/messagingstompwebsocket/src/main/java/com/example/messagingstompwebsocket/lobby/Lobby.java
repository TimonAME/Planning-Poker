package com.example.messagingstompwebsocket.lobby;

import java.util.ArrayList;

public class Lobby {

    public String adminHash;
    public String lobbyHash;

    public ArrayList<String> userHashes = new ArrayList<>();

    public String lobbyName;
    public String lobbydescription;

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

    public String getLobbyName() {
        return lobbyName;
    }

    public void setLobbyName(String lobbyName) {
        this.lobbyName = lobbyName;
    }

    public String getLobbydescription() {
        return lobbydescription;
    }

    public void setLobbydescription(String lobbydescription) {
        this.lobbydescription = lobbydescription;
    }

    @Override
    public String toString() {
        return "Lobby{" +
                "lobbyHash='" + lobbyHash + '\'' +
                '}';
    }
}
