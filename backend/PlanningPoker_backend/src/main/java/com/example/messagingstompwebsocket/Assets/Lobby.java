package com.example.messagingstompwebsocket.Assets;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Lobby {

    public ArrayList<String> userStoryHashes = new ArrayList<>();
    public ArrayList<String> doneUserStoryHashes = new ArrayList<>();
    public String adminHash;
    private Map<String, User> users = new HashMap<String, User>();

    public String lobbyName;
    public String lobbyDescription;

    public String lobbyStatus = "preLobby";

    public String cardType = "fibonacci";

    private Map<String, String> tempVotes = new HashMap<>();

    /**
     * cardType options:
     * 1. fibonacci
     * 2. powersOfTwo
     * 3. t-shirt
     */

    public Lobby(String adminHash) {
        this.adminHash = adminHash;
    }

    public void addVote(String userHash, String vote) {
        tempVotes.put(userHash, vote);
    }

    public void removeVote(String userHash) {
        tempVotes.remove(userHash);
    }

    public String[] getVotes() {
        String[] votes = new String[tempVotes.keySet().size()];
        String[] keys = (String[]) tempVotes.keySet().toArray();
        for (int i = 0; i < keys.length; i++) {
            votes[i] = tempVotes.get(keys[i]);
        }
        tempVotes = new HashMap<>();
        return votes;
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

    public void addUser(String privateKey, String userName, String publicKey) {
        users.put(privateKey, new User(userName, publicKey));
    }

    public User getUser(String userHash) {
        return users.get(userHash);
    }

    public void addUserStoryHash(String hash) {
        this.userStoryHashes.add(hash);
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