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
    value: 'C1'
  },
  {
    label: 'Carte 2',
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
      userLevelOptions,
      userEmail: '',
      formData: {
        userID: '-',
        userFunction: '-',
        departament: '-',
        userLevel: '',
        name: '-',
        email: '-',
      },
      messages: [],
    };
  },
  methods: {
    formReset() {
      this.formData = {
        userFunction: '-',
        departament: '-',
        userLevel: '',
        name: '-',
        email: '-',
      }
    },
    searchUser() {
      this.messages = [];
      // GET request using fetch with set headers
      const headers = { "Content-Type": "application/json" };
      // GET request using fetch with error handling
      fetch(`https:datawarrior.herokuapp.com/usuarios/${this.userEmail}`, { headers })
        .then(async response => {
          const data = await response.json();
          console.log(data);
          if (data.cargo.descricao == "Vendedor") {
            this.formData = {
              email: data.email,
              userFunction: data.cargo.descricao,
              departament: data.departamento,
              name: data.nome,
              userLevel: data.carteira.descricao
            };
          }
          else {
            this.formData = {
              email: data.email,
              userFunction: data.cargo.descricao,
              departament: 'Interno',
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
          this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
          console.log(error);
        });
    },
    onSave() {
      const result = this.balmUI.validate(this.formData);
      const { valid, messages} = result;
      this.messages = messages;
      if (valid) {
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({cargo:{descricao: this.formData.userFunction}, carteira: null, departamento: this.formData.departament, email: this.formData.email, nome: this.formData.name, senha: 'admin'}),
        };
        fetch(`https:datawarrior.herokuapp.com/usuarios`, requestOptions)
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
        console.log(requestOptions.body);
        console.error(error);
        });
        /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
        continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
      this.formReset();
      }
    },
    onDelete() {
      const result = this.balmUI.validate(this.formData);
      const { valid, messages} = result;
      this.messages = messages;
      if (valid) {
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'DELETE',
        };
        fetch(`https:datawarrior.herokuapp.com/usuarios?id=${this.userEmail}`, requestOptions)
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
        /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
        continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
      this.formReset();
      }
    } 
  }
};