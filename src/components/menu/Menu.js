import router from "@/router";

export default {
    data() {
      return {
        openUser: false,
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
      navigateTo(value) {
        router.push(`/${value}`);
      }
    }
}