package com.paniPieris.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.paniPieris.project.entity.Industry;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "industory", path  ="industory")
public interface IndustoryRepository extends JpaRepository<Industry, Long> {

}
