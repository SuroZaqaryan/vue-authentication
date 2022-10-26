<template>
  <div>
    <header>
      <div class="header__title">
        <h2>Profile</h2>
      </div>

      <nav>
        <ul>
          <li>{{ userName }}</li>
          <li @click="logout">Logout</li>
        </ul>
      </nav>
    </header>

    <main class="user__data">
      <section>
        <div class="user__info">
          <div>
            <p>Synchro</p>
          </div>
          <div>
            <p>Synchro</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.getters.StateUser;
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped src="@/assets/profile.css"></style>
