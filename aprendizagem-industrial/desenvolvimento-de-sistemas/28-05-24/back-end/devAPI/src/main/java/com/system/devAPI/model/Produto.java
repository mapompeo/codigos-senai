package com.system.devAPI.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codProduto;

    private String nome;
    private String marca;
    private Integer quantidade;
    private LocalDate data;
    private LocalTime hora;

    public Produto() {

    }

    @Override
    public String toString() {
        return toString().format("| Nome: %s \n" +
                               "  | Código: %d \n" +
                               "  | Marca: %s \n" +
                               "  | Quantidade: %d \n" +
                               "  | Data: %s \n" +
                               "  | Hora: %s \n",
                                 getNome(),getCodProduto(),getMarca(),getQuantidade(),getData(),getHora());
    }

    public Long getCodProduto() {
        return codProduto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }
}
