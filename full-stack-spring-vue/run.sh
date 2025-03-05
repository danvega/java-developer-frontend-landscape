#!/bin/zsh

# Run the Spring Boot application
mvn spring-boot:run &

# Wait for the Spring Boot application to start
sleep 5

# Run the frontend application
npm run dev --prefix src/frontend &

# Wait for the frontend application to start
sleep 2

# Open the URL in the default web browser
open http://localhost:5173