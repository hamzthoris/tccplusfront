package br.itb.projeto.Tcc_Plus.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import br.itb.projeto.Tcc_Plus.model.entity.Projeto;
import br.itb.projeto.Tcc_Plus.model.entity.Usuario;
import br.itb.projeto.Tcc_Plus.service.ProjetoService;

@RestController
@RequestMapping("/projeto/")
public class ProjetoController {
	private ProjetoService projetoService;

	public ProjetoController(ProjetoService projetoService) {
		super();
		this.projetoService = projetoService;
	}

	@GetMapping("findAll")
	public ResponseEntity<List<Projeto>> findAll() {
		List<Projeto> projetos = projetoService.findAll();
		return new ResponseEntity<List<Projeto>>(projetos, HttpStatus.OK);

	}

	@GetMapping("findByNome/")
	public ResponseEntity<Projeto> findByNome(@RequestParam("nome") String nome) {
		Projeto projetos = projetoService.findByNome(nome);
		return new ResponseEntity<>(projetos, HttpStatus.OK);
	}

	@GetMapping("findById/{id}")
	public ResponseEntity<Projeto> findById(@PathVariable("id") long id) {
		
		Projeto projetos = projetoService.findById(id);
		return new ResponseEntity<>(projetos, HttpStatus.OK);
	}
	
	@GetMapping("findByUsuario/{id}")
	public ResponseEntity<Projeto> findByUsuario(@PathVariable("id") long id) {
		
		Projeto projetos = projetoService.findByUsuario(id);
		return new ResponseEntity<>(projetos, HttpStatus.OK);
	}

	@PostMapping("create/{email}")
	public ResponseEntity<Projeto> create(
			@RequestParam(value = "file", required = false) MultipartFile file,
			@ModelAttribute Projeto projeto, @PathVariable String email) {
		
		Projeto _projeto = projetoService.create(file, projeto, email);
		return new ResponseEntity<Projeto>(_projeto, HttpStatus.OK);
	}
    @PutMapping("inativar/{id}")
    public ResponseEntity<Projeto> inativar(
    		@PathVariable long id){
    	
    	Projeto projeto = projetoService.inativar(id);
    	
    	return new ResponseEntity<Projeto>(
    			projeto, HttpStatus.OK);
    }
    @PutMapping("reativar/{id}")
    public ResponseEntity<Projeto> reativar(
    		@PathVariable long id){
    	
    	Projeto projeto = projetoService.reativar(id);
    	
    	return new ResponseEntity<Projeto>(
    			projeto, HttpStatus.OK);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<?> update(
    		@PathVariable long id, @RequestBody Projeto projeto) {

    	Projeto _projeto = projetoService.update(id, projeto);

    	return new ResponseEntity<Projeto> (_projeto, HttpStatus.OK);

    }



}
