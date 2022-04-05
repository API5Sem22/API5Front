<template>
<h2>Cadastrar Usuário</h2>
<div>
  <ui-select
    class="selectBox"
    id="userFunction"
    v-model="selected"
    :options="userFunction"
    :disabled="controls.disabled"
    @selected="onSelected($event)"
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
  Email Address
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
<div>
    <ui-select
    class="selectBox"
    id="userFunction"
    v-model="selected"
    :options="userFunction"
    :disabled="controls.disabled"
    @selected="onSelected($event)"
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
  Email Address
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
</template>
<script src="./FormCreateUser.js"></script>
<style lang="scss" scoped>
  @import "./FormCreateUser.scss";
</style>