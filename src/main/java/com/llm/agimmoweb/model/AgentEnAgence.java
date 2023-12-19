package com.llm.agimmoweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
@IdClass(AgentEnAgenceId.class)
public class AgentEnAgence {
    @Id
    private Long agentId; // This field is part of the composite primary key

    @Id
    private Long companyId; // This field is part of the composite primary key

    @ManyToOne
    @MapsId("agentId")
    private Agent agent;

    @ManyToOne
    @MapsId("companyId")
    private Company company;

    // Getter and Setter methods for fields
}