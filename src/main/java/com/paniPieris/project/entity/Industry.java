package com.paniPieris.project.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="industry")
@Getter
@Setter
// バグ対策で使用しない。 @Data
public class Industry {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "industry_id")
	private Long industry_id;
	
	@Column(name = "industry_name")
	private String industry_name;
	
	// テーブルには存在しない。
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "industry")
	private Set<Company> company;

}
