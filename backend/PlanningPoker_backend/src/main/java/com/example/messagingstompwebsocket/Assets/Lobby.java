package com.example.messagingstompwebsocket.Assets;

import java.util.HashMap;
import java.util.Map;

public class Lobby {

    public String adminHash;
    Map<String, String> users = new HashMap<String, String>();

    public String lobbyName;
    public String lobbyDescription;

    public String lobbyStatus = "preLobby";


    public String cardType = "fibonacci";
    /**
    cardType options:
     * 1. fibonacci
     * 2. powersOfTwo
     * 3. t-shirt
     */

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

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public void addUser(String key, String user) {
        users.put(key, user);
    }

    @Override
    public String toString() {
        return "Lobby{" +
                "adminHash='" + adminHash + '\'' +
                ", lobbyName='" + lobbyName + '\'' +
                ", lobbyDescription='" + lobbyDescription + '\'' +
                ", lobbyStatus='" + lobbyStatus + '\'' +
                ", cardType='" + cardType + '\'' +
                '}';
    }
}
