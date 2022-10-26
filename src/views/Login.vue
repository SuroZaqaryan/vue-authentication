<template>
  <div class="form-wrapper login">
    <form @submit.prevent="login">
      <div class="login__title">
        <h1>Authentication</h1>
        <h3>Welcome to our application</h3>
        <p>
          New here?
          <router-link tag="span" to="/register">Create an account</router-link>
        </p>
      </div>

      <div class="login__fields">
        <label for="name">Username</label>
        <input type="name" v-model="form.username" id="name" name="name" placeholder="Username" maxlength="30"
          required />

        <br /><br />

        <label for="Password">Password</label>
        <input type="password" v-model="form.password" id="Password" name="password" placeholder="Password"
          autocomplete="on" maxlength="25" required />

        <input type="submit" value="Sign in" />
      </div>
    </form>

    <div class="login__registered">
      <p><span>or register</span></p>
      <router-link tag="button" to="/register">No account yet?</router-link>
    </div>

    <div v-if="errorMessage" class="login__error">
      <span>Username or Password is incorrect</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errorMessage: false,
    };
  },

  methods: {
    async login() {
      const user = new FormData();
      user.append("username", this.form.username);
      user.append("password", this.form.password);

      try {
        await this.$store.dispatch("LogIn", user);
        this.$router.push("/profile");
        this.errorMessage = false;
      } catch (error) {
        this.errorMessage = true;
      }

    },
  },
};
</script>

<style scoped src="@/assets/form.css">

</style>