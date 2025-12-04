package com.example.Course.Registration.System.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "courses")
public class Course {
    @Id
    private String courseId;
    private String courseName;
    private String trainer;
    private int durationInWeeks;

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public int getDurationInWeeks() {
        return durationInWeeks;
    }

    public void setDurationInWeeks(int durationInWeeks) {
        this.durationInWeeks = durationInWeeks;
    }
}
