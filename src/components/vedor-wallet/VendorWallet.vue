<template>
<MenuLateral />
  <div class="consultWallet">
    <div class="item">
      <h2 class="title">Minha Carteira</h2>
      <ui-textfield v-model="clientID">
        Buscar CNAE do Cliente
        <template #after>
          <ui-textfield-icon @click="searchUser()">search</ui-textfield-icon>
        </template>
      </ui-textfield>
      <hr class="dotted">
    </div>
    <ejs-grid 
    :dataSource='dataGrid'
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
      <e-column class='column' field='OrderID' headerText='CNPJ' textAlign='Right'  width=100></e-column>
      <e-column field='CustomerID' headerText='CNAE' width=120 textAlign='Right'></e-column>
      <e-column field='ShipCountry' headerText='Nome Fantasia' width='100' textAlign='Right'></e-column>
      <e-column field='ShipCountry' headerText='Proprietário' width=100 textAlign='Right'></e-column>
      <e-column field='ShipCountry' headerText='UF' width=100 textAlign='Right'></e-column>
      <e-column field='ShipCountry' headerText='Contato' width=100 textAlign='Right'></e-column>
      <e-column field='ShipCountry' headerText='Email' width=100 textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script src="./VendorWallet.js"></script>
<style lang="scss" scoped>
  @import "./VendorWallet.scss";
</style>