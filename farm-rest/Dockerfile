### STAGE 1: Build ###
FROM openjdk:17-jdk-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace
COPY src /workspace/src
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw
RUN ./mvnw package -Dmaven.test.skip=true

### STAGE 2: Run ###
FROM openjdk:17-jdk-slim
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]