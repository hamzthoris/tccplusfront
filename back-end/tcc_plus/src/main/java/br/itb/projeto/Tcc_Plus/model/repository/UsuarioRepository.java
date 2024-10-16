package br.itb.projeto.Tcc_Plus.model.repository;







import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import br.itb.projeto.Tcc_Plus.model.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Usuario findByEmail(String email);

}
