<template> 
  <div class="container py-4">
    <h2 class="text-bg-primary p-3">Cadastro dos professores</h2>
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
  <div class="texto">
  <p>Informe um número de acesso e o nome dos professores</p>
  <p>Alguns detalhes</p>
  <ul class="texto1">
    <li>Professores podem agendar aulas usando seu nº de acesso, normalmente é sua matricula do contrato na escola</li>
  <li>Nome Completo é usados no relatório internos</li>
  <li> Nome Abreviado é exibido na agenda pública, acessível aos outros professores</li> <br/>
</ul>
   <p>É necessário pelo menos 1 para passar esta etapa. Você pode cadastrar mais professores mais tarde também!</p>
<v-col cols="15" sm="10" md="18">


<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Nº Matrícula">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Nome Completo">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Nome Abreviado">
    </div>
  </div>
 
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">SALVAR ALTERAÇÃO</button>
  </div>
</form>

</v-col>
  </div>

      </div>
    </div>
  </div>





</template> 




<style scoped>
.texto{
margin-left: 70px;
}

.texto1{
margin-left: 20px;
}
</style> 

<script>
  export default {
    name: 'HelloWorld',

  }
</script>
