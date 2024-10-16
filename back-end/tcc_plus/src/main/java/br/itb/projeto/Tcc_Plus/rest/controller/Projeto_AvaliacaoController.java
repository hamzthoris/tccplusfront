package br.itb.projeto.Tcc_Plus.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.itb.projeto.Tcc_Plus.model.entity.Projeto_Avaliacao;
import br.itb.projeto.Tcc_Plus.service.Projeto_AvaliacaoService;

@RestController
@RequestMapping("/Projeto_Avaliacao/")
public class Projeto_AvaliacaoController {
	private Projeto_AvaliacaoService projeto_AvaliacaoService;

	public Projeto_AvaliacaoController(Projeto_AvaliacaoService projeto_AvaliacaoService) {
		super();
		this.projeto_AvaliacaoService = projeto_AvaliacaoService;
	}
	@GetMapping("findAll")
	public ResponseEntity<List<Projeto_Avaliacao>> findAll(){
		List <Projeto_Avaliacao> projeto_Avaliacoes = projeto_AvaliacaoService.findAll();
		return new ResponseEntity<List<Projeto_Avaliacao>>(projeto_Avaliacoes, HttpStatus.OK);
	}
    @GetMapping("/findById/{id}")
    public ResponseEntity<Projeto_Avaliacao> findById(@PathVariable("id") long id) {
        Projeto_Avaliacao projeto_Avaliacoes = projeto_AvaliacaoService.findById(id);
        return new ResponseEntity<>(projeto_Avaliacoes, HttpStatus.OK);
    }
    @PutMapping("inativar/{id}")
    public ResponseEntity<Projeto_Avaliacao> inativar(
    		@PathVariable long id){
    	
    	Projeto_Avaliacao projeto_Avaliacao = projeto_AvaliacaoService.inativar(id);
    	
    	return new ResponseEntity<Projeto_Avaliacao>(
    			projeto_Avaliacao, HttpStatus.OK);
    }

    @PutMapping("reativar/{id}")
    public ResponseEntity<Projeto_Avaliacao> reativar(
    		@PathVariable long id){
    	
    	Projeto_Avaliacao projeto_Avaliacao = projeto_AvaliacaoService.reativar(id);
    	
    	return new ResponseEntity<Projeto_Avaliacao>(
    			projeto_Avaliacao, HttpStatus.OK);
    }
    	
    	
    @PostMapping("create")
    public ResponseEntity<Projeto_Avaliacao> create (
    			@RequestBody Projeto_Avaliacao projeto_Avaliacao){
    	
    	Projeto_Avaliacao _projeto_Avaliacao = 
    			projeto_AvaliacaoService.create(projeto_Avaliacao);
    	
    	return new ResponseEntity<Projeto_Avaliacao>
    			      (_projeto_Avaliacao, HttpStatus.OK);	
    }
}
