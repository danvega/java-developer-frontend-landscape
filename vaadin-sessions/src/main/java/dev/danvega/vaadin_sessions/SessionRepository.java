package dev.danvega.vaadin_sessions;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Repository
public class SessionRepository {

    private static final Logger log = LoggerFactory.getLogger(SessionRepository.class);
    private final List<Session> sessions = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public SessionRepository(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public List<Session> findAll() {
        return sessions;
    }

    @PostConstruct
    private void init() {

        if(sessions.isEmpty()) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/sessions.json")) {
                Sessions allSessions = objectMapper.readValue(inputStream, Sessions.class);
                log.info("Reading {} sessions from JSON data", allSessions.sessions().size());
                sessions.addAll(allSessions.sessions());
            } catch (IOException e) {
                throw new RuntimeException("Failed to read JSON data", e);
            }
        }
    }
}
