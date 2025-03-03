package dev.danvega.conference.session;

import java.util.List;
import java.util.stream.Collectors;

public record Session (String title, List<String> speakers) {

    public String getSpeakersAsString() {
        return speakers.stream().collect(Collectors.joining(","));
    }

}
