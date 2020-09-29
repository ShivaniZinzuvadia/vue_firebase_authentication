<template>
  <div class="hello">
    <div id="nav">
      <button @click="logout">Logout</button> 
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {auth} from '../firebase'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    logout(){
      auth.signOut()
      .then(() => {
        this.$router.replace('login');
      }, err => {
        alert('Error:' + err.message);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
