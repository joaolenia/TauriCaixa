package com.caixa.poo.services;

import com.caixa.poo.entities.Produto;
import com.caixa.poo.reoisitories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Optional<Produto> getById(Long id) {
        var produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            return produto;
        } else {
            throw new RuntimeException("Produto nao encontrado");
        }
    }

    public Long criar(Produto p) {
        try {
            produtoRepository.save(p);
            return p.getId();
        } catch (Exception e) {
            throw new RuntimeException("Erro ao cadastrar produto");
        }
    }

    public List<Produto> getaAll() {
        try {
            return produtoRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Erro ao buscar produtos" + e.getMessage());
        }
    }

    public void delete(Long id) {
        try{
            produtoRepository.deleteById(id);
        }catch (Exception e) {
            throw new RuntimeException("Erro ao excluir produto");
        }
    }

}
