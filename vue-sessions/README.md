# Vue 3 Sessions

This is the frontend for the demo that has Vue + Spring Boot in 2 separate applications. To get this to work
you need to have the `spring-mvc-sessions` application running on port `8080`. The reason this works is because of the environment variable set in `.env`. If the Spring Boot application is running on another port you will need to adjust the environment variable. 

```properties
VITE_API_URL=http://localhost:8080
```