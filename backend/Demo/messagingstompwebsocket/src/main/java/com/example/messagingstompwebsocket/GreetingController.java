package com.example.messagingstompwebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.util.HashMap;

@Controller
public class GreetingController {

    HashMap<String, User> users;

    @MessageMapping("/join")
    @SendTo("/topic/lobby")
    public Message join(User user) {
        return new Message("Hi " + HtmlUtils.htmlEscape(user.userName));
    }
    
    /*@SendToUser("/updateUserInfo")
    public User[] informExistingUsersToNewlyJoinedOne(){

    }*/

    @MessageMapping("/message")
    @SendTo("/topic/lobby")
    public Message message(Message message) throws Exception {
        System.out.println(message.getMessageContent() + " " + message.getUsername());
        return new Message(message.getUsername() + " schreibt: " + message.getMessageContent());
    }

}