package com.caixa.poo.web.controller;

import com.caixa.poo.web.dtos.VendaDTO;
import com.caixa.poo.entities.Venda;
import com.caixa.poo.services.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/vendas")
@CrossOrigin(origins = "*")
public class VendaController {

    @Autowired
    private VendaService vendaService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Venda>> Buscar(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(vendaService.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<Venda>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(vendaService.getaAll());
    }

    @PostMapping
    public ResponseEntity<Long> criar(@RequestBody VendaDTO p){
        return ResponseEntity.status(HttpStatus.OK).body(vendaService.cadastrar(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        vendaService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
