<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="email" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="login">Connection</button>
    <p>
      Or signin with Google <br />
      <button @click="socialLogin" class="social-button">
        <img alt="Google Logo" src="../assets/google-logo.png" />
      </button>
    </p>
    <p>
      You don't have account? You can
      <router-link to="/signup"> create one</router-link>
    </p>
  </div>
</template>

<script>
import { auth, googleProvider } from "../firebase";
export default {
  name: "Login",
  data: function () {
    return {
      email: "shivani.zinzuvadia@aliansoftware.com",
      password: "shivanizinzu",
    };
  },
  methods: {
    login: function () {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          // console.log(result.user.udi);
          this.$router.replace("profile");
        },
        (err) => {
          alert("Error:" + err.message);
        }
      );
    },
    socialLogin: function() {
      auth.signInWithPopup(googleProvider)
      .then(() => {
        this.$router.replace("home");
      }, 
      (error) => {
        alert("Error: "+ error.message);
      })
    }
  },
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
</style>