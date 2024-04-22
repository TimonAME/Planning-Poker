package com.example.messagingstompwebsocket;

import com.example.messagingstompwebsocket.Message.*;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.messagingstompwebsocket.lobby.Lobby;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@Controller
@RestController
public class LobbyController {

    public HashMap<String, Lobby> lobbies = new HashMap<>();

    private final SimpMessagingTemplate simpMessagingTemplate;

    public LobbyController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @PostMapping("/join")
    public LobbyJoinResponse joinLobby(@RequestBody LobbyJoinRequest lobbyJoinRequest) {
        System.out.println("User joining: " + lobbyJoinRequest.getUserHash());
        lobbies.get(lobbyJoinRequest.getLobbyHash()).userHashes.add(lobbyJoinRequest.getUserHash());
        return new LobbyJoinResponse(true);
    }

    @PostMapping("/create")
    @CrossOrigin
    public LobbyCreationResponse createLobby(@RequestBody LobbyCreationRequest lobbyCreationRequest) {
        System.out.println(lobbyCreationRequest);
        Lobby lobby = new Lobby(lobbyCreationRequest.getUserHash());
        lobbies.put(lobbyCreationRequest.getLobbyHash(), lobby);
        return new LobbyCreationResponse(lobby, true);
    }

    @MessageMapping("/lobby/message/{id}")
    public void communicate(@DestinationVariable String id, Message message) {
        System.out.println(message);
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, message);
    }


    @MessageMapping("/lobby/{id}/start")
    public void startLobby(@DestinationVariable String id, LobbyStartRequest lobbyStartRequest) {
        Lobby lobby = lobbies.get(lobbyStartRequest.getLobbyHash());
        if (lobby.getAdminHash().equals(lobbyStartRequest.getUserHash())) {
            lobby.lobbyStatus = "lobby";
        }

        System.out.println(lobbies.get(lobbyStartRequest.getLobbyHash()));
        LobbyStartResponse lobbyStartResponse = new LobbyStartResponse();


        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, lobbyStartResponse);
    }
}