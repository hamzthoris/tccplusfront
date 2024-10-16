package br.itb.projeto.Tcc_Plus.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import br.itb.projeto.Tcc_Plus.model.entity.Professor;
import br.itb.projeto.Tcc_Plus.model.repository.ProfessorRepository;
import jakarta.transaction.Transactional;
@Service
public class ProfessorService {
  private ProfessorRepository professorRepository;

public ProfessorService(ProfessorRepository professorrepository) {
	super();
	this.professorRepository = professorrepository;
}
  public List<Professor> findAll(){
		
		List<Professor> professores = professorRepository.findAll();

		return professores;
  }

public Professor findByMatricula(long matricula) {
		return professorRepository.findByMatricula(matricula);
}
public Professor findById(long id) {
	Professor professor = professorRepository.findById(id).orElseThrow();

	return professor;
}
@Transactional
public Professor create(Professor professor) { 
   professor.setStatusProfessor("ATIVO");
	return professorRepository.save(professor);
}


@Transactional
public Professor inativar(long id) {
	Optional<Professor> _professor = professorRepository.findById(id);
	if (_professor.isPresent()) {
		Professor professorAtualizada = _professor.get();
		professorAtualizada.setStatusProfessor("INATIVO");
		
		return professorRepository.save(professorAtualizada);
	}
	return null;
}
@Transactional
public Professor reativar(long id) {
	Optional<Professor> _professor = 
			professorRepository.findById(id);
	
	if (_professor.isPresent()) {
		Professor professorAtualizado = _professor.get();
		professorAtualizado.setStatusProfessor("ATIVO");
		
		return professorRepository.save(professorAtualizado);
	}
	return null;
	}


}
