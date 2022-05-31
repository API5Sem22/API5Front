<template>
  <div class="menu">
  <div>
    <img src="@/assets/logo.png" class="img-avatar" alt="">
  </div>
  <div class="menu-options">
    <div v-if="isAdmin()">
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
    <div class="menu-option">
      <b @click="openClientMenu()" class="option"><span class="material-icons-outlined option">
        headset_mic
      </span>  Área de Clientes</b>
      <div v-if="openClient" class="options" @click="navigateTo('clientConsult')">
        <b>Editar Cliente</b>
      </div>
      <div v-if="openClient" class="options" @click="navigateTo('vendorFreeWallets')">
        <b>Clientes Livres</b>
      </div>
      <div v-if="openClient" class="options" @click="navigateTo('vendorWallet')">
        <b>Minha Carteira</b>
      </div>
    </div>
  </div>
  <div class="logout">
  <b @click="logout()" class="option"><span class="material-icons-outlined option">
    logout
  </span>Sair</b>
  </div>
  </div>
</template>
<script src="./Menu.js"></script>
<style lang="scss" scoped>
  @import "./Menu.scss";
</style>