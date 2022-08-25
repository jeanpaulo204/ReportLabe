<template> 
  <div class="container py-4">
    <h2 class="text-bg-primary p-3">Nome Da Escola</h2>
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
  
  <div class="texto">
 
  <p>Alguns detalhes</p>
  <ul class="texto1">
  <li> Identifique sua instituição com o nome dela</li>
  <li> Defina um link permamemte para acesso fácil a sua agenda como <span class="red--text">www.reportlab.com.br/sua-agenda</span></li>
</ul>

<v-col cols="15" sm="10" md="18">

<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Nome Abrev. da Instituição">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">escola.reportlab.com.br/</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Instituição">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Tipo</option>
      <option value="1">Escola</option>
      <option value="2">Escola2</option>
      <option value="3">Escola3</option>
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

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
