package com.example.Course.Registration.System.repository;

import com.example.Course.Registration.System.model.CourseRegistry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRegistryRepo extends MongoRepository<CourseRegistry, String> {
}
