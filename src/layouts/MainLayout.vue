<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-cyan">
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
        <LoginButton ></LoginButton>
      </q-toolbar>
      <q-tabs v-model="tab" align="left">
        <q-route-tab name="dlsite" label="dlsite" @click="openURL('https://www.dlsite.com/home/dlaf/=/aid/mimica/url/https%3A%2F%2Fwww.dlsite.com%2Fhome%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG34004.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext')" />
        <q-route-tab name="iranika" label="iranika" @click="openURL('https://twitter.com/happy_packet')" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above

      :mini="!leftDrawerOpen || db.miniState"
      @click.capture="db.miniState"

      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <template v-for="list in essentialLinks" :key="list">
            <q-item clickable v-ripple :to="list.link" :disable="list.disable">
              <q-item-section avatar>
                <q-icon :name="list.icon" />
              </q-item-section>

              <q-item-section>
                {{ list.disable ? $t(list.title) + " : WIP" : $t(list.title) }}
              </q-item-section>
            </q-item>  
          </template>
          <q-item clickable v-ripple @click="toggleMiniState" class="mobile-hide">
            <q-item-section avatar>
              <q-icon :name="db.miniState ? 'chevron_right' : 'chevron_left'" />
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
        <q-route-tab name="home" :label="$t('home')" to="/" />
        <q-route-tab name="mixn" :label="$t('Mixn')" to="/mixn" />
        <q-route-tab name="bml" label="BML" to="/bookmarklet" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
//import EssentialLink from 'components/EssentialLink.vue'
import { openURL } from 'quasar';

const linksList = [
  {
    title: 'home',
    caption: 'quasar.dev',
    icon: 'home',
    link: '/',
    disable: false
  },
  {
    title: 'Mixn' ,
    caption: '',
    icon: 'create',
    link: 'mixn',
    disable: false
  },
  {
    title: 'Bookmarklet' ,
    caption: 'Bookmarklet',
    icon: 'bookmark',
    link: 'bookmarklet',
    disable: false
  },
  {
    title: 'createDeck' ,
    caption: 'github.com/quasarframework',
    icon: 'create',
    link: 'create-deck',
    disable: true
  },
  {
    title: 'myDecks' ,
    caption: 'github.com/quasarframework',
    icon: 'book',
    link: 'mydeck',
    disable: true

  },
  {
    title: 'favorite',
    caption: 'chat.quasar.dev',
    icon: 'star',
    link: 'favorite',
    disable: true

  },
  {
    title: 'help',
    caption: 'chat.quasar.dev',
    icon: 'help',
    link: 'help',
    disable: true

  },
];

import { defineComponent, ref, } from 'vue'
import LanguageSwitch from 'components/LanguageSwitch.vue';
import LoginButton from 'components/LoginButton.vue';
import { LocalstoregeStore } from 'src/store/localstrageStore';

export default defineComponent({
  name: 'MainLayout',

  components: {
    //EssentialLink
    LanguageSwitch,
    // eslint-disable-next-line vue/no-unused-components
    LoginButton
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const db = LocalstoregeStore.getInstance.db
    const tab = ref()
    const footnav = ref()
    
    return {
      openURL,
      essentialLinks: linksList,
      leftDrawerOpen,
      db,
      tab,
      footnav,
      toggleLeftDrawer () {
        if (!leftDrawerOpen.value){
          LocalstoregeStore.getInstance.setMiniState(!db.miniState)
        }
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleMiniState(){
        LocalstoregeStore.getInstance.setMiniState(!db.miniState)
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