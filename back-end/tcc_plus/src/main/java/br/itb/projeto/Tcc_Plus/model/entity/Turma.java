package br.itb.projeto.Tcc_Plus.model.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "Turma")
public class Turma {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private int ano;
	private String statusTurma;
	public String getStatusTurma() {
		return statusTurma;
	}
	public void setStatusTurma(String statusTurma) {
		this.statusTurma = statusTurma;
	}
	@ManyToOne
	@JoinColumn(name = "Curso_id")
	private Curso curso;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getAno() {
		return ano;
	}
	public void setAno(int ano) {
		this.ano = ano;
	}
	public Curso getCurso() {
		return curso;
	}
	public void setCurso(Curso curso) {
		this.curso = curso;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getId() {
		return id;
	}
}
