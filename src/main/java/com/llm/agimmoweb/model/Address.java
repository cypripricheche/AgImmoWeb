package com.llm.agimmoweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String addressDeliveryPoint;
    private String addressNumber;
    private String addressPortLabel;
    private String addressNext;
    private String addressGenerationKey;

    @OneToOne(mappedBy = "address")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "town_id")
    private Town town;

    // Getter and Setter methods for fields
}
