import { useValidator } from 'balm-ui';

const validations = {
  departamento: {
    label: 'Departamento',
    validator: 'required',
  },
  nome: {
    label: 'Nome',
    validator: 'required',
  },
  email: {
    label: 'Email',
    validator: 'required',
  },
  senha: {
    label: 'Senha',
    validator: 'required, password',
  },
  rePassword: {
    label: 'Repetir Senha',
    validator: 'required, password, repasswordRule',
        repasswordRule: {
      validate(value, data) {
        return value === data.senha;
      },
      message: 'O campo "Senha" e "Repetir Senha" estão diferentes. Por favor redigitar as senhas.'
    }
  }
}
const userFunctionOptions = [
    {
      label: 'Vendedor',
      value: 14
    },
    {
      label: 'Admin',
      value: 15,
    },
    {
      label: 'Analista de negócios',
      value: 16
    },
  ];
  const userLevelOptions = [
    {
      label: 'Júnior',
      value: 18
    },
    {
      label: 'Pleno',
      value: 19,
    },
    {
      label: 'Sênior',
      value: 20
    },
    {
      label: 'Especialista',
      value: 21
    }
  ];
  export default {
    data() {
      return {
        balmUI: useValidator(),
        validations,
        userFunctionOptions,
        userLevelOptions,
        formData: {
          cargo: {idCargo: null},
          departamento: '',
          carteira: {idCarteira: null},
          nome: '',
          email: '',
          senha: '',
          rePassword: '',
        },
        messages: [],
        sucessMessage: '',
      };
    },
    methods: {
      formReset() {
        this.formData = {
          cargo: {idCargo: null},
          departamento: '',
          carteira: {idCarteira: null},
          nome: '',
          email: '',
          senha: '',
          rePassword: '',
        }
      },
      onSave() {
        this.sucessMessage = '';
        const result = this.balmUI.validate(this.formData);
        const { valid, messages} = result;
        this.messages = messages;
        if (valid) {
          if (this.formData.cargo.idCargo !== 14) {
            this.formData.carteira = null;
          }
          // POST request using fetch with error handling
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.formData)
          };
          fetch(`https://datawarriors-back.herokuapp.com/usuarios`, requestOptions)
          .then(async response => {
          const data = await response;
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          else {
            this.sucessMessage = 'Cadastro feito com sucesso!';
            this.formReset();
          }
          this.postId = data.id;
          })
          .catch(error => {
          this.sucessMessage = '';
          this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
          console.error(error);
          });
          /*Material de consulta: https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
          continuar em aula https://next-material.balmjs.com/#/data-input/validator*/
        }
      }
    }
  };