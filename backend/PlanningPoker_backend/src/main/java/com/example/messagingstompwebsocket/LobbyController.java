package com.example.messagingstompwebsocket;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.*;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.messagingstompwebsocket.Assets.Lobby;
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
    @CrossOrigin
    public LobbyJoinResponse joinLobby(@RequestBody LobbyJoinRequest lobbyJoinRequest) {
        //if the lobby, the user tries to join, exists
        if (lobbies.containsKey(lobbyJoinRequest.getLobbyHash()) && !lobbyJoinRequest.getUserHash().equals("")) {
            System.out.println("Lobby Join succeeded on Key " + lobbyJoinRequest.getLobbyHash() + " from User " + lobbyJoinRequest.getUserHash());


            //add user to lobby
            lobbies.get(lobbyJoinRequest.getLobbyHash()).addUser(lobbyJoinRequest.getUserHash(), lobbyJoinRequest.getUserName());

            //notify all users of the join
            LobbyJoinBroadcast lobbyJoinBroadCast = new LobbyJoinBroadcast(lobbyJoinRequest.getUserName());
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + lobbyJoinRequest.getLobbyHash(), lobbyJoinBroadCast);

            //notify the joining user that the join is successful
            return new LobbyJoinResponse(true, lobbies.get(lobbyJoinRequest.getLobbyHash()));
        }

        System.out.println("Lobby Join failed on Key " + lobbyJoinRequest.getLobbyHash() + " from User " + lobbyJoinRequest.getUserName());
        return new LobbyJoinResponse(false, null);
    }

    @PostMapping("/create")
    @CrossOrigin
    public LobbyCreationResponse createLobby(@RequestBody LobbyCreationRequest lobbyCreationRequest) {
        //create new lobby
        Lobby lobby = new Lobby(lobbyCreationRequest.getUserHash());
        lobby.setLobbyName(lobbyCreationRequest.getLobbyName());
        lobby.setLobbyDescription(lobbyCreationRequest.getLobbyDescription());
        lobby.setCardType(lobbyCreationRequest.getLobbyCardType());
        //add admin to lobby
        lobby.addUser(lobbyCreationRequest.getUserHash(), lobbyCreationRequest.getUserName());
        lobby.setAdminHash(lobbyCreationRequest.getUserHash());

        //add lobby to list of existing lobbies
        lobbies.put(lobbyCreationRequest.getLobbyHash(), lobby);

        System.out.println("New Lobby created: " + lobby + " by " + lobby.getAdminHash());
        return new LobbyCreationResponse(true, lobby);
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
        LobbyStartResponse lobbyStartResponse = new LobbyStartResponse();
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, lobbyStartResponse);
    }

    @MessageMapping("/lobby/{id}/addUserStory")
    public void addUserStory(@DestinationVariable String id, UserStory userStory) {

        UserStoryBroadCast userStoryBroadCast = new UserStoryBroadCast(userStory);
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, userStoryBroadCast);
    }
}