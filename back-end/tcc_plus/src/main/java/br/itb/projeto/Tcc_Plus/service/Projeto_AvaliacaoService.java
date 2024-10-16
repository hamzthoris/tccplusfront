package br.itb.projeto.Tcc_Plus.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.Tcc_Plus.model.entity.Projeto_Avaliacao;



import br.itb.projeto.Tcc_Plus.model.repository.Projeto_AvaliacaoRepository;
import jakarta.transaction.Transactional;

@Service
public class Projeto_AvaliacaoService {
	private Projeto_AvaliacaoRepository projeto_AvaliacaoRepository;

	public Projeto_AvaliacaoService(Projeto_AvaliacaoRepository projeto_AvaliacaoRepository) {
		this.projeto_AvaliacaoRepository = projeto_AvaliacaoRepository;
		}
		public List<Projeto_Avaliacao> findAll() {
			List<Projeto_Avaliacao> projeto_Avaliacaos = projeto_AvaliacaoRepository.findAll();
			return projeto_Avaliacaos;
		}
		public Projeto_Avaliacao findById(long id) {
			return  projeto_AvaliacaoRepository.findById(id).get();
		}
		@Transactional
		public Projeto_Avaliacao create(Projeto_Avaliacao projeto_Avaliacao) {
		    
			
		   projeto_Avaliacao.setStatusAvaliacao("ATIVO");
			
			return projeto_AvaliacaoRepository.save(projeto_Avaliacao);

			
			
		}
		@Transactional
		public Projeto_Avaliacao inativar(long id) {
			Optional<Projeto_Avaliacao> _projeto_Avaliacao = projeto_AvaliacaoRepository.findById(id);
			if (_projeto_Avaliacao.isPresent()) {
				Projeto_Avaliacao projeto_AvaliacaoAtualizada = _projeto_Avaliacao.get();
				projeto_AvaliacaoAtualizada.setStatusAvaliacao("INATIVO");
				
				return projeto_AvaliacaoRepository.save(projeto_AvaliacaoAtualizada);
			}
			return null;
		}
		@Transactional
		public Projeto_Avaliacao reativar(long id) {
			Optional<Projeto_Avaliacao> _projeto_Avaliacao = 
					projeto_AvaliacaoRepository.findById(id);
			
			if (_projeto_Avaliacao.isPresent()) {
				Projeto_Avaliacao projeto_AvaliacaoAtualizado = _projeto_Avaliacao.get();
				projeto_AvaliacaoAtualizado.setStatusAvaliacao("ATIVO");
				
				return projeto_AvaliacaoRepository.save(projeto_AvaliacaoAtualizado);
			}
			return null;
			}

	
}
