package com.paniPieris.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paniPieris.project.entity.Industry;

@RepositoryRestResource(collectionResourceRel = "industory", path  ="industory")
public interface IndustoryRepository extends JpaRepository<Industry, Long> {

}
