<template>
  <b-card header-tag="header" footer-tag="footer">
    <template v-slot:header>
      <h6 class="mb-0">Profile</h6>
    </template>

    <div>
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="form">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.userName"
            required
            placeholder="Enter user name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Display Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.displayName"
            required
            placeholder="Enter display name"
          ></b-form-input>
        </b-form-group>

        <div class="text-right">
          <b-button type="submit" variant="primary" class="mr-2"
            >Submit</b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      currentUser: "user/currentUser",
    }),
  },
  data() {
    return {
      form: {
        email: "",
        displayName: "",
        userName: "",
      },
    };
  },
  watch: {
    currentUser: {
      handler: function (value) {
        this.form.email = value.user.email;
        this.form.displayName = value.user.displayName;
        this.form.userName = value.user.userName;
      },
      immediate: true,
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("user/updateProfile", this.form);
      this.$router.push("/home");
    },
    onReset() {
      // Reset our form values
      this.form.email = this.currentUser.user.email;
      this.form.displayName = this.currentUser.user.displayName;
      this.form.userName = this.currentUser.user.userName;
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>