package com.example.messagingstompwebsocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

import java.util.ArrayList;
import java.util.HashMap;

@Controller
public class LobbyController {

    HashMap<String, User> users;
    ArrayList<Lobby> allLobbies = new ArrayList<>();
    HashMap<String, Lobby> lobbies = new HashMap<>();

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/join")
    public void joinLobby(LobbyJoinRequest lobbyJoinRequest) {
        System.out.println("User joining: " + lobbyJoinRequest.userHash);
        lobbies.get(lobbyJoinRequest.lobbyHash).userHashes.add(lobbyJoinRequest.userHash);
    }

    @MessageMapping("/create")
    public void createLobby(Lobby lobby) {
        System.out.println(lobby.lobbyHash);
        lobbies.put(lobby.getLobbyHash(), lobby);
    }

    @MessageMapping("/lobby/message/{id}")
    public void communicate(@DestinationVariable String id, Message message) throws Exception {
        System.out.println(message);
        System.out.println("URL: " + "/topic/lobby/" + id);
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, message);
    }

}