package com.devSystem.produto.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nome;
    private String descricao;
    private LocalDate dt_validade;
    private Integer quantidade;
    private LocalDate dt_chegada;
    private String nm_fabricante;
    private String categoria;

    public Produto() {}

    @Override
    public String toString() {
        return "Produto{" +
                "codigo=" + codigo +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", dt_validade=" + dt_validade +
                ", quantidade=" + quantidade +
                ", dt_chegada=" + dt_chegada +
                ", nm_fabricante='" + nm_fabricante + '\'' +
                ", categoria='" + categoria + '\'' +
                '}';
    }

    public Long getCodigo() {
        return codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDt_validade() {
        return dt_validade;
    }

    public void setDt_validade(LocalDate dt_validade) {
        this.dt_validade = dt_validade;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public LocalDate getDt_chegada() {
        return dt_chegada;
    }

    public void setDt_chegada(LocalDate dt_chegada) {
        this.dt_chegada = dt_chegada;
    }

    public String getNm_fabricante() {
        return nm_fabricante;
    }

    public void setNm_fabricante(String nm_fabricante) {
        this.nm_fabricante = nm_fabricante;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
