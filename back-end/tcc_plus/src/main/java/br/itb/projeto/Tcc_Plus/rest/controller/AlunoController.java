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
import br.itb.projeto.Tcc_Plus.model.entity.Aluno;
import br.itb.projeto.Tcc_Plus.service.AlunoService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/aluno")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Aluno>> findAll() {
        List<Aluno> alunos = alunoService.findAll();
        return new ResponseEntity<>(alunos, HttpStatus.OK);
    }

    @GetMapping("/findByRm/")
    public ResponseEntity<Aluno> findByRm(@RequestParam("rm") long rm) {
        Aluno alunos = alunoService.findByRm(rm);
        return new ResponseEntity<>(alunos, HttpStatus.OK);
    }
    @GetMapping("/findById/{id}")
    public ResponseEntity<Aluno> findById(@PathVariable("id") long id) {
        Aluno alunos = alunoService.findById(id);
        return new ResponseEntity<>(alunos, HttpStatus.OK);
    }
    @PostMapping("create")
    public ResponseEntity<Aluno> create (
    			@RequestBody Aluno aluno){
    	
    	Aluno _aluno = 
    			alunoService.create(aluno);
    	
    	return new ResponseEntity<Aluno>
    			      (_aluno, HttpStatus.OK);	
    }
    @PutMapping("inativar/{id}")
    public ResponseEntity<Aluno> inativar(
    		@PathVariable long id){
    	
    	Aluno aluno = alunoService.inativar(id);
    	
    	return new ResponseEntity<Aluno>(
    			aluno, HttpStatus.OK);
    }

    @PutMapping("reativar/{id}")
    public ResponseEntity<Aluno> reativar(
    		@PathVariable long id){
    	
    	Aluno aluno = alunoService.reativar(id);
    	
    	return new ResponseEntity<Aluno>(
    			aluno, HttpStatus.OK);
    }

}
