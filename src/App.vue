<template>
<div class="container">
    <MenuLateral v-if="isLoged"/>
  <div>
    <LoginComponent v-if="!isLoged"/>
    <router-view v-if="isLoged" />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import MenuLateral from '@/components/menu/MenuLateral.vue'
import LoginComponent from '@/components/login/LoginComponent.vue'

import store from './store';

export default {
  name: 'HomeView',
  components: {
    MenuLateral,
    LoginComponent
  },
  data () {

  },
  methods: {

  },
  computed: {
    isLoged() {
      return store.state.usuario
    },
    currentRouteName() {
        return this.$route.name;
    }
}
}
</script>
<style lang="scss">
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
  height: 100%;
}
nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
