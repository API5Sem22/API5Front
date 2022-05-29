<template>
<MenuLateral />
  <div class="consultClient">
    <div class="item">
      <h2 class="title">Consultar Clientes</h2>
      <ui-textfield v-model="clientID" v-on:keyup.enter="searchUser()" id="pesquisa">
        Buscar CNPJ do Cliente
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
          disabled
          v-model="formData.cnpj"
          >
          CNPJ
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield
          disabled
          class="uiInput"
          v-model="formData.cnae"
          >
          CNAE
          </ui-textfield>
        </ui-form-field>
                <ui-form-field class="form-item">
          <ui-textfield
          disabled
          v-model="formData.desc"
          >
          Descrição
          </ui-textfield>
        </ui-form-field>
      </div>
      <div class="item">
        <ui-form-field class="form-item">
          <ui-textfield
          v-model="formData.name" 
          disabled
          >
          Nome Fantasia
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield
          v-model="formData.city"
          disabled
          class="uiInput"
          >
          Cidade
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield
          v-model="formData.state"
          disabled
          >
          Estado
          </ui-textfield>
        </ui-form-field>
      </div>
      <div class="item">
        <ui-form-field class="form-item">
          <ui-select class="selectBox" id="userFunction"
          v-model="formData.clientLevel"
          :options="clientLevelOptions"
          default-label="Nivel de carteira">
            Nível de Carteira
          </ui-select>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield class="uiInput" v-model="formData.vendorID">
            Vendedor Atribuído
            <template #after>
              <ui-textfield-icon @click="deleteWallet()">delete</ui-textfield-icon>
            </template>
          </ui-textfield>
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
          <ui-button class="saveButton" @click="confirmDialog()" raised>Salvar</ui-button>
        </ui-form-field>
      </div>
    </ui-form>
  </div>
</template>
<script src="./FormConsultClient.js"></script>
<style lang="scss" scoped>
  @import "./FormConsultClient.scss";
</style>