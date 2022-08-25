<template> 
  <div class="container py-4">
    <h2 class="text-bg-primary p-3">N° de aulas por turno</h2>
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
  
  <div class="texto">
 
  <p>Informe o número de aulas de cada dia da semana, nos respectivos turnos.</p>
  <ul class="texto1">
</ul>

<v-col cols="15" sm="10" md="18">

<form class="row gy-2 gx-3 align-items-center">
<table class="table caption-top">

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">SEGUNDA</th>
      <th scope="col">TERÇA</th>
      <th scope="col">QUARTA</th>
      <th scope="col">QUINTA</th>
      <th scope="col">SEXTA</th>
      <th scope="col">SABADO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Matutino</td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Vespertino</td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Noturno</td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
      <td><input class="box" type="number"></td>
    </tr>
    
  </tbody>
</table>
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

.box{
width:50px;
border: 1px solid;
}

</style> 

<script>
  export default {
    name: 'HelloWorld',


  }
</script>
