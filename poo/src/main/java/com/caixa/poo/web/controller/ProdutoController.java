package com.caixa.poo.web.controller;

import com.caixa.poo.entities.Produto;
import com.caixa.poo.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Produto>> Buscar(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<Produto>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.getaAll());
    }

    @PostMapping
    public ResponseEntity<Long> criar(@RequestBody Produto p){
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.criar(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        produtoService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
