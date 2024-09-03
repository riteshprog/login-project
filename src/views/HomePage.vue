<template>
  <div>
    <h1>Welcome {{ loggedInUser.firstName }}</h1>
    <button @click="editInfo">Edit Information</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLoggedInUser"]),
    loggedInUser() {
      return this.getLoggedInUser;
    },
  },
  methods: {
    editInfo() {
      this.$router.push("/register");
    },
  },
};
</script>
