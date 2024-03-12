package at.PlaPo.PlanningPoker;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class LobbyController {
    @MessageMapping("/newLobby")
    @SendTo("/state/newLobby")
    public void createNewLobby(Lobby message) throws Exception {
        System.out.println(message.getKey());
    }
}
