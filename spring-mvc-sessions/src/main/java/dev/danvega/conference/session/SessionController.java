package dev.danvega.conference.session;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SessionController {

    private final SessionRepository repository;

    public SessionController(SessionRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public String index(Model model) {
        model.addAttribute("sessions",repository.findAll());
        return "index";
    }

}
