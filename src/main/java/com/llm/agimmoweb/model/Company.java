package com.llm.agimmoweb.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Company {
	int 		companyIdt;
	String 		companyName;
	int 		companyAddressIdt;
	String		companyTelephone;
	String		companyEmail;
	String 		companyWebSite;
	int 		companyLegalRegime;
	LocalDate 	companyCreationDate;
	String 		companySiren;
	String 		companySiret;
	boolean 	companyAdminSeat;
	String		companyMaps;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "legal_regime_id")
    private LegalRegime legalRegime;

    @OneToMany(mappedBy = "company")
    private List<AgentEnAgence> agentsEnAgence;
    
    @OneToOne
    @JoinColumn(name = "address_id") // Assurez-vous d'utiliser le nom de la colonne approprié
    private Address address;
    // Getter et Setter
}