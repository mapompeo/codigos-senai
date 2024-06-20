package com.devSystem.um_pra_muitos.repository;

import com.devSystem.um_pra_muitos.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProdutoRepostitory extends JpaRepository<Produto, Long> {
}
