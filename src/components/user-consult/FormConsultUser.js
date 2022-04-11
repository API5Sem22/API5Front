import { useValidator } from 'balm-ui';

const validations = {
    userID: {
      label: 'ID',
      validator: 'notNull',
      notNull: {
        validate (value) {
          return value !== '-'
        },
        message: 'Nenhum usuário selecionado!' 
      }
    },
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
    userLevel: {
      label: 'Nível de Carteira',
      validator: 'required',
    }
}
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
      userLevelOptions,
      userID: '',
      formData: {
        userID: '-',
        userFunction: '',
        departament: '',
        userLevel: '',
        name: '',
        lasName: '',
        email: '',
        password: '',
        rePassword: '',
      },
      messages: [],
    };
  },
  methods: {
    formReset() {
      this.formData = {
        userID: '-',
        userFunction: '',
        departament: '',
        userLevel: '',
        name: '',
        lasName: '',
        email: '',
        password: '',
        rePassword: '',
      }
    },
    searchUser() {
      console.log(this.userID);
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
    },
    onDelete() {
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