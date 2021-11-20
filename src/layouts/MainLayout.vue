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
        <!-- NOTE: WIP
        <LoginButton ></LoginButton>
        <q-avatar>
          <img src="https://pbs.twimg.com/profile_images/1458674689677885442/q56FjquB_400x400.jpg" >
        </q-avatar>
        -->
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
            <q-item clickable v-ripple :to="list.link" :disable="list.disable">
              <q-item-section avatar>
                <q-icon :name="list.icon" />
              </q-item-section>

              <q-item-section>
                {{ list.disable ? $t(list.title) + " : WIP" : $t(list.title) }}
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
    link: '/',
    disable: false
  },
  {
    title: 'Mixn' ,
    caption: 'github.com/quasarframework',
    icon: 'create',
    link: 'mixn',
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

import { defineComponent, ref, watch } from 'vue'
import LanguageSwitch from 'components/LanguageSwitch.vue';
import LoginButton from 'components/LoginButton.vue';

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
    const miniState = ref(Boolean(window.localStorage.getItem('miniState')) || false)
    const tab = ref()
    const footnav = ref()
    
    watch(
      ()=>miniState,
      (miniState)=>{
        window.localStorage.setItem('miniState', miniState.value.toString())
      },
      { deep: true }
    )

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