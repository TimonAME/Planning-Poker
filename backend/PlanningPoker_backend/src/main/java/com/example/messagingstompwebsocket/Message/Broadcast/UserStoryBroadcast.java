package com.example.messagingstompwebsocket.Message.Broadcast;

import java.io.Serializable;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.Broadcast.BasicBroadcast;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserStoryBroadcast extends BasicBroadcast implements Serializable {

    @JsonProperty
    UserStory userStory;

    public UserStoryBroadcast(UserStory userStory) {
        this.userStory = userStory;
        setType("userStoryBroadcast");
    }

    public UserStory getUserStory() {
        return userStory;
    }
}
