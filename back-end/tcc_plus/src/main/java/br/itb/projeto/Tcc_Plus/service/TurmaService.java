package br.itb.projeto.Tcc_Plus.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import br.itb.projeto.Tcc_Plus.model.repository.TurmaRepository;
import br.itb.projeto.Tcc_Plus.model.entity.Turma;
import jakarta.transaction.Transactional;

@Service
public class TurmaService {
	private TurmaRepository turmaRepository;

	public TurmaService(TurmaRepository turmaRepository) {
		this.turmaRepository = turmaRepository;
	}

	public List<Turma> findAll() {
		List<Turma> turmas = turmaRepository.findAll();
		return turmas;
	}

	public Turma findTurma(String nome) {
		return turmaRepository.findByNome(nome);
	}

	public Turma findId(long id) {
		return turmaRepository.findById(id);
	}

	@Transactional
	public Turma findByNome(String nome) {

		return turmaRepository.findByNome(nome);
	}

	@Transactional
	public Turma inativar(long id) {
		Optional<Turma> _turma = Optional.of(turmaRepository.findById(id));
		if (_turma.isPresent()) {
			Turma turmaAtualizada = _turma.get();
			turmaAtualizada.setStatusTurma("INATIVO");

			return turmaRepository.save(turmaAtualizada);
		}
		return null;
	}

	@Transactional
	public Turma reativar(long id) {
		Optional<Turma> _turma = Optional.of(turmaRepository.findById(id));

		if (_turma.isPresent()) {

			Turma turmaAtualizada = _turma.get();
			turmaAtualizada.setStatusTurma("ATIVO");

			return turmaRepository.save(turmaAtualizada);
		}
		return null;
	}

}
