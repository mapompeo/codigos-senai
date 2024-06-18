package com.devSystem.um_pra_muitos.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "fabricantes")
public class Fabricante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codFab;

    @NotBlank(message = "O campo do fabricante é obrigatório!")
    @Size(min=2, message = "O número mínimo de caracter é igual a 2!")
    private String nomeFab;

    @OneToMany(mappedBy = "fabricante",
    cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Produto> produto;

    public Fabricante(){ }

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

    public List<Produto> getProduto() {
        return produto;
    }

    public void setProduto(List<Produto> produto) {
        this.produto = produto;
    }
}
