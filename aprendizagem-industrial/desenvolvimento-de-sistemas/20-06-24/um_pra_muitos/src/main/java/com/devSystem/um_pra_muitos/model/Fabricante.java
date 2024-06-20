package com.devSystem.um_pra_muitos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "fabricantes")
public class Fabricante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codFab;

    @NotBlank(message = "O campo do fabricante é obrigatório!")
    @Size(min = 2, message = "O número mínimo de caracter é igual a 2!")
    private String nomeFab;

    @OneToMany(mappedBy = "fabricante", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Produto> produtos; // corrigido para plural para refletir a lista

    public Fabricante() {
    }

    @Override
    public String toString() {
        return "Fabricante{" +
                "codFab=" + codFab +
                ", nomeFab='" + nomeFab + '\'' +
                ", produtos=" + (produtos != null ? produtos.size() : 0) + // evitar impressão recursiva
                '}';
    }

    public Long getCodFab() {
        return codFab;
    }

    public void setCodFab(Long codFab) {
        this.codFab = codFab;
    }

    public String getNomeFab() {
        return nomeFab;
    }

    public void setNomeFab(String nomeFab) {
        this.nomeFab = nomeFab;
    }

    public List<Produto> getProdutos() { // corrigido para plural para refletir a lista
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) { // corrigido para plural para refletir a lista
        this.produtos = produtos;
    }
}
