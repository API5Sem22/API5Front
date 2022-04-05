<template>
<div class="registerUser">
  <div class="item">
    <h2 class="title">Cadastrar Usuário</h2>
  </div>
  <div class="item">
  <ui-select
    class="selectBox"
    id="userFunction"
    v-model="functionUser"
    :options="userFunction"
    :disabled="controls.disabled"
    @functionUser="onSelected($event)"
    default-label="Função do Usuário"
    secondary
  >
  Função do Usuário
  </ui-select>
  <ui-textfield
    v-model="departamento"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Departamento
  </ui-textfield>
  <ui-select
    class="selectBox"
    id="userLevel"
    v-model="levelUser"
    :options="userLevel"
    :disabled="controls.disabled"
    @selected="onSelectedLevel($event)"
    default-label="Nivel de carteira"
  >
  Nivel de carteira
  </ui-select>
</div>
<div class="item">
  <ui-textfield
    v-model="nome"
    class="uiInput"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Nome
  </ui-textfield>
  <ui-textfield
    v-model="sobrenome"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Sobrenome
  </ui-textfield>
  <ui-textfield
    v-model="email"
    class="uiInput"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Email
  </ui-textfield>
</div>
<div class="item">
    <ui-textfield
    v-model="id"
    class="uiInput"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  ID
  </ui-textfield>
    <ui-textfield
    v-model="senha"
    class="uiInput"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Senha 
  </ui-textfield>
</div>
<div class="item2">
<ui-button class="saveButton" unelevated>Salvar</ui-button>
</div>
</div>
</template>
<script src="./FormCreateUser.js"></script>
<style lang="scss" scoped>
  @import "./FormCreateUser.scss";
</style>