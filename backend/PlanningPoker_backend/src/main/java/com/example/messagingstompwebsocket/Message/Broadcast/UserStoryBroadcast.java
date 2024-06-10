package com.example.messagingstompwebsocket.Message.Broadcast;

import java.io.Serializable;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.Broadcast.BasicBroadcast;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserStoryBroadcast extends BasicBroadcast implements Serializable {

    @JsonProperty
    UserStory userStory;
    @JsonProperty
    String userStoryHash;

    public UserStoryBroadcast(UserStory userStory, String userStoryHash) {
        this.userStory = userStory;
        this.userStoryHash = userStoryHash;
        setType("userStoryBroadcast");
    }

    public UserStory getUserStory() {
        return userStory;
    }

    public String getHash() {
        return userStoryHash;
    }
}
