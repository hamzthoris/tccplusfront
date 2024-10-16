package br.itb.projeto.Tcc_Plus.model.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.Tcc_Plus.model.entity.Turma;
@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long> {
 
    Turma findById(long id);
	Turma findByNome(String nome);

}
