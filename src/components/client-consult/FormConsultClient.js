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
    clientLevel: {
      label: 'Nivel de carteira',
      validator: 'required',
    },
}
const clientLevelOptions = [
  {
    label: 'Nível 1',
    value: 'C1'
  },
  {
    label: 'Nível 2',
    value: 'C2',
  },
  {
    label: 'Nível 3',
    value: 'C3'
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
      infoMessage: '',
      sucessMessage: '',
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
      this.sucessMessage = '',
      this.infoMessage = 'Processando sua requisição'
      const headers ={ 'Content-Type': 'application/json' };
      // GET request using fetch with error handling
      fetch(`https://datawarriors-back.herokuapp.com/empresas/org/${this.clientID}`, headers)
        .then(async response => {
          const data = await response.json();
          this.formData = {
            cnpj: data.cnpj.cnpj,
            cnae: data.idCnae.codigo,
            desc: data.idCnae.descricao,
            name: data.cnpj.nome,
            city: data.idCidade.nome,
            state: data.idCidade.estado,
            clientLevel: data.nivel,
            vendorID: data.vendedor.email,

          }
          this.infoMessage = '';
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
  
        })
        .catch(error => {
          this.infoMessage = '';
          this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
          console.log(error);
        });
    },
    onSave() {
      this.sucessMessage = '';
      this.infoMessage = 'Processando sua requisição';
      if(this.formData.vendorID === '') {
        this.formData.vendorID = null;
      }
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cnpj: {cpnj: this.formData.cnpj}, vendedor: {email: this.formData.vendorID }, nivel: this.formData.clientLevel}),
      };
      fetch(`https://datawarriors-back.herokuapp.com/empresas/upt`, requestOptions)
      .then(async response => {
      const data = await response;
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      else {
        this.sucessMessage = 'Alteração feita com sucesso!';
      }

      })
      .catch(error => {
      this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
      this.infoMessage = '';
      console.error(error);
      });
      /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
      continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
    this.formReset();
    },
    confirmDialog() {
      const result = this.balmUI.validate(this.formData);
      const { valid, messages} = result;
      this.messages = messages;
      if (valid) {
        this.$confirm({
          message: 'Você tem certeza disso?',
          acceptText: 'Confirmar',
          cancelText: 'Cancelar',
        }).then ((result) => {
          if (result) {
            this.onSave();
          }
        });
      }
    },
    deleteWallet() {
      this.formData.vendorID = null;
    }
  }
};