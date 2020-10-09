<template>
  <div class="mb-3 mt-3">
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group append="Search New Friend">
      <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>
    </b-input-group>

    <div class="autocomplete">
      <b-row v-for="user in filteredUsers" :key="user.id" class="p-1"> 
        <b-col cols="2">
          {{ user.displayName }}
        </b-col>
        <b-col>
          <b-button variant="success" @click="addFriend(user.id)">+</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters({
      allUsers: "user/allUsers",
      currentUser: "user/currentUser"
    }),
    filteredUsers() {
      var self = this;
      if (self.name.length > 2) {
        return self.allUsers.filter(function (user) {
          return (
            (user["displayName"]
              .toLowerCase()
              .startsWith(self.name.toLowerCase()) ||
            user["displayName"].toLowerCase().match(self.name.toLowerCase())) && user["id"] != self.currentUser.uid
          );
        });
      } else {
        return [];
      }
    },
  },
  created() {
    this.$store.dispatch("user/getAllUsers");
  },
  methods: {
      addFriend(friendId){
          alert(friendId);
      }
  }
};
</script>

<style scoped>
.autocomplete{
    background-color: #e9ecef;
} 
</style>