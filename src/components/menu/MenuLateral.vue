<template>
  <div class="menu">
  <div>
    <img src="@/assets/pp.jpg" class="img-avatar" alt="">
  </div>
  <div>
    <b>Mike Barcelos</b>
  </div>
  <div class="menu-options">
    <div>
      <b @click="openUserMenu()" class="option"><span class="material-icons-outlined option">
        person
      </span>  Área do usuário</b>
      <div v-if="openUser" class="options" @click="navigateTo('userRegister')">
        <b>Cadastrar Usuário</b>
      </div>
      <div v-if="openUser" class="options" @click="navigateTo('userConsult')">
        <b>Consultar Usuário</b>
      </div>
    </div>
    <div class="menu-option" @click="navigateTo('clientConsult')">
      <b class="option"><span class="material-icons-outlined option">
        headset_mic
      </span>  Área de Clientes</b>
    </div>
  </div>
  </div>
</template>
<script src="./Menu.js"></script>
<style lang="scss" scoped>
  @import "./Menu.scss";
</style>