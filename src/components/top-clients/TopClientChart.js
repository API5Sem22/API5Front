import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";
const chartType = [
	{
		label: 'Top por CNAEs',
		value: 1
	},
	{
		label: 'Top por Região',
		value: 2,
	},
];

export default {
    name: "App",
    components: {
			'ejs-chart' : ChartComponent,
			'e-series-collection' : SeriesCollectionDirective,
			'e-series' : SeriesDirective
    },
  data() {
    return {
      dataGrid: [],
      gridData: null,
			title: 'Empresas de maior consumo',
			chartType,
      pageSettings: { pageSize: 8 },
      toolbarOptions: ['ExcelExport'],
      filterType: 1,
			primaryXAxis: {},
			legendSettings: {
				visible: true,
				position: 'Top'
			},
			seriesData: [],
    };
  },
	watch: {
    filterType() {
			this.chartFilter();
    }
  },
  methods: {
    chartFilter() {
			let url = '';
			this.seriesData = [];
      if (this.filterType === 1) {
				url = `https://datawarriors-back.herokuapp.com/empresas/consumo-cnaes`;
				this.primaryXAxis = {
					valueType: 'Category',
					title: 'CNAE'
				}
			} else {
				url = `https://datawarriors-back.herokuapp.com/empresas/consumo-estados`;
				this.primaryXAxis = {
					valueType: 'Category',
					title: 'Estado'
				}
			}
      const headers ={ 'Content-Type': 'application/json' };
      // GET request using fetch with error handling
      fetch(url, headers)
        .then(async response => {
          const data = await response.json();
					let dataChart = []
					for (let element of data) {
						const chartData = element.split(',');
						dataChart.push({cnaes: chartData[0], consumo: chartData[1]})
					}
					this.seriesData = dataChart;
        })
    },
  },
	beforeMount() {
    this.chartFilter();
  },
  provide: {
		chart: [ ColumnSeries, Legend, Category ]
	},
};