package com.devSystem.um_pra_muitos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codProd;

    @NotBlank(message = "O campo do fabricante é obrigatório!")
    @Size(min=2, message = "O número mínimo de caracter é igual a 2!")
    private String nomeProd;

    @NotNull
    @Min(value=1, message = "O valor mínimo pe de 1 digito!!")
    private Integer qtdeProd;

    @ManyToOne
    @JoinColumn(name = "fabricante.id",
    referencedColumnName = "codFab", nullable = false)
    @JsonIgnore
    private Fabricante fabricante;

    public Produto() {}

    public Long getCodProd() {
        return codProd;
    }

    public void setCodProd(Long codProd) {
        this.codProd = codProd;
    }

    public String getNomePrdo() {
        return nomeProd;
    }

    public void setNomePrdo(String nomePrdo) {
        this.nomeProd = nomePrdo;
    }

    public Integer getQtdeProd() {
        return qtdeProd;
    }

    public void setQtdeProd(Integer qtdeProd) {
        this.qtdeProd = qtdeProd;
    }

    public Fabricante getFabricante() {
        return fabricante;
    }

    public void setFabricante(Fabricante fabricante) {
        this.fabricante = fabricante;
    }
}
