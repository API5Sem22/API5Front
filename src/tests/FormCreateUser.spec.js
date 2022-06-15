import { mount } from '@vue/test-utils'
import FormCreateUser from '../components/user-register/FormCreateUser.vue';

const factory = (values = {}) => {
  return mount(FormCreateUser, {
    data () {
      return {
        ...values
      }
    }
  })
}
describe('FormCreateUser', () => {
  it('Exibe o combobox de nivel de carteira para Vendedor', () => {
    const wrapper = factory({formData: {cargo: {idCargo: 14}, carteira: {idCarteira: 18}}})

    expect(wrapper.find('#userLevel').exists()).toBeTruthy()
  })
  it('Não exibe o combobox de nivel de carteira para Admin', () => {
    const wrapper = factory({formData: {cargo: {idCargo: 15}, carteira: {idCarteira: 18}}})

    expect(wrapper.find('#userLevel').exists()).toBeFalsy()
  })
  it('Não exibe o combobox de nivel de carteira para Analista de Negocios', () => {
    const wrapper = factory({formData: {cargo: {idCargo: 16}, carteira: {idCarteira: 18}}})

    expect(wrapper.find('#userLevel').exists()).toBeFalsy()
  })
  it('Verificar se o input de nome existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#nome').exists()).toBeTruthy()
  })
  it('Verificar se o input de departamento existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#departamento').exists()).toBeTruthy()
  })
  it('Verificar se o input de senha existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#senha').exists()).toBeTruthy()
  })
  it('Verificar se o input de confirmar senha existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#resenha').exists()).toBeTruthy()
  })
  it('Verificar se o input de email existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#email').exists()).toBeTruthy()
  })
  it('Verificar se o combo de função do usuário existe', () => {
    const wrapper = factory()

    expect(wrapper.find('#userFunction').exists()).toBeTruthy()
  })
})