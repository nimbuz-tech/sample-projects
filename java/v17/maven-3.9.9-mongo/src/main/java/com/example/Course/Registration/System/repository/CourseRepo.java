package com.example.Course.Registration.System.repository;

import com.example.Course.Registration.System.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends MongoRepository<Course, String> {
}
