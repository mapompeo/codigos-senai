package com.devSystem.back_end.repository;

import com.devSystem.back_end.model.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoadorRepository extends JpaRepository<Doador, Long> {

}