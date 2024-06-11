package com.devSystem.__06_24.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devSystem.__06_24.model.Doador;

public interface DoadorRepository extends JpaRepository<Doador, Long> {
    
}
