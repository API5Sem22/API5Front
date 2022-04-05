const userFunction = [
    {
      label: 'Admin',
      value: 'admin'
    },
    {
      label: 'Analista de negócios',
      value: 'analista de negocios',
    },
    {
      label: 'Vendedor',
      value: 'vendedor'
    },
  ];
  const userLevel = [
    {
      label: 'Nível 1',
      value: '1'
    },
    {
      label: 'Nível 2',
      value: '2',
    },
    {
      label: 'Nível 3',
      value: '3'
    },
  ];
  export default {
    data() {
      return {
        userFunction,
        userLevel,
        value: '',
        functionUser: false,
        levelUser: false,
        controls: {
          disabled: false,
          rtl: false,
          dense: false,
          required: false,
          customColor: false,
          helperText: false,
          isVisible: false,
          isValidMsg: false
        },
      };
    },
    methods: {
      onSelected(selected) {
        this.functionUser = selected.value;
      },
      onSelectedLevel(selected) {
        this.levelUser = selected.value;
      }
    }
  };