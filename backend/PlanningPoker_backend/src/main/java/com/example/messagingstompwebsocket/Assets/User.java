package com.example.messagingstompwebsocket.Assets;

public class User {

    String userName;
    String publicUserHash;

    public User(String userName, String publicUserHash) {
        this.userName = userName;
        this.publicUserHash = publicUserHash;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPublicUserHash() {
        return publicUserHash;
    }

    public void setPublicUserHash(String publicUserHash) {
        this.publicUserHash = publicUserHash;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                "publicUserHash='" + publicUserHash + "\'" +
                '}';
    }
}
