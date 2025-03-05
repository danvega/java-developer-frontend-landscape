package dev.danvega;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin
public class MessageController {

    @GetMapping("")
    public String home() {
        return "Hello, Spring & Vue 👋🏻";
    }
}
