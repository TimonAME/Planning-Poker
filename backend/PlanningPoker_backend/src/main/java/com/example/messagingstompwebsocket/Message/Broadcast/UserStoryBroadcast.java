package com.example.messagingstompwebsocket.Message.Broadcast;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.Broadcast.BasicBroadcast;

public class UserStoryBroadcast extends BasicBroadcast {

    String type;
    UserStory userStory;
    int index;

    public UserStoryBroadcast(UserStory userStory, int index) {
        this.userStory = userStory;
        this.index = index;
        setType("userStoryBroadcast");
    }
}
