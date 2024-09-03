<template>
  <form @submit.prevent="login">
    {{ $store.state.users }}
    <input v-model="username" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <router-link to="/register">Register</router-link>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login() {
      const success = await this.loginUser({
        username: this.username,
        password: this.password,
      });
      if (success) {
        this.$router.push("/home");
      } else {
        alert("Invalid username or password");
      }
    },
  },
};
</script>
