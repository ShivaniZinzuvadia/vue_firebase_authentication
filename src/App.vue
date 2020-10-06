<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Chat Application</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" v-if="currentUser">Profile</b-nav-item>
              <b-nav-item href="#" v-if="currentUser" @click="logout">Sign Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import {auth} from './firebase'
import { mapGetters } from 'vuex'
export default {
  methods: {
    logout(){
      auth.signOut()
      .then(() => {
        this.$router.replace('login');
      }, err => {
        alert('Error:' + err.message);
      })
    }
  },
  computed: { ...mapGetters({
    currentUser: 'auth/currentUser'
  })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
