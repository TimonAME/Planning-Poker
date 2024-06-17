package com.example.messagingstompwebsocket;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MappingController {

    @RequestMapping("/lobby/{hash}")
    public String lobby(@PathVariable String hash, Model model) {
        model.addAttribute("hash", hash); // Pass the hash to the template
        return "site2"; // This corresponds to site2.html in the templates directory
    }
}