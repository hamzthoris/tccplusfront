package br.itb.projeto.Tcc_Plus.model.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.Tcc_Plus.model.entity.Projeto_Avaliacao;
@Repository
public interface Projeto_AvaliacaoRepository extends JpaRepository<Projeto_Avaliacao, Long>{
   
}
