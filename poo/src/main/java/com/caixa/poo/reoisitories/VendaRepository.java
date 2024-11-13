package com.caixa.poo.reoisitories;


import com.caixa.poo.entities.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendaRepository extends JpaRepository<Venda,Long> {
}
