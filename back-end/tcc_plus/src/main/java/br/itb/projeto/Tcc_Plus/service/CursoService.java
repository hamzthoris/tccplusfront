package br.itb.projeto.Tcc_Plus.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.itb.projeto.Tcc_Plus.model.repository.CursoRepository;

import br.itb.projeto.Tcc_Plus.model.entity.Curso;
import jakarta.transaction.Transactional;
@Service
public class CursoService {
	private CursoRepository cursoRepository;


	public CursoService(CursoRepository cursoRepository) {
		this.cursoRepository = cursoRepository;
	}

	public List<Curso> findAll() {
		List<Curso> Cursos = cursoRepository.findAll();
		return Cursos;
	}
	public Curso findById(long id) {
		return cursoRepository.findById(id);
	}

	@Transactional
	public Curso create(Curso curso) {
		return cursoRepository.save(curso);

	}
}
