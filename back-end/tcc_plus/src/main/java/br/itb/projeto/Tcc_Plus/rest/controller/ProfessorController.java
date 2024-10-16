package br.itb.projeto.Tcc_Plus.rest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.Tcc_Plus.model.entity.Professor;
import br.itb.projeto.Tcc_Plus.model.entity.Professor;
import br.itb.projeto.Tcc_Plus.service.ProfessorService;


@RestController
@RequestMapping("/Professor/")
public class ProfessorController {
      private ProfessorService professorService;
	public ProfessorController(ProfessorService professorService) {
		super();
		this.professorService = professorService;
	}
	@GetMapping("findAll")
	public ResponseEntity<List<Professor>> findAll(){
		List<Professor> professores = professorService.findAll();
		return new ResponseEntity<List<Professor>>(professores,HttpStatus.OK);
	}
   @GetMapping("findByMatricula/")
   public ResponseEntity<Professor> findByMatricula(@RequestParam long matricula) {
       Professor professores = professorService.findByMatricula(matricula);
       return new ResponseEntity<>(professores, HttpStatus.OK);
   }
   @GetMapping("findById/{id}")
   public ResponseEntity<Professor> findById(@PathVariable long id){
	   Professor professores = professorService.findById(id);
	   return new ResponseEntity<>(professores,HttpStatus.OK);
	   
	}
   @PostMapping("create")
   public ResponseEntity<Professor> create (
   			@RequestBody Professor professor){
   	
   	Professor _professor = 
   			professorService.create(professor);
   	
   	return new ResponseEntity<Professor>
   			      (_professor, HttpStatus.OK);	
   }
   @PutMapping("inativar/{id}")
   public ResponseEntity<Professor> inativar(
   		@PathVariable long id){
   	
   	Professor professor = professorService.inativar(id);
   	
   	return new ResponseEntity<Professor>(
   			professor, HttpStatus.OK);
   }

   @PutMapping("reativar/{id}")
   public ResponseEntity<Professor> reativar(
   		@PathVariable long id){
   	
   	Professor professor = professorService.reativar(id);
   	
   	return new ResponseEntity<Professor>(
   			professor, HttpStatus.OK);
   }


}