<template>
<div class="container">
    <MenuLateral />
  <div>
    <router-view/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import MenuLateral from '@/components/menu/MenuLateral.vue'

export default {
  name: 'HomeView',
  components: {
    MenuLateral
  }
}
</script>
<style lang="scss">

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
