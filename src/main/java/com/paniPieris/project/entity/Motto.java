package com.paniPieris.project.entity;



import java.util.Date;

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
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="motto")
@Getter
@Setter
public class Motto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "motto_id")
	private Long id;
	
	@OneToOne 
	@JoinColumn(name = "company_id", nullable = false)
	private Company company;
	
	@Column(name = "phrase_1")
	private String phrase1;
	
	@Column(name = "phrase_2")
	private String phrase2;
	
	@Column(name = "phrase_3")
	private String phrase3;
	
	@Column(name = "phrase_4")
	private String phrase4;
	
	@Column(name = "phrase_5")
	private String phrase5;
	
	@Column(name = "phrase_6")
	private String phrase6;
	
	@Column(name = "phrase_7")
	private String phrase7;
	
	@Column(name = "phrase_8")
	private String phrase8;
	
	@Column(name = "phrase_9")
	private String phrase9;
	
	@Column(name = "phrase_10")
	private String phrase10;
	
	@CreationTimestamp
	@Column(name = "date_created")
	private Date dateCreated;
	
	@UpdateTimestamp
	@Column(name = "last_updated")
	private Date lastUpdated;
	

}
