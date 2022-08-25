<template> 
  <div class="container py-4">
    <h2 class="text-bg-primary p-3">Horários da semana</h2>
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
  
  <div class="texto">
 
  <p>Informe o horário de início e fim das aulas</p>
  <ul class="texto1">
</ul>

<v-col cols="15" sm="10" md="18">

<form class="row gy-2 gx-3 align-items-center">
<table class="table caption-top">

  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Matutíno</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Inicío 1° Aula</td>
      <td><input  type="time"></td>
      <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 2° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 3° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    
  </tbody> <br/>
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Vespertino</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row"></th>
      <td>Inicío 1° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 2° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 3° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    
  </tbody> <br/>
      <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Noturno</th>
    </tr>
  </thead>
      <tbody>
    <tr>
      <th scope="row"></th>
      <td>Inicío 1° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 2° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Inicío 3° Aula</td>
      <td><input  type="time"></td>
        <td>Fim</td>
      <td><input  type="time"></td>
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
