package com.paniPieris.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paniPieris.project.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
