import router from "@/router";
import store from "@/store";
export default {
    data() {
      return {
        openUser: false,
        openClient: false,
      };
    },
    methods: {
      openUserMenu() {
        if (this.openUser === true) {
          this.openUser = false;
        }
        else {
          this.openUser = true;
        }
      },
      openClientMenu() {
        if (this.openClient === true) {
          this.openClient = false;
        }
        else {
          this.openClient = true;
        }
      },
      navigateTo(value) {
        router.push(`/${value}`);
      },
      isAdmin() {
        console.log(store.state.departament);
        return store.state.departament === 'Admin';
      },
      logout() {
        store.state.departament = null;
        store.state.usuario = null;
        router.push('/');
      }
    },
    mounted() {
      this.isAdmin();
    }
}