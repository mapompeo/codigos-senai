package com.desenvolvedor.Api.Java.repository;

import com.desenvolvedor.Api.Java.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {

}