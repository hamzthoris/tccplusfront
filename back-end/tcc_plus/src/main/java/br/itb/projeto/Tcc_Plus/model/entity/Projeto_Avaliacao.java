package br.itb.projeto.Tcc_Plus.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Projeto_Avaliacao")
public class Projeto_Avaliacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String ano;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	private double nota_doc;
	private double nota_apresentacao;
	private double nota_frontEnd;
	private double nota_backEnd;
	private double nota_mobile;
	private double nota_final;
	private String obs_projeto;
	private String statusAvaliacao;
	
	@ManyToOne
	@JoinColumn(name = "projeto_id")
	private Projeto projeto;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public double getNota_doc() {
		return nota_doc;
	}

	public void setNota_doc(double nota_doc) {
		this.nota_doc = nota_doc;
	}

	public double getNota_apresentacao() {
		return nota_apresentacao;
	}

	public void setNota_apresentacao(double nota_apresentacao) {
		this.nota_apresentacao = nota_apresentacao;
	}

	public double getNota_frontEnd() {
		return nota_frontEnd;
	}

	public void setNota_frontEnd(double nota_frontEnd) {
		this.nota_frontEnd = nota_frontEnd;
	}

	public double getNota_backEnd() {
		return nota_backEnd;
	}

	public void setNota_backEnd(double nota_backEnd) {
		this.nota_backEnd = nota_backEnd;
	}

	public double getNota_mobile() {
		return nota_mobile;
	}

	public void setNota_mobile(double nota_mobile) {
		this.nota_mobile = nota_mobile;
	}

	public double getNota_final() {
		return nota_final;
	}

	public void setNota_final(double nota_final) {
		this.nota_final = nota_final;
	}

	public String getObs_projeto() {
		return obs_projeto;
	}

	public void setObs_projeto(String obs_projeto) {
		this.obs_projeto = obs_projeto;
	}

	public String getStatusAvaliacao() {
		return statusAvaliacao;
	}

	public void setStatusAvaliacao(String statusAvaliacao) {
		this.statusAvaliacao = statusAvaliacao;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}

	
}
