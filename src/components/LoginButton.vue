<template>
  <q-btn @click="this.signin()">
    Login
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthStore } from 'src/store/auth';

export default defineComponent({
  name: 'LoginButton',
  setup() {
    const signin = ()=>AuthStore.getInstance().signin();
    return { signin };
  },
});
</script>

<style>

</style>