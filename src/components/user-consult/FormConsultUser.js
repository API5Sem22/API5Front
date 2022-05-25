import { useValidator } from 'balm-ui';

const validations = {
    email: {
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
}
const userLevelOptions = [
  {
    label: 'Nível 1',
    value: 1
  },
  {
    label: 'Nível 2',
    value: 2,
  },
  {
    label: 'Nível 3',
    value: 3
  },
  {
    label: 'Nível 4',
    value: 4
  },
];
export default {
  data() {
    return {
      balmUI: useValidator(),
      validations,
      userLevelOptions,
      userEmail: '',
      formData: {
        userID: '-',
        userFunction: '-',
        departament: '-',
        userLevel: {idCarteira: null},
        name: '-',
        email: '-',
      },
      messages: [],
      infoMessage: '',
      sucessMessage: '',
    };
  },
  methods: {
    formReset() {
      this.formData = {
        userFunction: '-',
        departament: '-',
        userLevel: {idCarteira: null},
        name: '-',
        email: '-',
      }
    },
    searchUser() {
      this.messages = [];
      this.sucessMessage = '',
      this.infoMessage = 'Processando sua requisição'
      // GET request using fetch with set headers
      const headers = { "Content-Type": "application/json" };
      // GET request using fetch with error handling
      fetch(`https://datawarriors-back.herokuapp.com/usuarios/${this.userEmail}`, { headers })
        .then(async response => {
          const data = await response.json();
          this.infoMessage = '';
          if (data.cargo.descricao == "Vendedor") {
            this.formData = {
              email: data.email,
              userFunction: data.cargo.descricao,
              departament: data.departamento,
              name: data.nome,
              userLevel: {idCarteira: data.carteira.idCarteira}
            };
          }
          else {
            this.formData = {
              email: data.email,
              userFunction: data.cargo.descricao,
              departament: data.departamento,
              name: data.nome,
            };
          }
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
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email: this.formData.email, carteira: {idCarteira: this.formData.userLevel.idCarteira}}),
        };
        fetch(`https://datawarriors-back.herokuapp.com/usuarios/nivel-carteira`, requestOptions)
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
        console.error(error);
        });
        /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
        continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
      this.formReset();
    },
    onDelete() {
        this.sucessMessage = '';
        this.infoMessage = 'Processando sua requisição';
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'DELETE',
        };
        fetch(`https://datawarriors-back.herokuapp.com/usuarios/delete/${this.formData.email}`, requestOptions)
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
        this.postId = data.id;
        })
        .catch(error => {
        this.sucessMessage = '';
        this.infoMessage = '';
        this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
        console.error(error);
        });
        /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
        continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
      this.formReset();
    },
    confirmDialog(type) {
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
            if (type === 'delete') {
              this.onDelete();
            }
            else {
              this.onSave();
            }
          }
        });
      }
    }
  }
};