<template>
<MenuLateral />
  <div class="consultWallet">
    <div class="item">
      <h2 class="title">Minha Carteira</h2>
      <ui-textfield v-model="clientCnae">
        Buscar CNAE do Cliente
        <template #after>
          <ui-textfield-icon @click="searchUser(clientCnae)">search</ui-textfield-icon>
        </template>
      </ui-textfield>
      <hr class="dotted">
    </div>
    <ejs-grid 
    :dataSource='gridData'
    ref='grid'
    id='Grid'
    :allowSorting='true' 
    :allowPaging='true'
    :allowExcelExport='true'
    :toolbarClick='toolbarClick'
    :allowResizing='true' 
    :toolbar='toolbarOptions'
    height='296px'
    :pageSettings='pageSettings'
    :rowSelected='rowSelected'>
      <e-columns>
      <e-column class='column' field='cnpj' headerText='CNPJ' textAlign='Right'  width=130></e-column>
      <e-column field='cnae' headerText='cnae' width=120 textAlign='Right'></e-column>
      <e-column field='fantasia' headerText='fantasia' width='100' textAlign='Right'></e-column>
      <e-column field='uf' headerText='uf' width=100 textAlign='Right'></e-column>
      <e-column field='contato' headerText='contato' width=100 textAlign='Right'></e-column>
      <e-column field='email' headerText='email' width=100 textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script src="./FreeVendors.js"></script>
<style lang="scss" scoped>
  @import "./FreeVendors.scss";
</style>