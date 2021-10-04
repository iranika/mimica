<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          MimiCa
        </q-toolbar-title>
        <LanguageSwitch></LanguageSwitch>
        <q-separator></q-separator>
        <q-avatar>
          <img src="https://pbs.twimg.com/profile_images/1422306322804994067/583UkI8q_400x400.jpg" >
        </q-avatar>
      </q-toolbar>
      <q-tabs v-model="tab" align="left">
        <q-tab name="dlsite" label="dlsite" />
        <q-tab name="videos" label="iranika" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above

      :mini="!leftDrawerOpen || miniState"
      @click.capture="miniState"

      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <template v-for="list in essentialLinks" :key="list">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="list.icon" />
              </q-item-section>

              <q-item-section>
                {{ $t(list.title) }}
              </q-item-section>
            </q-item>  
          </template>
          <q-item clickable v-ripple @click="miniState = !miniState">
            <q-item-section avatar>
              <q-icon :name="miniState ? 'chevron_right' : 'chevron_left'" />
            </q-item-section>

            <q-item-section>
              {{ $t("collapse") }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-footer bordered class="bg-white text-primary mobile-only">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="footnav">
        <q-tab name="home" :label="$t('home')" />
        <q-tab name="myDecks" :label="$t('myDecks')" />
        <q-tab name="favorite" :label="$t('favorite')" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
//import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
  {
    title: 'home',
    caption: 'quasar.dev',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  {
    title: 'createDeck' ,
    caption: 'github.com/quasarframework',
    icon: 'create',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'myDecks' ,
    caption: 'github.com/quasarframework',
    icon: 'book',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'favorite',
    caption: 'chat.quasar.dev',
    icon: 'star',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'help',
    caption: 'chat.quasar.dev',
    icon: 'help',
    link: 'https://chat.quasar.dev'
  },
];

import { defineComponent, ref } from 'vue'
import LanguageSwitch from 'components/LanguageSwitch.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    //EssentialLink
    LanguageSwitch
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const miniState = ref(false)
    const tab = ref()
    const footnav = ref()
    
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      miniState,
      tab,
      footnav,
      toggleLeftDrawer () {
        miniState.value = !miniState.value
      }
    }
  }
})
</script>

<style scoped>

@media screen and (min-width: 992px){
  .footnab {
    display: none;
  }
}

</style>