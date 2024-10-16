import React from 'react'
import NavBar from '../../components/NavBar'

const visualizarProfessor = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className='All'>
      <h1 >Área do Professor</h1>
 
 <form className='formfiltrarproj'>
<input type="text" id="projectName" placeholder="Pesquisar nome do Projeto"/>
<select id="filterRoom">
<option value="all">Sala</option>
<option value="INF3EM">INF3EM</option>
<option value="INF3DM">INF3DM</option>
</select>
<button type="button">Filtrar</button>
</form>

 <table>
<thead>
<tr>
<th>Nome do projeto</th>
<th>Sala</th>
<th>Aluno Responsável</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/projetos/tcc-plus">TCC Plus</a></td>
<td>INF3EM</td>
<td>rm86712</td>
</tr>
<tr>
<td><a href="/projetos/uniao-voluntaria">União Voluntária</a></td>
<td>INF3EM</td>
<td>rm86713</td>
</tr>
<tr>
<td><a href="/projetos/rede-de-apoio">Rede de Apoio</a></td>
<td>INF3EM</td>
<td>rm86714</td>
</tr>
<tr>
<td><a href="/projetos/centro-de-treinamento">Centro de Treinamento</a></td>
<td>INF3EM</td>
<td>rm86715</td>
</tr>
<tr>
<td><a href="/projetos/xxx">XXX</a></td>
<td>INF3DM</td>
<td>rm86716</td>
</tr>
</tbody>
</table>



    </div>
    </>
  )
}

export default visualizarProfessor
