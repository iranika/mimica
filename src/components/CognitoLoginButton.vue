<template>
  <template v-if="!state.isLogin">
    <q-btn to="signin">
      {{ $t('sign in') }}
    </q-btn>
  </template>
  <template v-else>
    <q-btn round flat>
      <q-avatar>
        <img :src="state.photoURL" >
      </q-avatar>
      <q-menu>
        <q-list>
          <q-item>
            <q-item-section @click="authStore.signout()">{{ $t("Logout") }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
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