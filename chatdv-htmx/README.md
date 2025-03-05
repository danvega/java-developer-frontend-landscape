# ChatDV HTMX

This is a demo of a Spring Boot application using htmx to add dynamic features without having to write JavaScript. The `ChatController`has 2 methods and the first one can be called without any other dependencies 

```java
@PostMapping("/old-generate")
public String oldGenerate(@RequestParam String message, Model model) {
    String response = chatClient.call(message);
    model.addAttribute("response",response);

    // template :: fragmentName
    return "response :: responseFragment";
}
```

```java
@HxRequest
@PostMapping("/generate")
public HtmxResponse generate(@RequestParam String message, Model model) {
    log.info("User Message: {}", message);
    String response = chatClient.call(message);
    model.addAttribute("response",response);
    model.addAttribute("message",message);

    return HtmxResponse.builder()
            .view("response :: responseFragment")
            .view("todays-message-list :: messageFragment")
            .build();
}
```