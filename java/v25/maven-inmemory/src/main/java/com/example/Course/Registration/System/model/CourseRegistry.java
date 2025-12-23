package com.example.Course.Registration.System.model;

public class CourseRegistry {

    private String studentName;
    private String emailId;
    private String courseName;

    public CourseRegistry() {}

    public CourseRegistry(String studentName, String emailId, String courseName) {
        this.studentName = studentName;
        this.emailId = emailId;
        this.courseName = courseName;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
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
