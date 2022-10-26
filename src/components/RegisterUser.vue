<template>
    <div class="form-wrapper register">
        <form @submit.prevent="register">

            <div class="login__title">
                <h1>Registration</h1>
            </div>

            <div class="login__fields">
                <label for="username">Username</label>
                <input type="username" v-model="form.username" id="username" name="username" placeholder="Username"
                    maxlength="30" required>

                <br /><br />

                <label for="fullname">Full Name</label>
                <input type="fullname" v-model="form.full_name" id="fullname" name="fullname" placeholder="Full Name"
                    maxlength="30" required>

                <br /><br />

                <label for="Password">Password</label>
                <input type="password" v-model="form.password" id="Password" name="password" placeholder="Password"
                    autocomplete="on" maxlength="25" required>

                <input type="submit" value="Register">
            </div>
        </form>

        <div class="login__registered">
            <p><span>Already have an account?</span></p>
            <router-link tag="button" to="/login">Login to your account</router-link>
        </div>

        <div class="login__error">
            <span>{{ errorMessage }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',

    data() {
        return {
            form: {
                username: "",
                full_name: "",
                password: "",
            },
            errorMessage: "",
        }
    },

    methods: {
        async register() {
            let form = JSON.parse(JSON.stringify(this.form))
            await this.$store.dispatch('Register', form);
        }
    },
}
</script>
  
<style>
@import '@/assets/style.css';
</style>