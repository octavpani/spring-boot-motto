package com.paniPieris.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="motto")
@Data
public class Motto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "motto_id")
	private Long motto_id;
	
	@OneToOne 
	@JoinColumn(name = "company_id", nullable = false)
	private Company company;
	
	@Column(name = "phrase_1")
	private String phrase_1;
	
	@Column(name = "phrase_2")
	private String phrase_2;
	
	@Column(name = "phrase_3")
	private String phrase_3;
	
	@Column(name = "phrase_4")
	private String phrase_4;
	
	@Column(name = "phrase_5")
	private String phrase_5;
	
	@Column(name = "phrase_6")
	private String phrase_6;
	
	@Column(name = "phrase_7")
	private String phrase_7;
	
	@Column(name = "phrase_8")
	private String phrase_8;
	
	@Column(name = "phrase_9")
	private String phrase_9;
	
	@Column(name = "phrase_10")
	private String phrase_10;
	
	@Column(name = "date_created")
	@CreationTimestamp
	private Data date_created;
	
	@UpdateTimestamp
	@Column(name = "last_updated")
	private Data last_updated;
	

}
