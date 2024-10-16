package br.itb.projeto.Tcc_Plus.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "Projeto")
public class Projeto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private String descricao;
	private byte[] documentacao;
	private String link_Sistema;
	private String statusProjeto;
	@OneToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public byte[] getDocumentacao() {
		return documentacao;
	}
	public void setDocumentacao(byte[] documentacao) {
		this.documentacao = documentacao;
	}
	public String getLink_Sistema() {
		return link_Sistema;
	}
	public void setLink_Sistema(String link_Sistema) {
		this.link_Sistema = link_Sistema;
	}

	public String getStatusProjeto() {
		return statusProjeto;
	}
	public void setStatusProjeto(String statusProjeto) {
		this.statusProjeto = statusProjeto;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}





}
