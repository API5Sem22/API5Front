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
        nome: '',
        sobrenome: '',
        departamento: '',
        email: '',
        id: '',
        senha: '',
        functionUser: false,
        levelUser: false,
        controls: {
          disabled: false,
          rtl: false,
          dense: false,
          customColor: true,
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
      },
      onSave() {
        //Dados do usuário cadastrado
        const userData = {
          userFunction: this.userFunction,
          departamento: this.departamento,
          userLevel: this.userLevel,
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          id: this.id,
          senha: this.senha
        }
        if (userData)
        /* Chamada da api
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        };
        fetch("API DO GRUPO", requestOptions)
          .then(response => response.json())
          .then(data => (this.postId = data.id));
          Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
          continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
        console.log(userData);
      }
    }
  };