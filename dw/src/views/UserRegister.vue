<template>
    <h2>Cadastrar Usuário</h2>
    <v-combobox
    dense
>   </v-combobox>
</template>
<script>
  export default {
    data () {
      return {
        select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
      }
    },
  }
</script>