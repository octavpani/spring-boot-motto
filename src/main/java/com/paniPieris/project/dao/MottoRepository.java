package com.paniPieris.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paniPieris.project.entity.Motto;

public interface MottoRepository extends JpaRepository<Motto, Long> {

}
