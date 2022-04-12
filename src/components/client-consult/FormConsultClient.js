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
      this.messages = [];
      // GET request using fetch with set headers
      const headers = { "Content-Type": "application/json" };
      // GET request using fetch with error handling
      fetch("https://api.npms.io/v2/invalid-url", { headers })
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

        })
        .catch(error => {
          this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
          console.log(error);
        });
    },
    onSave() {
      const result = this.balmUI.validate(this.formData);
      const { valid, messages} = result;
      this.messages = messages;
      if (valid) {
        this.messages = [];
        /* Chamada da api
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'Vue POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
        .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        this.postId = data.id;
        })
        .catch(error => {
        this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
        console.error(error);
        });
        Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
        continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
      console.log(this.formData);
      this.formReset();
      }
    },
  }
};