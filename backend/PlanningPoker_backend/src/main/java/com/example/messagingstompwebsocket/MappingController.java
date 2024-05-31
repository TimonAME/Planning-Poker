package com.example.messagingstompwebsocket;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MappingController {
    @RequestMapping("/lobby/{lobbyHash}")
    public String joinViaLink(@PathVariable String lobbyHash) {
        // Assuming joinedViaLink.html is located in the resources/templates directory
        return "joinedViaLink";
    }
}