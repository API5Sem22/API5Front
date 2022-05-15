import router from "@/router";

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
      }
    }
}