package br.itb.projeto.Tcc_Plus.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.Tcc_Plus.model.entity.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    Curso findById(long id);
}
