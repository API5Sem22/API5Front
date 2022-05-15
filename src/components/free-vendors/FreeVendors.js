import { useValidator } from 'balm-ui';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
import { Page, Resize, Filter, Sort, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";

export default {
    name: "App",
    components: {
      'ejs-grid' : GridComponent,
      'e-columns' : ColumnsDirective,
      'e-column' : ColumnDirective
    },
  data() {
    return {
      dataGrid: [],
      gridData: null,
      pageSettings: { pageSize: 8 },
      toolbarOptions: ['ExcelExport'],
      balmUI: useValidator(),
      clientCnae: '',
    };
  },
  methods: {
    rowSelected: function() {
      let selectedrecords = this.$refs.grid.getSelectedRecords();  // Get the selected records.
      this.$router.push({name: 'clientConsult', params: selectedrecords[0].cnpj})
    },
    toolbarClick: function(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
          this.$refs.grid.excelExport();
      }
    },
    searchUser(value) {
      this.gridData = [];
      let url = `https://datawarriors-back.herokuapp.com/empresas/livres/${value}?page=0`
      if (this.clientCnae === null || this.clientCnae === '') {
        url = `https://datawarriors-back.herokuapp.com/empresas/livres/0?page=0`
      }
      const headers ={ 'Content-Type': 'application/json' };
      // GET request using fetch with error handling
      fetch(url, headers)
        .then(async response => {
          const data = await response.json();
          for (let element of data) {
            const client = {
              cnpj: element.cnpj.cnpj,
              cnae: element.idCnae.codigo,
              fantasia: element.cnpj.nome,
              uf: element.idCidade.estado,
              contato: element.cnpj.telefone,
              email: element.cnpj.email
            };
            this.gridData.push(client);
          }
          this.$refs.grid.ej2Instances.dataSource = this.gridData; 
        })
    },
  },
  beforeMount() {
    this.searchUser(0);
  },
  provide: {
    grid: [Page, Resize, Filter, Sort, Toolbar, ExcelExport]
  }
};