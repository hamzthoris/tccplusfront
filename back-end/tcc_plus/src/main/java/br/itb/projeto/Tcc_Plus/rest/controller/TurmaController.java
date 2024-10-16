package br.itb.projeto.Tcc_Plus.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.Tcc_Plus.model.entity.Turma;
import br.itb.projeto.Tcc_Plus.model.entity.Turma;
import br.itb.projeto.Tcc_Plus.model.entity.Turma;
import br.itb.projeto.Tcc_Plus.service.TurmaService;

@RestController
@RequestMapping("/Turma/")
public class TurmaController {
   private TurmaService turmaService;

public TurmaController(TurmaService turmaService) {
	super();
	this.turmaService = turmaService;
}
@GetMapping("findAll")	
	public ResponseEntity<List<Turma>> findAll(){
		List<Turma> turmas = turmaService.findAll();
		
		return new ResponseEntity<List<Turma>>
		(turmas, HttpStatus.OK);
}
	@GetMapping("findByNome/")
	public ResponseEntity<Turma> findByNome(@RequestParam String nome) {
		Turma turmas = turmaService.findByNome(nome);
		return new ResponseEntity<>(turmas,HttpStatus.OK);
	}
	@GetMapping("findById/{id}")
	public ResponseEntity<Turma> findById(@PathVariable long id){
		Turma turmas = turmaService.findId(id);
	    return new ResponseEntity<>(turmas,HttpStatus.OK);	
	
	}
	@PutMapping("inativar/{id}")
	public ResponseEntity<Turma> inativar(
			@PathVariable long id){
		
		Turma turma = turmaService.inativar(id);
		
		return new ResponseEntity<Turma>(
				turma, HttpStatus.OK);
	}
	@PutMapping("reativar/{id}")
	public ResponseEntity<Turma> reativar(
			@PathVariable long id){
		
		Turma turma = turmaService.reativar(id);	
		return new ResponseEntity<Turma>(
				turma, HttpStatus.OK);
	}
	

}
