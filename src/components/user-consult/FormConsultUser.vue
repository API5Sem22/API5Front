<template>
  <div class="userConsult">
    <div class="item">
      <h2 class="title">Consultar Usuários</h2>
      <ui-textfield v-model="userEmail" >
        Buscar Email do Usuário
        <template #after>
          <ui-textfield-icon @click="searchUser()">search</ui-textfield-icon>
        </template>
      </ui-textfield>
      <hr class="dotted">
    </div>
    <ui-form>
      <div class="item">
        <ui-form-field class="form-item">
        <ui-textfield
        v-model="formData.email"
        disabled
        >
        Email
        </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield class="uiInput" v-model="formData.userFunction" disabled >Função</ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield v-model="formData.departament" disabled>Departamento</ui-textfield>
        </ui-form-field>
      </div>
      <div class="item">
        <ui-form-field class="form-item">
        <ui-textfield v-model="formData.name" disabled>Nome</ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-select class="selectBox uiInput" id="userFunction"
          v-model="formData.userLevel.idCarteira"
          :options="userLevelOptions"
          v-if="formData.userFunction === 'Vendedor'"
          default-label="Nivel de carteira">
          Nível de Carteira
          </ui-select>
        </ui-form-field>
      </div>
      <div class="item error">
        <ui-alert v-if="messages.length" state="error">
          <ul>
            <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
          </ul>
        </ui-alert>
        <ui-alert state="info" v-if="infoMessage !== ''">{{infoMessage}}</ui-alert>
        <ui-alert state="success" v-if="sucessMessage !== ''">{{sucessMessage}}</ui-alert>
      </div>
      <div class="buttonSave">
        <ui-form-field>
          <ui-button class="saveButton" @click="confirmDialog('update')" raised>Salvar</ui-button>
        </ui-form-field>
      </div>
      <div class="buttonDelete">
        <ui-form-field>
          <ui-button class="saveButton" @click="confirmDialog('delete')" raised>Excluir</ui-button>
        </ui-form-field>
      </div>
    </ui-form>
  </div>
</template>
<script src="./FormConsultUser.js"></script>
<style lang="scss" scoped>
  @import "./FormConsultUser.scss";
</style>