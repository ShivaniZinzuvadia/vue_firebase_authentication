<template>
  <div class="home">
    <b-row>
      <b-col>
      <search-friend></search-friend>
      </b-col>
    </b-row>
    <b-row>
      <b-col><list-friend></list-friend></b-col>
      <b-col cols="9"><chat></chat></b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFriend from './search_friend.vue';
import ListFriend from './list_friend.vue';
import Chat from './chat.vue';

export default {
  name: "Home",
  components: {
    SearchFriend, ListFriend, Chat
  }
};
</script>
