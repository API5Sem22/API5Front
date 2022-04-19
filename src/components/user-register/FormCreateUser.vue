<template>
<div class="registerUser">
<ui-form>
  <div class="item">
    <h2 class="title">Cadastrar Usuário</h2>
  </div>
  <div class="item">
    <ui-form-field class="form-item">
      <ui-select
      class="selectBox"
      id="userFunction"
      v-model="formData.cargo.idCargo"
      :options="userFunctionOptions"
      default-label="Função do Usuário"
      secondary
      >
      Função do Usuário
      </ui-select>
    </ui-form-field>
    <ui-form-field class="form-item">
      <ui-textfield
      v-model="formData.departamento"
      helper-text-id="my-text-field-helper-text"
      >
      Departamento
      </ui-textfield>
    </ui-form-field>
    <ui-form-field class="form-item">
      <ui-textfield
      v-model="formData.nome"
      class="uiInput"
      helper-text-id="my-text-field-helper-text"
      >
      Nome
      </ui-textfield>
    </ui-form-field>
  </div>
  <div class="item">

    <ui-form-field class="form-item">
      <ui-textfield
      v-model="formData.email"
      class="uiInput"
      helper-text-id="my-text-field-helper-text"
      >
      Email
      </ui-textfield>
    </ui-form-field>
    <ui-form-field class="form-item">
      <ui-textfield
      input-type="password"
      v-model="formData.senha"
      helper-text-id="my-text-field-helper-text"
      >
      Senha 
      </ui-textfield>
    </ui-form-field>
    <ui-form-field class="form-item">
      <ui-textfield
      input-type="password"
      class="uiInput"
      v-model="formData.rePassword"
      helper-text-id="my-text-field-helper-text"
      >
      Repetir Senha 
      </ui-textfield>
    </ui-form-field>
  </div>
  <div class="item">
    <ui-form-field class="form-item">
      <ui-select
      class="selectBox"
      id="userLevel"
      v-if="formData.cargo.idCargo === 1"
      v-model="formData.carteira.idCarteira"
      :options="userLevelOptions"
      default-label="Nivel de carteira"
      >
      Nivel de carteira
      </ui-select>
    </ui-form-field>
  </div>
  <div class="item error">
  <ui-alert v-if="messages.length" state="error">
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </ui-alert>
  <ui-alert state="success" v-if="sucessMessage !== ''">{{sucessMessage}}</ui-alert>
  </div>
  <div class="item2">
    <ui-form-field>
      <ui-button class="saveButton" @click="onSave()" raised>Salvar</ui-button>
    </ui-form-field>
  </div>
</ui-form>
</div>
</template>
<script src="./FormCreateUser.js"></script>
<style lang="scss" scoped>
  @import "./FormCreateUser.scss";
</style>