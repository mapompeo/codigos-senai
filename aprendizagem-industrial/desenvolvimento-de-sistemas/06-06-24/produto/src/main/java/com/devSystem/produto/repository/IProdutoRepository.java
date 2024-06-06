package com.devSystem.produto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devSystem.produto.model.Produto;

public interface IProdutoRepository extends JpaRepository<Produto, Long>{

}