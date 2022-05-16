import router from '@/router';
import { useValidator } from 'balm-ui';

const validations = {
  phone: {
    label: 'Telefone',
    validator: 'required',
  },
}

export default {
  data() {
    return {
      balmUI: useValidator(),
      clientID: '',
      validations,
      formData: {
        cnpj: '00.000.000/0000-00',
        cnae: '00000/00',
        desc: 'Descrição CNAE',
        name: 'Nome da Empresa',
        size: 'Porte da Empresa',
        openDate: 'Data de Abertura',
        city: 'Cidade da Empresa',
        state: 'UF',
        nature: 'Natureza Jurídica',
        phone: 'Telefone',
        email: 'Email',
      },
      messages: [],
      infoMessage: '',
      sucessMessage: '',
    };
  },
  methods: {
    searchUser(value) {
      this.messages = [];
      this.sucessMessage = '',
      this.infoMessage = 'Processando sua requisição'
      const headers ={ 'Content-Type': 'application/json' };
      // GET request using fetch with error handling
      fetch(`https://datawarriors-back.herokuapp.com/empresas/org/${value}`, headers)
        .then(async response => {
          const data = await response.json();
          console.log(data);
          this.formData = {
            cnpj: data.cnpj.cnpj,
            cnae: data.idCnae.codigo,
            desc: data.idCnae.descricao,
            name: data.cnpj.nome,
            size: data.cnpj.porte,
            openDate: data.cnpj.dataAbertura,
            city: data.idCidade.nome,
            state: data.idCidade.estado,
            nature: data.cnpj.naturezaJuridica,
            phone: data.cnpj.telefone,
            email: data.cnpj.email,
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
      let requestOptions = {};
      this.infoMessage = 'Processando sua requisição';
      if(this.formData.email === '' || this.formData.email === null) {
        requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({cnpj: this.formData.cnpj, telefone: this.formData.phone, email: null}),
        };
      }
      else {
        // POST request using fetch with error handling
        requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({cnpj: this.formData.cnpj, telefone: this.formData.phone, email: this.formData.email}),
        };
      }
      fetch(`https://datawarriors-back.herokuapp.com/empresa-descricao/atualiza-descricao-empresa`, requestOptions)
      .then(async response => {
      const data = await response;
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      else {
        this.infoMessage = '';
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
    },
    confirmDialog() {
      const result = this.balmUI.validate(this.formData);
      console.log(this.formData);
      console.log(this.result);
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
    getBack() {
      router.push('/vendorWallet');
    }
  },
  mounted() {
    let cnpj = this.$route.params
    this.searchUser(Object.values(cnpj).join(''));
  },
};