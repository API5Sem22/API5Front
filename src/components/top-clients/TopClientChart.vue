<template>
<MenuLateral />
  <div class="consultWallet">
    <div class="item">
      <h2 class="title">Top Clientes</h2>
        <ui-form-field>
      <ui-select
      id="userLevel"
      :options="chartType"
      v-model="filterType"
      >
      Tipo de filtro
      </ui-select>
        </ui-form-field>
      <hr class="dotted">
    </div>
    <ejs-chart :title='title' :primaryXAxis='primaryXAxis' width='650px' :legendSettings='legendSettings'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='cnaes' yName='consumo' name='Consumo'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script src="./TopClientChart.js"></script>
<style lang="scss" scoped>
  @import "./TopClientChart.scss";
</style>