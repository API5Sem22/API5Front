import { useValidator } from 'balm-ui';

const validations = {
    cnpj: {
      label: 'CNPJ',
      validator: 'notNull',
      notNull: {
        validate (value) {
          return value !== '00.000.000/0000-00'
        },
        message: 'Nenhum cliente selecionado!' 
      }
    },
}
const clientLevelOptions = [
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
      clientLevelOptions,
      clientID: '',
      formData: {
        cnpj: '00.000.000/0000-00',
        cnae: '00000/00',
        desc: 'Descrição CNAE',
        name: 'Nome da Empresa',
        city: 'Cidade da Empresa',
        state: 'UF',
        clientLevel: '',
        vendorID: 'ID do Vendedor',
      },
      messages: [],
    };
  },
  methods: {
    formReset() {
      this.formData = {
        cnpj: '00.000.000/0000-00',
        cnae: '00000/00',
        desc: 'Descrição CNAE',
        name: 'Nome da Empresa',
        city: 'Cidade da Empresa',
        state: 'UF',
        clientLevel: '',
        vendorID: 'ID do Vendedor',
      }
    },
    searchUser() {
      console.log(this.clientID);
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
  }
};