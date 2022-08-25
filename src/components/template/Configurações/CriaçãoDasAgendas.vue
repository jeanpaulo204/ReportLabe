<template> 
  <div class="container py-4">
    <h2 class="text-bg-primary p-3">Nome Da Escola</h2>
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
  
  <div class="texto">
 
  <p>Alguns detalhes</p>
  <ul class="texto1">
  <li> Considere cada ambiente uma agenda</li>
  <li> Clique no ícone para alterá-lo</li>
  <li> Ao inserir uma nova agenda, altere o ícone dela</li>
  <li> Delete a agenda e todos as informações vínculadas a ela támbem serão deletadas</li>
</ul>

<v-col cols="15" sm="10" md="18">

<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Nome Agenda">
  </div>

  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Tecnologia</option>
      <option value="1">Não Criar Relatorio</option>
      <option value="2">Criar Relatorio</option>
    </select>
  </div>

  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Avatar</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Icone</option>
      <option value="1">👤</option>
      <option value="2">👨‍🎓</option>
      <option value="3">👨🏼‍💻</option>
    </select>
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
