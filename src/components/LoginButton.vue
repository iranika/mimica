<template>
  <template v-if="!state.isLogin">
    <q-btn @click="authStore.signin()">
      Login
    </q-btn>
  </template>
  <template v-else>
    <q-avatar>
      <img :src="state.photoURL" >
    </q-avatar>
  </template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { AuthStore } from 'src/store/auth';
import { AuthStore } from 'src/store/authStore';

export default defineComponent({
  name: 'LoginButton',
  setup() {
    const state = AuthStore.getInstance().state;
    const authStore = AuthStore.getInstance();
    return {
      authStore,      
      state
    };
  },
});
</script>

<style>

</style>