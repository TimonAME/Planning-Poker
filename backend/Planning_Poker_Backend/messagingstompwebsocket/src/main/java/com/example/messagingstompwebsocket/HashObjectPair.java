package com.example.messagingstompwebsocket;
import com.example.messagingstompwebsocket.lobby.Lobby;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "userName")
@JsonSubTypes({
        @JsonSubTypes.Type(value = User.class, name = "object"),
        @JsonSubTypes.Type(value = Lobby.class, name = "object")
})
public class HashObjectPair {

    Object object;
    String key;


    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }

}
