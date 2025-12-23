package com.example.Course.Registration.System.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;

@Service
public class CourseService {

    private final List<Course> courseList = new ArrayList<>();
    private final List<CourseRegistry> courseRegistryList = new ArrayList<>();

    public CourseService() {

        // Pre-loaded sample courses
        courseList.add(new Course(1, "Java Basics", "Introduction to Java"));
        courseList.add(new Course(2, "Spring Boot", "Learn Spring Boot REST"));
        courseList.add(new Course(3, "Python Fundamentals", "Python from scratch"));
    }

    public List<Course> availableCourses() {
        return courseList;
    }

    public List<CourseRegistry> enrolledStudents() {
        return courseRegistryList;
    }

    public void enrollCourse(String name, String emailId, String courseName) {
        CourseRegistry registry = new CourseRegistry(name, emailId, courseName);
        courseRegistryList.add(registry);
    }
}
