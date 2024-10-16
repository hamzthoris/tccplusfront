package br.itb.projeto.Tcc_Plus.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import br.itb.projeto.Tcc_Plus.model.entity.Projeto;
import br.itb.projeto.Tcc_Plus.model.entity.Usuario;
import br.itb.projeto.Tcc_Plus.model.repository.ProjetoRepository;
import br.itb.projeto.Tcc_Plus.model.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class ProjetoService {
	private ProjetoRepository projetoRepository;
	private UsuarioRepository usuarioRepository;
	


	public ProjetoService(ProjetoRepository projetoRepository, UsuarioRepository usuarioRepository ) {
		super();
		this.usuarioRepository = usuarioRepository;
		this.projetoRepository = projetoRepository;
	}

	public List<Projeto> findAll() {
		List<Projeto> projetos = projetoRepository.findAll();
		return projetos;
	}

	public Projeto findByNome(String nome) {
		return projetoRepository.findByNome(nome);

	}

	public Projeto findById(long id) {
		return projetoRepository.findById(id).orElseThrow();

	}

	@Transactional
	public Projeto create(MultipartFile file, Projeto projeto, String email) {
		
		if (file != null && file.getSize() > 0) {
			try {
				projeto.setDocumentacao(file.getBytes());   	
				
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			projeto.setDocumentacao(null);
		}
		
		Usuario usuario = usuarioRepository.findByEmail(email);
		
		projeto.setUsuario(usuario);
		projeto.setStatusProjeto("ATIVO");
		return projetoRepository.save(projeto);
	}
	public Projeto inativar(long id) {
		Optional<Projeto> _projeto = projetoRepository.findById(id);
		if (_projeto.isPresent()) {
			Projeto projetoAtualizada = _projeto.get();
			projetoAtualizada.setStatusProjeto("INATIVO");
			
			return projetoRepository.save(projetoAtualizada);
		}
		return null;
	}
	@Transactional
	public Projeto reativar(long id) {
		Optional<Projeto> _projeto = 
				projetoRepository.findById(id);
		
		if (_projeto.isPresent()) {
			Projeto projetoAtualizado = _projeto.get();
			projetoAtualizado.setStatusProjeto("ATIVO");
			
			return projetoRepository.save(projetoAtualizado);
		}
		return null;
		}
	
	@Transactional
	public Projeto update(long id, Projeto projeto) {
		// Verifica se o usuário existe no banco de dados
		Optional<Projeto> _projeto = projetoRepository.findById(id);
 
		if (_projeto.isPresent()) {
			Projeto projetoAtualizado = _projeto.get();
 
			projetoAtualizado.setNome(projeto.getNome());
			projetoAtualizado.setLink_Sistema(projeto.getLink_Sistema());
			projetoAtualizado.setDescricao(projeto.getDescricao());
 

			return projetoRepository.save(projetoAtualizado);
		}
 

		return null;
	}

	public Projeto findByUsuario(long id) {
		Usuario usuario = usuarioRepository.findById(id).get();
		
		return projetoRepository.findByUsuario(usuario);
	}
}

