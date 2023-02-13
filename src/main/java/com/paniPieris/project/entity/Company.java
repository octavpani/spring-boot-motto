package com.paniPieris.project.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="company")
@Getter
@Setter
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "company_id")
	private Long company_id;
	
	@ManyToOne
	@JoinColumn(name = "industry_id", nullable = false)
	private Industry industry;
	
	@Column(name = "company_name")
	private String company_name;
	
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "company")
	private Motto motoo;
	
	

}
