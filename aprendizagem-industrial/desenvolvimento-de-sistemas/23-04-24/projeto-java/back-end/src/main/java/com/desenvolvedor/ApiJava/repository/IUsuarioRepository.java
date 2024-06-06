package com.desenvolvedor.ApiJava.repository;

import com.desenvolvedor.ApiJava.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
}
