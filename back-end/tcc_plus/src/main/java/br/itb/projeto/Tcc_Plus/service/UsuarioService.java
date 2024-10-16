package br.itb.projeto.Tcc_Plus.service;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.Tcc_Plus.model.entity.Usuario;

import br.itb.projeto.Tcc_Plus.model.repository.UsuarioRepository;
import jakarta.transaction.Transactional;


@Service
public class UsuarioService {

	private UsuarioRepository usuarioRepository;

	public UsuarioService(UsuarioRepository usuarioRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
	}

	public List<Usuario> findAll() {
		List<Usuario> usuarios = usuarioRepository.findAll();
		return usuarios;
	}
	
	   public Usuario findByEmail(String email) {
	        return usuarioRepository.findByEmail(email);
	    }
	   
	   public Usuario findById(long id) {
			Usuario usuario = 
					usuarioRepository
					.findById(id).orElseThrow();

			return usuario;
		}

    	
    	@Transactional
    	public Usuario create(Usuario usuario) {
    		
    		String senha = Base64.getEncoder()
    			.encodeToString(usuario.getSenha().getBytes());
    		
    		usuario.setSenha(senha);
    		usuario.setDataCadastro(LocalDateTime.now());
    		usuario.setStatusUsuario("ATIVO");
    		
    		return usuarioRepository.save(usuario);
    	}

    	@Transactional
    	public Usuario signin(String email, String senha) {
    		Usuario usuario = usuarioRepository.findByEmail(email);

    		if (usuario.getStatusUsuario().equals("ATIVO")) {
    			byte[] decodePass = Base64.getDecoder().decode(usuario.getSenha());
    			if (new String(decodePass).equals(senha)) {
    				return usuario;
    			}
    		}
    		return null;
    	}
    	
    	@Transactional
    	public Usuario inativar(long id) {
    		Optional<Usuario> _usuario = usuarioRepository.findById(id);
    		if (_usuario.isPresent()) {
    			Usuario usuarioAtualizada = _usuario.get();
    			usuarioAtualizada.setStatusUsuario("INATIVO");
    			
    			return usuarioRepository.save(usuarioAtualizada);
    		}
    		return null;
    	}
    	@Transactional
    	public Usuario reativar(long id) {
    		Optional<Usuario> _usuario = 
    				usuarioRepository.findById(id);
    		
    		if (_usuario.isPresent()) {
    			Usuario usuarioAtualizado = _usuario.get();
    			String senha = Base64.getEncoder()
    					.encodeToString("12345678".getBytes());
    				
    			usuarioAtualizado.setSenha(senha);
    			usuarioAtualizado.setDataCadastro(LocalDateTime.now());
    			usuarioAtualizado.setStatusUsuario("ATIVO");
    			
    			return usuarioRepository.save(usuarioAtualizado);
    		}
    		return null;
    		}
    	@Transactional
    	public Usuario update(long id, Usuario usuario) {
    		// Verifica se o usuário existe no banco de dados
    		Optional<Usuario> _usuario = usuarioRepository.findById(id);
     
    		if (_usuario.isPresent()) {
    			Usuario usuarioAtualizado = _usuario.get();
     
    			usuarioAtualizado.setNome(usuario.getNome());
    			usuarioAtualizado.setEmail(usuario.getEmail());
     
    
    			return usuarioRepository.save(usuarioAtualizado);
    		}
     

    		return null;
    	}
}