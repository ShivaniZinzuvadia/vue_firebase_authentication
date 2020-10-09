<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" to="/home">Chat Application</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              href="#"
              to="/profile"
              v-if="currentUser"
              exact
              exact-active-class="active"
              >Profile</b-nav-item
            >
            <b-nav-item href="#" v-if="currentUser" @click="logout"
              >Sign Out</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { auth } from "./firebase";
import { mapGetters } from "vuex";
export default {
  methods: {
    logout() {
      auth.signOut().then(
        () => {
          this.$router.replace("login");
        },
        (err) => {
          alert("Error:" + err.message);
        }
      );
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "user/currentUser",
    }),
  },
};
</script>
