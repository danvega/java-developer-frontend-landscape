package dev.danvega.chatdv_htmx;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
public class ChatController {

    private static final Logger log = LoggerFactory.getLogger(ChatController.class);
    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @GetMapping("")
    public String home() {
        return "index";
    }
    
    @PostMapping("/generate")
    public List<ModelAndView> generate(@RequestParam String message) {
        log.info("User Message: {}", message);
        String response = chatClient.prompt()
                .user(message)
                .call()
                .content();
        
        return List.of(
            new ModelAndView("response :: responseFragment", 
                Map.of("response", response)),
            new ModelAndView("todays-message-list :: messageFragment", 
                Map.of("message", message)),
            new ModelAndView("chat-form :: formFragment")
        );
    }

}
