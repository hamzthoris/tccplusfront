package br.itb.projeto.Tcc_Plus.model.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.Tcc_Plus.model.entity.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long>{
	Aluno findByRm(long rm);
	Aluno findByEmail(String email);
	
}
