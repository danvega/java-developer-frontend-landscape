# ChatDV Backend

This is the backend Spring Boot project that uses Spring AI to make calls to Open AI. To run this project locally
you will need an Open AI API key and you will want to update `application.properties`

```properties
spring.ai.openai.api-key=${OPENAI_API_KEY}
spring.ai.openai.chat.options.model=gpt-4o
```