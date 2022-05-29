import store from '@/store';
import { useValidator } from 'balm-ui';
import { mapMutations } from 'vuex'

const validations = {
  email: {
    label: 'Email',
    validator: 'required',
  },
  senha: {
    label: 'Senha',
    validator: 'required, password',
  }
}
export default {
  name: 'login',
  data() {
    return {
			balmUI: useValidator(),
			validations,
			formData: {
				email: '',
				senha: '',
			},
			messages: [],
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken'
    ]),
		login2() {
		},
    login() {
			const result = this.balmUI.validate(this.formData);
			const { valid, messages} = result;
			this.messages = messages;
			if (valid) {
				// POST request using fetch with error handling
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(this.formData)
				};
				console.log(requestOptions);
				fetch(`https://datawarriors-back.herokuapp.com/usuarios/login`, requestOptions)
				.then(async response => {
				const data = await response;
				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				else {
					store.state.usuario = data.email;
          this.$router.push('/')
				}
				this.postId = data.id;
				})
				.catch(error => {
				this.messages.push('Login ou senha inválidos!');
				console.error(error);
				});
			}
		}
	}
}