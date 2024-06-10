package com.example.messagingstompwebsocket;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.*;
import com.example.messagingstompwebsocket.Message.Broadcast.LobbyJoinBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.VoteBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.LobbyStartBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.ReadyUpBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.UserStoryBroadcast;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyCreationRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyJoinRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyStartRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.ReadyUpRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.Vote;
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
        // if the lobby, the user tries to join, exists
        if (lobbies.containsKey(lobbyJoinRequest.getLobbyHash()) && !lobbyJoinRequest.getUserHash().isEmpty()) {
            System.out.println("Lobby Join succeeded on Key " + lobbyJoinRequest.getLobbyHash() + " from User "
                    + lobbyJoinRequest.getUserHash());

            // add user to lobby
            lobbies.get(lobbyJoinRequest.getLobbyHash()).addUser(lobbyJoinRequest.getUserHash(),
                    lobbyJoinRequest.getUserName(), lobbyJoinRequest.getPublicUserHash());

            // notify all users of the join
            LobbyJoinBroadcast lobbyJoinBroadCast = new LobbyJoinBroadcast(lobbyJoinRequest.getUserName(),
                    lobbyJoinRequest.getPublicUserHash());
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + lobbyJoinRequest.getLobbyHash(), lobbyJoinBroadCast);

            // notify the joining user that the join is successful
            return new LobbyJoinResponse(true, lobbies.get(lobbyJoinRequest.getLobbyHash()));
        }

        System.out.println("Lobby Join failed on Key " + lobbyJoinRequest.getLobbyHash() + " from User "
                + lobbyJoinRequest.getUserName());
        return new LobbyJoinResponse(false, null);
    }

    @PostMapping("/create")
    @CrossOrigin
    public LobbyCreationResponse createLobby(@RequestBody LobbyCreationRequest lobbyCreationRequest) {
        // create new lobby
        Lobby lobby = new Lobby(lobbyCreationRequest.getUserHash());
        lobby.setLobbyName(lobbyCreationRequest.getLobbyName());
        lobby.setLobbyDescription(lobbyCreationRequest.getLobbyDescription());
        lobby.setCardType(lobbyCreationRequest.getLobbyCardType());
        // add admin to lobby
        lobby.addUser(lobbyCreationRequest.getUserHash(), lobbyCreationRequest.getUserName(),
                lobbyCreationRequest.getPublicUserHash());
        lobby.setAdminHash(lobbyCreationRequest.getUserHash());

        // add lobby to list of existing lobbies
        lobbies.put(lobbyCreationRequest.getLobbyHash(), lobby);

        System.out.println("New Lobby created: " + lobby + " by " + lobby.getAdminHash());
        return new LobbyCreationResponse(true, lobby);
    }

    @MessageMapping("/lobby/{id}/startGame")
    public void startLobby(@DestinationVariable String id, LobbyStartRequest lobbyStartRequest) {
        Lobby lobby = lobbies.get(id);
        if (lobby.getAdminHash().equals(lobbyStartRequest.getUserHash())) {
            lobby.lobbyStatus = "lobby";
            LobbyStartBroadcast lobbyStartBroadcast = new LobbyStartBroadcast();

            System.out.println("Lobby " + id + "started by " + lobbyStartRequest.getUserHash());
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, lobbyStartBroadcast);
        }

    }

    @MessageMapping("/lobby/{id}/addUserStory")
    public void addUserStory(@DestinationVariable String id, UserStory userStory) {
        int userStoryIndex = lobbies.get(id).addUserStory(userStory);
        UserStoryBroadcast userStoryBroadCast = new UserStoryBroadcast(userStory, userStory.userStoryHash);
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, userStoryBroadCast);
    }

    @MessageMapping("/lobby/{id}/readyUp")
    public void readyUp(@DestinationVariable String id, ReadyUpRequest readyUpRequest) {
        ReadyUpBroadcast readyUpBroadcast = new ReadyUpBroadcast(
                lobbies.get(id).getUser(readyUpRequest.getUserHash()).getPublicUserHash());
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, readyUpBroadcast);
    }

    @MessageMapping("/lobby/{id}/vote")
    public void vote(@DestinationVariable String id, Vote vote) {
        lobbies.get(id).getUser(vote.getUserHash()).getPublicUserHash();
        VoteBroadcast voteBroadcast = new VoteBroadcast();
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, voteBroadcast);
    }

    public void setCurrentUserStory(String id){

    }
}