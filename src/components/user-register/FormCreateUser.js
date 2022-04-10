import { useValidator } from 'balm-ui';

const validations = {
  userFunction: {
    label: 'Função do Usuário',
    validator: 'required',
  },
  departament: {
    label: 'Departamento',
    validator: 'required',
  },
  name: {
    label: 'Nome',
    validator: 'required',
  },
  lasName: {
    label: 'Sobrenome',
    validator: 'required',
  },
  email: {
    label: 'Email',
    validator: 'required',
  },
  creatorID: {
    label: 'ID',
    validator: 'required',
  },
  password: {
    label: 'Senha',
    validator: 'required, password',
  },
  rePassword: {
    label: 'Repetir Senha',
    validator: 'required, password, repasswordRule',
        repasswordRule: {
      validate(value, data) {
        return value === data.password;
      },
      message: 'O campo "Senha" e "Repetir Senha" estão diferentes. Por favor redigitar as senhas.'
    }
  }
}
const userFunctionOptions = [
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
  const userLevelOptions = [
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
        balmUI: useValidator(),
        validations,
        userFunctionOptions,
        userLevelOptions,
        formData: {
          userFunction: '',
          departament: '',
          userLevel: '',
          name: '',
          lasName: '',
          email: '',
          creatorID: '',
          password: '',
          rePassword: '',
        },
        messages: [],
      };
    },
    methods: {
      formReset() {
        this.formData = {
          userFunction: '',
          departament: '',
          userLevel: '',
          name: '',
          lasName: '',
          email: '',
          creatorID: '',
          password: '',
          rePassword: '',
        }
      },
      onSave() {
        const result = this.balmUI.validate(this.formData);
        const { valid, messages} = result;
        this.messages = messages;
        if (valid) {
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
        console.log(this.formData);
        this.formReset();
        }
      }
    }
  };