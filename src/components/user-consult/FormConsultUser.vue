<template>
  <div class="userConsult">
    <div class="item">
      <h2 class="title">Consultar Usuários</h2>
      <ui-textfield v-model="userID" >
        Buscar ID do Usuário
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
        v-model="formData.userID" 
        disabled
        >
        ID
        </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield class="uiInput" v-model="formData.userFunction" >Função</ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield v-model="formData.departament" >Departamento</ui-textfield>
        </ui-form-field>
      </div>
      <div class="item">
        <ui-form-field class="form-item">
        <ui-textfield v-model="formData.name" >Nome</ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield class="uiInput" v-model="formData.lasName" >Sobrenome</ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
        <ui-textfield v-model="formData.email" >Email</ui-textfield>
        </ui-form-field>
      </div>
      <div class="item">
        <ui-form-field class="form-item">
          <ui-select class="selectBox" id="userFunction"
          v-model="formData.userLevel"
          :options="userLevelOptions"
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
      </div>
      <div class="buttonSave">
        <ui-form-field>
          <ui-button class="saveButton" @click="onSave()" raised>Salvar</ui-button>
        </ui-form-field>
      </div>
      <div class="buttonDelete">
        <ui-form-field>
          <ui-button class="saveButton" @click="onDelete()" raised>Excluir</ui-button>
        </ui-form-field>
      </div>
    </ui-form>
  </div>
</template>
<script src="./FormConsultUser.js"></script>
<style lang="scss" scoped>
  @import "./FormConsultUser.scss";
</style>