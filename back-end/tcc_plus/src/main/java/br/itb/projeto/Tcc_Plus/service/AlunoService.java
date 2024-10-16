
package br.itb.projeto.Tcc_Plus.service;


import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import br.itb.projeto.Tcc_Plus.model.entity.Aluno;
import br.itb.projeto.Tcc_Plus.model.repository.AlunoRepository;
import jakarta.transaction.Transactional;

@Service
public  class AlunoService {
	private AlunoRepository alunoRepository;
	
	public AlunoService(AlunoRepository alunoRepository) {
		this.alunoRepository = alunoRepository;
	}

	public List<Aluno> findAll() {
		List<Aluno> alunos = alunoRepository.findAll();

		return alunos;
	}
	public Aluno findByRm(long rm) {

		return alunoRepository.findByRm(rm);
	}
	public Aluno findById(long id) {
		Aluno aluno = alunoRepository.findById(id).orElseThrow();

		return aluno;
	}
@Transactional
public Aluno create(Aluno aluno) {
    
	
   aluno.setStatusAluno("ATIVO");
	
	return alunoRepository.save(aluno);

	
	
}

@Transactional
public Aluno inativar(long id) {
	Optional<Aluno> _aluno = alunoRepository.findById(id);
	if (_aluno.isPresent()) {
		Aluno alunoAtualizada = _aluno.get();
		alunoAtualizada.setStatusAluno("INATIVO");
		
		return alunoRepository.save(alunoAtualizada);
	}
	return null;
}
@Transactional
public Aluno reativar(long id) {
	Optional<Aluno> _aluno = 
			alunoRepository.findById(id);
	
	if (_aluno.isPresent()) {
		Aluno alunoAtualizado = _aluno.get();
		alunoAtualizado.setStatusAluno("ATIVO");
		
		return alunoRepository.save(alunoAtualizado);
	}
	return null;
	}

	
}
