<template>
  <div>
    <header>
      <div class="header__title">
        <h2>Profile</h2>
      </div>

      <nav>
        <ul>
          <li>{{ username }}</li>
          <li @click="logout">Logout</li>
        </ul>
      </nav>
    </header>

    <main class="user__data">
      <section>
        <div class="user__info">
          <p>User name:</p>
          <p>{{ username }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    }
  },

  mounted() {
    this.username = localStorage.getItem('username')
  },

  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped src="@/assets/profile.css">

</style>
