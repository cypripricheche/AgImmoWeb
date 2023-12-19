package com.llm.agimmoweb.model;

import java.util.List;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Agent {
	int     agentIdt;
	String 	agentName;
	String 	agentFirstName;
	String 	agentMobile;
	String 	agentPhone;
	String 	agentEmail;
	int 	agentCivility;
	int 	agentType;
	String 	agentLogin;
	String 	agentPwd;
	String 	agentImage;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "type_agent_id")
    private TypeAgent typeAgent;

    @ManyToOne
    @JoinColumn(name = "civility_id")
    private Civility civility;

    @OneToMany(mappedBy = "agent")
    private List<AgentEnAgence> agentsEnAgence;

    // Getter et Setter
}