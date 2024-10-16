package br.itb.projeto.Tcc_Plus.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "Aluno")
public class Aluno {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private long rm;
	private String email;
	private String statusAluno;
	@ManyToOne
	@JoinColumn(name = "turma_id")
	private Turma turma;
	@ManyToOne
	@JoinColumn(name = "usuario_id")
    private Usuario usuario;


	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getRm() {
		return rm;
	}
	public void setRm(long rm) {
		this.rm = rm;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Turma getTurma() {
		return turma;
	}
	public void setTurma(Turma turma) {
		this.turma = turma;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public long getId() {
		return id;
	}
	public String getStatusAluno() {
		return statusAluno;
	}
	public void setStatusAluno(String statusAluno) {
		this.statusAluno = statusAluno;
	}
	
	
	
	
	
	
	
	
	
}
