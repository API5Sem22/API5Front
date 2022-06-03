import { mount } from '@vue/test-utils'
import FormConsultUser from '../components/user-consult/FormConsultUser.vue';

const factory = (values = {}) => {
  return mount(FormConsultUser, {
    data () {
      return {
        ...values
      }
    }
  })
}
describe('FormConsultUser', () => {
  it('Exibe o combobox de nivel de carteira para Vendedor', () => {
    const wrapper = factory({formData: {userFunction: 'Vendedor', userLevel: {idCarteira: 2}}})

    expect(wrapper.find('#userFunction').exists()).toBeTruthy()
  })
  it('Não exibe o combobox de nivel de carteira para Admin', () => {
    const wrapper = factory({formData: {userFunction: 'Admin'}})

    expect(wrapper.find('#userFunction').exists()).toBeFalsy()
  })
  it('Não exibe o combobox de nivel de carteira para Analista', () => {
    const wrapper = factory({formData: {userFunction: 'Analista'}})

    expect(wrapper.find('#userFunction').exists()).toBeFalsy()
  })
})