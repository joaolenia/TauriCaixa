package com.caixa.poo.services;


import com.caixa.poo.entities.Venda;
import com.caixa.poo.reoisitories.VendaRepository;
import com.caixa.poo.web.dtos.VendaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class VendaService {

    @Autowired
    private VendaRepository vendaRepository;

    public Optional<Venda> getById(Long id) {
        var venda = vendaRepository.findById(id);
        if (venda.isPresent()) {
            return venda;
        } else {
            throw new RuntimeException("venda não encontrada");
        }
    }

    public Long cadastrar(VendaDTO venda) {
        try {
            Venda v = new Venda();
            v.setData(LocalDateTime.now());
            v.setTroco(venda.getPago() - venda.getTotal());
            v.setTotal(venda.getTotal());
            v.setPago(venda.getPago());
            vendaRepository.save(v);
            return v.getId();
        } catch (Exception e) {
            throw new RuntimeException("Deu merda aqui!!" + e.getMessage());
        }
    }

    public List<Venda> getaAll() {
        try {
            return vendaRepository.findAll();
        }catch (Exception e) {
            throw new RuntimeException("Erro ao retornar lista" + e.getMessage());
        }
    }

    public void delete(Long id) {
        try{
            vendaRepository.deleteById(id);
        }catch (Exception e) {
            throw new RuntimeException("Erro ao excluir produto");
        }
    }

}

