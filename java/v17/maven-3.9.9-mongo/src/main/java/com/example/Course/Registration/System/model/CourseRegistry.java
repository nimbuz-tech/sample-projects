package com.example.Course.Registration.System.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "course_registry")
public class CourseRegistry {

    @Id
    private String id; // MongoDB ID (usually ObjectId)

    private String name;
    private String emailId;
    private String courseName;

    public CourseRegistry() {
        // Default constructor for Spring Data
    }

    public CourseRegistry(String name, String emailId, String courseName) {
        this.name = name;
        this.emailId = emailId;
        this.courseName = courseName;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
