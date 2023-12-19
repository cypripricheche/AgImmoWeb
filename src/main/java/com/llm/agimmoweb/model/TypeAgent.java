package com.llm.agimmoweb.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class TypeAgent {
	int 	typeAgentIdt;
	String 	typeAgentLbl;
	String 	typeAgentLbc;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "typeAgent")
    private List<Agent> agents;

    // Getter et Setter
}