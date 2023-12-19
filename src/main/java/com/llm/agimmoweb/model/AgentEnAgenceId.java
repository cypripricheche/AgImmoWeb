package com.llm.agimmoweb.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class AgentEnAgenceId implements Serializable {
    private Long agentId;
    private Long companyId;

    // Constructors, getters, and setters
}