package com.example.messagingstompwebsocket.lobby;

import com.example.messagingstompwebsocket.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Lobby {

    public String adminHash;
    Map<String, User> users = new HashMap<>();

    public ArrayList<String> userHashes = new ArrayList<>();

    public String lobbyName;
    public String lobbyDescription;

    public String lobbyStatus = "preLobby";

    public Lobby(String adminHash) {
        this.adminHash = adminHash;
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

    public String getLobbyDescription() {
        return lobbyDescription;
    }

    public void setLobbyDescription(String lobbyDescription) {
        this.lobbyDescription = lobbyDescription;
    }

}
