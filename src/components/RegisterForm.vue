<template>
  <form @submit.prevent="register">
    {{ $store.state.users }}

    <input v-model="firstName" placeholder="First Name" required />
    <input v-model="lastName" placeholder="Last Name" required />
    <div>
      <label> <input type="radio" v-model="gender" value="male" /> Male </label>
      <label>
        <input type="radio" v-model="gender" value="female" /> Female
      </label>
    </div>
    <select v-model="occupation">
      <option value="student">Student</option>
      <option value="developer">Developer</option>
      <!-- Add more options as needed -->
    </select>
    <input v-model="username" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <input
      v-model="retypePassword"
      type="password"
      placeholder="Re-type Password"
      required
    />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      occupation: "",
      username: "",
      password: "",
      retypePassword: "",
    };
  },
  mounted() {
    const user = this.$store.state.users[0];
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.occupation = user.occupation;
    this.username = user.username;
    this.password = user.password;
    this.retypePassword = user.password;
  },
  methods: {
    ...mapActions(["registerUser"]),
    async register() {
      if (this.password !== this.retypePassword) {
        alert("Passwords do not match");
        return;
      }

      const success = await this.registerUser({
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        occupation: this.occupation,
        username: this.username,
        password: this.password,
      });

      if (success) {
        this.$router.push("/login");
      } else {
        alert("Username already exists");
      }
    },
  },
};
</script>
