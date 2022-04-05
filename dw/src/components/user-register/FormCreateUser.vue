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
  >
  Função do Usuário
  </ui-select>
  <ui-textfield
    v-model="value"
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
    v-model="selected"
    :options="userLevel"
    :disabled="controls.disabled"
    @selected="onSelected($event)"
    default-label="Nivel de carteira"
  >
  Nivel de carteira
  </ui-select>
</div>
<div class="item">
  <ui-textfield
    v-model="value"
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
    v-model="value"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="my-text-field-helper-text"
  >
  Sobrenome
  </ui-textfield>
  <ui-textfield
    v-model="value"
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
    v-model="value"
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
    v-model="value"
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
<ui-button raised>Salvar</ui-button>
</div>
</div>
</template>
<script src="./FormCreateUser.js"></script>
<style lang="scss" scoped>
  @import "./FormCreateUser.scss";
</style>