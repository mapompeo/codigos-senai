package br.com.devsistemas.APIRest.repository;

import br.com.devsistemas.APIRest.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {

}