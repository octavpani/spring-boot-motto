package com.paniPieris.project.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.paniPieris.project.entity.Company;

@CrossOrigin("http://localhost:4200")
public interface CompanyRepository extends JpaRepository<Company, Long> {
	Page<Company> findByIndustryId(@Param("id") Long id, Pageable pageable);

	Page<Company> findByCompanyNameContaining(@Param("name") String name, Pageable pageable);
}
