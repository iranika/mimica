<!-- some .vue file -->

<template>
  <div></div>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Language"
    dense
    emit-value
    map-options
    label-color="White"
    color="white"
    style="min-width: 100px;"
    dark
  />
</template>

<script>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { LocalstoregeStore } from 'src/store/localstrageStore';
//import { LocalStorage, SessionStorage } from 'quasar';

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    
    watch(
      ()=> locale,
      (locale)=>{
        console.info('locale was changed.',locale.value)
        LocalstoregeStore.getInstance.setDefaultLocale(locale.value)
      },
      { deep: true }
    )
    return {
      locale,
      localeOptions: [
        { value: 'ja-JP', label: '日本語' },
        { value: 'en-US', label: 'English' },
      ]
    }
  },
}
</script>

<style scoped>

</style>