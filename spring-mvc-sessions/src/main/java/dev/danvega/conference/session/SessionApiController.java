package dev.danvega.conference.session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin
public class SessionApiController {

    private static final Logger log = LoggerFactory.getLogger(SessionApiController.class);
    private final SessionRepository repository;

    public SessionApiController(SessionRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public List<Session> findAll() {
        return repository.findAll();
    }
}
