import { defineComponent } from "vue";
import Logo from "@/components/atoms/Logo/Logo.vue";

export default defineComponent({
  name: "Header",
  components: {
    Logo
  },
  data() {
    return {
      openedMenu: false
    }
  },
  methods: {
    toggleBurgerMenu() {
      this.openedMenu = !this.openedMenu
    }
  },
  mounted() {
    console.info("Header is mounted");
  },
})