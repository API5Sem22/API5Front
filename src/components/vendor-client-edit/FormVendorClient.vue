<template>
<MenuLateral />
  <div class="consultClient">
    <div class="item">
      <h2 class="title">Minha Carteira</h2>
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
          Nome do Proprietário
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield
          v-model="formData.city"
          disabled
          class="uiInput"
          >
          Porte da Empresa
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield
          v-model="formData.state"
          disabled
          >
          Data de Abertura
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
          <ui-textfield
          v-model="formData.state"
          disabled
          >
          Natureza Jurídica
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield class="uiInput" v-model="formData.vendorID">
            Contato
          </ui-textfield>
        </ui-form-field>
        <ui-form-field class="form-item">
          <ui-textfield class="uiInput" v-model="formData.vendorID">
            Email
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
          <ui-button class="backButton" @click="confirmDialog()" raised>Voltar</ui-button>
        </ui-form-field>
        <ui-form-field>
          <ui-button class="saveButton" @click="confirmDialog()" raised>Salvar</ui-button>
        </ui-form-field>
      </div>
    </ui-form>
  </div>
</template>
<script src="./FormVendorClient.js"></script>
<style lang="scss" scoped>
  @import "./FormVendorClient.scss";
</style>