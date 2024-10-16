package br.itb.projeto.Tcc_Plus.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.Tcc_Plus.model.entity.Professor;
import br.itb.projeto.Tcc_Plus.model.entity.Projeto;
import br.itb.projeto.Tcc_Plus.model.entity.Usuario;

@Repository
public interface ProjetoRepository extends JpaRepository<Projeto, Long>{
	Projeto findByNome(String nome);

	Projeto findByUsuario(Usuario usuario);
	
 
}
