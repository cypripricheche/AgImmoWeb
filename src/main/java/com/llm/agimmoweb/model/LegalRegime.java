package com.llm.agimmoweb.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class LegalRegime {
	int 	legalRegimeIdt;
	String	legalRegimeLbl;
	String	legalRegimeLbc;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "legalRegime")
    private List<Company> companies;

    // Getter et Setter
}