package com.example.messagingstompwebsocket;

import com.example.messagingstompwebsocket.Assets.UserStory;
import com.example.messagingstompwebsocket.Message.*;
import com.example.messagingstompwebsocket.Message.Broadcast.EndVoteBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.LobbyJoinBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.LobbyStartBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.ReadyUpBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.RevokeReadyBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.UserStoryBroadcast;
import com.example.messagingstompwebsocket.Message.Broadcast.UserStorySetter;
import com.example.messagingstompwebsocket.Message.RequestMessage.EndVoteRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyCreationRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyJoinRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.LobbyStartRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.ReadyUpRequest;
import com.example.messagingstompwebsocket.Message.RequestMessage.RevokeReadyRequest;
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

    @MessageMapping("/lobby/{id}/addUserStory")
    public void addUserStory(@DestinationVariable String id, UserStory userStory) {
        lobbies.get(id).addUserStoryHash(userStory.getUserStoryHash());
        UserStoryBroadcast userStoryBroadCast = new UserStoryBroadcast(userStory);
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, userStoryBroadCast);
    }

    @MessageMapping("/lobby/{id}/startGame")
    public void startLobby(@DestinationVariable String id, LobbyStartRequest lobbyStartRequest) {
        Lobby lobby = lobbies.get(id);
        if (lobby.getAdminHash().equals(lobbyStartRequest.getUserHash())) {
            lobby.lobbyStatus = "lobby";
            LobbyStartBroadcast lobbyStartBroadcast = new LobbyStartBroadcast();

            System.out.println("Lobby " + id + "started by " + lobbyStartRequest.getUserHash());
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, lobbyStartBroadcast);
            //message above has to reach the client first
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
            };
            setCurrentUserStory(id);
        }
    }

    public void setCurrentUserStory(String id) {
        if (lobbies.get(id).userStoryHashes.size() > 0) {
            UserStorySetter userStorySetter = new UserStorySetter(lobbies.get(id).userStoryHashes.get(0));
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, userStorySetter);
        }
    }

    @MessageMapping("/lobby/{id}/readyUp")
    public void readyUp(@DestinationVariable String id, ReadyUpRequest readyUpRequest) {
        lobbies.get(id).addVote(readyUpRequest.getUserHash(), readyUpRequest.getValue());

        ReadyUpBroadcast readyUpBroadcast = new ReadyUpBroadcast(
                lobbies.get(id).getUser(readyUpRequest.getUserHash()).getPublicUserHash());
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, readyUpBroadcast);
    }

    @MessageMapping("/lobby/{id}/revokeReady")
    public void revokeReady(@DestinationVariable String id, RevokeReadyRequest revokeReadyRequest) {
        lobbies.get(id).removeVote(revokeReadyRequest.getUserHash());

        RevokeReadyBroadcast revokeReadyBroadcast = new RevokeReadyBroadcast(
                lobbies.get(id).getUser(revokeReadyRequest.getUserHash()).getPublicUserHash());
        simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, revokeReadyBroadcast);
    }

    @MessageMapping("/lobby/{id}/endVote")
    public void endVote(@DestinationVariable String id, EndVoteRequest endVoteRequest) {
        if (lobbies.get(id).getAdminHash().equals(endVoteRequest.getUserHash())) {
            EndVoteBroadcast endVoteBroadcast = new EndVoteBroadcast(lobbies.get(id).getVotes());
            simpMessagingTemplate.convertAndSend("/topic/lobby/" + id, endVoteBroadcast);
        }
    }

    @MessageMapping("/lobby/{id}/finalize")
    public void finalize(@DestinationVariable String id, EndVoteRequest endVoteRequest) {

    }

}