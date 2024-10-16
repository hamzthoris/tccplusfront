package br.itb.projeto.Tcc_Plus.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.Tcc_Plus.model.entity.Curso;
import br.itb.projeto.Tcc_Plus.service.CursoService;

@RestController
@RequestMapping("/curso/")
public class CursoController {
  private CursoService cursoService;

public CursoController(CursoService cursoService) {
	super();
	this.cursoService = cursoService;

}
@GetMapping("findAll")
public ResponseEntity<List<Curso>> findAll(){
	List<Curso> cursos = cursoService.findAll();
	
	return new ResponseEntity<List<Curso>>
	(cursos, HttpStatus.OK);
}

@GetMapping("findById/{id}")
public ResponseEntity<Curso> findById(@PathVariable long id){
	Curso cursos = cursoService.findById(id);
	return new ResponseEntity<>(cursos,HttpStatus.OK);
}





	}
    

