# Stage 1: Build Spring Boot application
FROM gradle:jdk17 as builder
WORKDIR /app
COPY . .
RUN chmod +x gradlew  # Ensure Gradle wrapper has execute permissions
RUN ./gradlew build -x test  # Exclude tests to speed up build

# Stage 2: Run the application
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
